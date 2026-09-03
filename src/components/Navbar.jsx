import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, restaurant } from '../data/restaurant'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const location = useLocation()
  const overlay = location.pathname === '/' && !scrolled && !open

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerClass = [
    'site-header',
    overlay ? 'site-header--overlay' : 'site-header--solid',
    scrolled ? 'is-scrolled' : '',
    open ? 'is-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className="container-wide nav-bar">
        <Link
          className="brand"
          to="/"
          aria-label={`${restaurant.name} home`}
          onClick={() => setOpen(false)}
        >
          {restaurant.logo && (
            <img
              className="brand__logo"
              src={restaurant.logo}
              alt=""
              aria-hidden="true"
            />
          )}
          <span className="brand__name">{restaurant.shortName || restaurant.name}</span>
          <span className="brand__place">
            {restaurant.neighborhood} · {restaurant.address.city}
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Button href={restaurant.primaryCta.href}>
            {restaurant.primaryCta.label}
          </Button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Button href={restaurant.primaryCta.href}>
          {restaurant.primaryCta.label}
        </Button>
      </nav>
    </header>
  )
}
