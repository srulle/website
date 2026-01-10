import * as React from "react"

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
    <img
      src="/logo/logo-kota-jambi.svg"
      alt="Logo Kota Jambi"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}
