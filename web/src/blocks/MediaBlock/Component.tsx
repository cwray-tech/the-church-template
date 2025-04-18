'use client'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'
import React from 'react'

export type MediaBlockType = {
  blockType?: 'media'
  media?: MediaType
  caption?: string
}

export const MediaBlock: React.FC<MediaBlockType> = (props) => {
  const { media, caption } = props

  if (!media) return null

  return (
    <div className="my-8 lg:my-12 container">
      <div className="p-6 lg:p-8 bg-background rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
        <Media resource={media} className="w-full h-auto" fill={false} />
        {caption && <div className="mt-4 text-sm text-muted-foreground text-center">{caption}</div>}
      </div>
    </div>
  )
}
