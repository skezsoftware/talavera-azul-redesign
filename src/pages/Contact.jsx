import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  usePageTitle('Contact & Reservations')
  const [mapFailed, setMapFailed] = useState(false)

  return (
    <>
      <PageHero
        image={restaurant.images.bar}
        eyebrow="Contact"
        title="Reservations, questions, and the way here."
        subtitle="Walk-ins are always welcome. Call ahead for large parties or to check wait times on busy weekends."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionHeading
              eyebrow="Visit"
              title="Find us in downtown Chula Vista."
            />

            <div>
              <h2>Address</h2>
              <p>
                <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city}, {restaurant.address.state}{' '}
                  {restaurant.address.zip}
                </a>
              </p>
            </div>

            <div>
              <h2>Phone</h2>
              <p>
                <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
              </p>
            </div>

            <div>
              <h2>Email</h2>
              <p>
                <a href={restaurant.email.href}>{restaurant.email.display}</a>
              </p>
            </div>

            <div>
              <h2>Hours</h2>
              <ul className="hours-panel">
                {restaurant.hours.map((item) => (
                  <li key={item.days}>
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button href={restaurant.primaryCta.href}>
              {restaurant.primaryCta.label}
            </Button>
          </div>

          <div>
            <SectionHeading eyebrow="Write" title="Send a message." />
            <div style={{ marginTop: '1.5rem' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container hours-grid">
          <div>
            <SectionHeading eyebrow="Map" title="On 3rd Avenue in Chula Vista." />
            <p className="notes">
              We are in the heart of downtown Chula Vista, near the courthouse
              and across from the Sunday farmer's market.
            </p>
            <div className="map-placeholder" style={{ marginTop: '1.5rem' }}>
              {mapFailed ? (
                <div className="map-fallback">
                  <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
                  <p>{restaurant.address.full}</p>
                  <p>
                    <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
                      Open in Maps
                    </a>
                  </p>
                </div>
              ) : (
                <iframe
                  title={`Map showing ${restaurant.name}`}
                  src={restaurant.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapFailed(true)}
                />
              )}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={restaurant.parking.title}
              title="Getting here."
            />
            <p className="notes">{restaurant.parking.text}</p>
          </div>
        </div>
      </section>
    </>
  )
}
