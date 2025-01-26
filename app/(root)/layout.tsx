'use client'
import MobileNavbar from "@/components/shared/MobileNavbar"
import Sidebar from "@/components/shared/Sidebar"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
        <Sidebar />
        <MobileNavbar />
        <div className="root-container">
            <div className="wrapper">{children}</div>
        </div>
    </main>
  )
}

export default Layout