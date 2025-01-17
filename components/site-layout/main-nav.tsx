'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
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

export function MainNav() {

  return (
    
    <FloatingDock
        items={items}
        desktopClassName="fixed  w-full max-w-4xl"
        mobileClassName="fixed  right-4"
      />
  )
}
