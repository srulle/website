import { radiusOptions } from "@/config/theme-customizer-constants"

export function findClosestRadius(targetRadius: string) {
  const targetValue = parseFloat(targetRadius.replace("rem", ""))
  let closest = radiusOptions[0]
  let minDiff = Math.abs(parseFloat(closest.value.replace("rem", "")) - targetValue)

  for (const option of radiusOptions) {
    const optionValue = parseFloat(option.value.replace("rem", ""))
    const diff = Math.abs(optionValue - targetValue)

    if (diff < minDiff) {
      minDiff = diff
      closest = option
    }
  }

  return closest.value
}
