import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import React from 'react'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn(
          'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] py-3 px-6 flex items-center rounded',
          {
            'bg-card/50': style === 'info',
            'bg-error/10': style === 'error',
            'bg-success/10': style === 'success',
            'bg-warning/10': style === 'warning',
          },
        )}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
