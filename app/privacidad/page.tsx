import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, Eye, Database, Cookie, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Privacidad y Vigilancia",
  description: "Nuestra política de privacidad: cómo tratamos tus datos y por qué este sitio no utiliza rastreadores.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto p-8 max-w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidad</h1>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Practicamos lo que predicamos: tu privacidad es nuestra prioridad
          </p>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: 24 de noviembre de 2025</p>
        </div>

        {/* Key Commitments */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">Nuestros Compromisos Principales</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Sin rastreadores de terceros ni análisis invasivos</p>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">No almacenamos datos personales en nuestros servidores</p>
              </div>
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Solo usamos una cookie opcional para guardar tu preferencia de tema
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Tu progreso en checklists se guarda localmente en tu dispositivo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Política Detallada</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">1. Información que NO Recopilamos</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Este sitio ha sido diseñado para respetar tu privacidad al máximo. NO recopilamos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Dirección IP o información de ubicación</li>
                  <li>Información personal identificable (nombre, email, teléfono)</li>
                  <li>Datos de navegación o comportamiento en el sitio</li>
                  <li>Información del dispositivo o navegador más allá de lo básico para funcionalidad</li>
                  <li>Historial de páginas visitadas</li>
                  <li>Tiempo de permanencia en páginas</li>
                  <li>Información de formularios (no tenemos formularios que envíen datos a servidores)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">2. Datos Almacenados Localmente</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Algunos datos se almacenan en tu dispositivo (no en nuestros servidores) usando el almacenamiento
                  local del navegador (localStorage):
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>
                    <strong>Progreso de Checklist:</strong> Qué elementos has completado en los checklists de niveles de
                    privacidad
                  </li>
                  <li>
                    <strong>Preferencia de Tema:</strong> Si prefieres modo claro u oscuro (también guardado en una
                    cookie opcional)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
                  <strong>Importante:</strong> Esta información NUNCA sale de tu dispositivo. Puedes borrarla en
                  cualquier momento limpiando los datos del sitio en la configuración de tu navegador.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">3. Cookies</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Utilizamos UNA sola cookie opcional, exclusivamente para funcionalidad:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">Cookie de Preferencia de Tema</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      <strong>Nombre:</strong> theme
                    </li>
                    <li>
                      <strong>Propósito:</strong> Recordar si prefieres modo claro u oscuro
                    </li>
                    <li>
                      <strong>Duración:</strong> 1 año
                    </li>
                    <li>
                      <strong>Esencial:</strong> No (el sitio funciona sin ella)
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  NO utilizamos cookies de seguimiento, publicidad, análisis de terceros, ni ninguna otra cookie.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">4. Servicios de Terceros</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  NO utilizamos servicios de terceros que puedan rastrear o recopilar información sobre ti:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Sin Google Analytics ni similares</li>
                  <li>Sin Facebook Pixel ni redes sociales de seguimiento</li>
                  <li>Sin redes de publicidad</li>
                  <li>Sin hotjar, mixpanel, o herramientas de análisis de comportamiento</li>
                  <li>Sin CDNs de terceros que puedan rastrear</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3 bg-primary/5 p-4 rounded-lg">
                  <strong>Hosting:</strong> Este sitio está alojado en Vercel. Vercel puede recopilar logs básicos de
                  servidor para funcionalidad (dirección IP, agente de usuario), pero nosotros no tenemos acceso a estos
                  datos ni los utilizamos.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">5. Enlaces Externos</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">
                  Este sitio contiene enlaces a recursos externos (herramientas de privacidad, servicios recomendados,
                  artículos de referencia). No somos responsables de las políticas de privacidad de estos sitios
                  externos. Te recomendamos revisar sus políticas antes de compartir información personal.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">6. Exportación de Datos</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Ofrecemos funcionalidad para exportar tu progreso de checklist como archivo de texto. Esta
                  exportación:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Se genera completamente en tu navegador (lado del cliente)</li>
                  <li>No se envía a ningún servidor</li>
                  <li>Se descarga directamente a tu dispositivo</li>
                  <li>Tú controlas dónde se guarda y con quién se comparte</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">7. Seguridad</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Aunque no recopilamos datos sensibles, tomamos medidas de seguridad:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Conexión HTTPS cifrada en todo el sitio</li>
                  <li>No almacenamos contraseñas ni datos de autenticación (no hay sistema de cuentas)</li>
                  <li>Código fuente abierto y auditable</li>
                  <li>Actualizaciones regulares de dependencias de seguridad</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">8. Derechos del Usuario</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">
                  Como no recopilamos ni almacenamos tus datos personales, no hay datos que solicitar, corregir o
                  eliminar de nuestros servidores.
                </p>
                <p className="text-muted-foreground">
                  Para borrar datos almacenados localmente en tu dispositivo (progreso de checklist, tema), simplemente
                  limpia los datos del sitio en la configuración de tu navegador o usa la función "Reiniciar Progreso"
                  en cada checklist.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">9. Cambios a Esta Política</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">
                  Si realizamos cambios a esta política de privacidad, actualizaremos la fecha de "Última actualización"
                  en la parte superior de esta página. Como no tenemos tu información de contacto, no podemos
                  notificarte directamente. Te recomendamos revisar esta página periódicamente.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">10. Contacto</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">
                  Si tienes preguntas sobre esta política de privacidad o nuestras prácticas de datos, puedes revisar el
                  código fuente del proyecto (si es público) o contactar al equipo del proyecto a través de los canales
                  apropiados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="mb-12">
          <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
            <h2 className="text-2xl font-bold mb-3">Compromiso con la Transparencia</h2>
            <p className="text-muted-foreground mb-4">
              Creemos que un sitio sobre privacidad debe practicar lo que predica. Por eso:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Esta política es clara y sin jerga legal confusa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>No recopilamos datos "porque sí" o "por si acaso"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tu privacidad no es una moneda de cambio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>El código del sitio puede ser auditado para verificar estas afirmaciones</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Back to site */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
