import { useState, useEffect } from "react"

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const delayDebounceScroll = () =>
      setTimeout(() => {
        if (typeof window !== "undefined") {
          setScrollPos(window.scrollY)
        }
      }, 100)

    const handleScroll = () => {
      clearTimeout(delayDebounceScroll)
      delayDebounceScroll()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
      clearTimeout(delayDebounceScroll)
    }
  }, [])

  return scrollPos
}

export default useScrollPosition
