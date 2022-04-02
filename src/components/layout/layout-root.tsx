import React from 'react'

const LayoutRoot: React.FC = ({ children }) => {
  return <div className="flex flex-col w-full min-h-full flex-auto bg-yellow-400">{children}</div>
}

export default LayoutRoot
