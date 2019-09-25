import React from 'react'

export const Layout = ({ className = '', children }) => {
  return <div className={`layout-default ${className}`}>{children}</div>
}

export const InnerContent = ({ children }) => {
  return <div className="layout-innder-default">{children}</div>
}
