import { useEffect, useMemo, useState } from 'react'
import './HowItWork.css'

const SLIDES = [
  {
    id: '01',
    title: 'Society Provides the Space',
    description: 'A designated area within the Society or Clubhouse is handed over to Gretex for setup.',
    imageSrc: '/images/whyitwork-01.avif'
  },
  {
    id: '02',
    title: 'Gretex Handles the Rest',
    description: 'Interior design, professional equipment installation, instructor training, and ongoing operations are all managed by Us.',
    imageSrc: '/images/whyitwork-02.avif'
  },
  {
    id: '03',
    title: 'Residents Get App Access',
    description: 'Every resident receives access to SurVedaa â€” the app to book, learn, track, and connect with their Music Room community.',
    imageSrc: '/images/whyitwork-03.avif'
  }
]

function HowItWork() {
  const [activeIndex, setActiveIndex] = useState(0)

  const active = useMemo(() => SLIDES[activeIndex], [activeIndex])

  useEffect(() => {
    const t = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length)
    }, 3500)

    return () => window.clearInterval(t)
  }, [])

  return (
    <section className="howitwork-page" id="how-it-works" aria-labelledby="howitwork-title">
      <div className="howitwork-inner">
        <div className="howitwork-header">
          <div className="howitwork-header-left">
            <p className="howitwork-kicker">How It Works</p>
            <h2 className="howitwork-title" id="howitwork-title">
              Everything You Need, Built Into the App.
            </h2>
          </div>

          <p className="howitwork-header-right">
            The society provides a space in the clubhouse.
            Gretex handles everything else â€” and SurVedaa puts it all at residents' fingertips.
          </p>
        </div>

        <div className="howitwork-main">
          <div className="howitwork-tabs" role="tablist" aria-orientation="vertical">
            {SLIDES.map((s, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`howitwork-tab ${isActive ? 'is-active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="howitwork-tab-num">{s.id}</span>
                  <span className="howitwork-tab-title">{s.title}</span>
                  <span className="howitwork-tab-desc">{s.description}</span>
                </button>
              )
            })}
          </div>

          <div
            className="howitwork-media-wrap"
            role="button"
            tabIndex={0}
            aria-label="Change image and rotate text"
            onClick={() => setActiveIndex((prev) => (prev + 1) % SLIDES.length)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveIndex((prev) => (prev + 1) % SLIDES.length)
              }
            }}
          >
            <div key={activeIndex} className="howitwork-media" aria-hidden="true">
              <img
                className="howitwork-media-image"
                src={active.imageSrc}
                alt=""
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork
