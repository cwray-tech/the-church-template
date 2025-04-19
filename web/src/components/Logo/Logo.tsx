'use client'

import { useTheme } from '@/providers/Theme'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const [imageError, setImageError] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (imageError) {
    return (
      <div className={clsx('text-xl font-serif font-bold text-primary', className)}>
        Church Name
      </div>
    )
  }

  // Use light theme as default during SSR
  const logoTheme = mounted ? theme : 'light'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Church Logo"
      width={180}
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-auto flex-shrink-0', className)}
      src={logoTheme === 'dark' ? '/images/church-logo-dark.svg' : '/images/church-logo-light.svg'}
      onError={() => setImageError(true)}
    />
  )
}
