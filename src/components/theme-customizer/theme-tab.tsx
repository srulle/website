"use client"

import React from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useThemeManager } from "@/hooks/use-theme-manager"
import { useCircularTransition } from "@/hooks/use-circular-transition"
import { colorThemes, tweakcnThemes } from "@/config/theme-data"
import { ThemePresetSelect } from "./theme-preset-select"
import { ThemeModeToggle } from "./theme-mode-toggle"
import { RadiusPicker } from "./radius-picker"
import type { ImportedTheme } from "@/types/theme-customizer"

type ThemeTabProps = {
  selectedTheme: string
  setSelectedTheme: (theme: string) => void
  selectedTweakcnTheme: string
  setSelectedTweakcnTheme: (theme: string) => void
  selectedRadius: string
  setSelectedRadius: (radius: string) => void
  setImportedTheme: (theme: ImportedTheme | null) => void
  onImportClick: () => void
}

export function ThemeTab({
  selectedTheme,
  setSelectedTheme,
  selectedTweakcnTheme,
  setSelectedTweakcnTheme,
  selectedRadius,
  setSelectedRadius,
  setImportedTheme,
  onImportClick,
}: ThemeTabProps) {
  const { isDarkMode, setBrandColorsValues, applyTheme, applyTweakcnTheme, applyRadius } = useThemeManager()
  const { toggleTheme } = useCircularTransition()

  const handleRandomShadcn = () => {
    const randomTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
    setSelectedTheme(randomTheme.value)
    setSelectedTweakcnTheme("")
    setBrandColorsValues({})
    setImportedTheme(null)
    applyTheme(randomTheme.value, isDarkMode)
  }

  const handleRandomTweakcn = () => {
    const randomTheme = tweakcnThemes[Math.floor(Math.random() * tweakcnThemes.length)]
    setSelectedTweakcnTheme(randomTheme.value)
    setSelectedTheme("")
    setBrandColorsValues({})
    setImportedTheme(null)
    applyTweakcnTheme(randomTheme.preset, isDarkMode)
  }

  const handleShadcnThemeChange = (value: string) => {
    setSelectedTheme(value)
    setSelectedTweakcnTheme("")
    setBrandColorsValues({})
    setImportedTheme(null)
    applyTheme(value, isDarkMode)
  }

  const handleTweakcnThemeChange = (value: string) => {
    setSelectedTweakcnTheme(value)
    setSelectedTheme("")
    setBrandColorsValues({})
    setImportedTheme(null)
    const selectedPreset = tweakcnThemes.find((theme) => theme.value === value)?.preset
    if (selectedPreset) {
      applyTweakcnTheme(selectedPreset, isDarkMode)
    }
  }

  const handleRadiusSelect = (radius: string) => {
    setSelectedRadius(radius)
    applyRadius(radius)
  }

  const handleLightMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode === false) return
    toggleTheme(event)
  }

  const handleDarkMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode === true) return
    toggleTheme(event)
  }

  return (
    <div className="p-4 space-y-6">
      <ThemeModeToggle isDarkMode={isDarkMode} onLightMode={handleLightMode} onDarkMode={handleDarkMode} />

      <ThemePresetSelect
        label="Shadcn UI Theme Presets"
        placeholder="Choose Shadcn Theme"
        value={selectedTheme}
        themes={colorThemes}
        onRandom={handleRandomShadcn}
        onValueChange={handleShadcnThemeChange}
      />

      <ThemePresetSelect
        label="Tweakcn Theme Presets"
        placeholder="Choose Tweakcn Theme"
        value={selectedTweakcnTheme}
        themes={tweakcnThemes}
        onRandom={handleRandomTweakcn}
        onValueChange={handleTweakcnThemeChange}
      />

      <RadiusPicker selectedRadius={selectedRadius} onSelect={handleRadiusSelect} />

      <div className="space-y-3">
        <Button variant="outline" size="lg" onClick={onImportClick} className="w-full cursor-pointer">
          <Upload className="h-3.5 w-3.5 mr-1.5" />
          Import Theme
        </Button>
      </div>
    </div>
  )
}
