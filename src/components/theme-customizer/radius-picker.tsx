import { Label } from "@/components/ui/label"
import { radiusOptions } from "@/config/theme-customizer-constants"
import { cn } from "@/lib/utils"

type RadiusPickerProps = {
  selectedRadius: string
  onSelect: (radius: string) => void
}

export function RadiusPicker({ selectedRadius, onSelect }: RadiusPickerProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Radius</Label>
      <div className="grid grid-cols-5 gap-2">
        {radiusOptions.map((option) => (
          <div
            key={option.value}
            className={cn(
              "relative cursor-pointer rounded-md border p-3 transition-colors",
              selectedRadius === option.value
                ? "border-primary"
                : "border-border hover:border-border/60",
            )}
            onClick={() => onSelect(option.value)}
          >
            <div className="text-center">
              <div className="text-xs font-medium">{option.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
