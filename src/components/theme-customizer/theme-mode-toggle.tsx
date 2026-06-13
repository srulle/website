import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import type { MouseEvent } from "react"

type ThemeModeToggleProps = {
  isDarkMode: boolean
  onLightMode: (event: MouseEvent<HTMLButtonElement>) => void
  onDarkMode: (event: MouseEvent<HTMLButtonElement>) => void
}

export function ThemeModeToggle({ isDarkMode, onLightMode, onDarkMode }: ThemeModeToggleProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Mode</Label>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant={!isDarkMode ? "secondary" : "outline"}
          size="sm"
          onClick={onLightMode}
          className="cursor-pointer"
        >
          <Sun className="h-4 w-4 mr-1" />
          Light
        </Button>
        <Button
          variant={isDarkMode ? "secondary" : "outline"}
          size="sm"
          onClick={onDarkMode}
          className="cursor-pointer"
        >
          <Moon className="h-4 w-4 mr-1" />
          Dark
        </Button>
      </div>
    </div>
  )
}
