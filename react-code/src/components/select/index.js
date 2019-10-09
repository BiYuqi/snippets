import React from 'react'

export const Select = ({ options, onChange, defaultValue, disabled = false, readOnly = false }) => {
  return (
    <select
      disabled={disabled}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={({ target: { value } }) => onChange(value)}
    >
      {options.map(([value, text]) => (
        <option value={value} key={text}>
          {text}
        </option>
      ))}
    </select>
  )
}
