import Image from "next/image"
import type { HTMLAttributes } from "react"

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
    <Image
      src="/logo/logo-kota-jambi.svg"
      alt="Logo Kota Jambi"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}
