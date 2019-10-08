import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

const styles = {
  width: '100%',
  outline: 'none',
  border: '1px solid #333f38'
}

export const LimitedTextarea = ({ rows, cols, value, limit, name }) => {
  const [content, setContent] = useState(value)

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text)
  }

  useEffect(() => {
    setFormattedContent(content)
  }, [])

  return (
    <div>
      <textarea
        style={styles}
        name={name}
        cols={cols}
        rows={rows}
        value={content}
        onChange={event => setFormattedContent(event.target.value)}
      />
      <p>
        {content.length}/{limit}
      </p>
    </div>
  )
}
