"use client"

import { Footer } from "@/components/navigation/footer"
import { Navigation } from "@/components/navigation/navigation"

interface NoBreadcrumbLayoutProps {
    children: React.ReactNode,
}

export const NoBreadcrumbLayout = ({children}: NoBreadcrumbLayoutProps) => {

  return (
    <>
          <Navigation />
          <main className="max-w-screen min-h-screen flex flex-col p-0 pt-10 m-0 mt-10">
            {children}
          </main>
          <Footer />
    </>
  )
}
