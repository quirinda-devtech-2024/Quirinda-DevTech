import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"

export default function InsightsPage() {
  // Mock data - in production this would come from a CMS or database
  const insights = [
    {
      id: 1,
      title: "Arquitetura de Microserviços: Quando Usar e Quando Evitar",
      excerpt:
        "Microserviços não são sempre a resposta. Entenda os trade-offs, custos e quando uma arquitetura monolítica pode ser mais apropriada para seu contexto.",
      author: "Equipa Quirinda",
      date: "15 Jan 2025",
      readTime: "8 min",
      category: "Arquitetura",
      color: "coral",
    },
    {
      id: 2,
      title: "Next.js 15: O que Mudou e Como Migrar",
      excerpt:
        "Um guia prático sobre as principais mudanças no Next.js 15, incluindo o novo App Router, Server Components e estratégias de cache.",
      author: "Equipa Quirinda",
      date: "10 Jan 2025",
      readTime: "12 min",
      category: "Frontend",
      color: "yellow",
    },
    {
      id: 3,
      title: "Segurança em APIs REST: 10 Práticas Essenciais",
      excerpt:
        "Autenticação, autorização, rate limiting, validação de input e outras práticas fundamentais para proteger suas APIs em produção.",
      author: "Equipa Quirinda",
      date: "5 Jan 2025",
      readTime: "10 min",
      category: "Segurança",
      color: "green",
    },
    {
      id: 4,
      title: "Database Indexing: Performance Sem Mistério",
      excerpt:
        "Como índices funcionam por baixo dos panos, quando criá-los e como evitar os erros mais comuns que degradam performance.",
      author: "Equipa Quirinda",
      date: "28 Dez 2024",
      readTime: "15 min",
      category: "Database",
      color: "blue",
    },
    {
      id: 5,
      title: "TypeScript Avançado: Tipos Condicionais e Mapped Types",
      excerpt:
        "Vá além do básico do TypeScript e aprenda a criar tipos genéricos poderosos que tornam seu código mais seguro e expressivo.",
      author: "Equipa Quirinda",
      date: "20 Dez 2024",
      readTime: "18 min",
      category: "TypeScript",
      color: "coral",
    },
    {
      id: 6,
      title: "CI/CD Moderno: GitHub Actions na Prática",
      excerpt:
        "Automatize deploys, testes e code quality checks com GitHub Actions. Exemplos práticos e workflows prontos para usar.",
      author: "Equipa Quirinda",
      date: "15 Dez 2024",
      readTime: "14 min",
      category: "DevOps",
      color: "yellow",
    },
  ]

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      coral: "text-logo-coral border-logo-coral/30 bg-logo-coral/10",
      yellow: "text-logo-yellow border-logo-yellow/30 bg-logo-yellow/10",
      green: "text-logo-green border-logo-green/30 bg-logo-green/10",
      blue: "text-logo-blue border-logo-blue/30 bg-logo-blue/10",
    }
    return colors[color] || colors.coral
  }

  const getHoverClass = (color: string) => {
    const colors: Record<string, string> = {
      coral: "hover:border-logo-coral/50",
      yellow: "hover:border-logo-yellow/50",
      green: "hover:border-logo-green/50",
      blue: "hover:border-logo-blue/50",
    }
    return colors[color] || colors.coral
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-logo-blue">Insights</span> Técnicos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artigos aprofundados sobre engenharia de software, arquitetura, boas práticas e tendências tecnológicas.
              Conhecimento prático da experiência de construir sistemas escaláveis e robustos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Card className="border-logo-coral/30 bg-card/80 backdrop-blur overflow-hidden hover:border-logo-coral/50 transition-colors">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <Badge className={getColorClass("coral")}>Destaque</Badge>
                  <h2 className="text-3xl font-bold mt-4 mb-4 text-logo-coral">{insights[0].title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{insights[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{insights[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{insights[0].readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${insights[0].id}`}
                    className="inline-flex items-center gap-2 text-logo-coral hover:gap-3 transition-all font-medium"
                  >
                    Ler Artigo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-logo-coral/20 to-logo-coral/5 flex items-center justify-center p-12">
                  <div className="text-9xl font-bold text-logo-coral/20">01</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Todos os Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((insight) => (
              <Link key={insight.id} href={`/insights/${insight.id}`} className="group">
                <Card
                  className={`border-border/50 bg-card/50 backdrop-blur h-full transition-all ${getHoverClass(insight.color)}`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge className={getColorClass(insight.color)} variant="outline">
                      {insight.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mt-4 mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{insight.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span>{insight.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Explorar por Categoria</h2>
          <div className="flex flex-wrap gap-3">
            {["Arquitetura", "Frontend", "Backend", "Database", "DevOps", "Segurança", "TypeScript", "Performance"].map(
              (category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  {category}
                </Badge>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Receba Novos Artigos</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se à nossa newsletter para receber insights técnicos diretamente no seu email
          </p>
          <Card className="max-w-md mx-auto border-logo-blue/30 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                Newsletter em breve. Por enquanto, acompanhe-nos nas redes sociais ou
                <Link href="/contacto" className="text-logo-blue hover:underline ml-1">
                  entre em contacto
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
