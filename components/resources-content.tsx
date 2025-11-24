"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink } from "lucide-react"

export type ResourceLevel = 1 | 2 | 3 | "all"
export type ResourceCategory =
  | "navegadores"
  | "vpn"
  | "mensajeria"
  | "correo"
  | "contraseñas"
  | "sistemas"
  | "extensiones"
  | "educacion"

export interface Resource {
  id: string
  name: string
  description: string
  category: ResourceCategory
  level: ResourceLevel
  url: string
  openSource?: boolean
  free?: boolean
}

const resources: Resource[] = [
  // Navegadores
  {
    id: "firefox",
    name: "Mozilla Firefox",
    description: "Navegador con Protección de Rastreo Mejorada. Código abierto y enfocado en privacidad.",
    category: "navegadores",
    level: 2,
    url: "https://www.mozilla.org/firefox/",
    openSource: true,
    free: true,
  },
  {
    id: "brave",
    name: "Brave Browser",
    description: "Navegador privado por defecto, bloquea rastreadores y anuncios automáticamente.",
    category: "navegadores",
    level: 2,
    url: "https://brave.com/",
    openSource: true,
    free: true,
  },
  {
    id: "tor-browser",
    name: "Tor Browser",
    description: "Navegador anónimo que enruta todo el tráfico por la red Tor. Máxima privacidad.",
    category: "navegadores",
    level: 3,
    url: "https://www.torproject.org/",
    openSource: true,
    free: true,
  },

  // VPN
  {
    id: "protonvpn",
    name: "ProtonVPN",
    description: "VPN con sede en Suiza, sin logs. Versión gratuita y de pago disponibles.",
    category: "vpn",
    level: 2,
    url: "https://protonvpn.com/",
    openSource: true,
    free: true,
  },
  {
    id: "mullvad",
    name: "Mullvad VPN",
    description: "VPN enfocada en privacidad que acepta pagos anónimos. No requiere email.",
    category: "vpn",
    level: 2,
    url: "https://mullvad.net/",
    openSource: true,
    free: false,
  },

  // Mensajería
  {
    id: "signal",
    name: "Signal",
    description: "App de mensajería más segura. Código abierto con cifrado extremo a extremo por defecto.",
    category: "mensajeria",
    level: 2,
    url: "https://signal.org/",
    openSource: true,
    free: true,
  },
  {
    id: "telegram-secreto",
    name: "Telegram (Chats Secretos)",
    description: "Chats secretos con cifrado E2E. Los chats normales no están cifrados E2E.",
    category: "mensajeria",
    level: 1,
    url: "https://telegram.org/",
    openSource: true,
    free: true,
  },

  // Correo
  {
    id: "protonmail",
    name: "ProtonMail",
    description: "Correo electrónico cifrado de extremo a extremo con sede en Suiza.",
    category: "correo",
    level: 2,
    url: "https://proton.me/mail",
    openSource: true,
    free: true,
  },
  {
    id: "tutanota",
    name: "Tutanota",
    description: "Servicio de correo cifrado alemán. Código abierto y fácil de usar.",
    category: "correo",
    level: 2,
    url: "https://tutanota.com/",
    openSource: true,
    free: true,
  },

  // Gestores de Contraseñas
  {
    id: "bitwarden",
    name: "Bitwarden",
    description: "Gestor de contraseñas de código abierto. Gratuito con opción de auto-hospedaje.",
    category: "contraseñas",
    level: 2,
    url: "https://bitwarden.com/",
    openSource: true,
    free: true,
  },
  {
    id: "keepassxc",
    name: "KeePassXC",
    description: "Gestor de contraseñas local completamente offline. Sin sincronización en la nube.",
    category: "contraseñas",
    level: 2,
    url: "https://keepassxc.org/",
    openSource: true,
    free: true,
  },

  // Sistemas Operativos
  {
    id: "tails",
    name: "Tails OS",
    description: "Sistema operativo que no deja rastros. Todo el tráfico pasa por Tor.",
    category: "sistemas",
    level: 3,
    url: "https://tails.net/",
    openSource: true,
    free: true,
  },
  {
    id: "qubes",
    name: "Qubes OS",
    description: "Sistema operativo que aísla actividades en máquinas virtuales separadas.",
    category: "sistemas",
    level: 3,
    url: "https://www.qubes-os.org/",
    openSource: true,
    free: true,
  },
  {
    id: "ubuntu",
    name: "Ubuntu Linux",
    description: "Distribución Linux amigable para principiantes. Alternativa a Windows/macOS.",
    category: "sistemas",
    level: 2,
    url: "https://ubuntu.com/",
    openSource: true,
    free: true,
  },

  // Extensiones
  {
    id: "ublock-origin",
    name: "uBlock Origin",
    description: "Bloqueador de anuncios y rastreadores eficiente y de código abierto.",
    category: "extensiones",
    level: 1,
    url: "https://ublockorigin.com/",
    openSource: true,
    free: true,
  },
  {
    id: "privacy-badger",
    name: "Privacy Badger",
    description: "Extensión de EFF que aprende a bloquear rastreadores automáticamente.",
    category: "extensiones",
    level: 1,
    url: "https://privacybadger.org/",
    openSource: true,
    free: true,
  },
  {
    id: "https-everywhere",
    name: "HTTPS Everywhere",
    description: "Fuerza conexiones HTTPS en sitios web cuando sea posible.",
    category: "extensiones",
    level: 1,
    url: "https://www.eff.org/https-everywhere",
    openSource: true,
    free: true,
  },

  // Educación
  {
    id: "eff-ssd",
    name: "EFF Surveillance Self-Defense",
    description: "Guías completas sobre privacidad y seguridad digital de la Electronic Frontier Foundation.",
    category: "educacion",
    level: "all",
    url: "https://ssd.eff.org/",
    openSource: false,
    free: true,
  },
  {
    id: "privacy-guides",
    name: "Privacy Guides",
    description: "Recursos exhaustivos sobre herramientas y mejores prácticas de privacidad.",
    category: "educacion",
    level: "all",
    url: "https://www.privacyguides.org/",
    openSource: true,
    free: true,
  },
  {
    id: "access-now",
    name: "Access Now",
    description: "Organización que defiende los derechos digitales en América Latina y el mundo.",
    category: "educacion",
    level: "all",
    url: "https://www.accessnow.org/",
    openSource: false,
    free: true,
  },
]

