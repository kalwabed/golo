import React from 'react'
import Footer from './footer'
import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-full flex-auto bg-yellow-400 p-4 md:p-0">
      <TopNavigation />
      <main className="w-full max-w-screen-xl mx-auto mt-10">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutRoot
