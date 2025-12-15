import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Code2, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />

      {/* Key Value Propositions */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-logo-coral/20 bg-card/50 backdrop-blur hover:border-logo-coral/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-logo-coral/10">
                  <Code2 className="h-6 w-6 text-logo-coral" />
                </div>
                <h3 className="text-xl font-semibold text-logo-coral">Engenharia Sólida</h3>
                <p className="text-sm text-muted-foreground">
                  Código limpo, arquitetura escalável e padrões que resistem ao tempo
                </p>
              </CardContent>
            </Card>

            <Card className="border-logo-yellow/20 bg-card/50 backdrop-blur hover:border-logo-yellow/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-logo-yellow/10">
                  <Zap className="h-6 w-6 text-logo-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-logo-yellow">Performance</h3>
                <p className="text-sm text-muted-foreground">Aplicações rápidas, otimizadas e preparadas para escala</p>
              </CardContent>
            </Card>

            <Card className="border-logo-green/20 bg-card/50 backdrop-blur hover:border-logo-green/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-logo-green/10">
                  <Shield className="h-6 w-6 text-logo-green" />
                </div>
                <h3 className="text-xl font-semibold text-logo-green">Segurança</h3>
                <p className="text-sm text-muted-foreground">Infraestrutura segura com proteção em todas as camadas</p>
              </CardContent>
            </Card>

            <Card className="border-logo-blue/20 bg-card/50 backdrop-blur hover:border-logo-blue/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-logo-blue/10">
                  <Globe className="h-6 w-6 text-logo-blue" />
                </div>
                <h3 className="text-xl font-semibold text-logo-blue">Presença Global</h3>
                <p className="text-sm text-muted-foreground">Tecnologia de classe mundial, com foco em Angola</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links to Main Sections */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/solucoes" className="group">
              <Card className="border-logo-coral/20 hover:border-logo-coral/50 transition-all hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-logo-coral">Soluções</h3>
                  <p className="text-muted-foreground mb-4">
                    Desenvolvimento completo de aplicações web, mobile e sistemas enterprise
                  </p>
                  <div className="flex items-center gap-2 text-logo-coral">
                    <span className="text-sm font-medium">Explorar</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/produtos" className="group">
              <Card className="border-logo-green/20 hover:border-logo-green/50 transition-all hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-logo-green">Produtos</h3>
                  <p className="text-muted-foreground mb-4">
                    Soluções SaaS próprias e ferramentas para transformação digital
                  </p>
                  <div className="flex items-center gap-2 text-logo-green">
                    <span className="text-sm font-medium">Conhecer</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/insights" className="group">
              <Card className="border-logo-blue/20 hover:border-logo-blue/50 transition-all hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-logo-blue">Insights</h3>
                  <p className="text-muted-foreground mb-4">
                    Artigos técnicos, análises e conhecimento sobre engenharia de software
                  </p>
                  <div className="flex items-center gap-2 text-logo-blue">
                    <span className="text-sm font-medium">Ler</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Construir?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforme sua visão em produto digital escalável com engenharia de classe mundial
          </p>
          <Button asChild size="lg" className="bg-logo-coral hover:bg-logo-coral/90">
            <Link href="/contacto">
              Iniciar Projecto <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
