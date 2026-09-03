import { formatPrice } from '../data/restaurant'

export default function MenuCategory({ category }) {
  return (
    <section className="menu-category" id={category.id} aria-labelledby={`${category.id}-title`}>
      <h2 id={`${category.id}-title`}>{category.name}</h2>
      {category.note ? <p className="menu-category__note">{category.note}</p> : null}
      <ul className="menu-list">
        {category.items.map((item) => (
          <li className="menu-item" key={item.name}>
            <h3>{item.name}</h3>
            <span className="menu-item__price">{formatPrice(item.price)}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
