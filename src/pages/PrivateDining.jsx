import { getImage, restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import InquiryForm from '../components/InquiryForm'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function PrivateDining() {
  usePageTitle('Private Events')
  const dining = restaurant.privateDining

  return (
    <>
      <PageHero
        image={restaurant.images.privateDining}
        eyebrow={dining.eyebrow}
        title={dining.title}
        subtitle={dining.intro}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Occasions"
            title="Family brunch, celebrations, and catering."
          />
          <div className="events-grid">
            {dining.events.map((event) => (
              <article className="event-card" key={event.title}>
                <SafeImage
                  src={getImage(event.imageKey)}
                  alt=""
                  hover
                />
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our Spaces"
            title="Two ways to gather."
            subtitle="Both spaces are served by our kitchen and staff. Call us to discuss the best setup for your party."
          />
          <div className="spaces-grid">
            {dining.spaces.map((space) => (
              <article className="space-card" key={space.name}>
                <SafeImage
                  src={getImage(space.imageKey)}
                  alt={space.name}
                  hover
                />
                <h3>{space.name}</h3>
                <p className="space-card__meta">{space.capacity}</p>
                <p>{space.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container inquiry">
          <div>
            <SectionHeading
              eyebrow="Inquire"
              title="Tell us about your event."
            />
            <p className="notes">
              Email us at{' '}
              <a href={`mailto:${dining.inquiryEmail}`}>{dining.inquiryEmail}</a>
              {' '}or fill out the form. We typically reply within one business day.
            </p>
            <p className="notes">{dining.notes}</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
