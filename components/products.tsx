import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Products() {
  return (
    <section id="produtos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Produtos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos desenvolvidos internamente com foco em utilidade, qualidade técnica e impacto real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">SaberAngola</h3>
                <Badge variant="secondary">Ativo</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Plataforma digital de conhecimento e ferramentas práticas para o contexto angolano.
              </p>
              <div className="pt-2">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Saber mais <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">Novos Produtos</h3>
                <Badge variant="outline">Em breve</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Estamos a desenvolver novas soluções que serão anunciadas em breve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
