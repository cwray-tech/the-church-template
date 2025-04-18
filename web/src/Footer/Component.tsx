import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-gradient-to-b from-background to-background/95">
      <div className="container py-12 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center" href="/">
            <Logo className="max-w-[8rem]" />
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            A welcoming community of faith, hope, and love. Join us in worship and fellowship.
          </p>
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row flex-shrink-0 gap-12 md:items-start">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-foreground/80 hover:text-primary transition-colors"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium">Connect With Us</h3>
            <div className="flex flex-col gap-2 text-foreground/80">
              <p>123 Church Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@churchname.org</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-medium">Settings</h3>
            <ThemeSelector />
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Church Name. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
