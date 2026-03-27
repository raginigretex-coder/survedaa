import { useMemo, useState } from 'react'
import './Features.css'

const FEATURES = [
  {
    id: '01',
    title: 'Instant Room Booking',
    description:
      'Browse live availability of your Gretex Music Room and reserve a slot in seconds â€” no calls, no queues, no confusion.',
    imageSrc: '/images/howitwork.avif',
  },
  {
    id: '02',
    title: 'Structured Courses & Enrolment',
    description:
      'Browse certified courses across Guitar, Keyboard, Drums, Vocals, DJ, and more. Enrol, attend, and grade â€” all inside the app.',
    imageSrc: '/images/whyitwork-01.avif',
  },
  {
    id: '03',
    title: 'Progress Tracking & Certificates',
    description:
      "Track practice hours, complete milestones, and earn graded certificates. Parents can monitor their child's progress and download certificates directly",
    imageSrc: '/images/whyitwork-02.avif',
  },
  {
    id: '04',
    title: 'Community & Peer Jamming',
    description:
      'Connect with fellow residents, form bands, schedule jam sessions, and sign up for community performances and events.',
    imageSrc: '/images/whyitwork-03.avif',
  },
  {
    id: '05',
    title: 'Class & Event Calendar',
    description:
      'Stay on top of upcoming workshops, live sessions, karaoke nights, and community events hosted inside your Music Room.',
    imageSrc: '/images/getstart-img.webp',
  },
  {
    id: '06',
    title: 'Smart Reminders',
    description:
      "Never miss a booked session or class. SurVedaa sends timely notifications so you always show up ready to play.",
    imageSrc: '/images/howitwork.avif',
  },
]

function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = useMemo(() => FEATURES[activeIndex], [activeIndex])

  return (
    <section className="features-page" id="features" aria-labelledby="features-title">
      <div className="features-container">
        <header className="features-header">
          <div className="features-heading">
            <p className="features-kicker">SurVedaa Features</p>
            <h2 className="features-title" id="features-title">
              Everything You Need,
            </h2>
            <p className="features-subtitle">Built Into the App.</p>
          </div>

          <p className="features-intro">
            SurVedaa is the single interface through which residents access their Gretex Music Room.
            Here's what the app puts in your hands:
          </p>
        </header>

        <div className="features-content">
          <div className="features-image-card" aria-hidden="true">
            <img
              key={activeFeature.id}
              src={activeFeature.imageSrc}
              alt=""
              className="features-image"
            />
          </div>

          <div className="features-list" role="list">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex
              return (
                <article
                  className={`features-item ${isActive ? 'is-active' : ''}`}
                  role="listitem"
                  key={feature.id}
                  tabIndex={0}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <p className="features-item-number">{feature.id}</p>
                  <h3 className="features-item-title">{feature.title}</h3>
                  <p className="features-item-description">{feature.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
