"use client"

import { RotateCcw, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { colorThemes, tweakcnThemes } from "@/config/theme-data"
import { useLandingThemeCustomizer } from "@/hooks/use-landing-theme-customizer"
import { ThemeModeToggle } from "@/components/theme-customizer/theme-mode-toggle"
import { ThemePresetSelect } from "@/components/theme-customizer/theme-preset-select"
import { RadiusPicker } from "@/components/theme-customizer/radius-picker"
import { cn } from "@/lib/utils"

type LandingThemeCustomizerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LandingThemeCustomizer({ open, onOpenChange }: LandingThemeCustomizerProps) {
  const {
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
  } = useLandingThemeCustomizer()

  return (
    <Sheet open={open} onOpenChange={onOpenChange} modal={false}>
      <SheetContent
        side="right"
        className="w-[400px] p-0 gap-0 pointer-events-auto [&>button]:hidden overflow-hidden flex flex-col"
      >
        <SheetHeader className="space-y-0 p-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2">
              <Settings className="h-4 w-4" />
            </div>
            <SheetTitle className="text-lg font-semibold">Theme Customizer</SheetTitle>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handleReset} className="h-8 w-8 cursor-pointer">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 cursor-pointer">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <SheetDescription className="text-sm text-muted-foreground">
            Customize the theme and colors of your landing page.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <ThemeModeToggle isDarkMode={isDarkMode} onLightMode={handleLightMode} onDarkMode={handleDarkMode} />

          <Separator />

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
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function LandingThemeCustomizerTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        "fixed top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90",
        "right-4 z-50 cursor-pointer",
      )}
    >
      <Settings className="h-5 w-5" />
    </Button>
  )
}
