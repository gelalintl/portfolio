"use client"

interface PlainLayoutProps {
    children: React.ReactNode,
}

export const PlainLayout = ({children}: PlainLayoutProps) => {

  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  )
}
