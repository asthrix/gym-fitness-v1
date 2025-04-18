import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
  as?: React.ElementType
  fullWidth?: boolean
}

export function SectionContainer({
  id,
  className,
  children,
  as: Component = "section",
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <Component id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn(!fullWidth && "container mx-auto px-4")}>{children}</div>
    </Component>
  )
}
