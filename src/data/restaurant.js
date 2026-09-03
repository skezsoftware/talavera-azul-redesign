const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const restaurant = {
  name: 'Talavera Azul',
  shortName: 'Talavera',
  established: 2008,
  tagline: 'Authentic Mexican Breakfast & Brunch',
  description:
    'A hidden gem in the heart of Chula Vista, offering traditional Mexican breakfast and brunch with the warmth, flavor, and hospitality of home.',
  neighborhood: 'Downtown Chula Vista',
  cuisine: 'Mexican Breakfast & Brunch',

  address: {
    street: '365 3rd Ave',
    city: 'Chula Vista',
    state: 'CA',
    zip: '91910',
    full: '365 3rd Ave, Chula Vista, CA 91910',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=365+3rd+Ave+Chula+Vista+CA+91910',
  },

  phone: {
    display: '(619) 427-6476',
    href: 'tel:+16194276476',
  },

  email: {
    display: 'talaveraazul@outlook.com',
    href: 'mailto:talaveraazul@outlook.com',
  },

  hours: [
    { days: 'Monday – Sunday', time: '8:00 am – 2:00 pm' },
  ],

  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/talavera_azul_restaurant/' },
    { name: 'Facebook', href: 'https://www.facebook.com/talaverazul' },
    { name: 'Yelp', href: 'https://www.yelp.com/biz/talavera-azul-chula-vista' },
  ],

  reservationUrl: 'tel:+16194276476',

  primaryCta: {
    label: 'Call for Reservations',
    href: 'tel:+16194276476',
  },

  logo: '/images/logo.png',

  colors: {
    ivory: '#faf7f0',
    charcoal: '#2a2522',
    olive: '#1b5e7b',
    gold: '#c26a2e',
    goldSoft: '#d4a574',
  },

  images: {
    hero: unsplash('photo-1565299585323-38d6b0865b47', 2200),
    diningRoom: unsplash('photo-1552566626-52f8b828add9', 1800),
    hearth: unsplash('photo-1568901346375-23c9450c58cd', 1600),
    plated: unsplash('photo-1534352956036-cd81e27dd615', 1400),
    steak: unsplash('photo-1551504734-5ee1c4a1479b', 1400),
    seafood: unsplash('photo-1613514785940-daed07799d9b', 1400),
    oysters: unsplash('photo-1615870216519-2f9fa575fa5c', 1400),
    cocktail: unsplash('photo-1560717789-0ac7c58ac90a', 1400),
    wine: unsplash('photo-1541167760496-1628856ab772', 1400),
    dessert: unsplash('photo-1571091718767-18b5b1457add', 1400),
    chef: unsplash('photo-1583394293214-28ded15ee548', 1400),
    kitchen: unsplash('photo-1504544750208-dc0358e63f7f', 1800),
    privateDining: unsplash('photo-1517248135467-4c7edcad34c4', 1800),
    tableSetting: unsplash('photo-1565299585323-38d6b0865b47', 1600),
    bar: unsplash('photo-1560717789-0ac7c58ac90a', 1600),
    coast: unsplash('photo-1484980972926-edee96e0960d', 1800),
    harbor: unsplash('photo-1546549032-9571cd6b27df', 1800),
    ingredients: unsplash('photo-1511185307590-3c29c11275ca', 1600),
    interior: unsplash('photo-1552566626-52f8b828add9', 1800),
    lounge: unsplash('photo-1582234372722-50d7ccc30ebd', 1600),
    celebration: unsplash('photo-1584208632869-05fa2b2a5934', 1600),
    businessDinner: unsplash('photo-1517248135467-4c7edcad34c4', 1600),
    chilaquiles: unsplash('photo-1534352956036-cd81e27dd615', 1400),
    talavera: unsplash('photo-1625398407796-82650a8c135f', 1400),
  },

  about: {
    eyebrow: 'Our Story',
    title: 'Almost two decades of authentic Mexican breakfast.',
    lead:
      'Talavera Azul opened on August 1, 2008, bringing the flavors and traditions of Tijuana to downtown Chula Vista.',
    story: [
      'The Curiel family has been in the restaurant business since 1983, when they opened La Leña — the first steakhouse geared toward fine dining in Tijuana. After years of perfecting homestyle Mexican cuisine, they brought that same passion and tradition across the border to Chula Vista.',
      'Talavera Azul was born from a simple idea: serve the same beloved breakfast recipes that families enjoy in Tijuana — chilaquiles, machaca con huevos, huevos rancheros, café de olla — in a warm, welcoming space adorned with vibrant talavera tiles and traditional Mexican décor.',
      'What started as a neighborhood breakfast spot quickly became a Chula Vista institution. Nearly two decades later, the restaurant is known for its generous portions, unforgettable chilaquiles, and the kind of hospitality that makes every guest feel like family. The line out the door every weekend tells the story better than we ever could.',
    ],
    philosophy: {
      title: 'How We Cook',
      text: 'Every dish at Talavera Azul is made from scratch with family recipes passed down through generations. We believe breakfast should be hearty, flavorful, and made with love.',
      points: [
        {
          title: 'Family recipes',
          text: 'Homestyle dishes straight from the Curiel family kitchen in Tijuana — the same flavors, the same care, every single day.',
        },
        {
          title: 'Fresh ingredients',
          text: 'Handmade salsas, fresh tortillas, and sauces prepared daily so every plate is bursting with authentic flavor.',
        },
        {
          title: 'Made with care',
          text: 'From our creamy poblano sauce to our rich café de olla, everything is crafted with the attention it deserves.',
        },
      ],
    },
    interior: {
      title: 'The Dining Room',
      text: 'Step inside and you are surrounded by vibrant cobalt-blue talavera tiles, hand-painted pottery, and charming Mexican décor. The atmosphere is cozy, roomy, and unmistakably authentic — a dining room designed to make you feel like you have been transported to a favorite breakfast spot in Mexico. Outdoor seating is available for those who enjoy the Chula Vista sunshine.',
    },
  },

  chef: {
    name: 'The Curiel Family',
    title: 'Owners & Operators',
    imageKey: 'chef',
    bio: [
      'The Curiel family has been in the restaurant business for over four decades, starting with La Leña in Tijuana in 1983. Owner Enrique Román Curiel personally oversees the dining room, greeting guests, pouring café de olla, and ensuring every table is taken care of.',
      'Their approach is simple: serve homestyle Mexican breakfast the way it should be — generous, authentic, and made with recipes that have been perfected over generations. From the kitchen to the floor, Talavera Azul is truly a family affair.',
    ],
  },

  featuredItems: [
    {
      name: 'Chipotle Chilaquiles',
      description: 'Corn tortilla chips tossed in our creamy chipotle sauce with Jack cheese. Served with refried beans and country potatoes.',
      price: 12,
      imageKey: 'plated',
    },
    {
      name: 'Machaca con Huevos',
      description: 'Shredded beef with scrambled eggs, served with refried beans, country potatoes, and tortillas.',
      price: 14,
      imageKey: 'steak',
    },
    {
      name: 'Café de Olla',
      description: 'Traditional Mexican coffee brewed with cinnamon and piloncillo. The best in San Diego.',
      price: 5,
      imageKey: 'cocktail',
    },
  ],

  experience: {
    eyebrow: 'The Experience',
    title: 'Breakfast worth waiting in line for.',
    text: 'Talavera Azul is more than a meal — it is a morning ritual for Chula Vista. From the aroma of café de olla to the vibrant talavera décor, every detail is designed to make you feel at home.',
    points: [
      'Authentic Mexican breakfast made from scratch daily',
      'Charming interior adorned with talavera tiles and pottery',
      'Outdoor seating and a casual, welcoming atmosphere',
      'Family-friendly with vegan and vegetarian options',
    ],
  },

  testimonials: [
    {
      quote:
        'Everything I have had here is absolutely delicious. My favorite by far is the chipotle chilaquiles. They have a spicy kick while still being creamy. I always get the café de olla which is the best café de olla I\'ve had in SD.',
      name: 'Ash L.',
      detail: 'Yelp Review',
    },
    {
      quote:
        'The food was delicious with a great casual ambiance. We tried the Machaca plate and the huevos divorciados — the sauces were so tasty. Even the beans tasted homemade. A must-try.',
      name: 'Michelle P.',
      detail: 'Yelp Review',
    },
    {
      quote:
        'After seeing the amount of people waiting outside, I was prepared to skip this place but glad I didn\'t. The chilaquiles were even better than expected — so creamy, flavorful and not too spicy.',
      name: 'Viviana G.',
      detail: 'Yelp Review',
    },
    {
      quote:
        'The wait is 100% worth it. The shredded beef was moist and flavorful and the potatoes were beautifully goldened to perfection. I left feeling so satisfied.',
      name: 'Lena C.',
      detail: 'Yelp Review',
    },
  ],

  menuDisclaimer:
    'Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please inform your server of any allergies. Prices and menu items subject to change.',

  menu: [
    {
      id: 'healthy-beginning',
      name: 'Healthy Beginning',
      items: [
        { name: 'Yogurt Parfait', description: 'Layered yogurt with granola and fresh fruit.', price: 9 },
        { name: 'Papaya Plate', description: 'Fresh sliced papaya with granola and cottage cheese.', price: 10 },
        { name: 'Cream of Wheat or Oatmeal', description: 'Served warm with your choice of toppings.', price: 7 },
      ],
    },
    {
      id: 'pancakes-waffles',
      name: 'Pancakes, Waffles & More',
      items: [
        { name: 'Three Buttermilk Pancakes', description: 'Topped with powdered sugar unless otherwise specified.', price: 10 },
        { name: 'Golden Waffle', description: 'Topped with strawberries, bananas, whipped cream, and powdered sugar.', price: 10 },
        { name: 'French Toast', description: 'Topped with strawberries, bananas, whipped cream, and powdered sugar.', price: 11 },
        { name: 'The Monte Cristo', description: 'Ham, turkey, and cheese sandwiched between two thick French toast. Served with seasonal fruit.', price: 14 },
        { name: 'Breakfast Croissant', description: 'Scrambled egg, ham, bacon, and cheese. Served with seasonal fruit.', price: 12 },
        { name: 'House Special', description: 'Chef\'s daily breakfast creation — ask your server for today\'s special.', price: 14 },
      ],
    },
    {
      id: 'omelets',
      name: 'Omelets',
      note: 'All omelets served with refried beans, country potatoes, and tortillas.',
      items: [
        { name: 'The Works Omelet', description: 'Bacon, sausage, ham, and Jack cheese. Option to top with any sauce or salsa.', price: 14 },
        { name: 'La Espadaña Omelet', description: 'Mushrooms, green pepper slices, Jack cheese, and ham. Topped with our signature chipotle cream sauce.', price: 14 },
        { name: 'Poblano Omelet', description: 'Green pepper slices, corn, Jack cheese, and onion. Topped with our poblano cream sauce.', price: 13 },
        { name: 'California Omelet', description: 'Jack cheese, ham, and onions. Topped with avocado and chipotle cream sauce.', price: 14 },
        { name: 'Panela Omelet', description: 'Panela cheese, tomatoes, and spinach. Topped with poblano cream sauce.', price: 13 },
        { name: 'Spinach & Mushroom Omelet', description: 'Fresh spinach, mushrooms, and melted cheese.', price: 13 },
        { name: 'Verde Omelet', description: 'Green pepper slices, onions, mushrooms, spinach, and tomatoes. Topped with avocado and green salsa.', price: 13 },
        { name: 'Mushroom Pasilla Omelet', description: 'Mushrooms and pasilla peppers with melted cheese.', price: 13 },
        { name: 'Chicharrón in Green Salsa Omelet', description: 'Crispy chicharrón simmered in tangy green salsa.', price: 14 },
        { name: 'Spinach Omelet', description: 'Cottage cheese, spinach, mushrooms, and pork chorizo. Topped with fresh ranchero salsa.', price: 13 },
      ],
    },
    {
      id: 'chilaquiles',
      name: 'Chilaquiles',
      note: 'Corn tortilla chips covered with your choice of sauce and Jack cheese. Served with refried beans and country potatoes. Add protein: shredded chicken, machaca, chorizo, avocado, chicken breast, or arrachera.',
      items: [
        { name: 'Poblano Sauce', description: 'Creamy poblano pepper sauce with Jack cheese.', price: 12 },
        { name: 'Chipotle Sauce', description: 'Rich and smoky chipotle cream sauce with Jack cheese.', price: 12 },
        { name: 'Red Salsa', description: 'Classic red salsa with a bright, savory kick.', price: 12 },
        { name: 'Green Salsa', description: 'Tangy tomatillo green salsa.', price: 12 },
        { name: 'Mole', description: 'Traditional mole sauce — rich, complex, and unforgettable.', price: 13 },
        { name: 'Divorciados', description: 'Half red, half green — the best of both worlds.', price: 13 },
      ],
    },
    {
      id: 'from-the-farm',
      name: 'From the Farm',
      note: 'Served with refried beans, country potatoes, and tortillas.',
      items: [
        { name: 'Huevos Rancheros', description: 'Two eggs on corn tortillas topped with ranchero sauce and cheese.', price: 12 },
        { name: 'Huevos a la Mexicana', description: 'Scrambled eggs with tomato, onion, and serrano pepper.', price: 12 },
        { name: 'Huevos Divorciados', description: 'Two eggs — one with red salsa, one with green salsa.', price: 13 },
        { name: 'Huevos Poblanos', description: 'Two eggs topped with creamy poblano sauce.', price: 12 },
        { name: 'Huevos en Cazuela', description: 'Eggs baked in a clay pot with salsa and cheese.', price: 13 },
        { name: 'Machaca con Huevos', description: 'Shredded beef with scrambled eggs.', price: 14 },
        { name: 'Chorizo con Huevos', description: 'Mexican chorizo with scrambled eggs.', price: 13 },
        { name: 'Bistec Ranchero', description: 'Beef stew in ranchero sauce.', price: 14 },
      ],
    },
    {
      id: 'antojitos',
      name: 'Antojitos Mexicanos',
      items: [
        { name: 'Molletes', description: 'Torta bread with refried beans, topped with melted cheese and salsa.', price: 10 },
        { name: 'Enchiladas Rancheras', description: 'Corn tortillas filled with cheese, topped with ranchero sauce.', price: 13 },
        { name: 'Breakfast Huarache', description: 'Handmade thick tortilla topped with beans, cheese, meat, and salsa.', price: 13 },
        { name: 'Chilaquiles Rojos con Chorizo', description: 'Red chilaquiles with Mexican chorizo.', price: 13 },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        { name: 'Café de Olla', description: 'Traditional Mexican coffee with cinnamon and piloncillo.', price: 5 },
        { name: 'Regular Coffee', description: 'Freshly brewed with free refills.', price: 4 },
        { name: 'Fresh Orange Juice', description: 'Squeezed to order.', price: 6 },
        { name: 'Fresh Juices', description: 'Seasonal fresh-pressed juices — ask your server.', price: 6 },
        { name: 'Mimosa', description: 'Champagne and orange juice.', price: 10 },
        { name: 'Mexican Hot Chocolate', description: 'Rich chocolate with cinnamon and a hint of spice.', price: 5 },
        { name: 'Horchata', description: 'Classic rice drink with cinnamon and vanilla.', price: 5 },
      ],
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        { name: 'Flan', description: 'Traditional Mexican caramel custard.', price: 7 },
        { name: 'Churros', description: 'Crispy fried dough with cinnamon sugar and chocolate sauce.', price: 8 },
        { name: 'Cajeta & Walnuts', description: 'Warm caramel sauce with walnuts over a sweet base.', price: 8 },
        { name: 'Guava & Cream Cheese', description: 'Sweet guava paste with creamy cheese.', price: 8 },
      ],
    },
    {
      id: 'sides',
      name: 'Side Orders',
      items: [
        { name: 'Refried Beans', description: 'Homemade and perfectly seasoned.', price: 4 },
        { name: 'Country Potatoes', description: 'Golden and crispy with seasoning.', price: 4 },
        { name: 'Side of Chilaquiles', description: 'A smaller portion of your favorite chilaquiles.', price: 6 },
        { name: 'Tortillas', description: 'Corn or flour, freshly warmed.', price: 3 },
        { name: 'Avocado', description: 'Sliced fresh avocado.', price: 4 },
      ],
    },
  ],

  privateDining: {
    eyebrow: 'Private Events',
    title: 'Celebrate with us at Talavera Azul.',
    intro:
      'Whether it is a family brunch, a birthday celebration, or a corporate breakfast, Talavera Azul is the perfect setting for your next private event. Our warm, colorful dining room sets the tone for a memorable gathering.',
    events: [
      {
        title: 'Family celebrations',
        text: 'Birthdays, baptisms, Mother\'s Day brunch, or just gathering the family for a beautiful meal. We will make it special.',
        imageKey: 'celebration',
      },
      {
        title: 'Group brunch',
        text: 'Friends, coworkers, or social clubs — our space comfortably seats groups of all sizes for a leisurely brunch.',
        imageKey: 'diningRoom',
      },
      {
        title: 'Catering & takeout',
        text: 'Bringing Talavera Azul to your event. Large orders and catering trays available for pickup.',
        imageKey: 'ingredients',
      },
    ],
    spaces: [
      {
        name: 'The Main Dining Room',
        capacity: 'Up to 50 seated',
        description:
          'Our full dining room surrounded by talavera tiles and traditional Mexican décor — perfect for larger celebrations and group events.',
        imageKey: 'interior',
      },
      {
        name: 'Outdoor Patio',
        capacity: 'Up to 20 seated',
        description:
          'Enjoy the Chula Vista sunshine with outdoor seating for smaller groups and casual gatherings.',
        imageKey: 'lounge',
      },
    ],
    notes:
      'Private events and large party reservations are available any day of the week. Please call ahead to arrange your event and discuss menu options. A deposit may be required for larger parties.',
    inquiryEmail: 'talaveraazul@outlook.com',
  },

  parking: {
    title: 'Parking',
    text: 'Street parking is available along 3rd Avenue and surrounding blocks. On Sundays, a farmer\'s market operates across the street — if you have a wait, take a stroll! A parking structure is nearby for additional options.',
  },

  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-117.082%2C32.638%2C-117.068%2C32.648&layer=mapnik&marker=32.643%2C-117.075',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Private Events', path: '/private-dining' },
  { label: 'Contact', path: '/contact' },
]

export function formatPrice(price) {
  if (typeof price === 'number') {
    return `$${price}`
  }
  if (typeof price === 'string' && price.includes('/')) {
    return price
      .split('/')
      .map((part) => {
        const trimmed = part.trim()
        return trimmed.startsWith('$') ? trimmed : `$${trimmed}`
      })
      .join(' / ')
  }
  if (price === 'Market') {
    return 'Market'
  }
  return price
}

export function getImage(imageKey) {
  return restaurant.images[imageKey] ?? ''
}
