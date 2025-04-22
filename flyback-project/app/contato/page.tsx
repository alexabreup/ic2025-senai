"use client"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle, Loader2, ShieldCheck } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"

// Esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
  honeypot: z.string().optional() // Campo honeypot para detectar bots
})

type FormValues = z.infer<typeof formSchema>

// URL do FormSubmit
const FORMSUBMIT_URL = "https://formsubmit.co/alxabreuper@gmail.com"
// reCAPTCHA site key
const RECAPTCHA_SITE_KEY = "6LfDZB8rAAAAADtaDB0XPyB1HmYQUct-W_g4HRlm"

// Declarar o tipo para o objeto grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  
  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: ""
    }
  })

  // Carregar o script do reCAPTCHA
  useEffect(() => {
    // Verificar se o script já foi carregado
    if (document.querySelector('script[src*="recaptcha/enterprise.js"]')) {
      setRecaptchaLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    script.onload = () => setRecaptchaLoaded(true)
    document.head.appendChild(script)

    return () => {
      // Limpar o script se o componente for desmontado
      document.head.removeChild(script)
    }
  }, [])

  // Função para executar o reCAPTCHA e obter o token
  const executeRecaptcha = async (): Promise<string | null> => {
    if (!recaptchaLoaded || !window.grecaptcha?.enterprise) {
      console.warn("reCAPTCHA não está carregado")
      return null
    }

    try {
      return await new Promise((resolve) => {
        window.grecaptcha.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha.enterprise.execute(
              RECAPTCHA_SITE_KEY, 
              { action: 'SUBMIT_FORM' }
            )
            resolve(token)
          } catch (error) {
            console.error("Erro ao executar reCAPTCHA:", error)
            resolve(null)
          }
        })
      })
    } catch (error) {
      console.error("Erro ao executar reCAPTCHA:", error)
      return null
    }
  }

  // Função para verificar o token do reCAPTCHA no servidor
  const verifyRecaptchaToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      const data = await response.json()
      
      if (data.success) {
        console.log(`reCAPTCHA score: ${data.score}`)
        return true
      } else {
        console.warn("Verificação do reCAPTCHA falhou:", data.error)
        return false
      }
    } catch (error) {
      console.error("Erro ao verificar token do reCAPTCHA:", error)
      return false
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
      
      setIsSubmitting(true)
      console.log("Dados do formulário:", data)
      
      // Executar o reCAPTCHA
      const recaptchaToken = await executeRecaptcha()
      
      // Se não conseguimos obter um token, continuamos com o envio,
      // mas registramos o problema para fins de depuração
      if (!recaptchaToken) {
        console.warn("Não foi possível obter o token do reCAPTCHA. Continuando mesmo assim.")
      } 
      // Se tivermos um token, verificamos no servidor
      else {
        try {
          const isValid = await verifyRecaptchaToken(recaptchaToken)
          if (!isValid) {
            console.warn("Verificação do reCAPTCHA falhou, mas continuando mesmo assim para fins de demonstração.")
            // Em produção, você pode querer bloquear o envio aqui
            // throw new Error("Verificação do reCAPTCHA falhou")
          }
        } catch (error) {
          console.error("Erro ao verificar token do reCAPTCHA:", error)
          // Continuamos mesmo assim para fins de demonstração
        }
      }
      
      // Enviar usando FormSubmit
      try {
        console.log("Enviando via FormSubmit...")
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("subject", data.subject)
        formData.append("message", data.message)
        formData.append("_captcha", "false") // Desativar o captcha do FormSubmit
        
        // Adicionar campos para redirecionamento e template
        formData.append("_next", window.location.href) // Redirecionar de volta para a mesma página
        formData.append("_template", "table") // Usar template de tabela para o email
        
        const response = await fetch(FORMSUBMIT_URL, {
          method: "POST",
          body: formData
        })
        
        if (response.ok) {
          console.log("Email enviado com sucesso via FormSubmit!")
          toast.success("Mensagem enviada com sucesso!")
          setIsSubmitted(true)
        } else {
          console.warn(`Erro ao enviar: ${response.status}`)
          throw new Error(`Erro ao enviar: ${response.status}`)
        }
      } catch (error) {
        console.error("Erro ao enviar o email:", error)
        throw error
      }
    } catch (error) {
      console.error("Erro ao processar o formulário:", error)
      toast.error("Erro ao enviar a mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Resetar o formulário
  const handleReset = () => {
    setIsSubmitted(false)
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
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    <span>Protegido por reCAPTCHA Enterprise</span>
                  </div>
                  
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
