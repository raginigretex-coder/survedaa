import './Aboutus.css'

function Aboutus() {
  return (
    <section className="aboutus-page" id="about" aria-labelledby="aboutus-title">
      <img
        className="aboutus-bg-image"
        src="/images/getstart-img.webp"
        alt=""
        aria-hidden="true"
      />

      <div className="aboutus-content">
        <div className="aboutus-left">
          <p className="aboutus-kicker">What Is SurVedaa?</p>

          <h2 className="aboutus-title" id="aboutus-title">
            The App Behind the Gretex Music
            <br />
             Room Experience?
          </h2>
        </div>

        <div className="aboutus-right">
          <p className="aboutus-description">
            Gretex Industries Limited â€” an NSE-listed company and exclusive Yamaha distributor across Eastern India â€” is bringing professional Arts & Convention-grade Music Rooms into residential societies and clubhouses across India.
          </p><br />
          <p className="aboutus-description">
            SurVedaa is the EdTech platform that powers this experience for residents. Once your society has a Gretex Music Room, SurVedaa is how you access it â€” booking slots, enrolling in structured courses, tracking grades, and being part of a nationwide musical community.
          </p>

          <button type="button" className="aboutus-button">
            TRY IT FOR FREE
            <span className="aboutus-button-arrow" aria-hidden="true">
              &rarr;
            </span>
          </button>
        </div>
      </div>

      <div className="aboutus-bottom-strip" aria-hidden="true" />
    </section>
  )
}

export default Aboutus
