import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Heart, Users, Eye, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Acerca del Proyecto | Privacidad y Vigilancia",
  description:
    "Conoce más sobre este proyecto educativo dedicado a la privacidad digital y la protección contra la vigilancia masiva.",
}

export default function AcercaPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Acerca del Proyecto</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Un recurso educativo para entender y protegerse de la vigilancia digital masiva
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
                <p className="text-muted-foreground mb-3">
                  Este proyecto nace de la necesidad de educar y empoderar a las personas sobre su privacidad digital en
                  una era de vigilancia masiva sin precedentes.
                </p>
                <p className="text-muted-foreground">
                  Creemos que la privacidad es un derecho fundamental, no un privilegio. Nuestro objetivo es
                  democratizar el acceso al conocimiento y las herramientas necesarias para proteger tu identidad
                  digital, independientemente de tu nivel técnico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">¿Por Qué Es Importante?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-semibold">Vigilancia Ubicua</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Gobiernos y corporaciones recopilan datos masivos sobre nuestras vidas digitales: búsquedas, ubicación,
                comunicaciones, compras, y más. Esta información puede ser usada para control social, discriminación, y
                manipulación.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Derecho Fundamental</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                La privacidad está reconocida en la Declaración Universal de Derechos Humanos. Sin privacidad, no hay
                libertad de expresión, libertad de asociación, ni verdadera democracia.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Para Todos</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                No necesitas ser un experto en tecnología para proteger tu privacidad. Hemos diseñado soluciones
                progresivas que cualquier persona puede implementar, desde cambios básicos hasta medidas avanzadas.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-semibold">Casos Reales</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Desde el espionaje con Pegasus a periodistas y activistas, hasta la integración de bases de datos
                gubernamentales y reconocimiento facial masivo, las amenazas son reales y están ocurriendo ahora.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nuestro Enfoque</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Basado en Metodologías Probadas</h3>
              <p className="text-muted-foreground mb-3">
                Utilizamos Design Thinking para mantener un enfoque centrado en el usuario y TRIZ para aplicar
                principios de innovación sistemática, asegurando que nuestras soluciones sean tanto prácticas como
                efectivas.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Tres Niveles Progresivos</h3>
              <p className="text-muted-foreground mb-3">
                Reconocemos que cada persona tiene diferentes necesidades, capacidades técnicas, y modelos de amenaza.
                Por eso ofrecemos tres niveles:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>
                  <strong>Nivel 1:</strong> Cambios básicos que cualquiera puede hacer (30-60 minutos)
                </li>
                <li>
                  <strong>Nivel 2:</strong> Protección intermedia con herramientas especializadas (2-4 horas)
                </li>
                <li>
                  <strong>Nivel 3:</strong> Máxima privacidad con medidas avanzadas (dedicación continua)
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Herramientas Estándar y Confiables</h3>
              <p className="text-muted-foreground">
                Recomendamos herramientas de código abierto cuando es posible, ampliamente auditadas por la comunidad de
                seguridad, y con historial comprobado de respeto a la privacidad. Incluimos opciones populares como
                Signal, Tor, ProtonVPN, Bitwarden, y más.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Sin Rastreo, Sin Publicidad</h3>
              <p className="text-muted-foreground">
                Practicamos lo que predicamos. Este sitio no incluye rastreadores de terceros, análisis invasivos, ni
                publicidad. Tu visita es privada. El progreso de tu checklist se guarda localmente en tu dispositivo, no
                en nuestros servidores.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">¿Para Quién Es Este Proyecto?</h2>
          <div className="bg-muted/30 rounded-lg p-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span>
                  <strong>Ciudadanos preocupados</strong> por su privacidad digital y las consecuencias de la vigilancia
                  masiva
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span>
                  <strong>Periodistas y activistas</strong> que enfrentan riesgos de vigilancia dirigida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span>
                  <strong>Estudiantes y educadores</strong> interesados en temas de privacidad, tecnología y sociedad
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span>
                  <strong>Profesionales</strong> que manejan información sensible
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span>
                  <strong>Cualquier persona</strong> que valore su privacidad y autonomía digital
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Research Base */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Fundamentos de Investigación</h2>
          <p className="text-muted-foreground mb-4">
            Este proyecto está respaldado por investigación exhaustiva que incluye:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Análisis de Casos</h4>
              <p className="text-sm text-muted-foreground">
                Pegasus, integración de bases de datos gubernamentales, reconocimiento facial, seguimiento corporativo
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Evaluación de Herramientas</h4>
              <p className="text-sm text-muted-foreground">
                Análisis técnico de navegadores, VPN, mensajería cifrada, gestores de contraseñas
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Marco Legal</h4>
              <p className="text-sm text-muted-foreground">
                Derechos digitales, regulaciones de privacidad, legislación de vigilancia
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Impacto Social</h4>
              <p className="text-sm text-muted-foreground">
                Efectos en libertad de expresión, democracia, y derechos fundamentales
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
          <h2 className="text-2xl font-bold mb-3">Comienza tu Viaje hacia la Privacidad</h2>
          <p className="text-muted-foreground mb-6">
            Explora nuestros niveles progresivos y encuentra el que mejor se adapte a tus necesidades y capacidades.
          </p>
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
              Entender el Problema
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
