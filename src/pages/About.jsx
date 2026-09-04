import { restaurant } from '../data/restaurant'
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
        image={restaurant.images.diningEntrance}
        eyebrow={about.eyebrow}
        title={about.title}
        subtitle={about.lead}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Desde 2008" title="A Chula Vista institution, born in Tijuana." />
          <div className="story-prose">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="image-band">
        <SafeImage
          src={restaurant.images.diningRoom}
          alt="The dining room at Talavera Azul"
        />
      </div>

      <section className="section">
        <div className="container chef-grid">
          <div className="chef-media">
            <SafeImage
              src={restaurant.images.potteryShelf}
              alt="Talavera pottery display at Talavera Azul"
              hover
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={chef.title}
              title={chef.name}
              subtitle="Cuatro décadas de hospitalidad, from Tijuana to Chula Vista."
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
            eyebrow="Filosofía"
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
              eyebrow="El Espacio"
              title={about.interior.title}
            />
            <p className="notes" style={{ marginTop: '1.2rem' }}>
              {about.interior.text}
            </p>
          </div>
          <div className="split-media">
            <SafeImage
              src={restaurant.images.diningTables}
              alt="Tables and talavera décor in the dining room"
              hover
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-gallery">
          <SafeImage
            src={restaurant.images.potteryNiche}
            alt="Blue and white talavera pottery niches at Talavera Azul"
            hover
          />
          <div className="about-gallery__stack">
            <SafeImage
              src={restaurant.images.ceramicCrosses}
              alt="Hand-painted ceramic crosses on the wall at Talavera Azul"
              hover
            />
            <SafeImage
              src={restaurant.images.potteryShelf}
              alt="Talavera pottery shelf display at Talavera Azul"
              hover
            />
          </div>
        </div>
      </section>
    </>
  )
}
