import './PeopleShowcasePage.css'

import { useEffect, useMemo, useRef, useState } from 'react'

const SLIDES = [
  'https://picsum.photos/id/758/520/600',
  'https://picsum.photos/id/760/520/600',
  'https://picsum.photos/id/770/520/600',
  'https://picsum.photos/id/780/520/600',
  'https://picsum.photos/id/790/520/600',
  'https://picsum.photos/id/800/520/600',
  'https://picsum.photos/id/810/520/600',
  'https://picsum.photos/id/820/520/600',
  'https://picsum.photos/id/830/520/600',
  'https://picsum.photos/id/840/520/600',
]

function PeopleShowcasePage() {
  const carouselRef = useRef(null)
  const snapRef = useRef(null)
  const rafRef = useRef(null)
  const lastFrameRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = useMemo(() => SLIDES, [])
  const slidesLength = slides.length

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    let snap
    let cancelled = false

    ;(async () => {
      // vevet Snap handles the dragging/swiping logic; we only apply 3D transforms.
      const mod = await import('vevet')
      if (cancelled) return

      const { Snap } = mod
      snap = new Snap({
        container,
        direction: 'horizontal',
        grabCursor: true,
        centered: true,
        loop: true,
        freemode: true,
        shortSwipes: false,
        stickOnResize: false,
        friction: 0,
        lerp: 1,
        gap: 40,
        duration: 300,
        // Snap itself does not apply styles to slides; we do it in the "update" callback.
        slides: false,
      })

      snap.on('update', () => {
        const depth = 200
        const rotation = 20
        const scale = 1 / (180 / rotation)
        const halfAngle = (rotation * Math.PI) / 180 / 2

        snap.slides.forEach(({ element, coord, progress, size }) => {
          // element is null for hidden/virtual slides; guard to avoid exceptions.
          if (!element) return

          const factor = 1 - Math.cos(progress * scale * Math.PI)

          const xOffset = progress * (size / 3) * factor
          const zOffset = ((size * 0.5) / Math.sin(halfAngle)) * factor - depth
          const rotateY = progress * rotation
          // Smooth edge scale (no hard threshold "pop"): eased 0→1 from center to far slides.
          const edgeT = Math.min(1, Math.abs(progress) / 1.55)
          const edgeEase = edgeT * edgeT * (3 - 2 * edgeT)
          const edgeScale = 1 + 0.07 * edgeEase
          const edgeOutwardOffset = Math.sign(progress) * 12 * edgeEase

          element.style.transform = `translateX(${coord + xOffset + edgeOutwardOffset}px) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${edgeScale})`
        })
      })

      snap.on('activeSlide', (slide) => {
        const index = slide?.index ?? 0
        // In `loop` mode, `index` can still be normalized to your source slides list.
        setActiveIndex(((index % slidesLength) + slidesLength) % slidesLength)
      })

      snapRef.current = snap
      const AUTO_SCROLL_SECONDS_PER_SLIDE = 6
      const tick = (time) => {
        const instance = snapRef.current
        if (!instance) return

        if (!lastFrameRef.current) {
          lastFrameRef.current = time
        }

        const elapsedMs = time - lastFrameRef.current
        lastFrameRef.current = time

        if (!instance.isSwiping && !instance.hasInteria) {
          const slideDistance = instance.firstSlideSize + 40
          const pxPerSecond = slideDistance / AUTO_SCROLL_SECONDS_PER_SLIDE
          const delta = (pxPerSecond * elapsedMs) / 1000
          instance.iterateTarget(delta)
        }

        rafRef.current = window.requestAnimationFrame(tick)
      }

      rafRef.current = window.requestAnimationFrame(tick)
      container.classList.add('ready')
    })()

    return () => {
      cancelled = true
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastFrameRef.current = 0
      snap?.destroy?.()
      snapRef.current = null
    }
  }, [slidesLength])

  return (
    <section className="people-showcase-page" aria-label="People showcase">
      <div className="people-showcase-copy">
        <p className="people-showcase-eyebrow">No stress. Just flow.</p>
        <h2 className="people-showcase-title">Ready to Reclaim Your Time?</h2>
        <p className="people-showcase-description">
          Start organizing, prioritizing, and crushing your goals today.
        </p>
        <button type="button" className="people-showcase-cta">
          TRY IT FOR FREE <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div className="people-showcase-carousel-wrap">
        <div ref={carouselRef} className="carousel" aria-label="Panorama carousel">
          {slides.map((image, index) => (
            <div className="slide" key={`${image}-${index}`}>
              <img src={image} alt={`Panorama slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* <div className="people-showcase-pagination" role="tablist" aria-label="Carousel pagination">
          {slides.map((_, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={i}
                type="button"
                className={`people-showcase-dot${isActive ? ' is-active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={isActive ? 'true' : 'false'}
                onClick={() => snapRef.current?.toSlide?.(i, { duration: 300 })}
              />
            )
          })}
        </div> */}

        <div className="people-panorama-fade people-panorama-fade-left" aria-hidden="true" />
        <div className="people-panorama-fade people-panorama-fade-right" aria-hidden="true" />
      </div>
    </section>
  )
}

export default PeopleShowcasePage
