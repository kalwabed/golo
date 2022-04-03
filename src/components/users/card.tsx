import React from 'react'

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={'flex flex-col w-full max-w-full lg:max-w-screen-2xl border border-gray-300 rounded-md py-4 bg-gray-200 shadow-lg '.concat(
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
