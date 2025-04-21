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
