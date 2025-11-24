import { ResourcesContent } from "@/components/resources-content"

export const metadata = {
  title: "Recursos y Herramientas - Privacidad y Vigilancia Masiva",
  description:
    "Explora herramientas de privacidad recomendadas: navegadores, VPN, mensajería cifrada, gestores de contraseñas y más.",
}

export default function RecursosPage() {
  return (
    <div className="container p-8 md:py-12 max-w-full">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Recursos y Herramientas</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Herramientas recomendadas para proteger tu privacidad digital, organizadas por categoría y nivel.
          </p>
        </div>

        <ResourcesContent />
      </div>
    </div>
  )
}
