import type { Metadata } from "next"
import Link from "next/link"
import { FileText, BookOpen, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Investigación Completa | Privacidad y Vigilancia",
  description: "Accede al documento completo de investigación sobre privacidad digital y vigilancia masiva.",
}

export default function InvestigacionPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto p-8 max-w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Documento de Investigación</h1>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Investigación completa sobre privacidad digital, vigilancia masiva y estrategias de protección
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Contenido del Documento</h2>
                <p className="text-muted-foreground mb-4">
                  Este documento de investigación profundiza en los desafíos contemporáneos de la privacidad digital y
                  proporciona un análisis exhaustivo de:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Contexto y Casos</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vigilancia masiva gubernamental</li>
                  <li>• Caso Pegasus y spyware</li>
                  <li>• Biometría y reconocimiento facial</li>
                  <li>• Integración de bases de datos</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Metodología</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Aplicación de Design Thinking</li>
                  <li>• Principios TRIZ aplicados</li>
                  <li>• Enfoque centrado en el usuario</li>
                  <li>• Soluciones sistemáticas</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Estrategias y Herramientas</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Navegadores y VPNs</li>
                  <li>• Mensajería cifrada</li>
                  <li>• Gestión de contraseñas</li>
                  <li>• Sistemas operativos seguros</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Niveles de Implementación</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Nivel 1: Privacidad básica</li>
                  <li>• Nivel 2: Protección intermedia</li>
                  <li>• Nivel 3: Máxima privacidad</li>
                  <li>• Guías paso a paso</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Document Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Casos de estudio analizados</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-sm text-muted-foreground">Herramientas evaluadas</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Referencias académicas</p>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hallazgos Principales</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Erosión de la Privacidad</h3>
              <p className="text-muted-foreground">
                La investigación documenta cómo la vigilancia masiva ha crecido exponencialmente en la última década,
                con gobiernos y corporaciones recopilando cantidades masivas de datos personales sin consentimiento
                informado adecuado.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Impacto en Derechos Fundamentales</h3>
              <p className="text-muted-foreground">
                La vigilancia digital afecta directamente la libertad de expresión, asociación, y privacidad, creando
                efectos de autocensura y erosionando la confianza en las instituciones democráticas.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Soluciones Accesibles Existen</h3>
              <p className="text-muted-foreground">
                A pesar de la complejidad del problema, existen herramientas de código abierto, gratuitas o accesibles
                que permiten a cualquier persona mejorar significativamente su privacidad digital sin requerir
                conocimientos técnicos avanzados.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Enfoque Progresivo Efectivo</h3>
              <p className="text-muted-foreground">
                La estrategia de tres niveles progresivos permite adaptación gradual, maximizando la adopción al
                respetar las capacidades y necesidades individuales de cada usuario.
              </p>
            </div>
          </div>
        </section>

        {/* Download Note */}
        <section className="mb-12">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Nota sobre Descarga</h3>
            <p className="text-muted-foreground mb-4">
              El documento de investigación completo está disponible en este sitio web de forma estructurada y
              navegable. Toda la información contenida en el documento está disponible a través de las diferentes
              secciones:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <Link href="/contexto" className="hover:text-primary hover:underline">
                  <strong>Contexto:</strong> Casos de vigilancia masiva y análisis de impacto
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <Link href="/metodologia" className="hover:text-primary hover:underline">
                  <strong>Metodología:</strong> Design Thinking y principios TRIZ
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <Link href="/estrategias" className="hover:text-primary hover:underline">
                  <strong>Estrategias:</strong> Herramientas y prácticas de protección
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <Link href="/niveles" className="hover:text-primary hover:underline">
                  <strong>Niveles:</strong> Guías detalladas de implementación
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <Link href="/recursos" className="hover:text-primary hover:underline">
                  <strong>Recursos:</strong> Biblioteca de herramientas recomendadas
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cómo Usar Esta Investigación</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Comprende el Contexto</h3>
                <p className="text-sm text-muted-foreground">
                  Revisa la sección de contexto para entender la magnitud del problema de vigilancia masiva y cómo te
                  afecta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Familiarízate con las Estrategias</h3>
                <p className="text-sm text-muted-foreground">
                  Explora las diferentes estrategias y herramientas disponibles para proteger tu privacidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Elige tu Nivel</h3>
                <p className="text-sm text-muted-foreground">
                  Selecciona el nivel de privacidad que mejor se adapte a tus necesidades y capacidades técnicas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Implementa Gradualmente</h3>
                <p className="text-sm text-muted-foreground">
                  Usa los checklists interactivos para implementar las medidas paso a paso y seguir tu progreso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* References Note */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <h2 className="text-2xl font-bold mb-3">Referencias Académicas</h2>
            <p className="text-muted-foreground mb-4">
              Esta investigación se basa en una amplia revisión de literatura académica, informes de organizaciones de
              derechos digitales, análisis técnicos de herramientas de privacidad, y documentación de casos reales de
              vigilancia masiva.
            </p>
            <p className="text-sm text-muted-foreground">
              Las referencias completas incluyen trabajos de investigadores en seguridad digital, informes de
              organizaciones como Electronic Frontier Foundation (EFF), Privacy International, Amnistía Internacional, y
              documentación técnica de las herramientas recomendadas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/niveles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Comenzar con los Niveles
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contexto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border font-medium hover:bg-muted transition-colors"
          >
            Ver Contexto Completo
          </Link>
        </div>
      </div>
    </main>
  )
}
