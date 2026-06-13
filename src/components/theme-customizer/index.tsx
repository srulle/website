"use client"

import React from "react"
import { Layout, Palette, RotateCcw, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useThemeManager } from "@/hooks/use-theme-manager"
import { useSidebarConfig } from "@/contexts/sidebar-context"
import { tweakcnThemes } from "@/config/theme-data"
import { ThemeTab } from "./theme-tab"
import { LayoutTab } from "./layout-tab"
import { ImportModal } from "./import-modal"
import { cn } from "@/lib/utils"
import { readStorage, removeStorage, storageKeys, writeStorage } from "@/utils/theme-storage"
import type { ImportedTheme } from "@/types/theme-customizer"

type ThemeCustomizerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ThemeCustomizer({ open, onOpenChange }: ThemeCustomizerProps) {
  const { applyImportedTheme, isDarkMode, resetTheme, applyRadius, setBrandColorsValues, applyTheme, applyTweakcnTheme } = useThemeManager()
  const { config: sidebarConfig, updateConfig: updateSidebarConfig } = useSidebarConfig()

  const [activeTab, setActiveTab] = React.useState("theme")
  const [selectedTheme, setSelectedTheme] = React.useState(() => readStorage(storageKeys.theme, "default"))
  const [selectedTweakcnTheme, setSelectedTweakcnTheme] = React.useState(() => readStorage(storageKeys.tweakcnTheme, ""))
  const [selectedRadius, setSelectedRadius] = React.useState(() => readStorage(storageKeys.radius, "0.5rem"))
  const [importModalOpen, setImportModalOpen] = React.useState(false)
  const [importedTheme, setImportedTheme] = React.useState<ImportedTheme | null>(() =>
    readStorage(storageKeys.importedTheme, null),
  )

  React.useEffect(() => {
    writeStorage(storageKeys.theme, selectedTheme)
  }, [selectedTheme])

  React.useEffect(() => {
    if (selectedTweakcnTheme) {
      writeStorage(storageKeys.tweakcnTheme, selectedTweakcnTheme)
    } else {
      removeStorage(storageKeys.tweakcnTheme)
    }
  }, [selectedTweakcnTheme])

  React.useEffect(() => {
    writeStorage(storageKeys.radius, selectedRadius)
  }, [selectedRadius])

  React.useEffect(() => {
    writeStorage(storageKeys.importedTheme, importedTheme)
  }, [importedTheme])

  React.useEffect(() => {
    if (importedTheme) {
      applyImportedTheme(importedTheme, isDarkMode)
    } else if (selectedTheme && selectedTheme !== "default") {
      applyTheme(selectedTheme, isDarkMode)
    } else if (selectedTweakcnTheme) {
      const selectedPreset = tweakcnThemes.find((theme) => theme.value === selectedTweakcnTheme)?.preset
      if (selectedPreset) {
        applyTweakcnTheme(selectedPreset, isDarkMode)
      }
    }

    if (selectedRadius !== "0.5rem") {
      applyRadius(selectedRadius)
    }
  }, [applyImportedTheme, applyRadius, applyTheme, applyTweakcnTheme, importedTheme, isDarkMode, selectedRadius, selectedTheme, selectedTweakcnTheme])

  const handleReset = () => {
    setSelectedTheme("default")
    setSelectedTweakcnTheme("")
    setSelectedRadius("0.5rem")
    setImportedTheme(null)
    setBrandColorsValues({})

    removeStorage(storageKeys.theme)
    removeStorage(storageKeys.tweakcnTheme)
    removeStorage(storageKeys.radius)
    removeStorage(storageKeys.importedTheme)

    resetTheme()
    applyRadius("0.5rem")
    updateSidebarConfig({ variant: "inset", collapsible: "offcanvas", side: "left" })
  }

  const handleImport = (themeData: ImportedTheme) => {
    setImportedTheme(themeData)
    setSelectedTheme("")
    setSelectedTweakcnTheme("")
    applyImportedTheme(themeData, isDarkMode)
  }

  React.useEffect(() => {
    if (importedTheme) {
      applyImportedTheme(importedTheme, isDarkMode)
    } else if (selectedTheme && selectedTheme !== "default") {
      applyTheme(selectedTheme, isDarkMode)
    } else if (selectedTweakcnTheme) {
      const selectedPreset = tweakcnThemes.find((theme) => theme.value === selectedTweakcnTheme)?.preset
      if (selectedPreset) {
        applyTweakcnTheme(selectedPreset, isDarkMode)
      }
    }
  }, [applyImportedTheme, applyTheme, applyTweakcnTheme, importedTheme, isDarkMode, selectedTheme, selectedTweakcnTheme])

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange} modal={false}>
        <SheetContent
          side={sidebarConfig.side === "left" ? "right" : "left"}
          className="w-[400px] p-0 gap-0 pointer-events-auto [&>button]:hidden overflow-hidden flex flex-col"
          onInteractOutside={(event) => {
            if (importModalOpen) {
              event.preventDefault()
            }
          }}
        >
          <SheetHeader className="space-y-0 p-4 pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <Settings className="h-4 w-4" />
              </div>
              <SheetTitle className="text-lg font-semibold">Customizer</SheetTitle>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handleReset} className="h-8 w-8 cursor-pointer">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 cursor-pointer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <SheetDescription className="sr-only text-sm text-muted-foreground">
              Customize the theme and layout of your dashboard.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full flex-col">
              <div className="py-2">
                <TabsList className="grid h-12 w-full grid-cols-2 rounded-none p-1.5">
                  <TabsTrigger value="theme" className="cursor-pointer data-[state=active]:bg-background">
                    <Palette className="mr-1 h-4 w-4" /> Theme
                  </TabsTrigger>
                  <TabsTrigger value="layout" className="cursor-pointer data-[state=active]:bg-background">
                    <Layout className="mr-1 h-4 w-4" /> Layout
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="theme" className="mt-0 flex-1">
                <ThemeTab
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                  selectedTweakcnTheme={selectedTweakcnTheme}
                  setSelectedTweakcnTheme={setSelectedTweakcnTheme}
                  selectedRadius={selectedRadius}
                  setSelectedRadius={setSelectedRadius}
                  setImportedTheme={setImportedTheme}
                  onImportClick={() => setImportModalOpen(true)}
                />
              </TabsContent>

              <TabsContent value="layout" className="mt-0 flex-1">
                <LayoutTab />
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <ImportModal open={importModalOpen} onOpenChange={setImportModalOpen} onImport={handleImport} />
    </>
  )
}

export function ThemeCustomizerTrigger({ onClick }: { onClick: () => void }) {
  const { config: sidebarConfig } = useSidebarConfig()

  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        "fixed top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90",
        sidebarConfig.side === "left" ? "right-4" : "left-4",
      )}
    >
      <Settings className="h-5 w-5" />
    </Button>
  )
}
