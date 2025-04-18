'use client'
import { cn } from '@/utilities/ui'
import React from 'react'

export type CodeBlockType = {
  blockType?: 'code'
  code?: string
  language?: string
}

export const Code: React.FC<CodeBlockType> = (props) => {
  const { code, language } = props

  if (!code) return null

  return (
    <div className="my-8 lg:my-12 container">
      <div className="p-6 lg:p-8 bg-background rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
        <pre className="overflow-x-auto">
          <code className={cn('block p-4 rounded-lg', language && `language-${language}`)}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
