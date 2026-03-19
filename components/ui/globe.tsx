// components/ui/globe.tsx
'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import createGlobe, { COBEOptions } from 'cobe'
import { cn } from '@/lib/utils'

// Dense grid of small markers covering France's territory — renders as amber dots
const FRANCE_MARKERS = (() => {
  const markers: { location: [number, number]; size: number }[] = []
  const points: [number, number][] = [
    // Northern France
    [51.0, 2.3], [50.6, 3.0], [50.4, 1.8], [50.1, 2.5],
    [49.9, 2.3], [49.5, 0.1], [49.5, 2.3], [49.5, 4.0],
    [49.2, -1.0], [49.2, 1.0], [49.2, 3.0], [49.2, 5.0],
    // Île-de-France / Centre
    [48.9, 2.3], [48.5, 0.0], [48.5, 2.3], [48.5, 4.5],
    [48.1, -1.5], [48.1, 0.5], [48.1, 2.5], [48.1, 4.0], [48.1, 6.0],
    [47.5, -2.0], [47.5, 0.0], [47.5, 2.0], [47.5, 4.0], [47.5, 6.0],
    [47.0, -1.5], [47.0, 0.5], [47.0, 2.5], [47.0, 4.5], [47.0, 6.5],
    // Centre-Sud
    [46.5, -1.0], [46.5, 1.0], [46.5, 3.0], [46.5, 5.0], [46.5, 6.5],
    [46.0, -1.2], [46.0, 0.5], [46.0, 2.0], [46.0, 3.5], [46.0, 5.5],
    [45.5, -1.0], [45.5, 0.5], [45.5, 2.0], [45.5, 3.5], [45.5, 5.0], [45.5, 6.5],
    [45.0, -0.8], [45.0, 0.8], [45.0, 2.5], [45.0, 4.0], [45.0, 5.5],
    // Sud
    [44.5, -1.0], [44.5, 0.5], [44.5, 2.0], [44.5, 3.5], [44.5, 5.0],
    [44.0, -0.5], [44.0, 1.0], [44.0, 2.5], [44.0, 4.0], [44.0, 5.5], [44.0, 7.0],
    [43.5, 0.0], [43.5, 1.5], [43.5, 3.0], [43.5, 4.5], [43.5, 6.0], [43.5, 7.0],
    [43.0, 1.0], [43.0, 2.5], [43.0, 4.0], [43.0, 5.5], [43.0, 6.8],
    [42.7, 2.0], [42.7, 3.0], [42.7, 6.2],
    // Corse
    [42.2, 9.1], [41.9, 9.2], [42.5, 9.0],
  ]
  for (const [lat, lng] of points) {
    markers.push({ location: [lat, lng], size: 0.028 })
  }
  return markers
})()

interface GlobeProps {
  className?: string
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phiRef = useRef(0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const [renderSize, setRenderSize] = useState(0)

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
  }, [])

  const onPointerUp = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
  }, [])

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
    }
  }, [])

  // Track container size with ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0
      if (w > 0) setRenderSize(w)
    })
    ro.observe(el)
    // Initial measurement
    if (el.offsetWidth > 0) setRenderSize(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  // Create/recreate COBE when renderSize changes
  useEffect(() => {
    if (!canvasRef.current || renderSize <= 0) return

    const pixelRatio = Math.min(window.devicePixelRatio, 2)

    const cobeConfig: COBEOptions = {
      devicePixelRatio: pixelRatio,
      width: renderSize * pixelRatio,
      height: renderSize * pixelRatio,
      phi: phiRef.current,
      theta: 0.15,
      dark: 1,
      scale: 1.05,
      diffuse: 2.4,
      mapSamples: 24000,
      mapBrightness: 4,
      baseColor: [0.12, 0.11, 0.10],
      markerColor: [0.76, 0.38, 0.04],
      glowColor: [0.25, 0.12, 0.02],
      markers: FRANCE_MARKERS,
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phiRef.current += 0.003
        } else {
          phiRef.current += pointerInteractionMovement.current / 2000
          pointerInteractionMovement.current *= 0.9
        }
        state.phi = phiRef.current
        state.width = renderSize * pixelRatio
        state.height = renderSize * pixelRatio
      },
    }

    // Destroy previous instance before creating new one
    if (globeRef.current) {
      globeRef.current.destroy()
      globeRef.current = null
    }

    globeRef.current = createGlobe(canvasRef.current, cobeConfig)

    // Fade in
    if (canvasRef.current) {
      canvasRef.current.style.opacity = '0'
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          canvasRef.current.style.transition = 'opacity 1.2s ease'
          canvasRef.current.style.opacity = '1'
        }
      })
    }

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy()
        globeRef.current = null
      }
    }
  }, [renderSize])

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ aspectRatio: '1' }}
    >
      <canvas
        ref={canvasRef}
        className="cursor-grab"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerOut}
        onMouseMove={onMouseMove}
        style={{
          width: '100%',
          height: '100%',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}
