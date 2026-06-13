import type { ImportedTheme } from "@/types/theme-customizer"

const storageKeys = {
  theme: "selectedTheme",
  tweakcnTheme: "selectedTweakcnTheme",
  radius: "selectedRadius",
  importedTheme: "importedTheme",
  landingTheme: "landingSelectedTheme",
  landingTweakcnTheme: "landingSelectedTweakcnTheme",
  landingRadius: "landingSelectedRadius",
  landingImportedTheme: "landingImportedTheme",
  themeMode: "nextjs-ui-theme",
} as const

export function readStorage<T>(key: (typeof storageKeys)[keyof typeof storageKeys], fallback: T) {
  if (typeof window === "undefined") return fallback

  const value = window.localStorage.getItem(key)
  if (value === null) return fallback

  try {
    return JSON.parse(value) as T
  } catch {
    return window.localStorage.getItem(key) as T
  }
}

export function writeStorage(key: (typeof storageKeys)[keyof typeof storageKeys], value: string | ImportedTheme | null) {
  if (typeof window === "undefined") return

  if (value === null) {
    window.localStorage.removeItem(key)
    return
  }

  window.localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value))
}

export function removeStorage(key: (typeof storageKeys)[keyof typeof storageKeys]) {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(key)
}

export { storageKeys }
