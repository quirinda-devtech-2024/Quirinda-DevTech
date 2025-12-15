import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Zap, Shield, BarChart3, Rocket, CheckCircle2 } from "lucide-react"

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos <span className="text-logo-green">Produtos</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Além de desenvolvimento customizado, criamos produtos SaaS próprios que resolvem problemas específicos do
              mercado. Soluções prontas para usar, escaláveis e em constante evolução.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12">
            {/* Product 1 */}
            <Card className="border-logo-coral/30 bg-card/80 backdrop-blur overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-logo-coral/20 text-logo-coral border-logo-coral/30">
                        Em Desenvolvimento
                      </Badge>
                      <Badge variant="outline">SaaS</Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-logo-coral">QuirindaPay</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      Plataforma de pagamentos digitais adaptada para o mercado angolano. Integração simples, múltiplos
                      métodos de pagamento e dashboard completo para gestão de transações.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                        <span className="text-sm">Integração com bancos angolanos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                        <span className="text-sm">Pagamentos recorrentes e subscriptions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                        <span className="text-sm">API RESTful para integração rápida</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                        <span className="text-sm">Conformidade com regulamentações locais</span>
                      </li>
                    </ul>
                    <Button className="bg-logo-coral hover:bg-logo-coral/90" disabled>
                      Em Breve <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-logo-coral/20 to-logo-coral/5 flex items-center justify-center p-12">
                    <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-logo-coral/30">
                      <Zap className="h-24 w-24 text-logo-coral" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="border-logo-blue/30 bg-card/80 backdrop-blur overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-logo-blue/20 to-logo-blue/5 flex items-center justify-center p-12 order-2 lg:order-1">
                    <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-logo-blue/30">
                      <BarChart3 className="h-24 w-24 text-logo-blue" />
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-logo-blue/20 text-logo-blue border-logo-blue/30">Planeamento</Badge>
                      <Badge variant="outline">Analytics</Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-logo-blue">QuirindaMetrics</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      Plataforma de analytics e business intelligence para empresas angolanas. Dashboards intuitivos,
                      relatórios automáticos e insights acionáveis sobre seus dados de negócio.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                        <span className="text-sm">Dashboards customizáveis em tempo real</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                        <span className="text-sm">Integração com múltiplas fontes de dados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                        <span className="text-sm">Alertas automáticos e notificações</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                        <span className="text-sm">Relatórios PDF e exportação de dados</span>
                      </li>
                    </ul>
                    <Button className="bg-logo-blue hover:bg-logo-blue/90" disabled>
                      Em Breve <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="border-logo-green/30 bg-card/80 backdrop-blur overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-logo-green/20 text-logo-green border-logo-green/30">Conceito</Badge>
                      <Badge variant="outline">Security</Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-logo-green">QuirindaSecure</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      Suite de segurança para aplicações web e mobile. Monitoramento de ameaças, proteção contra ataques
                      e auditorias automatizadas de vulnerabilidades.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                        <span className="text-sm">Scanning automático de vulnerabilidades</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                        <span className="text-sm">Web Application Firewall (WAF)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                        <span className="text-sm">Monitoramento de compliance e certificações</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                        <span className="text-sm">Relatórios detalhados e recomendações</span>
                      </li>
                    </ul>
                    <Button className="bg-logo-green hover:bg-logo-green/90" disabled>
                      Em Breve <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-logo-green/20 to-logo-green/5 flex items-center justify-center p-12">
                    <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-logo-green/30">
                      <Shield className="h-24 w-24 text-logo-green" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que Nossos Produtos?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Desenvolvemos produtos que nós próprios usaríamos. Cada solução nasce de uma necessidade real do mercado e
              é construída com a mesma excelência técnica que aplicamos em projetos customizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-logo-coral/10 w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-logo-coral" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rápido Deploy</h3>
                <p className="text-sm text-muted-foreground">
                  Integração em minutos, não semanas. APIs bem documentadas e SDKs prontos para usar
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-logo-yellow/10 w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-logo-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Segurança First</h3>
                <p className="text-sm text-muted-foreground">
                  Certificações, compliance e melhores práticas de segurança implementadas por padrão
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur text-center">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-logo-green/10 w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-logo-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Escala Automática</h3>
                <p className="text-sm text-muted-foreground">
                  Infraestrutura que cresce com seu negócio. De 100 a 1 milhão de usuários sem preocupações
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Interessado em Early Access?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Registre seu interesse e seja um dos primeiros a testar nossos produtos quando lançarem
          </p>
          <Button asChild size="lg" className="bg-logo-green hover:bg-logo-green/90">
            <Link href="/contacto">
              Registrar Interesse <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
