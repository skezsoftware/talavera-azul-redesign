import { useEffect, useRef, useState } from 'react'
import { restaurant } from '../data/restaurant'
import { usePageTitle } from '../hooks/usePageTitle'
import MenuCategory from '../components/MenuCategory'
import PageHero from '../components/PageHero'

export default function Menu() {
  usePageTitle('Menu')
  const navRef = useRef(null)
  const [activeId, setActiveId] = useState(restaurant.menu[0]?.id ?? '')

  useEffect(() => {
    const sections = restaurant.menu
      .map((category) => document.getElementById(category.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // Active band sits just under the sticky header + menu nav.
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!activeId || !navRef.current) return

    const activeLink = navRef.current.querySelector(`[href="#${CSS.escape(activeId)}"]`)
    if (!activeLink) return

    activeLink.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeId])

  return (
    <div className="menu-page">
      <PageHero
        image={restaurant.images.hearth}
        eyebrow="La Carta"
        title="Breakfast & brunch, made from scratch."
        subtitle="Traditional Mexican breakfast, American classics, and the best chilaquiles in San Diego."
      />

      <div className="menu-nav-wrap">
        <nav
          ref={navRef}
          className="container menu-nav"
          aria-label="Menu categories"
        >
          {restaurant.menu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={activeId === category.id ? 'is-active' : undefined}
              aria-current={activeId === category.id ? 'true' : undefined}
            >
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
