import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vamos <span className="text-logo-coral">Conversar</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tem um projecto em mente? Precisa de consultoria técnica? Quer saber mais sobre nossos serviços? Entre em
              contacto connosco e vamos transformar sua ideia em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-logo-coral/30 bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-logo-coral/10 w-fit mb-4">
                    <Mail className="h-6 w-6 text-logo-coral" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:contacto@quirindadevtech.ao"
                    className="text-muted-foreground hover:text-logo-coral transition-colors"
                  >
                    contacto@quirindadevtech.ao
                  </a>
                </CardContent>
              </Card>

              <Card className="border-logo-yellow/30 bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-logo-yellow/10 w-fit mb-4">
                    <Phone className="h-6 w-6 text-logo-yellow" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                  <a
                    href="tel:+244923000000"
                    className="text-muted-foreground hover:text-logo-yellow transition-colors"
                  >
                    +244 923 000 000
                  </a>
                </CardContent>
              </Card>

              <Card className="border-logo-green/30 bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-logo-green/10 w-fit mb-4">
                    <MapPin className="h-6 w-6 text-logo-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Localização</h3>
                  <p className="text-muted-foreground">Luanda, Angola</p>
                </CardContent>
              </Card>

              <Card className="border-logo-blue/30 bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Horário de Atendimento</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta</span>
                      <span>8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Quanto tempo leva um projeto típico?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Depende da complexidade e escopo. Projectos simples podem levar 4-6 semanas, enquanto aplicações
                    enterprise complexas podem levar 3-6 meses. Trabalhamos em sprints e entregamos valor
                    incrementalmente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Como funciona o processo de orçamento?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Após o contacto inicial, agendamos uma chamada de discovery para entender suas necessidades. Com
                    base nisso, preparamos uma proposta detalhada com escopo, timeline e investimento. Sem custos nesta
                    fase.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Oferecem suporte após o lançamento?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sim. Todos os projectos incluem período de garantia e oferecemos planos de manutenção mensal para
                    monitoramento, updates de segurança, correções de bugs e novas funcionalidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Trabalham remotamente ou presencialmente?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trabalhamos principalmente remotamente, mas podemos agendar reuniões presenciais em Luanda quando
                    necessário. Mantemos comunicação constante via email, Slack ou videochamadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
