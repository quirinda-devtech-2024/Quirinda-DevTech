import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo-quirinda-devtech.png"
                alt="Quirinda DevTech"
                width={40}
                height={40}
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnologia construída com responsabilidade e excelência técnica.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="#"
                className="p-2 rounded-lg bg-logo-coral/10 text-logo-coral hover:bg-logo-coral/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-logo-blue/10 text-logo-blue hover:bg-logo-blue/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-logo-green/10 text-logo-green hover:bg-logo-green/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-logo-yellow/10 text-logo-yellow hover:bg-logo-yellow/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-logo-coral">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-logo-coral transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-muted-foreground hover:text-logo-coral transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-logo-coral transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-logo-coral transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-logo-blue">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-logo-blue transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-logo-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-logo-blue transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-logo-blue transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-logo-green">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-logo-green transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-logo-green transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-logo-green transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-logo-green transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Quirinda DevTech. Todos os direitos reservados. Feito em Angola 🇦🇴</p>
        </div>
      </div>
    </footer>
  )
}
