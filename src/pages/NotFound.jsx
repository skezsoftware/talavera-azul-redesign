import { restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/Button'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not on the menu.</h1>
      <p>
        La página que buscas no está en el menú. Head back home, or give us a
        call to join us for breakfast.
      </p>
      <div className="btn-group" style={{ justifyContent: 'center' }}>
        <Button to="/">Inicio</Button>
        <Button href={restaurant.primaryCta.href} variant="secondary">
          {restaurant.primaryCta.label}
        </Button>
      </div>
    </section>
  )
}
