import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Lightbulb, Users, TrendingUp, Code2 } from "lucide-react"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a <span className="text-logo-coral">Quirinda DevTech</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Somos uma empresa de engenharia de software focada em construir produtos digitais escaláveis, seguros e
              preparados para o futuro. Combinamos excelência técnica com visão de negócio para criar soluções que
              realmente fazem a diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-logo-coral/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-coral/10 w-fit mb-6">
                  <Target className="h-8 w-8 text-logo-coral" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-coral">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Capacitar empresas e empreendedores em Angola e além com tecnologia de classe mundial. Desenvolvemos
                  software que resolve problemas reais, escala com crescimento e se adapta às mudanças do mercado.
                  Acreditamos que engenharia sólida é a base para inovação sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="border-logo-blue/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="p-4 rounded-xl bg-logo-blue/10 w-fit mb-6">
                  <Lightbulb className="h-8 w-8 text-logo-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-logo-blue">Nossa Visão</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser a principal referência em desenvolvimento de software em Angola, reconhecida pela qualidade
                  técnica, inovação e impacto nos negócios dos nossos clientes. Queremos contribuir para o ecossistema
                  tecnológico africano com produtos e conhecimento de excelência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-logo-coral/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-logo-coral/10 w-fit mx-auto mb-4">
                  <Code2 className="h-6 w-6 text-logo-coral" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-logo-coral">Excelência Técnica</h3>
                <p className="text-sm text-muted-foreground">
                  Código limpo, testes automatizados, documentação clara e arquitetura que evolui
                </p>
              </CardContent>
            </Card>

            <Card className="border-logo-yellow/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-logo-yellow/10 w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-logo-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-logo-yellow">Foco no Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Entendemos o negócio antes de escrever código. Sucesso do cliente é nosso sucesso
                </p>
              </CardContent>
            </Card>

            <Card className="border-logo-green/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-logo-green/10 w-fit mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-logo-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-logo-green">Crescimento Contínuo</h3>
                <p className="text-sm text-muted-foreground">
                  Aprendizado constante, adaptação a novas tecnologias e evolução das práticas
                </p>
              </CardContent>
            </Card>

            <Card className="border-logo-blue/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-xl bg-logo-blue/10 w-fit mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-logo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-logo-blue">Transparência</h3>
                <p className="text-sm text-muted-foreground">
                  Comunicação clara, expectativas realistas e honestidade em todas as interações
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossa Abordagem</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-logo-coral">Engenharia Primeiro</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Não cortamos atalhos. Investimos tempo em arquitetura sólida, padrões de design comprovados e código
                  que é fácil de manter e evoluir. Acreditamos que software bem construído economiza tempo e dinheiro a
                  longo prazo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-logo-yellow">Iteração Rápida</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos em ciclos curtos, entregando valor incrementalmente. Prototipamos rápido, testamos com
                  usuários reais e ajustamos com base em feedback. Agilidade sem sacrificar qualidade.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-logo-green">Segurança por Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Segurança não é uma reflexão tardia. Desde o início do projeto, implementamos autenticação robusta,
                  proteção de dados, validação de entrada e seguimos as melhores práticas da indústria (OWASP, GDPR,
                  etc).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-logo-blue">Escalabilidade Nativa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construímos pensando no crescimento. Arquiteturas que suportam milhares de usuários simultâneos,
                  bancos de dados otimizados para grandes volumes e infraestrutura que escala automaticamente com a
                  demanda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Equipa</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Nossa equipa é composta por engenheiros experientes, designers atentos aos detalhes e especialistas em
            produto que trabalham juntos para criar soluções excepcionais. Combinamos experiência internacional com
            conhecimento profundo do mercado angolano.
          </p>
          <Card className="border-border/50 bg-card/50 backdrop-blur max-w-3xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos em equipas pequenas e altamente qualificadas. Cada membro traz expertise única e todos
                compartilham paixão por resolver problemas complexos com soluções elegantes. Trabalhamos remotamente mas
                mantemos comunicação constante e colaboração próxima em todos os projetos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interessado em saber mais sobre como podemos ajudar? Entre em contacto connosco
          </p>
          <Button asChild size="lg" className="bg-logo-coral hover:bg-logo-coral/90">
            <Link href="/contacto">
              Falar Connosco <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
