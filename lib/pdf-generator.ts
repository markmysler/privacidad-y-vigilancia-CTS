export interface ChecklistItem {
  id: string
  text: string
  completed: boolean
}

export interface ChecklistSection {
  title: string
  items: ChecklistItem[]
}

export function generatePDFContent(
  level: number,
  sections: ChecklistSection[],
  completedCount: number,
  totalCount: number,
): string {
  const levelTitles = {
    1: "Nivel 1: Privacidad Básica",
    2: "Nivel 2: Privacidad Reforzada",
    3: "Nivel 3: Privacidad Máxima",
  }

  const date = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let content = `CHECKLIST DE PRIVACIDAD - ${levelTitles[level as keyof typeof levelTitles]}\n`
  content += `Generado el: ${date}\n`
  content += `Progreso: ${completedCount} de ${totalCount} completados (${Math.round((completedCount / totalCount) * 100)}%)\n`
  content += `\n${"=".repeat(80)}\n\n`

  sections.forEach((section) => {
    content += `${section.title.toUpperCase()}\n`
    content += `${"-".repeat(section.title.length)}\n\n`

    section.items.forEach((item) => {
      const status = item.completed ? "[✓]" : "[ ]"
      content += `${status} ${item.text}\n`
    })

    content += "\n"
  })

  content += `${"=".repeat(80)}\n\n`
  content += `NOTAS:\n`
  content += `- Este checklist fue generado desde el sitio Privacidad y Vigilancia\n`
  content += `- Para más información, visita el sitio web\n`
  content += `- Recuerda mantener tus herramientas de privacidad actualizadas\n`

  return content
}

export function downloadTextFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
