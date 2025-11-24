import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Eye, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PrivacyChecklist, type ChecklistSection } from "@/components/privacy-checklist"

export const metadata = {
  title: "Nivel 3: Privacidad Máxima - Privacidad y Vigilancia Masiva",
  description:
    "Protección avanzada para periodistas, activistas y usuarios de alto riesgo. Máxima privacidad a cualquier costo.",
}

const checklistSections: ChecklistSection[] = [
  {
    id: "sistema-operativo",
    title: "Sistema Operativo Especializado",
    items: [
      {
        id: "instalar-tails",
        label: "Instalar Tails OS en USB",
        description: "Sistema que no deja rastros, todo el tráfico por Tor",
      },
      {
        id: "instalar-qubes",
        label: "Instalar Qubes OS (alternativa)",
        description: "Sistema con aislamiento mediante VMs",
      },
      {
        id: "configurar-whonix",
        label: "Configurar Whonix (alternativa)",
        description: "Fuerza todo el tráfico a través de Tor con dos VMs",
      },
    ],
  },
  {
    id: "red-tor",
    title: "Red Tor Exclusiva",
    items: [
      {
        id: "usar-tor-browser",
        label: "Usar únicamente Tor Browser",
        description: "No navegadores convencionales para actividades sensibles",
      },
      {
        id: "servicios-onion",
        label: "Acceder a servicios .onion cuando existan",
        description: "DuckDuckGo, ProtonMail, etc. en .onion",
      },
      {
        id: "evitar-vpn-tor",
        label: "No usar VPN sobre Tor",
        description: "Tor solo es suficiente para máximo anonimato",
      },
    ],
  },
  {
    id: "identidades-separadas",
    title: "Identidades Digitales Separadas",
    items: [
      {
        id: "crear-seudonimos",
        label: "Crear seudónimos completamente separados",
        description: "Nunca vincules identidades entre sí",
      },
      {
        id: "no-datos-reales",
        label: "No usar datos reales en actividades sensibles",
        description: "Usar alias completos sin vinculación a identidad real",
      },
      {
        id: "correos-temporales",
        label: "Usar correos temporales o ProtonMail anónimo",
        description: "Sin datos personales en registros",
      },
    ],
  },
  {
    id: "desconexion-corporaciones",
    title: "Desconexión de Grandes Corporaciones",
    items: [
      {
        id: "migrar-protonmail",
        label: "Migrar de Gmail a ProtonMail",
        description: "Eliminar dependencia de Google",
      },
      {
        id: "nextcloud-autohost",
        label: "Configurar Nextcloud auto-hospedado",
        description: "Reemplaza Google Drive con nube propia",
      },
      {
        id: "linux-exclusivo",
        label: "Usar Linux exclusivamente",
        description: "Eliminar Windows/macOS propietario",
      },
      {
        id: "no-redes-sociales",
        label: "Eliminar o usar redes sociales solo con alias",
        description: "Facebook, Instagram, Twitter solo desde Tor con seudónimo",
      },
    ],
  },
  {
    id: "hardware-seguridad",
    title: "Hardware y Seguridad Física",
    items: [
      {
        id: "telefono-seguro",
        label: "Adquirir teléfono básico o con GrapheneOS",
        description: "Sin Google, sin apps invasivas",
      },
      {
        id: "cubrir-camaras",
        label: "Cubrir físicamente cámaras y micrófonos",
        description: "Tapa cámaras cuando no las uses",
      },
      {
        id: "pagos-anonimos",
        label: "Usar efectivo o criptomonedas privadas",
        description: "Monero u otras criptos con privacidad",
      },
    ],
  },
  {
    id: "autoservicio",
    title: "Autoservicio y Auditoría",
    items: [
      {
        id: "autohost-servicios",
        label: "Auto-hospedar servidor de correo y VPN",
        description: "Control total de infraestructura",
      },
      {
        id: "inventario-datos",
        label: "Mantener inventario de información sensible",
        description: "Saber qué datos tienes y dónde están",
      },
      {
        id: "educacion-continua",
        label: "Seguir noticias de seguridad (EFF, Privacy Guides)",
        description: "Mantenerse actualizado sobre vulnerabilidades",
      },
    ],
  },
  {
    id: "comunicacion-offline",
    title: "Comunicación Offline",
    items: [
      {
        id: "reuniones-fisicas",
        label: "Reuniones en persona para temas críticos",
        description: "Sin dispositivos electrónicos presentes",
      },
      {
        id: "dead-drops",
        label: "Usar métodos físicos para intercambio de archivos",
        description: "USB en ubicaciones seguras en vez de internet",
      },
    ],
  },
]

export default function Nivel3Page() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/niveles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Niveles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-accent/10">
              <Eye className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Nivel 3: Privacidad Máxima</h1>
              <p className="text-muted-foreground">Para usuarios avanzados y alto riesgo</p>
            </div>
          </div>
        </div>

        <Alert className="mb-8 border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive">Advertencia</AlertTitle>
          <AlertDescription className="text-sm leading-relaxed">
            Este nivel requiere conocimientos técnicos avanzados y cambios drásticos en tu sistema operativo y rutinas
            digitales. Está diseñado para periodistas, activistas, defensores de derechos humanos o personas con alta
            exposición a vigilancia dirigida.
          </AlertDescription>
        </Alert>

        {/* Interactive Checklist */}
        <PrivacyChecklist level={3} sections={checklistSections} />

        {/* Recursos Adicionales */}
        <Card className="p-6 mb-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Recursos para Nivel 3</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">EFF Surveillance Self-Defense:</strong> Guías detalladas para
                periodistas y activistas (ssd.eff.org)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Privacy Guides:</strong> Herramientas y configuraciones avanzadas
                (privacyguides.org)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Tails Documentation:</strong> Manuales completos de uso y casos de
                estudio (tails.net)
              </span>
            </li>
          </ul>
        </Card>

        {/* Navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/niveles/2">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver a Nivel 2
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/recursos">Ver Recursos y Herramientas</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
