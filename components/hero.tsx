import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo-quirinda-devtech.png"
              alt="Quirinda DevTech"
              width={200}
              height={200}
              className="h-32 w-auto"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Quirinda <span className="text-logo-coral">Dev</span>
            <span className="text-logo-yellow">T</span>
            <span className="text-logo-green">e</span>
            <span className="text-logo-blue">ch</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-medium">
            Engenharia de software para produtos digitais escaláveis
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos aplicações, sistemas e infraestruturas modernas, seguras e preparadas para crescer com seu
            negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="bg-logo-coral hover:bg-logo-coral/90">
              <Link href="/contacto">Iniciar um Projecto</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-logo-blue/50 text-logo-blue hover:bg-logo-blue/10 hover:text-logo-blue bg-transparent"
            >
              <Link href="/solucoes">Ver Soluções</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
