import React from "react"
import MarqueeLib from "react-fast-marquee"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  pauseOnHover?: boolean
  speed?: number
  direction?: "left" | "right" | "up" | "down"
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  speed = 50,
  direction = "left",
  ...props
}: MarqueeProps) {
  return (
    <MarqueeLib
      className={className}
      pauseOnHover={pauseOnHover}
      speed={speed}
      direction={direction}
      {...props}
    >
      {children}
    </MarqueeLib>
  )
}