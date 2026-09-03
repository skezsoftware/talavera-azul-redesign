import { Check } from 'lucide-react'
import { formatPrice, getImage, restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  usePageTitle()

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <SafeImage src={restaurant.images.hero} alt="" priority />
        </div>
        <div className="container home-hero__content">
          <p className="eyebrow home-hero__place">
            {restaurant.neighborhood} · {restaurant.address.city}
          </p>
          <h1>{restaurant.name}</h1>
          <p className="home-hero__tagline">{restaurant.tagline}</p>
          <div className="btn-group">
            <Button href={restaurant.primaryCta.href} variant="primary">
              {restaurant.primaryCta.label}
            </Button>
            <Button to="/menu" variant="light">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div className="intro-copy">
            <SectionHeading
              eyebrow="Welcome"
              title="Authentic Mexican breakfast, made from scratch."
            />
            <p>{restaurant.description}</p>
            <p>
              From our famous chipotle chilaquiles to the rich café de olla,
              every dish is a celebration of traditional flavors passed down
              through generations. Come hungry, leave happy.
            </p>
            <Button to="/about" variant="secondary">
              Our Story
            </Button>
          </div>
          <div className="intro-media">
            <SafeImage
              src={restaurant.images.plated}
              alt="A plate of chilaquiles at Talavera Azul"
              hover
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Fan Favorites"
            title="A few things we are known for."
            subtitle="The dishes that keep Chula Vista coming back every morning."
          />
          <div className="featured-grid">
            {restaurant.featuredItems.map((item) => (
              <article className="featured-card" key={item.name}>
                <SafeImage
                  src={getImage(item.imageKey)}
                  alt={item.name}
                  hover
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>{formatPrice(item.price)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <SafeImage
              src={restaurant.images.diningRoom}
              alt="The Talavera Azul dining room with colorful talavera tiles"
              hover
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={restaurant.experience.eyebrow}
              title={restaurant.experience.title}
            />
            <p style={{ marginTop: '1.1rem', color: 'var(--text-muted)' }}>
              {restaurant.experience.text}
            </p>
            <ul className="experience-list">
              {restaurant.experience.points.map((point) => (
                <li key={point}>
                  <Check size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button href={restaurant.primaryCta.href}>
              {restaurant.primaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="private-promo">
        <SafeImage
          src={restaurant.images.privateDining}
          alt=""
        />
        <div className="container private-promo__content">
          <p className="eyebrow">Private Events</p>
          <h2>Celebrate your next occasion with us.</h2>
          <p>
            Family brunch, birthdays, group gatherings, or catering — our
            colorful dining room is ready to host your next celebration.
          </p>
          <Button to="/private-dining" variant="light">
            Plan an Event
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Guests"
            title="What our guests are saying."
          />
          <div className="testimonials">
            {restaurant.testimonials.map((item) => (
              <figure className="testimonial" key={item.name}>
                <blockquote>"{item.quote}"</blockquote>
                <figcaption>
                  {item.name}
                  <br />
                  {item.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container hours-grid">
          <div className="hours-panel">
            <SectionHeading eyebrow="Hours" title="Open every day for breakfast & brunch." />
            <ul>
              {restaurant.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="location-panel">
            <SectionHeading eyebrow="Location" title="In the heart of Chula Vista." />
            <p style={{ color: 'var(--text-muted)' }}>
              {restaurant.address.full}
            </p>
            <p>
              <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
            </p>
            <p>
              <a href={restaurant.email.href}>{restaurant.email.display}</a>
            </p>
            <div className="btn-group" style={{ marginTop: '1.2rem' }}>
              <Button href={restaurant.address.mapsUrl} variant="secondary">
                Get Directions
              </Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container cta-band">
          <SectionHeading
            align="center"
            eyebrow="This Morning"
            title="Join us for breakfast."
            subtitle="Walk-ins welcome. Reservations available by phone for larger parties. Get here early on weekends — the line is worth it."
          />
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Button href={restaurant.primaryCta.href}>
              {restaurant.primaryCta.label}
            </Button>
            <Button to="/menu" variant="light">
              View Menu
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
