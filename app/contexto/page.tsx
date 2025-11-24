import { Card } from "@/components/ui/card"
import { AlertTriangle, Eye, Database, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Contexto Actual - Privacidad y Vigilancia Masiva",
  description:
    "Conoce los casos actuales de vigilancia masiva, spyware Pegasus, tecnologías biométricas y el estado de la privacidad digital en el mundo.",
}

export default function ContextoPage() {
  return (
    <div className="container p-8 md:py-12 max-w-full">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            Contexto Actual de la Vigilancia Masiva
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            La vigilancia masiva es una realidad global que afecta a millones de personas. Conoce los casos actuales y
            las tecnologías que se utilizan para monitorear tu actividad en línea.
          </p>
        </div>

        {/* Vigilancia Gubernamental */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Vigilancia Gubernamental</h2>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Integración de Bases de Datos</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Investigaciones recientes muestran que agencias gubernamentales están integrando bases de datos de
              servicios públicos (impuestos, salud, educación) en plataformas compartidas, creando un "aparato de
              vigilancia integrado" que puede supervisar y predecir a escala masiva.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Los gobiernos están reutilizando silenciosamente los datos personales recopilados para servicios
                públicos con fines de vigilancia masiva, sin transparencia ni consentimiento ciudadano."
              </p>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Tecnologías Biométricas</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En América Latina se detecta el despliegue de tecnologías biométricas sin transparencia pública: cámaras
              de reconocimiento facial, identificación por voz o marcha. Esto viola derechos básicos y genera "un efecto
              inhibitorio" sobre la libertad de expresión y la protesta social.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Reconocimiento facial en espacios públicos sin consentimiento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Identificación por voz y patrones de marcha</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bases de datos biométricas sin transparencia ni regulación</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Vigilancia Corporativa */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-8 w-8 text-secondary" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Vigilancia Corporativa</h2>
          </div>

          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Rastreadores Web en Latinoamérica</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las grandes tecnológicas monitorizan la actividad de los usuarios con rastreadores web. Estudios indican
              que en Latinoamérica Google Analytics, Google Ads y Facebook Custom Audiences son algunos de los trackers
              más prevalentes.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">Google Analytics</p>
                <p className="text-sm text-muted-foreground">Rastrea tu comportamiento en millones de sitios web</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">Google Ads</p>
                <p className="text-sm text-muted-foreground">Crea perfiles publicitarios basados en tu actividad</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">Facebook Pixel</p>
                <p className="text-sm text-muted-foreground">Monitorea tu actividad fuera de Facebook</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Pegasus Spyware */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="h-8 w-8 text-destructive" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">El Caso Pegasus</h2>
          </div>

          <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
            <div className="flex gap-4 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Instrumento de Espionaje Masivo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pegasus es un spyware desarrollado por la empresa israelí NSO Group, clasificado como "instrumento de
                  espionaje y vigilancia masiva" usado para silenciar a periodistas y perseguir a disidentes en todo el
                  mundo.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Capacidades del Spyware</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Acceso completo a mensajes, llamadas, correos y contactos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Activación remota de cámaras y micrófonos sin conocimiento del usuario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Rastreo de ubicación en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Extracción de datos de aplicaciones cifradas como WhatsApp y Signal</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Víctimas Documentadas</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Periodistas, activistas de derechos humanos, políticos de oposición, abogados y defensores de la
                  sociedad civil en más de 45 países han sido objetivo de este spyware, según investigaciones de
                  Amnistía Internacional y otros organismos.
                </p>
              </div>
            </div>

            <div className="bg-background/50 p-4 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground italic">
                "El uso de Pegasus representa una amenaza sin precedentes para la libertad de expresión y los derechos
                humanos en la era digital."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Amnistía Internacional</p>
            </div>
          </Card>
        </section>

        {/* Impacto en Derechos */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-8 w-8 text-accent" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Impacto en Derechos Fundamentales</h2>
          </div>

          <Card className="p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              La vigilancia masiva tiene efectos profundos en la sociedad y los derechos fundamentales de las personas:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-2">Libertad de Expresión</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Genera un "efecto inhibitorio" donde las personas autocensuran sus opiniones por miedo a ser
                  vigiladas.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-foreground mb-2">Derecho a la Protesta</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Las tecnologías de reconocimiento facial disuaden la participación en manifestaciones pacíficas.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-foreground mb-2">Privacidad</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La recopilación masiva de datos personales sin consentimiento viola el derecho fundamental a la
                  privacidad.
                </p>
              </div>

              <div className="border-l-4 border-destructive pl-4">
                <h4 className="font-semibold text-foreground mb-2">Periodismo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  El espionaje a periodistas compromete la protección de fuentes y la libertad de prensa.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Es Hora de Actuar</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frente a este contexto, es esencial adoptar estrategias claras para proteger tu privacidad digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/estrategias">Ver Estrategias de Protección</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/niveles">Elegir tu Nivel de Privacidad</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
