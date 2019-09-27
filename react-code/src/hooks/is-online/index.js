import React, { useState, useEffect } from 'react'

const getOnlineStatus = () => {
  return typeof navigator !== 'undefined' && navigator.onLine === 'boolean'
    ? navigator.onLine
    : true
}

export const useIsOnline = () => {
  const [status, setStatus] = useState(getOnlineStatus())

  const setOnline = () => setStatus(true)
  const setOffline = () => setStatus(false)

  useEffect(() => {
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)

    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
  }, [])

  return status
}
