"use client"

import * as React from "react"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"       // lock to dark — no light mode toggle needed
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
