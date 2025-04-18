'use client'
import { Media } from '@/components/Media'
import Link from 'next/link'
import React from 'react'

export type RelatedPostsType = {
  blockType?: 'relatedPosts'
  title?: string
  posts?: {
    id?: string
    title?: string
    slug?: string
    featuredImage?: {
      id?: string
      alt?: string
      filename?: string
      mimeType?: string
      filesize?: number
      width?: number
      height?: number
      url?: string
      updatedAt?: string
      createdAt?: string
    }
  }[]
}

export const RelatedPosts: React.FC<RelatedPostsType> = (props) => {
  const { title, posts } = props

  if (!posts?.length) return null

  return (
    <div className="my-8 lg:my-12 container">
      <div className="p-6 lg:p-8 bg-background rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
        {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            if (!post?.slug) return null

            return (
              <Link key={post.id} href={`/posts/${post.slug}`} className="group block">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  {post.featuredImage ? (
                    <Media
                      resource={post.featuredImage as any}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
