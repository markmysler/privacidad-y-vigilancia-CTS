"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Download, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ChecklistItem {
  id: string
  label: string
  description?: string
}

export interface ChecklistSection {
  id: string
  title: string
  items: ChecklistItem[]
}

interface PrivacyChecklistProps {
  level: 1 | 2 | 3
  sections: ChecklistSection[]
}

export function PrivacyChecklist({ level, sections }: PrivacyChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)

  const storageKey = `privacy-checklist-level-${level}`

  // Load from localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved))
      } catch (e) {
        console.error("[v0] Error loading checklist:", e)
      }
    }
  }, [storageKey])

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, JSON.stringify(checkedItems))
    }
  }, [checkedItems, storageKey, mounted])

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const resetChecklist = () => {
    if (confirm("¿Estás seguro de que quieres restablecer tu progreso?")) {
      setCheckedItems({})
      localStorage.removeItem(storageKey)
    }
  }

  const exportChecklist = () => {
    const completed = Object.values(checkedItems).filter(Boolean).length
    const total = sections.reduce((sum, section) => sum + section.items.length, 0)

    let text = `Checklist de Privacidad - Nivel ${level}\n`
    text += `Progreso: ${completed}/${total} completados\n`
    text += `Fecha: ${new Date().toLocaleDateString()}\n\n`

    sections.forEach((section) => {
      text += `${section.title}\n`
      text += "=".repeat(section.title.length) + "\n\n"
      section.items.forEach((item) => {
        const checked = checkedItems[item.id] ? "✓" : "☐"
        text += `${checked} ${item.label}\n`
        if (item.description) {
          text += `   ${item.description}\n`
        }
        text += "\n"
      })
      text += "\n"
    })

    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `checklist-nivel-${level}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const totalItems = sections.reduce((sum, section) => sum + section.items.length, 0)
  const completedItems = Object.values(checkedItems).filter(Boolean).length
  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

  if (!mounted) {
    return (
      <Card className="p-6">
        <div className="h-8 bg-muted animate-pulse rounded" />
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Tu Progreso</h3>
            <p className="text-sm text-muted-foreground">
              {completedItems} de {totalItems} tareas completadas
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportChecklist} className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button variant="outline" size="sm" onClick={resetChecklist} className="gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Restablecer
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "absolute inset-y-0 left-0 rounded-full transition-all duration-300",
              level === 1 && "bg-primary",
              level === 2 && "bg-secondary",
              level === 3 && "bg-accent",
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-right">{Math.round(progress)}% completado</p>
      </Card>

      {/* Checklist Sections */}
      {sections.map((section) => {
        const sectionCompleted = section.items.filter((item) => checkedItems[item.id]).length
        const sectionTotal = section.items.length

        return (
          <Card key={section.id} className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-1">{section.title}</h3>
              <p className="text-sm text-muted-foreground">
                {sectionCompleted}/{sectionTotal} completados
              </p>
            </div>

            <div className="space-y-4">
              {section.items.map((item) => {
                const isChecked = checkedItems[item.id] || false

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg transition-colors",
                      isChecked && "bg-muted/50",
                    )}
                  >
                    <Checkbox
                      id={item.id}
                      checked={isChecked}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="mt-0.5"
                    />
                    <label htmlFor={item.id} className="flex-1 cursor-pointer">
                      <p
                        className={cn(
                          "font-medium leading-relaxed",
                          isChecked ? "text-muted-foreground line-through" : "text-foreground",
                        )}
                      >
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                      )}
                    </label>
                  </div>
                )
              })}
            </div>
          </Card>
        )
      })}

      {/* Completion Message */}
      {progress === 100 && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-foreground font-semibold">
            ¡Felicitaciones! Has completado todas las tareas del Nivel {level}.
          </p>
        </Card>
      )}
    </div>
  )
}
