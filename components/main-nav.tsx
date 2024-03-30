'use client'
// todo => use server?
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 md:flex">
      <Link
        href="/"
        className="mr-6 flex items-center"
      >
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          className="inline-block h-6 w-16 dark:invert"
          width={100}
          height={24}
        />
        <span className="ml-1 inline-block font-bold">14 Boilerplate</span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm sm:flex lg:gap-6">
        <Link
          href="/loading-and-streaming"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/loading-and-streaming'
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Loading and streaming
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/dashboard')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          dashboard
        </Link>
        <Link
          href="https://github.com/qinsong77"
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
