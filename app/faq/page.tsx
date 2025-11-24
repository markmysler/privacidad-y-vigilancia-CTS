import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Privacidad y Vigilancia",
  description: "Respuestas a las preguntas más comunes sobre privacidad digital, vigilancia masiva y cómo protegerte.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Preguntas Frecuentes</h1>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Respuestas a las dudas más comunes sobre privacidad digital y vigilancia masiva
          </p>
        </div>

        {/* General Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">General</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Por qué debería preocuparme por mi privacidad digital?</h3>
              <p className="text-muted-foreground mb-3">
                La privacidad es un derecho fundamental. Sin ella, tu información personal puede ser usada para:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Vigilancia masiva por gobiernos y corporaciones</li>
                <li>Manipulación mediante publicidad personalizada</li>
                <li>Robo de identidad y fraude financiero</li>
                <li>Discriminación basada en tu perfil digital</li>
                <li>Censura y control social</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿No tengo nada que ocultar, por qué me importa?</h3>
              <p className="text-muted-foreground">
                El argumento "no tengo nada que ocultar" es peligroso. La privacidad no es sobre ocultar cosas malas,
                sino sobre controlar tu información personal. Todos tenemos información sensible: contraseñas bancarias,
                historial médico, conversaciones privadas, ubicación, relaciones personales. Además, lo que hoy es legal
                mañana podría no serlo, y tus datos quedan registrados permanentemente.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Es difícil proteger mi privacidad?</h3>
              <p className="text-muted-foreground">
                No necesariamente. Hemos creado tres niveles progresivos para que puedas empezar con cambios simples y
                avanzar gradualmente. El Nivel 1 requiere cambios mínimos que cualquiera puede hacer en menos de una
                hora, mientras que los niveles superiores son para quienes necesitan mayor protección.
              </p>
            </div>
          </div>
        </section>

        {/* Tools and Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Herramientas y Tecnologías</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Qué es una VPN y realmente necesito una?</h3>
              <p className="text-muted-foreground mb-3">
                Una VPN (Red Privada Virtual) cifra tu conexión a internet y oculta tu dirección IP real. Es útil para:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>Proteger tu privacidad en redes WiFi públicas</li>
                <li>Evitar que tu ISP vea lo que haces online</li>
                <li>Ocultar tu ubicación geográfica</li>
                <li>Acceder a contenido bloqueado geográficamente</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                <strong>Recomendación:</strong> Si usas WiFi público frecuentemente o quieres privacidad básica, sí es
                recomendable. Opciones: ProtonVPN (gratuito limitado), Mullvad, IVPN.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Tor es solo para actividades ilegales?</h3>
              <p className="text-muted-foreground mb-3">
                No. Tor es una red que protege tu anonimato online y es completamente legal. Lo usan periodistas,
                activistas, ciudadanos en países con censura, y cualquiera que valore su privacidad. Tor Browser es
                simplemente Firefox modificado para proteger tu identidad.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Nota:</strong> Tor es más lento que navegación normal porque tu tráfico pasa por múltiples nodos
                para anonimizarlo.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">
                ¿Cifrado de extremo a extremo significa que nadie puede leer mis mensajes?
              </h3>
              <p className="text-muted-foreground">
                Sí, el cifrado de extremo a extremo (E2EE) significa que solo tú y el destinatario pueden leer los
                mensajes. Ni siquiera la empresa que provee el servicio puede descifrarlos. Signal, WhatsApp (en
                teoría), y Telegram (chats secretos) usan E2EE. Sin embargo, metadatos como con quién hablas y cuándo sí
                pueden ser visibles.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Los navegadores en modo incógnito me hacen anónimo?</h3>
              <p className="text-muted-foreground mb-3">
                No. El modo incógnito solo evita que tu navegador guarde historial, cookies y datos de formularios
                localmente. NO te hace anónimo:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Tu ISP sigue viendo tu tráfico</li>
                <li>Los sitios web pueden rastrearte con tu IP</li>
                <li>Tu empleador/escuela puede monitorear tu actividad</li>
                <li>No cifra tu conexión</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">
                ¿Qué es un gestor de contraseñas y por qué debería usar uno?
              </h3>
              <p className="text-muted-foreground mb-3">
                Un gestor de contraseñas almacena todas tus contraseñas de forma cifrada y solo necesitas recordar una
                contraseña maestra. Beneficios:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>Puedes usar contraseñas únicas y fuertes para cada sitio</li>
                <li>No necesitas recordar docenas de contraseñas</li>
                <li>Protección contra phishing (auto-rellena solo en sitios legítimos)</li>
                <li>Muchos generan contraseñas aleatorias por ti</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                <strong>Opciones recomendadas:</strong> Bitwarden (código abierto, gratuito), 1Password, KeePassXC
                (local).
              </p>
            </div>
          </div>
        </section>

        {/* Surveillance and Threats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Vigilancia y Amenazas</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Qué es Pegasus y debería preocuparme?</h3>
              <p className="text-muted-foreground mb-3">
                Pegasus es un software de vigilancia desarrollado por NSO Group que puede infectar smartphones sin
                interacción del usuario (zero-click). Puede acceder a todo: mensajes, llamadas, cámara, micrófono,
                ubicación.
              </p>
              <p className="text-muted-foreground">
                Ha sido usado contra periodistas, activistas y políticos en múltiples países. Aunque el ciudadano
                promedio no es objetivo, demuestra la capacidad de vigilancia existente. Protección: mantén tu
                dispositivo actualizado, usa herramientas de seguridad, y sé consciente de que la vigilancia dirigida es
                posible.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Mi teléfono me está escuchando para mostrarme anuncios?</h3>
              <p className="text-muted-foreground">
                Probablemente no necesita escucharte constantemente. Los algoritmos de seguimiento son tan sofisticados
                que pueden predecir tus intereses basándose en tu comportamiento online, ubicación, búsquedas,
                contactos, y patrones de navegación. Sin embargo, algunas apps sí tienen permisos de micrófono y
                técnicamente podrían escuchar. Solución: revisa y limita permisos de apps.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Qué son los Five Eyes, Nine Eyes, y Fourteen Eyes?</h3>
              <p className="text-muted-foreground mb-3">
                Son alianzas de inteligencia entre países que comparten información de vigilancia masiva:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>
                  <strong>Five Eyes:</strong> EE.UU., Reino Unido, Canadá, Australia, Nueva Zelanda
                </li>
                <li>
                  <strong>Nine Eyes:</strong> Five Eyes + Dinamarca, Francia, Países Bajos, Noruega
                </li>
                <li>
                  <strong>Fourteen Eyes:</strong> Nine Eyes + Alemania, Bélgica, Italia, Suecia, España
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Es relevante al elegir servicios VPN o email: idealmente, la empresa debe estar fuera de estos países
                para evitar presión legal para compartir datos.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Qué información recopila Google/Facebook sobre mí?</h3>
              <p className="text-muted-foreground mb-3">Mucho más de lo que imaginas:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>Historial de búsquedas y navegación</li>
                <li>Ubicación GPS en tiempo real e histórica</li>
                <li>Contactos, calendario, emails</li>
                <li>Reconocimiento facial en fotos</li>
                <li>Actividad en apps y sitios web de terceros</li>
                <li>Compras online y offline</li>
                <li>Inferencias sobre edad, género, intereses, situación económica</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Puedes descargar tus datos en Google Takeout y Facebook para verlo completo.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Acciones Prácticas</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Por dónde empiezo si soy principiante?</h3>
              <p className="text-muted-foreground mb-3">
                Empieza con nuestro Nivel 1, que incluye cambios simples y de alto impacto:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Instala un navegador privado (Brave o Firefox con ajustes)</li>
                <li>Usa un gestor de contraseñas (Bitwarden)</li>
                <li>Activa autenticación de dos factores en cuentas importantes</li>
                <li>Instala extensiones de bloqueo (uBlock Origin)</li>
                <li>Revisa configuraciones de privacidad en redes sociales</li>
              </ol>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Puedo usar Google/Gmail y aún así tener privacidad?</h3>
              <p className="text-muted-foreground mb-3">
                Es difícil. Google construye un perfil detallado de ti a través de sus servicios. Alternativas más
                privadas:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>
                  <strong>Búsqueda:</strong> DuckDuckGo, Startpage, Brave Search
                </li>
                <li>
                  <strong>Email:</strong> ProtonMail, Tutanota, Mailbox.org
                </li>
                <li>
                  <strong>Maps:</strong> OpenStreetMap, Apple Maps (menos tracking)
                </li>
                <li>
                  <strong>Drive:</strong> Proton Drive, Nextcloud, Tresorit
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Si dependes de Google, al menos desactiva personalización de anuncios y historial de ubicación.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Qué hago si me hackean o roban mi identidad?</h3>
              <p className="text-muted-foreground mb-3">Pasos inmediatos:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                <li>Cambia contraseñas de cuentas afectadas inmediatamente</li>
                <li>Activa autenticación de dos factores si no la tenías</li>
                <li>Revisa actividad reciente en bancos y servicios</li>
                <li>Reporta el incidente a las plataformas afectadas</li>
                <li>Verifica en haveibeenpwned.com si tus datos están en filtraciones</li>
                <li>Considera congelar tu crédito si hay riesgo financiero</li>
                <li>Instala antivirus y escanea dispositivos</li>
              </ol>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">¿Las herramientas de privacidad son gratuitas?</h3>
              <p className="text-muted-foreground">
                Muchas sí tienen versiones gratuitas sólidas: Firefox, Signal, Bitwarden (gestor contraseñas),
                ProtonMail (limitado), Tor Browser, uBlock Origin. Algunas herramientas premium como VPNs de calidad sí
                requieren pago, pero hay opciones como ProtonVPN con plan gratuito limitado. Recuerda: si un producto es
                gratis, probablemente tú eres el producto (tus datos).
              </p>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <div className="border-2 border-primary/20 rounded-xl p-8 bg-primary/5">
          <h2 className="text-2xl font-bold mb-3">¿Aún tienes preguntas?</h2>
          <p className="text-muted-foreground mb-6">
            Explora nuestras guías detalladas por nivel de privacidad y encuentra las herramientas adecuadas para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/niveles"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Explorar Niveles
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border font-medium hover:bg-muted transition-colors"
            >
              Ver Herramientas
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
