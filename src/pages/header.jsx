import { useEffect, useState } from 'react'
import './header.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Offering', href: '#our-offering' },
  { label: 'How It Works', href: '#how-it-works' },
  
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 24)

      if (menuOpen) {
        setIsHidden(false)
        lastScrollY = currentScrollY
        return
      }

      const isScrollingDown = currentScrollY > lastScrollY
      const hasPassedThreshold = currentScrollY > 100
      setIsHidden(isScrollingDown && hasPassedThreshold)
      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${isHidden ? 'site-header--hidden' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#home" onClick={closeMenu}>
          SurVedaa
        </a>

        <button
          type="button"
          className={`site-header__menu-btn ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="site-header__link" href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="site-header__cta" href="#trial" onClick={closeMenu}>
          <span>TRY IT FOR FREE</span>
          <span aria-hidden="true" className="site-header__cta-arrow">
            &rarr;
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header
