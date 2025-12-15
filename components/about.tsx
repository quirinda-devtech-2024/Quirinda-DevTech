const values = [
  "Rigor técnico",
  "Clareza e transparência",
  "Escalabilidade consciente",
  "Responsabilidade e ética",
  "Aprendizado contínuo",
]

export function About() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Quem somos</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                A Quirinda DevTech é uma empresa de tecnologia focada no desenvolvimento de soluções digitais modernas,
                escaláveis e seguras.
              </p>
              <p className="leading-relaxed">
                Atuamos desde a concepção técnica até a implementação e evolução de produtos digitais.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolver tecnologia sólida que ajude pessoas e organizações a crescer de forma sustentável.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tornar-se uma referência tecnológica em Angola, com impacto regional e visão global.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Valores</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
