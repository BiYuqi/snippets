import React from 'react'

const Layout = ({ className = '', children }) => {
  return <div className={`layout-default ${className}`}>{children}</div>
}

export default Layout
