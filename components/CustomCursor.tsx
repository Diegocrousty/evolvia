'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Track true mouse position
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    // Lerp animation loop
    let raf: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12)
      cursor.style.left = `${pos.current.x}px`
      cursor.style.top = `${pos.current.y}px`
      raf = requestAnimationFrame(animate)
    }

    // Hover state for links & buttons
    const onEnterHoverable = () => cursor.classList.add('hovered')
    const onLeaveHoverable = () => cursor.classList.remove('hovered')

    // Headline state
    const onEnterHeadline = () => cursor.classList.add('on-headline')
    const onLeaveHeadline = () => cursor.classList.remove('on-headline')

    // Click state
    const onMouseDown = () => cursor.classList.add('clicking')
    const onMouseUp = () => cursor.classList.remove('clicking')

    // Hide when leaving window
    const onMouseLeave = () => cursor.classList.add('hidden')
    const onMouseEnter = () => cursor.classList.remove('hidden')

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    // Attach hover listeners
    const attachListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"]')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnterHoverable)
          el.addEventListener('mouseleave', onLeaveHoverable)
        })

      document
        .querySelectorAll('[data-cursor-headline]')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnterHeadline)
          el.addEventListener('mouseleave', onLeaveHeadline)
        })
    }

    attachListeners()
    raf = requestAnimationFrame(animate)

    // Observe DOM changes for SPA navigation
    const observer = new MutationObserver(() => attachListeners())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      observer.disconnect()
    }
  }, [])

  return <div ref={cursorRef} className="ev-cursor hidden md:block" />
}
