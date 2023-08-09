import Navbar from '@/components/navbar/Navbar.comp'
import '../styles/globals.css'
import '../styles/cyber.css'
import type { Metadata } from 'next'
import Mouse from '@/components/mouse/Mouse.comp'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className={`h-[100vh] bg-[#000] flex items-center flex-col w-full font-mono justify-between text-[var(--green-three)]`}>
        <Navbar />
        {children}
        <Mouse />
      </div>
      </body>
    </html>
  )
}