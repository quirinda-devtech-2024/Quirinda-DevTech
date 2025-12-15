import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cloud, Cpu, Database, Zap } from "lucide-react"

const solutions = [
  {
    icon: Code2,
    title: "Escala de Produtos Digitais",
    description: "Arquitetura, performance, cache, filas, observabilidade e crescimento sustentável.",
    color: "text-(--logo-coral)",
  },
  {
    icon: Zap,
    title: "Web & Mobile Apps",
    description: "Aplicações modernas, rápidas e bem estruturadas para web e dispositivos móveis.",
    color: "text-(--logo-blue)",
  },
  {
    icon: Database,
    title: "APIs & Sistemas Backend",
    description: "APIs REST e GraphQL, autenticação, permissões, integrações e segurança.",
    color: "text-(--logo-yellow)",
  },
  {
    icon: Cloud,
    title: "Infraestrutura Cloud",
    description: "AWS, automação, deploy contínuo, monitorização e otimização de custos.",
    color: "text-(--logo-green)",
  },
  {
    icon: Cpu,
    title: "IA & Automação",
    description: "Soluções inteligentes aplicadas a dados, processos e produtos reais.",
    color: "text-(--logo-coral)",
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções técnicas pensadas para todo o ciclo de vida</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construímos tecnologia com foco em desempenho, escalabilidade e clareza técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <Icon className={`w-10 h-10 ${solution.color}`} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
