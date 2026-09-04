import { formatPrice } from '../data/restaurant'

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <h3>{item.name}</h3>
      <span className="menu-item__price">{formatPrice(item.price)}</span>
      {item.description ? <p>{item.description}</p> : null}
    </li>
  )
}

export default function MenuCategory({ category }) {
  return (
    <section className="menu-category" id={category.id} aria-labelledby={`${category.id}-title`}>
      <h2 id={`${category.id}-title`}>{category.name}</h2>
      {category.note ? <p className="menu-category__note">{category.note}</p> : null}
      <ul className="menu-list">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
      {category.addons?.length ? (
        <>
          <h3 className="menu-category__subhead">{category.addonsTitle || 'Add-Ons'}</h3>
          <ul className="menu-list">
            {category.addons.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </>
      ) : null}
      {category.footer ? <p className="menu-category__note menu-category__footer">{category.footer}</p> : null}
    </section>
  )
}
