import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PrivacyChecklist, type ChecklistSection } from "@/components/privacy-checklist"

export const metadata = {
  title: "Nivel 1: Privacidad Básica - Privacidad y Vigilancia Masiva",
  description: "Protege tu privacidad con cambios mínimos. Configuraciones simples para usuarios con poco tiempo.",
}

const checklistSections: ChecklistSection[] = [
  {
    id: "configuracion-basica",
    title: "Configuración de Privacidad Básica",
    items: [
      {
        id: "redes-sociales",
        label: "Configurar privacidad en redes sociales",
        description: "Limita visibilidad de publicaciones, desactiva rastreo de ubicación, revisa apps conectadas",
      },
      {
        id: "smartphone-privacidad",
        label: "Ajustar privacidad en smartphone",
        description: "Desactiva rastreo de ubicación y permisos innecesarios en apps",
      },
      {
        id: "contrasenas-fuertes",
        label: "Crear contraseñas fuertes y únicas",
        description: "Usa contraseñas largas con mayúsculas, minúsculas, números y símbolos",
      },
    ],
  },
  {
    id: "navegacion-privada",
    title: "Navegación Privada",
    items: [
      {
        id: "modo-incognito",
        label: "Usar modo incógnito regularmente",
        description: "Navega en modo privado para evitar historial y cookies locales",
      },
      {
        id: "borrar-cookies",
        label: "Borrar cookies después de cada sesión",
        description: "Limpia datos de navegación regularmente",
      },
    ],
  },
  {
    id: "autenticacion",
    title: "Autenticación en Dos Pasos",
    items: [
      {
        id: "2fa-correo",
        label: "Activar 2FA en correo electrónico",
        description: "Usa Google Authenticator o Authy para Gmail/Outlook",
      },
      {
        id: "2fa-redes",
        label: "Activar 2FA en redes sociales",
        description: "Protege Facebook, Instagram, Twitter con autenticación de dos factores",
      },
      {
        id: "2fa-banca",
        label: "Activar 2FA en servicios bancarios",
        description: "Añade capa extra de seguridad a tus cuentas financieras",
      },
    ],
  },
  {
    id: "buscadores-privados",
    title: "Buscadores Privados",
    items: [
      {
        id: "duckduckgo",
        label: "Instalar y usar DuckDuckGo",
        description: "Configura DuckDuckGo como buscador predeterminado",
      },
      {
        id: "buscador-alternativo",
        label: "Probar Startpage o Qwant",
        description: "Explora alternativas que no rastreen tus búsquedas",
      },
    ],
  },
  {
    id: "bloqueadores",
    title: "Bloqueadores de Anuncios",
    items: [
      {
        id: "ublock-origin",
        label: "Instalar uBlock Origin",
        description: "Extensión que bloquea anuncios y rastreadores",
      },
      {
        id: "privacy-badger",
        label: "Instalar Privacy Badger (opcional)",
        description: "Alternativa de EFF que bloquea rastreadores automáticamente",
      },
    ],
  },
  {
    id: "actualizaciones",
    title: "Mantenimiento del Sistema",
    items: [
      {
        id: "activar-actualizaciones",
        label: "Activar actualizaciones automáticas",
        description: "En Windows, macOS, Android o iOS",
      },
      {
        id: "actualizar-navegador",
        label: "Actualizar navegador regularmente",
        description: "Mantén Chrome, Firefox o Edge al día",
      },
      {
        id: "antivirus-activo",
        label: "Mantener antivirus activo",
        description: "Windows Defender o alternativa confiable",
      },
    ],
  },
]

export default function Nivel1Page() {
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
            <div className="p-3 rounded-lg bg-primary/10">
              <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Nivel 1: Privacidad Básica</h1>
              <p className="text-muted-foreground">Cambios mínimos, máximo impacto</p>
            </div>
          </div>
        </div>

        <Alert className="mb-8">
          <AlertDescription className="text-sm leading-relaxed">
            Este nivel está diseñado para usuarios con poco tiempo o conocimientos técnicos limitados. Los pasos son
            simples pero efectivos para mejorar significativamente tu privacidad digital.
          </AlertDescription>
        </Alert>

        {/* Interactive Checklist */}
        <PrivacyChecklist level={1} sections={checklistSections} />

        {/* Navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/niveles">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver a Niveles
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/niveles/2">
              Ir a Nivel 2
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
