import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="font-semibold text-foreground">Privacidad y Vigilancia</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un proyecto educativo sobre privacidad digital y protección contra la vigilancia masiva.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegación</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/contexto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contexto
                </Link>
              </li>
              <li>
                <Link href="/estrategias" className="text-muted-foreground hover:text-primary transition-colors">
                  Estrategias
                </Link>
              </li>
              <li>
                <Link href="/niveles" className="text-muted-foreground hover:text-primary transition-colors">
                  Niveles de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Recursos</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/recursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="text-muted-foreground hover:text-primary transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="/investigacion" className="text-muted-foreground hover:text-primary transition-colors">
                  Investigación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/acerca" className="text-muted-foreground hover:text-primary transition-colors">
                  Acerca del Proyecto
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            {"Este sitio no utiliza cookies de rastreo ni análisis. Tu privacidad es nuestra prioridad."}
          </p>
          <p className="text-center text-xs text-muted-foreground mt-2">
            {new Date().getFullYear()} Privacidad y Vigilancia Masiva. Proyecto Educativo CTS.
          </p>
        </div>
      </div>
    </footer>
  )
}
