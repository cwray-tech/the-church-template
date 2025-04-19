'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="relative z-20 bg-gradient-to-b from-background to-background/95 shadow-sm"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container">
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo
                loading="eager"
                priority="high"
                className="transition-transform group-hover:scale-105"
              />
              <span className="hidden md:inline-block text-sm font-serif text-muted-foreground italic">
                Welcome Home
              </span>
            </Link>
            <div className="md:hidden">
              <HeaderNav data={data} />
            </div>
          </div>
          <div className="hidden md:block">
            <HeaderNav data={data} />
          </div>
        </div>
      </div>
    </header>
  )
}
