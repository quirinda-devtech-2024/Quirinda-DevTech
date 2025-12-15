import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Code2, Smartphone, Database, Cloud, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from "lucide-react"

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções de <span className="text-logo-coral">Engenharia</span> que Escalam
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desenvolvemos aplicações, sistemas e infraestruturas modernas com arquitetura sólida, código limpo e
              preparadas para crescer com seu negócio. Tecnologia que funciona hoje e se adapta ao amanhã.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Web Applications */}
            <Card className="border-logo-coral/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-coral/10 w-fit mb-6">
                  <Code2 className="h-8 w-8 text-logo-coral" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-coral">Aplicações Web</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Desenvolvimento de aplicações web modernas, responsivas e escaláveis usando tecnologias de ponta.
                  React, Next.js, TypeScript e arquiteturas serverless para máxima performance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                    <span className="text-sm">Single Page Applications (SPAs) com React e Vue.js</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                    <span className="text-sm">Server-Side Rendering (SSR) com Next.js para SEO otimizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                    <span className="text-sm">Progressive Web Apps (PWAs) com experiência offline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-coral shrink-0 mt-0.5" />
                    <span className="text-sm">Painéis administrativos e dashboards em tempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Applications */}
            <Card className="border-logo-yellow/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-yellow/10 w-fit mb-6">
                  <Smartphone className="h-8 w-8 text-logo-yellow" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-yellow">Aplicações Mobile</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Desenvolvimento mobile nativo e cross-platform para iOS e Android. Apps rápidas, fluidas e com
                  integração profunda com recursos do dispositivo.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-yellow shrink-0 mt-0.5" />
                    <span className="text-sm">Apps cross-platform com React Native e Flutter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-yellow shrink-0 mt-0.5" />
                    <span className="text-sm">Desenvolvimento nativo para iOS (Swift) e Android (Kotlin)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-yellow shrink-0 mt-0.5" />
                    <span className="text-sm">Integração com APIs, push notifications e analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-yellow shrink-0 mt-0.5" />
                    <span className="text-sm">Publicação e gestão nas stores (App Store e Google Play)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Backend & APIs */}
            <Card className="border-logo-green/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-green/10 w-fit mb-6">
                  <Database className="h-8 w-8 text-logo-green" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-green">Backend & APIs</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Arquitetura backend robusta, APIs RESTful e GraphQL, microserviços e sistemas distribuídos.
                  Escalabilidade, segurança e performance desde o primeiro dia.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                    <span className="text-sm">APIs RESTful e GraphQL com Node.js, Python e Go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                    <span className="text-sm">Arquitetura de microserviços e event-driven systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                    <span className="text-sm">Bancos de dados SQL e NoSQL otimizados para escala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-green shrink-0 mt-0.5" />
                    <span className="text-sm">Autenticação, autorização e gestão de sessões seguras</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud & Infrastructure */}
            <Card className="border-logo-blue/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-blue/10 w-fit mb-6">
                  <Cloud className="h-8 w-8 text-logo-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-blue">Cloud & Infraestrutura</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Deploy, escalabilidade e monitoramento em cloud. AWS, Azure, Google Cloud e Vercel para infraestrutura
                  moderna, segura e que cresce com demanda.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                    <span className="text-sm">Deploy automatizado com CI/CD (GitHub Actions, Jenkins)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                    <span className="text-sm">Containerização com Docker e orquestração com Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                    <span className="text-sm">Serverless architecture com AWS Lambda e Azure Functions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-logo-blue shrink-0 mt-0.5" />
                    <span className="text-sm">Monitoramento, logging e alertas em tempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Serviços Complementares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <ShieldCheck className="h-8 w-8 text-logo-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Segurança & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Auditorias de segurança, penetration testing, conformidade com GDPR e implementação de melhores
                  práticas de segurança em toda aplicação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <Cpu className="h-8 w-8 text-logo-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-3">Modernização de Sistemas</h3>
                <p className="text-sm text-muted-foreground">
                  Migração de sistemas legados para arquiteturas modernas, refactoring de código e atualização de stacks
                  tecnológicas obsoletas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <Code2 className="h-8 w-8 text-logo-coral mb-4" />
                <h3 className="text-xl font-semibold mb-3">Consultoria Técnica</h3>
                <p className="text-sm text-muted-foreground">
                  Aconselhamento em arquitetura, revisão de código, definição de roadmaps técnicos e capacitação de
                  equipas internas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Construir Juntos?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conte-nos sobre seu projeto e vamos transformá-lo em realidade com engenharia de excelência
          </p>
          <Button asChild size="lg" className="bg-logo-coral hover:bg-logo-coral/90">
            <Link href="/contacto">
              Falar com a Equipa <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
