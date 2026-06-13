import { Dices } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import type { ColorTheme } from "@/types/theme-customizer"

type ThemePresetSelectProps = {
  label: string
  placeholder: string
  value: string
  themes: ColorTheme[]
  randomLabel?: string
  onRandom?: () => void
  onValueChange: (value: string) => void
}

export function ThemePresetSelect({
  label,
  placeholder,
  value,
  themes,
  randomLabel = "Random",
  onRandom,
  onValueChange,
}: ThemePresetSelectProps) {
  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">{label}</Label>
          {onRandom && (
            <Button variant="outline" size="sm" onClick={onRandom} className="cursor-pointer">
              <Dices className="h-3.5 w-3.5 mr-1.5" />
              {randomLabel}
            </Button>
          )}
        </div>

        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <div className="p-2">
              {themes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="h-3 w-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.primary }}
                      />
                      <div
                        className="h-3 w-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.secondary }}
                      />
                      <div
                        className="h-3 w-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.accent }}
                      />
                      <div
                        className="h-3 w-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.muted }}
                      />
                    </div>
                    <span>{theme.name}</span>
                  </div>
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <Separator />
    </>
  )
}
