import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTAProject() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 bg-card border border-border rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold">Crie um projecto connosco</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem uma ideia, produto ou sistema? Nós ajudamos a transformar isso numa solução real.
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href="#projecto">Criar projecto</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
