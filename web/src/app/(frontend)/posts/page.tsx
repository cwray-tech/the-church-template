import type { Metadata } from 'next/types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { CollectionArchive } from '@/components/CollectionArchive'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { RenderHero } from '@/heros/RenderHero'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: draft } = await draftMode()

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  const page = await queryPageBySlug({
    slug: 'posts',
  })
  if (!page) {
    return (
      <div className="pt-24 pb-24">
        <PageClient />
        <div className="container mb-16">
          <div className="prose dark:prose-invert max-w-none">
            <h1>Posts</h1>
          </div>
        </div>

        <div className="container mb-8">
          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={12}
            totalDocs={posts.totalDocs}
          />
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </div>
    )
  }
  const { hero, layout } = page
  const url = '/' + 'posts'
  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
