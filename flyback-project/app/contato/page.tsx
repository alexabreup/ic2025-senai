import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContatoPage() {
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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Assunto
                </label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Sua mensagem" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </form>
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
