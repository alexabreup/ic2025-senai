"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
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
  captcha: z.string().refine((val) => val === "7", { 
    message: "Resposta incorreta. Por favor, tente novamente." 
  })
})

type FormValues = z.infer<typeof formSchema>

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: ""
    }
  })

  // Função para lidar com o envio do formulário
  const onSubmit = (data: FormValues) => {
    // Em um ambiente real, você enviaria os dados para um servidor
    console.log("Dados do formulário:", data)
    
    // Simular envio bem-sucedido
    setTimeout(() => {
      setIsSubmitted(true)
      toast.success("Mensagem enviada com sucesso!")
    }, 1000)
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
                <Button onClick={() => {
                  setIsSubmitted(false)
                  form.reset()
                }}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proteção Antispam</FormLabel>
                        <div className="bg-muted/50 p-3 rounded-md mb-2">
                          <p className="text-sm">Para verificar que você não é um robô, responda: Quanto é 3 + 4?</p>
                        </div>
                        <FormControl>
                          <Input placeholder="Sua resposta" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Enviar mensagem
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
                    alexandre.pereira@aluno.senai.br
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
