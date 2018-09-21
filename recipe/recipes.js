const recipes = [
  {
    author: 'Provo High Culinary Students',
    url: '',
    isBasedOn: '',
    cookTime: '30 Min',
    datePublished: '2016-10-16',
    keywords: 'Waffles, Sweet Potato, Savory, Ginger, Side',
    description: 'Savory waffles made with Sweet potato with a hint of Ginger',
    image: '',
    recipeIngredient: [
      {
        amount: '2',
        units: 'Separated',
        ingredient: 'eggs'
      },
      {
        amount: '1/4',
        units: 'Cup',
        ingredient: 'Oil'
      },
      {
        amount: '1/4',
        units: 'tsp',
        ingredient: 'Salt'
      },
      {
        amount: '1/4',
        units: 'tsp',
        ingredient: 'Cayenne pepper'
      },
      {
        amount: '3/4',
        units: 'Cup',
        ingredient: 'Milk'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Brown Sugar'
      },
      {
        amount: '1 1/2',
        units: 'tsp',
        ingredient: 'Shredded Ginger'
      },
      {
        amount: '3/4',
        units: 'Cup',
        ingredient: 'Mashed Sweet Potatoes'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Minced Shallots'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Baking Powder'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Chives'
      },
      {
        amount: '1/4',
        units: 'Cup',
        ingredient: 'Cornmeal'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'Flour'
      }
    ],
    name: 'Sweet Potato Waffles',
    prepTime: '30 Min',
    recipeInstructions: [
      'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
      'Next add the cornmeal, chives, and flour and baking powder',
      'Whip the egg whites until stiff and fold in',
      'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
    ],
    recipeYield: '6 waffles'
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '',
    keywords: 'Cream, Rice, Chicken, Entree, Green Beans',
    description:
      'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
    image: '',
    recipeIngredient: [
      {
        amount: '2',
        units: 'Cubed',
        ingredient: 'Chicken tenders'
      },
      {
        amount: '4',
        units: 'Medium',
        ingredient: 'Mushrooms, sliced'
      },
      {
        amount: '1/2',
        units: 'Cup',
        ingredient: 'Whipping Cream'
      },
      {
        amount: '1-2',
        units: 'Tbsp',
        ingredient: 'Stone Ground Mustard'
      },
      {
        amount: '1',
        units: 'tsp',
        ingredient: 'Lemon Juice (or 2-3 drops lemon essential oil)'
      },
      {
        amount: '',
        units: '',
        ingredient: 'Salt and Pepper to taste'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'Rice'
      },
      {
        amount: '4-5',
        units: 'oz',
        ingredient: 'Fresh Green Beans'
      }
    ],
    name:
      'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
      'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
      'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
      'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
      'Serve sauce over rice, with the Green beans on the side.'
    ],
    recipeYield: '3 servings'
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    keywords: 'Potatoes, roasted, side',
    description:
      'Easy and delicious oven roasted potatoes that go great with almost anything.',
    image: '',
    recipeIngredient: [
      {
        amount: '3-4',
        units: 'Medium',
        ingredient: 'Potatoes, sliced'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Olive Oil'
      },
      {
        amount: '2',
        units: 'tsp',
        ingredient: 'Italian Seasoning'
      },
      {
        amount: '1/2',
        units: 'tsp',
        ingredient: 'Salt'
      },
      {
        amount: '1/2',
        units: 'tsp',
        ingredient: 'Ground Pepper'
      },
      {
        amount: '1-2',
        units: 'tsp',
        ingredient: 'Hot sauce (optional)'
      }
    ],
    name: 'Oven Roasted potato slices',
    prepTime: '10 min',
    recipeInstructions: [
      'Preheat oven to 400 deg F',
      'Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise)',
      'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
      'Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet',
      'Bake for 30 min or until the desired level of crispyness is achie  ved.'
    ],
    recipeYield: ''
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '2018-09-19',
    keywords: 'Rice, Black beans, Southwest, entree',
    description:
      'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
    image: '',
    recipeIngredient: [
      {
        amount: '1',
        units: 'Medium',
        ingredient: 'Onion, diced'
      },
      {
        amount: '2',
        units: 'cloves',
        ingredient: 'Garlic, minced'
      },
      {
        amount: '1',
        units: 'Tbsp',
        ingredient: 'Olive Oil'
      },
      {
        amount: '1',
        units: 'Can',
        ingredient: 'Black Beans (15oz)'
      },
      {
        amount: '1',
        units: 'Can',
        ingredient: 'Diced Tomatoes (15oz)'
      },
      {
        amount: '1/8',
        units: 'tsp',
        ingredient: 'Cayenne Pepper (optional)'
      },
      {
        amount: '2',
        units: 'Cups',
        ingredient: 'Brown Rice'
      },
      {
        amount: '',
        units: '',
        ingredient: 'Grated Cheese'
      },
      {
        amount: '',
        units: '',
        ingredient: 'Tortilla chips'
      }
    ],
    name: 'Black Beans and Rice',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
      'In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.',
      'Stir in the drained Black beans, Undrained tomatoes, and Cayenne.',
      'Bring to a boil, then reduce heat and simmer uncovered for 15 min.',
      'Serve over rice, topped with grated cheese and Tortilla chips.'
    ],
    recipeYield: '4 servings'
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    keywords: 'Curry, chicken, entree, Indian',
    description:
      'Quick and easy Chicken curry recipe made with easy to find ingredients.',
    image: '',
    recipeIngredient: [
      {
        amount: '4',
        units: 'Slices',
        ingredient: 'Bacon'
      },
      {
        amount: '1',
        units: 'clove',
        ingredient: 'Garlic, minced'
      },
      {
        amount: '2',
        units: 'Tbsp',
        ingredient: 'Flour'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'Water'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'Milk'
      },
      {
        amount: '3',
        units: 'Tbsp',
        ingredient: 'Tomato Paste'
      },
      {
        amount: '1/2',
        units: 'Cup',
        ingredient: 'Apple Sauce'
      },
      {
        amount: '3-4',
        units: 'tsp',
        ingredient: 'Curry powder'
      },
      {
        amount: '2',
        units: 'tsp',
        ingredient: 'Chicken bouillion'
      },
      {
        amount: '3/4',
        units: 'Cup',
        ingredient: 'Sour Cream'
      },
      {
        amount: '1-2',
        units: 'Cup',
        ingredient: 'Chicken, cubed'
      },
      {
        amount: '2',
        units: 'Cups',
        ingredient: 'Rice'
      }
    ],
    name: 'Chicken Curry',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 3 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (15-20 minutes)',
      'Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.',
      'Cook Chicken and Cube.',
      'Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, and bullion, and garlic.',
      'Bring to a boil, then reduce heat and simmer until rice is done.',
      'Before serving add crumbled bacon, chicken and stir in sour cream. Serve over rice.',
      'Can add condiments if desired: fried potatoes, raisins, toasted coconut, chutney, diced peppers, almonds, cashews.'
    ],
    recipeYield: '5 servings'
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '11 min',
    datePublished: '2018-09-19',
    keywords: 'Cookies, Chocolate chip, dessert',
    description: 'Delicious soft chocolate cookies with coconut.',
    image: '',
    recipeIngredient: [
      {
        amount: '1',
        units: 'Lb',
        ingredient: 'Butter, softened'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'White sugar'
      },
      {
        amount: '3',
        units: '',
        ingredient: 'eggs'
      },
      {
        amount: '1 1/2',
        units: 'Cups',
        ingredient: 'Brown sugar'
      },
      {
        amount: '1',
        units: 'tsp',
        ingredient: 'Baking soda'
      },
      {
        amount: '1',
        units: 'tsp',
        ingredient: 'Vanilla extract'
      },
      {
        amount: '1/4',
        units: 'tsp',
        ingredient: 'salt'
      },
      {
        amount: '5',
        units: 'Cups',
        ingredient:
          'Flour (We like mixing 2 cups whole wheat with 3 cups white)'
      },
      {
        amount: '2',
        units: 'Cups',
        ingredient: 'Chocolate Chips'
      },
      {
        amount: '1',
        units: 'Cup',
        ingredient: 'Coconut, shredded'
      }
    ],
    name: 'Chocolate Chip Cookies',
    prepTime: '15 min',
    recipeInstructions: [
      'Preheat oven to 350F.',
      'Cream butter, white sugar, and eggs together.',
      'Add brown sugar, salt, baking soda, and vanilla. Mix well.',
      'Add flour, chocolate chips, and coconut. Mix well.',
      'Place on baking sheet in rows of 1-1.5 inch balls of dough.',
      'Bake for 11-12 minutes.'
    ],
    recipeYield: '8 dozen'
  }
];

export default recipes;
