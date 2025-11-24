import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Privacidad y Vigilancia Masiva - Protege tu Información Digital",
  description:
    "Aprende a proteger tu privacidad digital con estrategias prácticas en tres niveles. Información sobre vigilancia masiva, herramientas de seguridad y mejores prácticas.",
  keywords: [
    "privacidad digital",
    "vigilancia masiva",
    "seguridad online",
    "VPN",
    "Tor",
    "cifrado",
    "Signal",
    "Pegasus",
  ],
  authors: [{ name: "Proyecto CTS" }],
  openGraph: {
    title: "Privacidad y Vigilancia Masiva",
    description: "Protege tu información digital con estrategias prácticas",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1c2e" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
