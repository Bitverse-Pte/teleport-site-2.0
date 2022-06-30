import { useState, useEffect, useMemo } from 'react'

const isClient = typeof window === 'object'
function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  }
}
// https://usehooks.com/useWindowSize/
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    if (isClient) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    return undefined
  }, [])

  return windowSize
}

export const SMALL_SCREEN_WIDTH = 720

export function useIsSmallScreen() {
  const windowSize = useWindowSize()
  const isExtraSmall = useMemo<boolean>(() => {
    if (typeof window !== 'undefined' && windowSize !== undefined && windowSize.width !== undefined) {
      return windowSize.width! < SMALL_SCREEN_WIDTH
    }
    return false
  }, [windowSize])
  return isExtraSmall
}
