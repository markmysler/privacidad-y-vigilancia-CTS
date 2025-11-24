import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertTriangle, Shield, Lock, Eye, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container py-8 md:py-16">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
            Protege tu Privacidad Digital
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            La vigilancia masiva es una realidad. Aprende a proteger tu información personal con estrategias prácticas y
            herramientas confiables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/niveles">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/contexto">Conocer el Problema</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="mb-16 md:mb-24">
        <Card className="p-6 md:p-8 bg-destructive/10 border-destructive/20">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="shrink-0">
              <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">¿Qué es la Vigilancia Masiva?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La vigilancia masiva en línea abarca tanto gobiernos como empresas privadas. Sistemas que recopilan y
                analizan grandes volúmenes de datos: imágenes, comunicaciones, registros biométricos, historial de
                navegación y más, para predecir o controlar comportamientos.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    Gobiernos integran bases de datos de servicios públicos creando aparatos de vigilancia masiva
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Grandes tecnológicas rastrean tu actividad con trackers como Google Analytics y Facebook</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Spyware como Pegasus espía a periodistas y disidentes en todo el mundo</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Three Levels */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tres Niveles de Protección</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige el nivel que se ajuste a tu tiempo, conocimientos técnicos y necesidad de privacidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Nivel 1</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Privacidad básica con cambios mínimos. Ideal para usuarios con poco tiempo.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Ajustes de privacidad básicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Modo incógnito y borrado de cookies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Autenticación en dos pasos</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/niveles/1">Ver Nivel 1</Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Lock className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Nivel 2</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Privacidad reforzada con cambios moderados. Nuevas herramientas y configuraciones.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Navegadores enfocados en privacidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>VPN confiable y comunicación cifrada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Gestores de contraseñas</span>
              </li>
            </ul>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/niveles/2">Ver Nivel 2</Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Nivel 3</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Privacidad máxima con cambios drásticos. Para usuarios avanzados o alto riesgo.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>Sistemas operativos especializados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>Red Tor y anonimato total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>Identidades digitales separadas</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/niveles/3">Ver Nivel 3</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Comienza a Proteger tu Privacidad Hoy
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explora estrategias prácticas, herramientas confiables y aprende a implementar medidas de seguridad paso a
              paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/estrategias">Ver Estrategias</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/recursos">Explorar Recursos</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
