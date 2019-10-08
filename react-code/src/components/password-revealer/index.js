import React, { useState } from 'react'

export const PasswordRevealer = ({ onChange, ...props }) => {
  const [shown, setShown] = useState(false)

  return (
    <div>
      <input
        {...props}
        type={shown ? 'text' : 'password'}
        onChange={e => onChange(e)}
        />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </div>
  )
}
