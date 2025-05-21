'use client'

import React, { useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  gradientColor?: string
}

export function MagicCard({
  children,
  className,
  containerClassName,
  gradientColor = "#8b5cf6",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!cardRef.current) return
      const card = cardRef.current
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty("--x", `${x}px`)
      card.style.setProperty("--y", `${y}px`)
    },
    [cardRef]
  )

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    card.addEventListener("mousemove", handleMouseMove)
    return () => card.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      className={cn(
        "group/card relative z-10 rounded-xl bg-card text-card-foreground shadow duration-300",
        "before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-500",
        "before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-transparent",
        "hover:before:opacity-100",
        containerClassName
      )}
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), ${gradientColor}, transparent 40%)`,
      }}
      ref={cardRef}
    >
      <div className={cn("rounded-[inherit] p-4", className)}>{children}</div>
    </div>
  )
}
