import { Footer } from "@/components/navigation/footer"
import { Navigation } from "@/components/navigation/navigation"
import { Breadcrumb } from "../breadcrumb/breadcrumb"

interface LayoutProps {
    children: React.ReactNode,
}

export const Layout = ({children}: LayoutProps) => {

  return (
    <>
        <Navigation />
        <main className="max-w-screen min-h-screen flex flex-col p-0 pt-10 m-0 mt-10">
          <Breadcrumb/>
            {children}
        </main>
        <Footer/>
    </>
  )
}
