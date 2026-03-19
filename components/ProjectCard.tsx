'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { UnsplashImage } from '@/lib/unsplash'

interface Props {
  name: string
  location: string
  category: string
  offer: string
  url: string
  description: string
  poster: {
    accent: string
    overlayColor: string
    unsplashQuery: string
  }
  image: UnsplashImage
}

export function ProjectCard({
  name,
  location,
  category,
  offer,
  url,
  description,
  poster,
  image,
}: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="relative glass-card rounded-md overflow-hidden group cursor-pointer hover:border-evolvia-border-hover transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Poster with real image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          {/* Background image */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />

          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${poster.overlayColor.replace('0.55', '0.85')} 0%, ${poster.overlayColor} 40%, transparent 100%)`,
            }}
          />

          {/* Accent line top */}
          <div
            className="absolute top-0 left-0 right-0 z-10"
            style={{ height: 3, background: poster.accent }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
            <h3
              className="font-display text-2xl font-light leading-tight mb-1"
              style={{ color: '#f0eeeb' }}
            >
              {name}
            </h3>
            <p
              className="font-mono text-[11px] tracking-wider uppercase"
              style={{ color: poster.accent, opacity: 0.82 }}
            >
              {location} · {category}
            </p>
          </div>

          {/* Hover arrow */}
          <div
            className="absolute top-4 right-4 z-10 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translate(0,0)' : 'translate(-4px,4px)',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <ArrowUpRight size={18} style={{ color: poster.accent }} />
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="p-6 flex items-center justify-between">
          <p className="text-evolvia-text-secondary text-xs font-body">
            {offer}
          </p>
          <span className="text-xxs font-body text-evolvia-muted tracking-wide transition-colors group-hover:text-evolvia-text">
            Voir le site →
          </span>
        </div>

      </div>
    </a>
  )
}
