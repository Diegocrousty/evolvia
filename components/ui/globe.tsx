// components/ui/globe.tsx
'use client'

import { useEffect, useRef, useCallback } from 'react'
import createGlobe, { COBEOptions } from 'cobe'
import { cn } from '@/lib/utils'

// Paris coordinates
const PARIS_LAT = 48.8566
const PARIS_LNG = 2.3522

// Convert lat/lng to COBE marker format
function latLngToMarker(lat: number, lng: number, size: number) {
  return { location: [lat, lng] as [number, number], size }
}

// Dense grid of small markers covering France's territory — renders as amber dots
const FRANCE_MARKERS = (() => {
  const markers: { location: [number, number]; size: number }[] = []
  // France approximate bounds: lat 42.3–51.1, lng -5.1–8.2
  // Grid with ~1° spacing, small dot size to blend with continent dots
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
  width?: number
  height?: number
}

export function Globe({ className, width = 600, height = 600 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phiRef = useRef(0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

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

  useEffect(() => {
    if (!canvasRef.current) return

    let animationId: number
    const pixelRatio = Math.min(window.devicePixelRatio, 2)

    const cobeConfig: COBEOptions = {
      devicePixelRatio: pixelRatio,
      width: width * pixelRatio,
      height: height * pixelRatio,
      phi: 0,
      theta: 0.25,
      dark: 1,
      scale: 0.85,                            // Smaller globe within canvas — leaves room for circular clip
      diffuse: 2.4,
      mapSamples: 24000,
      mapBrightness: 4,                       // Brighter dots
      baseColor: [0.12, 0.11, 0.10],         // Dark base, continents nearly invisible
      markerColor: [0.76, 0.38, 0.04],       // Amber (unused — no markers)
      glowColor: [0.25, 0.12, 0.02],         // Amber atmospheric glow 360°
      markers: FRANCE_MARKERS,                  // Amber dots covering France only
      onRender: (state) => {
        // Auto-rotate when not interacting
        if (pointerInteracting.current === null) {
          phiRef.current += 0.003
        } else {
          phiRef.current += pointerInteractionMovement.current / 2000
          pointerInteractionMovement.current *= 0.9
        }
        state.phi = phiRef.current
        state.width = width * pixelRatio
        state.height = height * pixelRatio
      },
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
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      className={cn('cursor-grab', className)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerOut={onPointerOut}
      onMouseMove={onMouseMove}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: width,
        maxHeight: height,
        aspectRatio: '1',
        contain: 'layout paint size',
      }}
    />
  )
}
