import { StaticImage } from "@/components/static-image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Projeto de Iniciação Científica</h3>
            <p className="text-muted-foreground">IA no Controle e Predição de Falhas em Fonte Chaveada Flyback</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Equipe</h3>
            <p className="text-muted-foreground">
              <strong>Discente:</strong> Alexandre de Abreu Pereira
              <br />
              <strong>Docente:</strong> Luís Carlos Canno
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Instituição</h3>
            <div className="flex flex-col items-center md:items-start mb-3">
              <div className="relative w-32 h-12 md:w-40 md:h-16 mb-3">
                <StaticImage 
                  src="SENAI_São_Paulo_logo.png"
                  alt="Logo SENAI São Paulo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            <p className="text-muted-foreground">
              Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta
              <br />
              Vila Mariana, São Paulo, SP Brasil
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}
