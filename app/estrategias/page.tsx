import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Lock, MessageSquare, Key, Shield, Wifi, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Estrategias de Privacidad - Privacidad y Vigilancia Masiva",
  description:
    "Aprende las mejores prácticas para proteger tu privacidad digital: navegadores, VPN, cifrado, contraseñas y más.",
}

export default function EstrategiasPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            Estrategias de Privacidad
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Aprende las mejores prácticas y herramientas para proteger tu información personal en línea. Estas
            estrategias son la base de los tres niveles de privacidad.
          </p>
        </div>

        {/* Evaluación de Riesgos */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Evaluación de Riesgos</h2>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de implementar medidas de seguridad, es fundamental entender qué quieres proteger y de quién. Hazte
              estas preguntas:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>¿Qué información sensible poseo? (mensajes, correos, documentos, ubicación)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>¿Quién podría querer acceder a ella? (gobiernos, empresas, ciberdelincuentes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>¿Cuál es mi nivel de exposición? (usuario común, periodista, activista)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>¿Qué consecuencias tendría una brecha de seguridad?</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Estrategias */}
        <div className="space-y-8">
          {/* Navegadores */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Navegadores Privados</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tu navegador es la puerta de entrada a internet. Elegir uno enfocado en privacidad es esencial.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Firefox:</strong> Protección de Rastreo Mejorada, código abierto
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Brave:</strong> Privado por defecto, bloquea rastreadores
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Tor Browser:</strong> Máximo anonimato mediante red Tor
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Instala extensiones como uBlock Origin y Privacy Badger para mayor protección.
            </p>
          </Card>

          {/* VPN */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="h-6 w-6 text-secondary" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Conexión Segura (VPN/Tor)</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una VPN cifra tu conexión y oculta tu dirección IP, protegiendo tu actividad de tu proveedor de internet y
              actores maliciosos.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">ProtonVPN o Mullvad:</strong> VPN confiables sin logs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Tor Browser:</strong> Para anonimato completo en navegación
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">HTTPS Everywhere:</strong> Verifica que los sitios usen HTTPS
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Usa siempre VPN en redes Wi-Fi públicas (cafés, aeropuertos, hoteles).
            </p>
          </Card>

          {/* Comunicación Cifrada */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Comunicación Cifrada</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Protege tus mensajes y correos con cifrado de extremo a extremo para evitar que terceros lean tu
              comunicación.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Signal:</strong> Mensajería más segura, código abierto
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">ProtonMail o Tutanota:</strong> Correo electrónico cifrado
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Telegram (Chats Secretos):</strong> Cifrado E2E opcional
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Activa verificación en dos pasos para todas tus cuentas importantes.
            </p>
          </Card>

          {/* Contraseñas */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Key className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Contraseñas y Cuentas</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las contraseñas son tu primera línea de defensa. Deben ser largas, únicas y gestionadas correctamente.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Gestores:</strong> Bitwarden o KeePassXC para contraseñas únicas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">Longitud:</strong> Mínimo 16 caracteres, mezcla símbolos y números
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">No reutilizar:</strong> Cada servicio debe tener contraseña única
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>
                  <strong className="text-foreground">2FA:</strong> Autenticación en dos pasos con apps como Authy
                </span>
              </li>
            </ul>
          </Card>

          {/* Privacidad en Redes Sociales */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-secondary" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Privacidad en Redes Sociales</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las redes sociales recopilan enormes cantidades de datos. Minimiza tu exposición.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>Restringe quién puede ver tus publicaciones y perfil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>No compartas ubicación en tiempo real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>Desactiva etiquetado automático y rastreo de contactos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>Elimina metadatos de fotos antes de subirlas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <span>Revisa y elimina apps conectadas a tus cuentas</span>
              </li>
            </ul>
          </Card>

          {/* Mantenimiento */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground">Mantenimiento y Cuidados</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La privacidad requiere mantenimiento constante y buenos hábitos.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Mantén sistema operativo y aplicaciones actualizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>No abras enlaces o archivos sospechosos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Usa antivirus en dispositivos Windows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Evita redes Wi-Fi públicas sin VPN</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>Revisa permisos de apps regularmente</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 mt-12 bg-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Implementa Estas Estrategias</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Elige el nivel de privacidad que mejor se adapte a tus necesidades y comienza a proteger tu información.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/niveles">Ver Niveles de Privacidad</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/recursos">Explorar Herramientas</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
