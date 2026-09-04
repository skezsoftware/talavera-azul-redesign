export const restaurant = {
  name: 'Talavera Azul',
  shortName: 'Talavera',
  established: 2008,
  tagline: 'Desayuno mexicano auténtico · Breakfast & brunch',
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
    display: 'talaveraazul.shop@gmail.com',
    href: 'mailto:talaveraazul.shop@gmail.com',
  },

  hours: [
    { days: 'Monday – Sunday', time: '8:00 am – 2:00 pm' },
  ],

  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/talavera_azul_restaurant/' },
    { name: 'Facebook', href: 'https://www.facebook.com/talaverazul' },
    { name: 'Yelp', href: 'https://www.yelp.com/biz/talavera-azul-chula-vista' },
    { name: 'Food Network', href: 'https://www.foodnetwork.com/restaurants/ca/chula-vista/marcela-valladolid-chilaquiles-talavera-azul-restaurant' },
  ],

  reservationUrl: 'tel:+16194276476',

  primaryCta: {
    label: 'Call for Reservations',
    href: 'tel:+16194276476',
  },
  secondaryCta: {
    label: 'Ver Menú',
    href: '/menu',
  },

  logo: '/images/logo.png',

  colors: {
    ivory: '#faf7f0',
    charcoal: '#2a2522',
    olive: '#1b5e7b',
    gold: '#e85c12',
    goldSoft: '#f28a3a',
  },

  images: {
    hero: '/images/menu-covers.jpg',
    storefront: '/images/storefront.jpg',
    thirdAvenue: '/images/third-avenue.jpg',
    diningRoom: '/images/dining-room.jpg',
    diningEntrance: '/images/dining-entrance.jpg',
    diningTables: '/images/dining-tables.jpg',
    potteryNiche: '/images/pottery-niche.jpg',
    potteryShelf: '/images/pottery-shelf.jpg',
    ceramicCrosses: '/images/ceramic-crosses.jpg',
    hearth: '/images/menu-covers.jpg',
    interior: '/images/dining-tables.jpg',
    chef: '/images/pottery-shelf.jpg',
    kitchen: '/images/pottery-niche.jpg',
    ingredients: '/images/ceramic-crosses.jpg',
    talavera: '/images/ceramic-crosses.jpg',
    chilaquiles: '/images/chilaquiles.jpg',
    huevosMachaca: '/images/huevos-machaca.jpg',
    cafeDeOlla: '/images/cafe-de-olla.jpg',
  },

  about: {
    eyebrow: 'Nuestra Historia',
    title: 'Almost two decades of authentic Mexican breakfast.',
    lead:
      'Talavera Azul opened on August 1, 2008, bringing the flavors and traditions of Tijuana to downtown Chula Vista.',
    story: [
      'The Curiel family has been in the restaurant business since 1983, when they opened La Leña — the first steakhouse geared toward fine dining in Tijuana. After years of perfecting homestyle Mexican cuisine, they brought that same passion and tradition across the border to Chula Vista.',
      'Talavera Azul was born from a simple idea: serve the same beloved breakfast recipes that families enjoy in Tijuana — chilaquiles, machaca con huevos, huevos rancheros, café de olla — in a warm, welcoming space adorned with vibrant talavera tiles and traditional Mexican décor.',
      'What started as a neighborhood breakfast spot quickly became a Chula Vista institution. Nearly two decades later, the restaurant is known for its generous portions, unforgettable chilaquiles, and the kind of hospitality that makes every guest feel like family. The line out the door every weekend tells the story better than we ever could.',
    ],
    philosophy: {
      title: 'Cómo Cocinamos',
      text: 'Every dish at Talavera Azul is made from scratch with family recipes passed down through generations. We believe breakfast should be hearty, flavorful, and made with love — con mucho cariño.',
      points: [
        {
          title: 'Recetas de familia',
          text: 'Homestyle dishes straight from the Curiel family kitchen in Tijuana — the same flavors, the same care, every single day.',
        },
        {
          title: 'Ingredientes frescos',
          text: 'Handmade salsas, fresh tortillas, and sauces prepared daily so every plate is bursting with authentic flavor.',
        },
        {
          title: 'Hecho con cariño',
          text: 'From our creamy poblano sauce to our rich café de olla, everything is crafted with the attention it deserves.',
        },
      ],
    },
    interior: {
      title: 'El Comedor',
      text: 'Step inside and you are surrounded by vibrant cobalt-blue talavera tiles, hand-painted pottery, and charming Mexican décor. The atmosphere is cozy, roomy, and unmistakably authentic — a dining room designed to make you feel like you have been transported to a favorite breakfast spot in Mexico. Outdoor seating is available for those who enjoy the Chula Vista sunshine.',
    },
  },

  chef: {
    name: 'La Familia Curiel',
    title: 'Dueños y Operadores',
    imageKey: 'chef',
    bio: [
      'The Curiel family has been in the restaurant business for over four decades, starting with La Leña in Tijuana in 1983. Owner Enrique Román Curiel personally oversees the dining room, greeting guests, pouring café de olla, and ensuring every table is taken care of.',
      'Their approach is simple: serve homestyle Mexican breakfast the way it should be — generous, authentic, and made with recipes that have been perfected over generations. From the kitchen to the floor, Talavera Azul is truly a family affair.',
    ],
  },

  featuredItems: [
    {
      name: 'Chilaquiles',
      description: 'Deep-fried corn tortilla chips with your choice of sauce and Jack cheese. Served with refried beans and country potatoes.',
      price: 15,
      imageKey: 'chilaquiles',
    },
    {
      name: 'Huevos con Machaca',
      description: 'Scrambled eggs with shredded beef, onions, peppers, and tomatoes. Served with refried beans, country potatoes, and tortillas.',
      price: 13.5,
      imageKey: 'huevosMachaca',
    },
    {
      name: 'Café de Olla',
      description: 'Traditional Mexican coffee brewed with cinnamon and piloncillo.',
      price: 4,
      imageKey: 'cafeDeOlla',
    },
  ],

  experience: {
    eyebrow: 'La Experiencia',
    title: 'Breakfast worth waiting in line for.',
    text: 'Talavera Azul is more than a meal — it is a morning ritual for Chula Vista. From the aroma of café de olla to the vibrant talavera décor, every detail is designed to make you feel at home.',
    points: [
      'Authentic Mexican breakfast made from scratch daily',
      'Ambiente familiar con azulejos y cerámica talavera',
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
        { name: 'Fresh Fruit Salad', description: 'Seasonal fruit with your choice of vanilla yogurt or cottage cheese, topped with granola.', price: 12 },
        { name: 'Papaya Plate', description: 'Served with your choice of vanilla yogurt or cottage cheese, topped with granola.', price: 12 },
        { name: 'Oatmeal', description: 'Served with raisins, brown sugar, powdered cinnamon, milk, diced green apple, and a side of toast.', price: 12 },
      ],
    },
    {
      id: 'pancakes-waffles',
      name: 'Pancakes, Waffles, and More',
      items: [
        { name: 'Three Buttermilk Pancakes', description: 'Topped with powdered sugar unless otherwise specified.', price: 10.5 },
        { name: 'French Toast', description: 'Topped with strawberries, bananas, whipped cream, and powdered sugar.', price: 13 },
        { name: 'Golden Waffle', description: 'Topped with strawberries, bananas, whipped cream, and powdered sugar.', price: 10.5 },
        { name: 'The Monte Cristo', description: 'Ham, turkey, and Jack cheese sandwiched between two thick slices of French toast. Served with seasonal fruit and country potatoes.', price: 13.5 },
        { name: 'Breakfast Croissant', description: 'Scrambled egg, ham, bacon, and Jack cheese. Served with seasonal fruit and country potatoes.', price: 13.5 },
        { name: 'House Special', description: 'Two eggs any style, potatoes, and your choice of two bacon strips, sausage patty, or sliced ham. Served with your choice of two pancakes or two French toast halves.', price: 14 },
      ],
    },
    {
      id: 'omelets',
      name: 'Omelets',
      note: 'All omelets are served with refried beans, country potatoes, and tortillas. Egg-white substitution: Add $1.50.',
      items: [
        { name: 'La Espadaña Omelet', description: 'Mushrooms, green pepper slices, Jack cheese, and ham. Topped with our signature chipotle cream sauce.', price: 14.5 },
        { name: 'The Works Omelet', description: 'Bacon, sausage, ham, and Jack cheese. Option to top with any sauce or salsa.', price: 14.5 },
        { name: 'Chorizo Omelet', description: 'Jack cheese, green pepper slices, mushrooms, and pork chorizo. Topped with our fresh Ranchero salsa.', price: 14.5 },
        { name: 'Chicharrón in Green Salsa Omelet', description: 'Jack cheese and green pepper slices. Topped with chicharrón in green salsa.', price: 14.5 },
        { name: 'Poblano Omelet', description: 'Green pepper slices, corn, Jack cheese, and onion. Topped with our Poblano cream sauce.', price: 14.5 },
        { name: 'Verde Omelet', description: 'Green pepper slices, onions, mushrooms, spinach, and tomatoes. Topped with avocado and green salsa.', price: 14.5 },
        { name: 'California Omelet', description: 'Jack cheese, ham, and onions. Topped with avocado and chipotle cream sauce.', price: 14.5 },
        { name: 'Panela Omelet', description: 'Panela cheese, tomatoes, and spinach. Topped with Poblano cream sauce.', price: 14.5 },
        { name: 'Spinach and Mushroom Omelet', description: 'Jack cheese, mushrooms, and spinach. Topped with Ranchero salsa.', price: 14.5 },
      ],
    },
    {
      id: 'chilaquiles',
      name: 'Chilaquiles',
      note: 'Deep-fried corn tortilla chips with your choice of sauce.',
      items: [
        { name: 'Green Salsa', description: 'With Jack cheese.', price: 15 },
        { name: 'Red Salsa', description: 'With Jack cheese.', price: 15 },
        { name: 'Poblano Sauce', description: 'With Jack cheese.', price: 15 },
        { name: 'Chipotle Sauce', description: 'With Jack cheese.', price: 15 },
        { name: 'Mole', description: 'With Cotija cheese.', price: 15 },
      ],
      addonsTitle: 'Chilaquiles Add-Ons',
      addons: [
        { name: 'Two Eggs Any Style', price: 5 },
        { name: 'Egg Whites', price: 1.5 },
        { name: 'Shredded Chicken', price: 4.5 },
        { name: 'Half Avocado', price: 3 },
        { name: 'Shredded Beef', price: 4.5 },
        { name: 'Chicken Breast', price: 6.5 },
        { name: 'Chorizo', price: 4.5 },
        { name: 'Arrachera', price: 8 },
      ],
    },
    {
      id: 'from-the-farm',
      name: 'From the Farm',
      note: 'All From the Farm entrées are served with refried beans, country potatoes, and tortillas. Egg-white substitution: Add $1.50.',
      items: [
        { name: 'Talavera Breakfast Combination', description: 'Choice of any omelet with a side of chilaquiles.', price: 18.5 },
        { name: 'Huevos Rancheros', description: 'Two fried eggs on a corn tortilla, covered with your choice of Ranchero, green, chipotle, or mole sauce.', price: 11.5 },
        { name: 'Huevos a la Mexicana', description: 'Scrambled eggs with diced tomatoes, onions, and jalapeño peppers.', price: 12.5 },
        { name: 'Huevos con Chorizo', description: 'Scrambled eggs with pork chorizo.', price: 13 },
        { name: 'Huevos con Jamón', description: 'Scrambled eggs with ham.', price: 13 },
        { name: 'Huevos con Machaca', description: 'Scrambled eggs with shredded beef, onions, peppers, and tomatoes.', price: 13.5 },
        { name: 'Huevos con Nopales', description: 'Scrambled eggs with sautéed onions, fresh nopales, tomatoes, and diced jalapeño.', price: 12 },
      ],
    },
    {
      id: 'antojos',
      name: 'Antojos Mexicanos',
      items: [
        { name: 'Healthy Heart', description: 'Scrambled egg whites, half avocado, panela cheese, and wheat toast.', price: 13 },
        { name: 'Machaca Sonora', description: 'Salty dry meat with onions, peppers, tomatoes. Served with refried beans, country potatoes, and tortillas. Add two eggs any style for $4.00.', price: 16 },
        { name: 'Machaca Ranchera', description: 'Shredded beef with onions, peppers, and tomatoes. Served with refried beans, country potatoes, and tortillas.', price: 13 },
        { name: 'Chicharrón in Green Salsa', description: 'Served with refried beans, country potatoes, and tortillas.', price: 14 },
        { name: 'Red Menudo', description: 'Weekends only.', price: 14 },
        { name: 'Molletes', description: 'Telera bread with refried beans, topped with cheese and pork chorizo.', price: 14 },
        { name: 'Corn Tamales in Green Salsa', description: 'Two corn tamales served with Mexican crema, Cotija cheese, and green salsa. Served with refried beans.', price: 12 },
        { name: 'Bistec Ranchero', description: 'Served with country potatoes, refried beans, and tortillas.', price: 14 },
        { name: 'Queso Fundido', description: 'Melted cheese with your choice of pork chorizo, mushrooms, or rajas.', price: 11 },
      ],
    },
    {
      id: 'burritos',
      name: 'Burritos',
      items: [
        { name: 'La Espadaña Burrito', description: 'Scrambled eggs with green pepper, refried beans, Jack cheese, and chipotle cream sauce. Served with refried beans.', price: 12.5 },
        { name: 'Talavera Burrito', description: 'Arrachera meat, sour cream, Jack cheese, potatoes, and guacamole. Served with refried beans.', price: 13.5 },
        { name: 'Pork Chorizo and Eggs', description: 'Served with refried beans.', price: 12.5 },
        { name: 'Pork Chorizo and Potatoes', description: 'Served with refried beans.', price: 12.5 },
        { name: 'Machaca Burrito', description: 'Served with refried beans.', price: 12.5 },
      ],
    },
    {
      id: 'good-afternoon',
      name: 'Good Afternoon',
      footer: 'The beans are made with beef chorizo and topped with Cotija cheese.',
      items: [
        { name: 'Enchiladas', description: 'Two chicken, cheese, or beef enchiladas with your choice of green, red, mole, chipotle, or Poblano sauce. Topped with lettuce, pico de gallo, Cotija cheese, and Mexican crema. Served with rice and beans.', price: 14.5 },
        { name: 'Sopes', description: 'Two beef, chicken, or chorizo sopes topped with refried beans, lettuce, pico de gallo, Cotija cheese, and Mexican crema. Served with rice and beans.', price: 14 },
        { name: 'Flautas', description: 'Four beef or chicken rolled tacos topped with lettuce, pico de gallo, Mexican crema, guacamole, and Cotija cheese. Served with rice and beans.', price: 14.5 },
        { name: 'Tacos', description: 'Two arrachera or grilled chicken street-style tacos topped with guacamole, cilantro, and onion. Served with rice and beans.', price: 10.5 },
        { name: 'Quesadillas', description: 'Two corn or flour quesadillas. Served with beans.', price: 8.5 },
        { name: 'Chile Relleno', description: 'Poblano pepper stuffed with Oaxaca cheese and topped with Ranchero sauce and Cotija cheese. Served with rice, beans, and tortillas.', price: 14 },
        { name: 'Tostadas', description: 'Two beef or chicken tostadas topped with refried beans, lettuce, pico de gallo, Mexican crema, and Cotija cheese. Served with rice and beans.', price: 12.5 },
        { name: 'Chicken Mole Tostadas', description: 'Two mole chicken tostadas topped with lettuce, pico de gallo, Mexican crema, and Cotija cheese. Served with rice and beans.', price: 13.5 },
        { name: 'Torta', description: 'Grilled arrachera or chicken, guacamole, Jack cheese, onion, cilantro, and refried beans. Served with French fries.', price: 14 },
        { name: 'One Quesadilla', description: 'One large quesadilla with arrachera meat. Served with guacamole, sour cream, rice, and beans.', price: 11.5 },
        { name: 'Chicken Breast', description: 'Chicken breast with your choice of mole or mushroom pasilla pepper sauce. Served with rice, beans, and tortillas.', price: 15 },
        { name: 'Carne Asada Plate', description: 'Arrachera meat served with guacamole, rice, panela cheese, beans, and tortillas.', price: 17 },
        { name: 'Puños', description: 'Diced arrachera meat sautéed with bacon and green onions, topped with melted Jack cheese. Served with rice, beans, and tortillas.', price: 16.5 },
        { name: 'Fajitas', description: 'Chicken or beef fajitas, onions, bell peppers, and Jack cheese. Served with rice, beans, and tortillas.', price: 17 },
        { name: 'Tampiqueña', description: 'Arrachera meat served with one red cheese enchilada, guacamole, rice, beans, and tortillas.', price: 18.5 },
      ],
    },
    {
      id: 'kids-menu',
      name: 'Kids Menu',
      items: [
        { name: 'One Egg', description: 'One egg any style. Choice of two sides: country potatoes or refried beans, and a slice of ham or bacon strip.', price: 8 },
        { name: 'Mini Pancakes', description: 'Two mini pancakes, one egg, and choice of bacon strip, sausage, or ham.', price: 8 },
        { name: 'Mini Burrito', description: 'Shredded beef or chicken burrito. Served with refried beans.', price: 8 },
        { name: 'Rolled Taquitos', description: 'Two beef or chicken taquitos topped with Mexican crema and Cotija cheese. Served with refried beans.', price: 8 },
        { name: 'Quesadillas', description: 'Two quesadillas served with refried beans.', price: 8 },
      ],
    },
    {
      id: 'sides',
      name: 'Side Orders',
      items: [
        { name: 'Chiles Toreados', price: 4 },
        { name: 'Ham', price: 3.5 },
        { name: 'Bacon, 4 Strips', price: 5 },
        { name: 'Sausage, 2 Patties', price: 4 },
        { name: 'Toast', price: 3.5 },
        { name: 'One Pancake', price: 3.5 },
        { name: 'Half Avocado', price: 3 },
        { name: 'Panela Cheese', price: 4.5 },
        { name: 'Sour Cream', price: 2 },
        { name: 'Corn Tamal', price: 4.5 },
        { name: 'Guacamole', price: 7 },
      ],
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        { name: 'Crepes', description: 'Choice of cajeta and walnuts; guava and cream cheese; Nutella with strawberry and banana.', price: 10 },
        { name: 'House Flan', price: 7 },
        { name: 'Cheesecake', price: 7 },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        { name: 'Coffee', price: 3 },
        { name: 'Café de Olla', price: 4 },
        { name: 'Hot Chocolate', price: 3.5 },
        { name: 'Milk', price: 3 },
        { name: 'Hot Tea', price: 3 },
        { name: 'Chocolate Milk', price: 5 },
        { name: 'Cranberry or Apple Juice', price: 3.5 },
        { name: 'Bottled Water', price: 2.5 },
        { name: 'Freshly Squeezed Orange Juice', price: 5.5 },
        { name: 'Fresh Carrot Juice', price: 6.5 },
        { name: 'Fresh Grapefruit Juice', price: 6.5 },
        { name: 'Strawberry and/or Banana Smoothie', price: 7 },
        { name: 'Green Healthy Smoothie', description: 'Fresh orange juice, spinach, pineapple, celery, cactus, parsley, and honey.', price: 7.5 },
        { name: 'Mexican Bottled Coke, Sprite, or Fanta', price: 3.5 },
        { name: 'Diet Coke', price: 3 },
        { name: 'Horchata or Jamaica', description: 'Free refill.', price: 3.5 },
        { name: 'Lemonade or Passion Fruit Iced Tea', description: 'Free refill.', price: 3.5 },
        { name: 'Bottled Beer', price: 5 },
        { name: 'Mimosa, Orange or Cranberry', price: 5 },
        { name: 'Mimosa Bottle Combination', price: 25 },
        { name: 'Sparkling Bottled Water', price: 3.5 },
      ],
    },
  ],

  parking: {
    title: 'Estacionamiento',
    text: 'Street parking is available along 3rd Avenue and surrounding blocks. On Sundays, a farmer\'s market operates across the street — if you have a wait, take a stroll! A parking structure is nearby for additional options.',
  },

  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-117.082%2C32.638%2C-117.068%2C32.648&layer=mapnik&marker=32.643%2C-117.075',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menú', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export function formatPrice(price) {
  if (typeof price === 'number') {
    return `$${price.toFixed(2)}`
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
