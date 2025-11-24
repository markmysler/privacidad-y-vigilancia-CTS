import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Lock } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PrivacyChecklist, type ChecklistSection } from "@/components/privacy-checklist"

export const metadata = {
  title: "Nivel 2: Privacidad Reforzada - Privacidad y Vigilancia Masiva",
  description: "Protección intermedia con nuevas herramientas: VPN, navegadores privados, cifrado y más.",
}

const checklistSections: ChecklistSection[] = [
  {
    id: "navegador-privado",
    title: "Navegador Privado",
    items: [
      {
        id: "instalar-firefox",
        label: "Instalar Mozilla Firefox",
        description: "Activar Protección de Rastreo Mejorada",
      },
      {
        id: "instalar-brave",
        label: "Instalar Brave Browser (alternativa)",
        description: "Navegador privado por defecto",
      },
      {
        id: "extensiones-privacidad",
        label: "Instalar extensiones: uBlock Origin, HTTPS Everywhere",
        description: "Bloqueo avanzado de rastreadores",
      },
      {
        id: "configurar-navegador",
        label: "Configurar navegador: bloquear cookies de terceros",
        description: "Desactivar telemetría y usar DuckDuckGo",
      },
    ],
  },
  {
    id: "vpn",
    title: "VPN Confiable",
    items: [
      {
        id: "elegir-vpn",
        label: "Elegir VPN: ProtonVPN o Mullvad",
        description: "VPN sin logs con política de privacidad sólida",
      },
      {
        id: "instalar-vpn",
        label: "Instalar y configurar VPN",
        description: "En todos tus dispositivos",
      },
      {
        id: "usar-vpn-wifi-publico",
        label: "Usar VPN en redes Wi-Fi públicas",
        description: "Siempre activa VPN en cafés, aeropuertos, etc.",
      },
    ],
  },
  {
    id: "comunicacion-cifrada",
    title: "Comunicación Cifrada",
    items: [
      {
        id: "instalar-signal",
        label: "Instalar Signal",
        description: "Mensajería con cifrado extremo a extremo",
      },
      {
        id: "migrar-contactos-signal",
        label: "Migrar contactos importantes a Signal",
        description: "Convence a familiares y amigos de usar Signal",
      },
      {
        id: "correo-seguro",
        label: "Crear cuenta en ProtonMail o Tutanota",
        description: "Correo electrónico cifrado para comunicaciones sensibles",
      },
      {
        id: "telegram-secreto",
        label: "Usar chats secretos en Telegram",
        description: "Activar cifrado E2E en Telegram cuando sea necesario",
      },
    ],
  },
  {
    id: "gestor-contrasenas",
    title: "Gestor de Contraseñas",
    items: [
      {
        id: "instalar-bitwarden",
        label: "Instalar Bitwarden o KeePassXC",
        description: "Gestor de código abierto para contraseñas",
      },
      {
        id: "migrar-contrasenas",
        label: "Cambiar todas las contraseñas a claves robustas",
        description: "Usar generador de contraseñas (16+ caracteres)",
      },
      {
        id: "eliminar-contrasenas-reutilizadas",
        label: "Eliminar contraseñas reutilizadas",
        description: "Cada servicio debe tener contraseña única",
      },
    ],
  },
  {
    id: "cifrado-dispositivos",
    title: "Cifrado de Dispositivos",
    items: [
      {
        id: "activar-bitlocker",
        label: "Activar BitLocker (Windows)",
        description: "Cifrado completo del disco en Windows 10/11 Pro",
      },
      {
        id: "activar-filevault",
        label: "Activar FileVault (macOS)",
        description: "Cifrado nativo de macOS",
      },
      {
        id: "cifrado-linux",
        label: "Configurar LUKS o VeraCrypt (Linux)",
        description: "Cifrado de particiones en Linux",
      },
    ],
  },
  {
    id: "permisos-apps",
    title: "Revisión de Apps Móviles",
    items: [
      {
        id: "auditar-permisos",
        label: "Auditar permisos de apps",
        description: "Revisar acceso a ubicación, cámara, micrófono, contactos",
      },
      {
        id: "revocar-permisos",
        label: "Revocar permisos innecesarios",
        description: "Minimizar datos accesibles por apps",
      },
      {
        id: "desinstalar-apps",
        label: "Desinstalar apps innecesarias",
        description: "Eliminar apps que no usas o piden permisos excesivos",
      },
    ],
  },
  {
    id: "sistema-alternativo",
    title: "Sistema Operativo Alternativo (Opcional)",
    items: [
      {
        id: "probar-linux",
        label: "Probar Ubuntu o Linux Mint en USB live",
        description: "Experimenta con Linux sin instalar",
      },
      {
        id: "instalar-tails-usb",
        label: "Crear USB de Tails para sesiones sensibles",
        description: "Sistema que no deja rastros",
      },
    ],
  },
]

export default function Nivel2Page() {
  return (
    <div className="container p-8 md:py-12 max-w-full">
      <div className="mx-auto">
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
            <div className="p-3 rounded-lg bg-secondary/10">
              <Lock className="h-8 w-8 text-secondary" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Nivel 2: Privacidad Reforzada</h1>
              <p className="text-muted-foreground">Herramientas dedicadas para mayor protección</p>
            </div>
          </div>
        </div>

        <Alert className="mb-8 border-secondary/50 bg-secondary/5">
          <AlertDescription className="text-sm leading-relaxed">
            Este nivel requiere instalar nuevas herramientas y cambiar algunos hábitos, pero no necesitas cambiar tu
            sistema operativo. La protección es significativamente mayor que el Nivel 1.
          </AlertDescription>
        </Alert>

        {/* Interactive Checklist */}
        <PrivacyChecklist level={2} sections={checklistSections} />

        {/* Navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/niveles/1">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver a Nivel 1
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/niveles/3">
              Ir a Nivel 3
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
