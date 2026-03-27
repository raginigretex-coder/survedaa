import './HomePage.css'
import heroImage from '../assets/hero.png'
import Header from './header'

function HomePage() {
  return (
    <main className="home-page" id="home">
      <Header />
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-kicker">Your Music Room. Perfectly Managed.</p>

            <h1 className="hero-title">
              The App Your ,
              <br />
              Music Room Deserves
            </h1>

            <p className="hero-description">
            Music Room Deserves.SurVedaa is the official app powering Gretex Music Rooms inside residential communities.
             Book sessions, join certified courses, track your progress, and connect with fellow residents — all from one place.
            </p>

            <button type="button" className="hero-button">
              DOWNLOAD THE APP
              <span aria-hidden="true" className="hero-button-arrow">
                &rarr;
              </span>
            </button>
          </div>
          <div className="hero-media" aria-hidden="true">
            <picture className="hero-picture">
              <source srcSet="/images/home-img.avif" type="image/avif" />
              <img className="hero-image" src={heroImage} alt="Mobile app preview" />
            </picture>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage
