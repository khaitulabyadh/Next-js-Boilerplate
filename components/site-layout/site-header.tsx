'use client'
import { GithubIcon, RssIcon } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { MainNav } from './main-nav'
import { ThemeToggle } from './theme-toggle'
import { IconHome, IconSettings, IconUser } from '@tabler/icons-react'
import { FloatingDock } from '../ui/floating-dock'

const items = [
  {
    title: "Home",
    icon: <IconHome />,
    href: "/home",
  },
  {
    title: "Profile",
    icon: <IconUser />,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: <IconSettings />,
    href: "/settings",
  },
];
export function SiteHeader() {
  return (
    <FloatingDock
        items={items}
        desktopClassName="fixed  w-full max-w-4xl"
        mobileClassName="fixed  right-4"
      />
  )
}
