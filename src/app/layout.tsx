import { Navbar } from '@/components'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <div className='container max-w-7xl mx-auto h-full pt-12'>
          <Navbar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
