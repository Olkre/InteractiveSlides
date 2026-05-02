import { useEffect, useRef, type ReactNode } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/reset.css'
import './reveal-black-geist.css'

type RevealDeckProps = {
  children: ReactNode
}

function resolveViewportBackground(slide: HTMLElement | null): string | undefined {
  let el: HTMLElement | null = slide
  while (el) {
    const bg = el.getAttribute('data-viewport-background')?.trim()
    if (bg) return bg
    const parent = el.parentElement
    if (!parent?.classList.contains('slides')) el = parent
    else break
  }
  return undefined
}

export function RevealDeck({ children }: RevealDeckProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const deck = new Reveal(el, {
      hash: true,
      slideNumber: 'c/t',
      transition: 'fade',
      width: 1280,
      height: 720,
    })

    const syncViewportChrome = () => {
      const viewport = deck.getViewportElement()
      if (!viewport) return
      const bg = resolveViewportBackground(deck.getCurrentSlide())
      if (bg) {
        viewport.style.background = bg
      } else {
        viewport.style.removeProperty('background')
      }
    }

    let cancelled = false
    void deck.initialize().then(() => {
      if (cancelled) return
      syncViewportChrome()
      deck.on('slidechanged', syncViewportChrome)
    })

    return () => {
      cancelled = true
      deck.off('slidechanged', syncViewportChrome)
      deck.destroy()
    }
  }, [])

  return (
    <div className="reveal" ref={rootRef}>
      <div className="slides">{children}</div>
    </div>
  )
}
