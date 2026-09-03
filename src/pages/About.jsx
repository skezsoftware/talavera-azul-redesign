import { getImage, restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHero from '../components/PageHero'
import SafeImage from '../components/SafeImage'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  usePageTitle('About')
  const { about, chef } = restaurant

  return (
    <>
      <PageHero
        image={restaurant.images.coast}
        eyebrow={about.eyebrow}
        title={about.title}
        subtitle={about.lead}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Since 2008" title="A Chula Vista institution, born in Tijuana." />
          <div className="story-prose">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="image-band">
        <SafeImage
          src={restaurant.images.harbor}
          alt="Downtown Chula Vista near Talavera Azul"
        />
      </div>

      <section className="section">
        <div className="container chef-grid">
          <div className="chef-media">
            <SafeImage
              src={getImage(chef.imageKey)}
              alt={chef.name}
              hover
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={chef.title}
              title={chef.name}
              subtitle="Four decades of hospitality, from Tijuana to Chula Vista."
            />
            <div className="story-prose">
              {chef.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Philosophy"
            title={about.philosophy.title}
            subtitle={about.philosophy.text}
          />
          <div className="philosophy-grid">
            {about.philosophy.points.map((point) => (
              <article className="philosophy-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="The Space"
              title={about.interior.title}
            />
            <p className="notes" style={{ marginTop: '1.2rem' }}>
              {about.interior.text}
            </p>
          </div>
          <div className="split-media">
            <SafeImage
              src={restaurant.images.interior}
              alt="The Talavera Azul dining room"
              hover
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-gallery">
          <SafeImage
            src={restaurant.images.kitchen}
            alt="The kitchen at Talavera Azul"
            hover
          />
          <SafeImage
            src={restaurant.images.ingredients}
            alt="Fresh ingredients used at Talavera Azul"
            hover
          />
        </div>
      </section>
    </>
  )
}
