import React from 'react'
import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-full flex-auto bg-yellow-400">
      <TopNavigation />
      {children}
    </div>
  )
}

export default LayoutRoot
