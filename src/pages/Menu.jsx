import { restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import MenuCategory from '../components/MenuCategory'
import PageHero from '../components/PageHero'

export default function Menu() {
  usePageTitle('Menu')

  return (
    <div className="menu-page">
      <PageHero
        image={restaurant.images.hearth}
        eyebrow="The Menu"
        title="Breakfast & brunch, made from scratch."
        subtitle="Traditional Mexican breakfast, American classics, and the best chilaquiles in San Diego."
      />

      <div className="menu-nav-wrap">
        <nav className="container menu-nav" aria-label="Menu categories">
          {restaurant.menu.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        {restaurant.menu.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
        <p className="menu-disclaimer">{restaurant.menuDisclaimer}</p>
      </div>
    </div>
  )
}
