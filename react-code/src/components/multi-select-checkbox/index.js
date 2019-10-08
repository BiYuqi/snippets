import React, { useState } from 'react'

const styles = {
  listContainer: {
    listStyle: 'none',
    paddingLeft: 0
  },
  itemStyle: {
    cursor: 'pointer',
    padding: 5
  }
}

export const MultiselectCheckbox = ({ options, onChange }) => {
  const [data, setData] = useState(options)

  const toggle = item => {
    data.forEach((_, key) => {
      if (data[key].label === item.label) {
        data[key].checked = !item.checked
      }
    })
    setData([...data])
    onChange(data)
  }

  return (
    <ul style={styles.listContainer}>
      {data.map(item => {
        return (
          <li style={styles.itemStyle} key={item.label} onClick={() => toggle(item)}>
            <input readOnly type="checkbox" checked={item.checked || false} />
            {item.label}
          </li>
        )
      })}
    </ul>
  )
}
