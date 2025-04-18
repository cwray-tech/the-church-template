'use client'

import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const [imageError, setImageError] = useState(false)

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  if (imageError) {
    return (
      <div className={clsx('text-xl font-serif font-bold text-primary', className)}>
        Church Name
      </div>
    )
  }

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Church Logo"
      width={180}
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-auto', className)}
      src="/images/church-logo.svg"
      onError={() => setImageError(true)}
    />
  )
}
