  import '../styles/globals.css'

  import type { Metadata } from 'next'
  import { Inter as FontSans } from 'next/font/google'

  import { Providers } from '@/components/providers'
  import { SiteFooter, SiteHeader } from '@/components/site-layout'
  import { siteConfig } from '@/config/site'
  import { cn } from '@/lib/utils'
import { BackgroundLines } from '@/components/ui/background-lines'

  const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
  })

  export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: [
      'Next.js',
      'React',
      'Boilerplate',
      'Tailwind CSS',
      'shadcn.ui',
      'Template',
    ],
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={cn('bg-background font-sans antialiased', fontSans.variable)}>
          <div className="relative  mx-auto flex min-h-screen flex-col">
          <div className="absolute bottom-0 left-0 w-full -z-10">
            <BackgroundLines />
          </div>
            <Providers>
              <main className="flex-1 py-2 md:py-4">{children}
              <div className="fixed bottom-20 flex w-full justify-center z-50">
    <SiteHeader />
  </div>
              </main>

            </Providers>
          </div>
        </body>
      </html>
    );
  }

