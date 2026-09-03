import { Link } from 'react-router-dom'
import { navLinks, restaurant } from '../data/restaurant'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-wide footer-grid">
        <div>
          {restaurant.logo && (
            <img
              className="footer-logo"
              src={restaurant.logo}
              alt={restaurant.name}
            />
          )}
          <p className="footer-brand">{restaurant.name}</p>
          <p className="footer-tagline">{restaurant.tagline}</p>
        </div>

        <div>
          <h2>Visit</h2>
          <ul className="footer-list">
            <li>
              <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
                {restaurant.address.street}
                <br />
                {restaurant.address.city}, {restaurant.address.state}{' '}
                {restaurant.address.zip}
              </a>
            </li>
            <li>
              <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
            </li>
            <li>
              <a href={restaurant.email.href}>{restaurant.email.display}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            {restaurant.social.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Hours</h2>
          <ul className="footer-hours">
            {restaurant.hours.map((item) => (
              <li key={item.days}>
                <span>{item.days}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide footer-bottom">
        <p>
          © {year} {restaurant.name}. An independent restaurant in Chula Vista.
        </p>
        <p>Est. {restaurant.established}</p>
      </div>
    </footer>
  )
}
