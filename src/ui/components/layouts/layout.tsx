import { Footer } from "@/components/navigation/footer"
import { Navigation } from "@/components/navigation/navigation"
import { Breadcrumb } from "../breadcrumb/breadcrumb"
import { Toaster } from "react-hot-toast"

interface LayoutProps {
    children: React.ReactNode,
}

export const Layout = ({children}: LayoutProps) => {

  return (
    <>
      <Toaster 
        position="top-center" 
        toastOptions={{  success: { duration: 2500 },  error: { duration: 4000 }, }}/>
        <Navigation />
        <main className="max-w-screen min-h-screen flex flex-col p-0 pt-10 m-0 mt-10">
          <Breadcrumb/>
            {children}
        </main>
        <Footer/>
    </>
  )
}
