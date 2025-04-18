'use client'
import React from 'react'

export type ContentBlockType = {
  blockType?: 'content'
  content?: string
}

export const Content: React.FC<ContentBlockType> = (props) => {
  const { content } = props

  if (!content) return null

  return (
    <div className="my-8 lg:my-12 container">
      <div className="p-6 lg:p-8 bg-background rounded-lg shadow-md">
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
