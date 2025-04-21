"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"

// Gerar uma pergunta antispam aleatória
const generateCaptcha = () => {
  const captchas = [
    { question: "Quanto é 3 + 4?", answer: "7" },
    { question: "Quanto é 2 + 3?", answer: "5" },
    { question: "Quanto é 5 + 2?", answer: "7" },
    { question: "Quanto é 1 + 6?", answer: "7" },
    { question: "Quanto é 4 + 3?", answer: "7" }
  ]
  return captchas[Math.floor(Math.random() * captchas.length)]
}

// Esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
  captcha: z.string().refine((val) => true, { 
    message: "Resposta incorreta. Por favor, tente novamente." 
  }),
  honeypot: z.string().optional() // Campo honeypot para detectar bots
})

type FormValues = z.infer<typeof formSchema>

// URL do Google Apps Script
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzonRX0mGnUBthaLVu3t3SFHNcbR85-FFR7zvW4e4c/exec"

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [captcha, setCaptcha] = useState(generateCaptcha())
  
  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
      honeypot: ""
    }
  })

  // Função para obter o IP do cliente (simplificada)
  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error("Erro ao obter o IP:", error)
      return "unknown"
    }
  }

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: FormValues) => {
    try {
      // Verificar se o campo honeypot foi preenchido (se foi, é provavelmente um bot)
      if (data.honeypot) {
        console.log("Bot detectado pelo honeypot")
        // Simular sucesso para o bot, mas não enviar o email
        setIsSubmitted(true)
        return
      }
      
      // Verificar a resposta do captcha
      if (data.captcha !== captcha.answer) {
        toast.error("Resposta do captcha incorreta. Por favor, tente novamente.")
        return
      }
      
      setIsSubmitting(true)
      console.log("Dados do formulário:", data)
      
      // Obter o IP do cliente
      const ip = await getClientIP()
      
      // Preparar os dados para o envio
      const payload = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        ip: ip
      }
      
      let success = false
      
      // Tentativa 1: Enviar usando Google Apps Script com modo no-cors
      try {
        console.log("Tentativa 1: Enviando via Google Apps Script com modo no-cors...")
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: 'no-cors' // Usar no-cors para evitar erros de CORS
        })
        
        // Como estamos usando no-cors, não podemos verificar a resposta
        // Vamos assumir que funcionou e continuar com o FormSubmit como backup
        console.log("Solicitação enviada para o Google Apps Script (resposta não verificável)")
      } catch (error) {
        console.warn("Erro na tentativa 1:", error)
      }
      
      // Tentativa 2: Usar FormSubmit como método principal
      try {
        console.log("Tentativa 2: Enviando via FormSubmit...")
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("subject", data.subject)
        formData.append("message", data.message)
        formData.append("_captcha", "false") // Desativar o captcha do FormSubmit
        
        const formSubmitResponse = await fetch("https://formsubmit.co/alxabreuper@gmail.com", {
          method: "POST",
          body: formData
        })
        
        if (formSubmitResponse.ok) {
          console.log("Email enviado com sucesso via FormSubmit!")
          success = true
        } else {
          console.warn(`Erro na tentativa 2: ${formSubmitResponse.status}`)
        }
      } catch (error) {
        console.warn("Erro na tentativa 2:", error)
      }
      
      // Verificar se alguma das tentativas foi bem-sucedida
      // Como não podemos verificar o resultado do Google Apps Script com no-cors,
      // vamos confiar no resultado do FormSubmit
      if (success) {
        toast.success("Mensagem enviada com sucesso!")
        setIsSubmitted(true)
      } else {
        throw new Error("Todas as tentativas de envio falharam")
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error)
      toast.error("Erro ao enviar a mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Gerar uma nova pergunta captcha quando o formulário for resetado
  const handleReset = () => {
    setIsSubmitted(false)
    setCaptcha(generateCaptcha())
    form.reset()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contato</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Entre em contato conosco para mais informações sobre o projeto.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            
            {isSubmitted ? (
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground mb-4">
                  Obrigado pelo seu contato. Responderemos em breve.
                </p>
                <Button onClick={handleReset}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-4">
                  {/* Campo honeypot - escondido dos usuários, mas visível para bots */}
                  <div className="hidden">
                    <FormField
                      control={form.control as any}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Deixe este campo em branco</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control as any}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control as any}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu.email@exemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control as any}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Assunto da mensagem" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control as any}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Sua mensagem" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Proteção Antispam Simples */}
                  <FormField
                    control={form.control as any}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proteção Antispam</FormLabel>
                        <div className="bg-muted/50 p-3 rounded-md mb-2">
                          <p className="text-sm">Para verificar que você não é um robô, responda: {captcha.question}</p>
                        </div>
                        <FormControl>
                          <Input placeholder="Sua resposta" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Endereço</h3>
                  <p className="text-muted-foreground">
                    Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta
                    <br />
                    Vila Mariana, São Paulo, SP Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    alxabreuper@gmail.com
                    <br />
                    luis.canno@senai.br
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-muted-foreground">(11) 5555-5555</p>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-muted/50 mt-8">
                <h3 className="font-medium mb-2">Horário de atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 17h
                  <br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
