import React, { useEffect, useState } from 'react'

const style = {
  outline: 'none',
  border: '1px solid rgb(186, 204, 218)',
  padding: '4px 6px',
  width: '100%'
}

export const ControlledInput = ({
  onChange,
  type = 'text',
  disabled = false,
  readOnly = false,
  defaultValue,
  placeholder = ''
}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <input
      defaultValue={defaultValue}
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
      style={style}
    />
  )
}
