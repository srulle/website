"use client"

import React from "react"
import { useThemeManager } from "@/hooks/use-theme-manager"
import { useCircularTransition } from "@/hooks/use-circular-transition"
import { colorThemes, tweakcnThemes } from "@/config/theme-data"
import { findClosestRadius } from "@/utils/find-closest-radius"
import { removeStorage, storageKeys, writeStorage } from "@/utils/theme-storage"

export function useLandingThemeCustomizer() {
  const {
    applyRadius,
    isDarkMode,
    setBrandColorsValues,
    applyTheme,
    applyTweakcnTheme,
    setTheme,
  } = useThemeManager()
  const { toggleTheme } = useCircularTransition()

  const [selectedTheme, setSelectedTheme] = React.useState(() => readLandingStorage(storageKeys.landingTheme, ""))
  const [selectedTweakcnTheme, setSelectedTweakcnTheme] = React.useState(() => {
    const saved = readLandingStorage(storageKeys.landingTweakcnTheme, "")

    if (saved) return saved
    if (hasLandingThemePreference()) return ""

    return "ocean-breeze"
  })
  const [selectedRadius, setSelectedRadius] = React.useState(() => readLandingStorage(storageKeys.landingRadius, "0.5rem"))

  React.useEffect(() => {
    if (selectedTheme) {
      writeStorage(storageKeys.landingTheme, selectedTheme)
    } else {
      removeStorage(storageKeys.landingTheme)
    }
  }, [selectedTheme])

  React.useEffect(() => {
    if (selectedTweakcnTheme) {
      writeStorage(storageKeys.landingTweakcnTheme, selectedTweakcnTheme)
    } else {
      removeStorage(storageKeys.landingTweakcnTheme)
    }
  }, [selectedTweakcnTheme])

  React.useEffect(() => {
    writeStorage(storageKeys.landingRadius, selectedRadius)
  }, [selectedRadius])

  React.useEffect(() => {
    if (selectedTheme) {
      applyTheme(selectedTheme, isDarkMode)
      if (selectedRadius === "0.5rem") {
        const theme = colorThemes.find((theme) => theme.value === selectedTheme)
        if (theme) {
          setSelectedRadius(findClosestRadius(theme.preset.styles.light.radius || "0.5rem"))
        }
      }
    } else if (selectedTweakcnTheme) {
      const selectedPreset = tweakcnThemes.find((theme) => theme.value === selectedTweakcnTheme)?.preset
      if (selectedPreset) {
        applyTweakcnTheme(selectedPreset, isDarkMode)
        if (selectedRadius === "0.5rem") {
          setSelectedRadius(findClosestRadius(selectedPreset.styles.light.radius || "0.5rem"))
        }
      }
    }

    applyRadius(selectedRadius)
  }, [applyRadius, applyTheme, applyTweakcnTheme, isDarkMode, selectedRadius, selectedTheme, selectedTweakcnTheme])

  const handleReset = () => {
    setSelectedTheme("")
    setSelectedTweakcnTheme("ocean-breeze")
    setSelectedRadius("0.5rem")
    setBrandColorsValues({})
    setTheme("light")

    removeStorage(storageKeys.landingTheme)
    removeStorage(storageKeys.landingTweakcnTheme)
    removeStorage(storageKeys.landingRadius)
    removeStorage(storageKeys.landingImportedTheme)
    writeStorage(storageKeys.themeMode, "light")

    const oceanBreezePreset = tweakcnThemes.find((theme) => theme.value === "ocean-breeze")?.preset
    if (oceanBreezePreset) {
      applyTweakcnTheme(oceanBreezePreset, false)
    }
    applyRadius("0.5rem")
  }

  const handleRandomShadcn = () => {
    const randomTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
    setSelectedTheme(randomTheme.value)
    setSelectedTweakcnTheme("")
    setBrandColorsValues({})
    applyTheme(randomTheme.value, isDarkMode)
    setSelectedRadius(findClosestRadius(randomTheme.preset.styles.light.radius || "0.5rem"))
  }

  const handleRandomTweakcn = () => {
    const randomTheme = tweakcnThemes[Math.floor(Math.random() * tweakcnThemes.length)]
    setSelectedTweakcnTheme(randomTheme.value)
    setSelectedTheme("")
    setBrandColorsValues({})
    applyTweakcnTheme(randomTheme.preset, isDarkMode)
    setSelectedRadius(findClosestRadius(randomTheme.preset.styles.light.radius || "0.5rem"))
  }

  const handleShadcnThemeChange = (value: string) => {
    setSelectedTheme(value)
    setSelectedTweakcnTheme("")
    setBrandColorsValues({})
  }

  const handleTweakcnThemeChange = (value: string) => {
    setSelectedTweakcnTheme(value)
    setSelectedTheme("")
    setBrandColorsValues({})
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedTheme) {
        applyTheme(selectedTheme, isDarkMode)
      } else if (selectedTweakcnTheme) {
        const selectedPreset = tweakcnThemes.find((theme) => theme.value === selectedTweakcnTheme)?.preset
        if (selectedPreset) {
          applyTweakcnTheme(selectedPreset, isDarkMode)
        }
      }
      applyRadius(selectedRadius)
    }, 100)

    return () => clearTimeout(timer)
  }, [applyRadius, applyTheme, applyTweakcnTheme, isDarkMode, selectedRadius, selectedTheme, selectedTweakcnTheme])

  return {
    isDarkMode,
    selectedTheme,
    selectedTweakcnTheme,
    selectedRadius,
    handleRadiusSelect,
    handleShadcnThemeChange,
    handleTweakcnThemeChange,
    handleReset,
    handleRandomShadcn,
    handleRandomTweakcn,
    handleLightMode,
    handleDarkMode,
  }
}

function readLandingStorage<T>(key: (typeof storageKeys)[keyof typeof storageKeys], fallback: T) {
  if (typeof window === "undefined") return fallback

  const value = window.localStorage.getItem(key)
  if (value === null) return fallback

  try {
    return JSON.parse(value) as T
  } catch {
    return value as T
  }
}

function hasLandingThemePreference() {
  if (typeof window === "undefined") return false

  return Boolean(window.localStorage.getItem(storageKeys.landingTheme) || window.localStorage.getItem(storageKeys.landingImportedTheme))
}
