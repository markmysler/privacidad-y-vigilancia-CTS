import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-muted">
            <FileQuestion className="w-16 h-16 text-muted-foreground" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Página no encontrada</h1>

        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Volver al Inicio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/niveles">Ver Niveles de Privacidad</Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">¿Buscas algo específico?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button asChild variant="ghost" size="sm">
              <Link href="/contexto">Contexto</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/estrategias">Estrategias</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/recursos">Recursos</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/faq">FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
