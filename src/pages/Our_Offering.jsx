import './Our_Offering.css'

function Our_Offering() {
  return (
    <section className="our-offering-page" id="our-offering" aria-labelledby="our-offering-title">
      <div className="our-offering-bottom-strip" aria-hidden="true" />
      <div className="our-offering-inner">
        <p className="our-offering-kicker">The Gretex Music Room</p>

        <div className="our-offering-intro">
          <h2 className="our-offering-title" id="our-offering-title">
            A Professional Right
            
             Studio in
            <br />
             <span className="our-offering-title-accent">Your Building.</span>
          </h2>

          <p className="our-offering-description">
            Every Music Room is set up and operated end-to-end by SurVedaa â€” so residents enjoy
            a world-class space without any management burden on the society.
          </p>
        </div>

        <div className="our-offering-grid">
          <article className="our-offering-card">
            <h3 className="our-offering-card-title">World Class Instruments Available</h3>
            <ul className="our-offering-card-text">
              <li>Guitars</li>
              <li>Drum Kits</li>
              <li>Keyboards</li>
              <li>Pianos + many more</li>
            </ul>
          </article>

          <article className="our-offering-card">
            <h3 className="our-offering-card-title">Professional Audio Setups</h3>
            <ul className="our-offering-card-text">
              <li>Speakers</li>
              <li>Amplifiers</li>
              <li>Vocal Mics</li>
              <li>Monitors</li>
              <li>Mixers and many more</li>
            </ul>
          </article>

          <article className="our-offering-card">
            <h3 className="our-offering-card-title">Structured Music Training</h3>
            <ul className="our-offering-card-text">
              <li>Beginner to advanced classes</li>
              <li>Vocal and instrument coaching</li>
              <li>Structured weekly lesson plans</li>
              <li>Practice guidance and feedback</li>
              <li>Performance preparation and many more</li>
            </ul>
          </article>
        </div>
      </div>
      <div className="our-offering-bottom-strip" aria-hidden="true" />
    </section>
  )
}

export default Our_Offering
