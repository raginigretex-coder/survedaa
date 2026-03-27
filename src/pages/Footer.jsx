import './Footer.css'

function Footer() {
  return (
    <footer className="footer-page">
      <div className="footer-inner">
        <div className="footer-brand-column">
          <p className="footer-brand">SurVedaa</p>
          <p className="footer-description">
            SurVedaa brings Gretex-powered music room access, learning, booking, and community
            experiences together in one seamless platform.
          </p>
          {/* <p className="footer-copyright">© 2025 Copyright</p> */}
        </div>

        <div className="footer-links-column">
          <p className="footer-links-label">Menu</p>
          <nav className="footer-links-list" aria-label="Footer Menu">
            <a href="#top">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </nav>
        </div>

        <div className="footer-links-column">
          <p className="footer-links-label">Social</p>
          <div className="footer-social-list">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon">ig</span>
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon">x</span>
              <span>Twitter</span>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon">yt</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-meta">
          © 2025 SurVedaa · An initiative by Gretex Industries Limited ·
          <a href="https://www.gretexindustries.com" target="_blank" rel="noreferrer">
            www.gretexindustries.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
