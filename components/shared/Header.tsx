import React from 'react'

interface HeaderProps {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Header = ({ title, subtitle, titleClassName = '', subtitleClassName = '' }: HeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className={`h2-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-purple-700 drop-shadow-lg` + (titleClassName ? ` ${titleClassName}` : '')} style={{ WebkitTextStroke: '1px #a78bfa' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`p-16-regular mt-4 text-gray-700 drop-shadow-md${subtitleClassName ? ` ${subtitleClassName}` : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Header