import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Niveles de Privacidad - Privacidad y Vigilancia Masiva",
  description: "Elige tu nivel de privacidad según tu tiempo, conocimientos técnicos y necesidad de protección.",
}

export default function NivelesPage() {
  return (
    <div className="container p-8 max-w-full md:py-12">
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Niveles de Privacidad</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Cada persona tiene diferentes necesidades de privacidad. Elige el nivel que mejor se adapte a tu tiempo,
            conocimientos técnicos y nivel de riesgo.
          </p>
        </div>

        <div className="space-y-8">
          {/* Nivel 1 */}
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <div className="p-4 rounded-xl bg-primary/10 w-fit">
                  <Shield className="h-12 w-12 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nivel 1</h2>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    Básico
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cambios mínimos para usuarios con poco tiempo o interés técnico. Configuraciones simples que mejoran
                  significativamente tu privacidad.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Incluye:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Ajustes de privacidad básicos en cuentas y dispositivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Navegación en modo incógnito y gestión de cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Autenticación en dos pasos (2FA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Buscadores privados y bloqueadores de anuncios</span>
                    </li>
                  </ul>
                </div>
                <Button asChild size="lg">
                  <Link href="/niveles/1">
                    Explorar Nivel 1
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Nivel 2 */}
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow border-primary">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <div className="p-4 rounded-xl bg-secondary/10 w-fit">
                  <Lock className="h-12 w-12 text-secondary" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nivel 2</h2>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary">
                    Intermedio
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cambios moderados que requieren nuevas herramientas pero mantienen tu rutina general. Protección
                  significativamente mejorada.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Incluye:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>Navegadores enfocados en privacidad (Firefox, Brave)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>VPN confiable y comunicación cifrada (Signal, ProtonMail)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>Gestores de contraseñas y cifrado de dispositivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>Revisión profunda de permisos de aplicaciones</span>
                    </li>
                  </ul>
                </div>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/niveles/2">
                    Explorar Nivel 2
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Nivel 3 */}
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <div className="p-4 rounded-xl bg-accent/10 w-fit">
                  <Eye className="h-12 w-12 text-accent" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nivel 3</h2>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                    Avanzado
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cambios drásticos para usuarios avanzados o con alta exposición (periodistas, activistas). Máxima
                  privacidad "a cualquier costo".
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Incluye:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>Sistemas operativos especializados (Tails, Qubes OS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>Red Tor exclusiva y anonimato total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>Identidades digitales separadas y seudónimos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>Hardware especializado y autoservicio de infraestructura</span>
                    </li>
                  </ul>
                </div>
                <Button asChild size="lg" variant="outline">
                  <Link href="/niveles/3">
                    Explorar Nivel 3
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ayuda para elegir */}
        <Card className="p-8 mt-12 bg-muted/30">
          <h3 className="text-xl font-bold mb-4 text-foreground">¿No sabes qué nivel elegir?</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              <strong className="text-foreground">Elige Nivel 1</strong> si tienes poco tiempo, conocimientos técnicos
              limitados, o simplemente quieres mejorar tu privacidad con cambios mínimos en tu rutina diaria.
            </p>
            <p className="leading-relaxed">
              <strong className="text-foreground">Elige Nivel 2</strong> si estás dispuesto a adoptar nuevas
              herramientas y cambiar algunos hábitos para una protección significativamente mejor, pero sin modificar tu
              sistema operativo.
            </p>
            <p className="leading-relaxed">
              <strong className="text-foreground">Elige Nivel 3</strong> si eres un usuario avanzado, periodista,
              activista o alguien con alta exposición que necesita máxima privacidad y está dispuesto a hacer cambios
              drásticos.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