const categories: { value: ResourceCategory | "all"; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "navegadores", label: "Navegadores" },
  { value: "vpn", label: "VPN" },
  { value: "mensajeria", label: "Mensajería" },
  { value: "correo", label: "Correo" },
  { value: "contraseñas", label: "Contraseñas" },
  { value: "sistemas", label: "Sistemas" },
  { value: "extensiones", label: "Extensiones" },
  { value: "educacion", label: "Educación" },
]

const levels: { value: ResourceLevel; label: string }[] = [
  { value: "all", label: "Todos los niveles" },
  { value: 1, label: "Nivel 1" },
  { value: 2, label: "Nivel 2" },
  { value: 3, label: "Nivel 3" },
]

export function ResourcesContent() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "all">("all")
  const [selectedLevel, setSelectedLevel] = useState<ResourceLevel>("all")

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        search === "" ||
        resource.name.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase())

      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory

      const matchesLevel = selectedLevel === "all" || resource.level === selectedLevel || resource.level === "all"

      return matchesSearch && matchesCategory && matchesLevel
    })
  }, [search, selectedCategory, selectedLevel])

  const getLevelBadgeColor = (level: ResourceLevel) => {
    if (level === "all") return "bg-muted text-muted-foreground"
    if (level === 1) return "bg-primary/10 text-primary"
    if (level === 2) return "bg-secondary/10 text-secondary"
    if (level === 3) return "bg-accent/10 text-accent"
    return "bg-muted text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar herramientas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-sm font-medium mb-2 text-foreground">Categoría</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <p className="text-sm font-medium mb-2 text-foreground">Nivel</p>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level.value)}
                >
                  {level.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredResources.length} {filteredResources.length === 1 ? "recurso encontrado" : "recursos encontrados"}
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground">{resource.name}</h3>
                <Badge className={getLevelBadgeColor(resource.level)}>
                  {resource.level === "all" ? "Todos" : `Nivel ${resource.level}`}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resource.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {resource.openSource && (
                  <Badge variant="outline" className="text-xs">
                    Código Abierto
                  </Badge>
                )}
                {resource.free && (
                  <Badge variant="outline" className="text-xs">
                    Gratuito
                  </Badge>
                )}
              </div>
            </div>

            <Button asChild className="w-full bg-transparent" variant="outline">
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                Visitar Sitio
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No se encontraron recursos con los filtros seleccionados.</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 bg-transparent"
            onClick={() => {
              setSearch("")
              setSelectedCategory("all")
              setSelectedLevel("all")
            }}
          >
            Limpiar Filtros
          </Button>
        </Card>
      )}
    </div>
  )
}
