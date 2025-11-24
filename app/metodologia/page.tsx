import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Lightbulb, Users, Target, Cog } from "lucide-react"

export const metadata: Metadata = {
  title: "Metodología | Privacidad y Vigilancia",
  description:
    "Conoce nuestra metodología basada en Design Thinking y TRIZ para abordar problemas de privacidad y vigilancia masiva.",
}

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestra Metodología</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Combinamos Design Thinking y TRIZ para crear soluciones efectivas y centradas en las personas
          </p>
        </div>

        {/* Design Thinking Section */}
        <section className="mb-16">
          <div className="flex items-start gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Design Thinking</h2>
              <p className="text-muted-foreground">
                Un enfoque centrado en el usuario para resolver problemas complejos
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  1
                </span>
                Empatizar
              </h3>
              <p className="text-muted-foreground mb-3">
                Comprender profundamente las necesidades y preocupaciones de los usuarios sobre su privacidad digital.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Investigación sobre casos reales de vigilancia masiva</li>
                <li>Identificación de vulnerabilidades comunes</li>
                <li>Comprensión del impacto en derechos fundamentales</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  2
                </span>
                Definir
              </h3>
              <p className="text-muted-foreground mb-3">
                Articular claramente el problema: la erosión de la privacidad digital ante la vigilancia masiva.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Vigilancia gubernamental y corporativa</li>
                <li>Recopilación masiva de datos personales</li>
                <li>Falta de conciencia sobre herramientas de protección</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  3
                </span>
                Idear
              </h3>
              <p className="text-muted-foreground mb-3">
                Generar múltiples soluciones creativas utilizando principios de innovación sistemática.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Exploración de herramientas de privacidad existentes</li>
                <li>Aplicación de principios TRIZ para resolver contradicciones</li>
                <li>Desarrollo de estrategias adaptables a diferentes niveles</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  4
                </span>
                Prototipar
              </h3>
              <p className="text-muted-foreground mb-3">
                Crear propuestas tangibles organizadas en tres niveles progresivos de privacidad.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Nivel 1: Cambios básicos y accesibles</li>
                <li>Nivel 2: Protección intermedia con herramientas especializadas</li>
                <li>Nivel 3: Máxima privacidad con medidas avanzadas</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  5
                </span>
                Evaluar
              </h3>
              <p className="text-muted-foreground mb-3">
                Validar la efectividad de las soluciones propuestas y ajustar según feedback.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Análisis de usabilidad de cada nivel</li>
                <li>Evaluación del impacto en la privacidad</li>
                <li>Iteración continua basada en nuevas amenazas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TRIZ Section */}
        <section className="mb-16">
          <div className="flex items-start gap-3 mb-6">
            <div className="p-3 rounded-lg bg-secondary/50 text-foreground">
              <Cog className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Principios TRIZ</h2>
              <p className="text-muted-foreground">
                Teoría de Resolución de Problemas Inventivos aplicada a la privacidad digital
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Segmentación</h3>
              <p className="text-muted-foreground mb-3">
                Dividir el problema en partes manejables: navegación, comunicación, almacenamiento, contraseñas.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <strong>Aplicación:</strong> Cada área tiene herramientas específicas (navegadores privados, mensajería
                cifrada, VPN, gestores de contraseñas).
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Universalidad</h3>
              <p className="text-muted-foreground mb-3">
                Usar herramientas que sirvan para múltiples propósitos de protección.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <strong>Aplicación:</strong> Una VPN protege navegación, oculta ubicación y cifra tráfico
                simultáneamente.
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Anidamiento</h3>
              <p className="text-muted-foreground mb-3">Combinar múltiples capas de protección para mayor seguridad.</p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <strong>Aplicación:</strong> Usar VPN + Tor + navegador privado + extensiones de bloqueo para máxima
                protección.
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Transición a Nuevo Nivel</h3>
              <p className="text-muted-foreground mb-3">
                Progresar gradualmente de soluciones simples a sistemas más complejos.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <strong>Aplicación:</strong> Sistema de tres niveles que permite avanzar según necesidades y capacidades
                técnicas.
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Uso de Mediadores</h3>
              <p className="text-muted-foreground mb-3">
                Introducir elementos intermedios que actúen como barreras de protección.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <strong>Aplicación:</strong> Servicios de correo temporal, alias de email, y números virtuales para
                evitar exposición directa.
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Sinergia de Metodologías</h2>
                <p className="text-muted-foreground mb-4">
                  La combinación de Design Thinking y TRIZ nos permite crear soluciones que son tanto empáticas con las
                  necesidades del usuario como técnicamente innovadoras.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Centradas en el usuario:</strong> Las soluciones responden a necesidades reales de
                      protección de privacidad
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Sistemáticas:</strong> Aplicamos principios probados de innovación para resolver
                      contradicciones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Progresivas:</strong> Permiten adaptación gradual según capacidades y necesidades
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Iterativas:</strong> Se actualizan continuamente ante nuevas amenazas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/niveles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Ver Niveles de Privacidad
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contexto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border font-medium hover:bg-muted transition-colors"
          >
            Contexto del Problema
          </Link>
        </div>
      </div>
    </main>
  )
}
