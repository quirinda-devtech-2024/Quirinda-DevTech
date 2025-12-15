import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-quirinda-devtech.png"
            alt="Quirinda DevTech"
            width={48}
            height={48}
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/solucoes" className="text-sm font-medium hover:text-logo-coral transition-colors">
            Soluções
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-logo-yellow transition-colors">
            Sobre
          </Link>
          <Link href="/produtos" className="text-sm font-medium hover:text-logo-green transition-colors">
            Produtos
          </Link>
          <Link href="/insights" className="text-sm font-medium hover:text-logo-blue transition-colors">
            Insights
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <Button asChild className="bg-logo-coral hover:bg-logo-coral/90">
          <Link href="/contacto">Iniciar Projecto</Link>
        </Button>
      </div>
    </header>
  )
}
