"use client"
import { useEffect, useState } from "react"

export function CountUp({
  to,
  animateOnce = false,
}: {
  to: number
  animateOnce?: boolean
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(animateOnce)

  useEffect(() => {
    if (hasAnimated) {
      setCount(to)
      return
    }

    let start = 0
    const duration = 1 // seconds
    const increment = to / (duration * 60) // ~60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
        setHasAnimated(true)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [to, hasAnimated])

  return <span>{count}</span>
}