import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-2">Projeto de Iniciação Científica</h3>
            <p className="text-sm text-muted-foreground">IA no Controle e Predição de Falhas em Fonte Chaveada Flyback</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Equipe</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Discente:</span> Alexandre de Abreu Pereira
              <br />
              <span className="font-medium">Docente:</span> Luís Carlos Canno
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Instituição</h3>
            <Link 
              href="https://sp.senai.br/unidade/conectividade/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline block"
            >
              Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta
              <br />
              Vila Mariana, São Paulo, SP Brasil
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}
