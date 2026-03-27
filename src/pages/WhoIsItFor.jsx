import './WhoIsItFor.css'

function WhoIsItFor() {
  return (
    <section className="showcase-page" aria-labelledby="showcase-title">
      <div className="showcase-header">
        <div className="showcase-heading-wrap">
          <p className="showcase-kicker">who Is It For ?</p>
          <h2 className="showcase-title" id="showcase-title">
            For Every Resident Who Has Ever Wanted to Play.
          </h2>
        </div>

        <p className="showcase-intro">
          The Gretex Music Room and SurVedaa are designed for everyone in the community — no prior experience needed.
        </p>
      </div>

      <div className="showcase-grid">
        <article className="showcase-card showcase-card-large">
          <img
            className="showcase-card-image"
            src="/images/howitwork.avif"
            alt=""
            aria-hidden="true"
          />

          <div className="showcase-card-content">
            <h3 className="showcase-card-title">Children & Teenagers</h3>
            <p className="showcase-card-text">
              Build foundational musical skills with structured, 
              graded courses taught by certified instructors — right where they live.
            </p>
          </div>
        </article>

        <article className="showcase-card showcase-card-small">
          <div className="showcase-dashboard" aria-hidden="true">
            <div className="showcase-chart-line" />
          </div>
          <div className="showcase-card-content">
            <h3 className="showcase-card-title">Working Adults & Homemakers</h3>
            <p className="showcase-card-text">
              Pick up that instrument you always wanted to learn. Flexible slot booking means music fits around your schedule.
            </p>
          </div>
        </article>

        <article className="showcase-card showcase-card-large">
          <img
            className="showcase-card-image"
            src="/images/howitwork.avif"
            alt=""
            aria-hidden="true"
          />

          <div className="showcase-card-content">
            <h3 className="showcase-card-title">Enthusiasts & Aspiring Performers</h3>
            <p className="showcase-card-text">
              Access professional-grade instruments, recording setups, and band facilities. 
              Perform at community events and build your portfolio.
            </p>
          </div>
        </article>

        <article className="showcase-card showcase-card-small">
          <div className="showcase-dashboard" aria-hidden="true">
            <div className="showcase-chart-line" />
          </div>

          <div className="showcase-card-content">
            <h3 className="showcase-card-title">Residents Who Love Community</h3>
            <p className="showcase-card-text">
              Join jam sessions, karaoke nights, and group performances. The Music Room is a cultural hub for the whole society.
            </p>
          </div>
        </article>
      </div>
      
      
    </section>
  )
}

export default WhoIsItFor
