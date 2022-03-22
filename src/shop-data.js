const SHOP_DATA = [
  {
    title: 'Cold Press Juice',
    items: [
      {
        id: 1,
        name: 'Green Latifah',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/271978497_292212919606576_6015026674998478623_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=GOFjzBhAjPMAX_B72Gz&_nc_oc=AQmsrNlbmYUc1KW_DYOLrgGoDg2dOyVe-xV1YnN6z2HVAriFQLXl5ni61mhGcA7ydAs&_nc_ht=scontent-lga3-1.xx&oh=00_AT-7FuuOrDVbHsD6o7FLU5lkuixMXRL6KSwEZHOm7BTy8g&oe=623DCCF8',
        description: 'Spinach, Celery, Ginger, Lemon, Green Apple',
        price: 8,
      },
      {
        id: 2,
        name: 'Kale Mary',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/241527538_208142181346984_5685926323196565250_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Bo-yrmayTkgAX_BQBeO&_nc_ht=scontent-lga3-1.xx&oh=00_AT9OOqfZ3XBkJolGu_-cN18lZpJyi2lxAt3hkkjEeY7ihA&oe=623CF411',
        description: 'Kale, Pineapple, Lemon, Green Apple, Cucumber',
        price: 8,
      },
      {
        id: 3,
        name: 'Jungle Fever',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/273781801_309731214521413_5799931331461692833_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=qMhBk8DNW4QAX8GQiny&_nc_ht=scontent-lga3-1.xx&oh=00_AT9ounYG8HbQEcCPxuKSWEZ35tcDbWK3TbEJnaAb0RUvqg&oe=623D447C',
        description: 'Carrot, Pineapple, Red Apple, Pear',
        price: 8,
      },
      {
        id: 4,
        name: 'Get In the Water (Seasonal)',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/270824434_283454850482383_867739724475306341_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CEhA1idJPcwAX_hn0ih&_nc_ht=scontent-lga3-1.xx&oh=00_AT80_sCkCZ32wsz5wFHCNLpNIuT-42SyrThPHyuF-6NmlQ&oe=623D15BD',
        description: 'Watermelon',
        price: 8,
      },
      {
        id: 5,
        name: 'Customized Cold Press Juice',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/241474414_208142284680307_8469679974383104866_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ENTsGq9o3HkAX8iwIlz&_nc_ht=scontent-lga3-1.xx&oh=00_AT_Q7KvQHF2pPpkRIt8rk2raFK4qA1zM7SU1IqHJJuPteQ&oe=623C29C6',
        description: '',
        price: 10,
      },
    ],
  },
  {
    title: 'All is Well Immunity Shots',
    items: [
      {
        id: 6,
        name: 'Woo-Tang',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/271898836_289904879837380_5863436965268404964_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1wrhYTiQZP8AX_akpZE&_nc_ht=scontent-lga3-1.xx&oh=00_AT9QUr12tjR62VhvSbqR0B7_Brnl0TgchS1b-m-zM5XvXw&oe=623DCFED',
        description: 'Lemon, Ginger, Tumeric, Black Pepper, Cheyenne Pepper',
        price: 5,
      },
      {
        id: 7,
        name: 'Killa Beez',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274221116_310961991065002_6477990513099438169_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=IdPO5y_sJCQAX80SLfg&_nc_ht=scontent-lga3-1.xx&oh=00_AT8UOHtsrz6_B5x2xrF10iJp4egASIJQzceA3_k9y7Yxjw&oe=623EECB9',
        description: 'Lemon, Turmeric, Honey',
        price: 5,
      },
    ],
  },
  {
    title: 'Tribe Drinks 16oz',
    items: [
      {
        id: 8,
        name: 'Tribe Aid',
        imageUrl:
          'https://tastesbetterfromscratch.com/wp-content/uploads/2019/03/Strawberry-Lemonade-8-500x500.jpg',
        description: 'Strawberry Lemonade',
        price: 3.5,
      },
      {
        id: 9,
        name: 'Iced/Frozen Matcha',
        imageUrl:
          'https://www.ohhowcivilized.com/wp-content/uploads/2019/07/0719-matcha-frappuccino-7.jpg',
        description: 'Strawberry Add-in Available',
        price: 4,
      },
      {
        id: 10,
        name: 'MC Latte',
        imageUrl:
          'https://i2.wp.com/bakingmischief.com/wp-content/uploads/2021/02/iced-chai-tea-latte-image-683x1024.jpg',
        description: 'Chai, Black Tea, Nutmeg, Vanilla Latte served over ice',
        price: 4,
      },
      {
        id: 11,
        name: 'Public Lemony #1',
        imageUrl:
          'https://www.playpartyplan.com/wp-content/uploads/2021/09/creamy-lemonade-7-of-10.jpg',
        description: 'Creamy Lemonade (Dairy)',
        price: 4,
      },
      {
        id: 12,
        name: 'Wild Berry Pomegranate Juice',
        imageUrl:
          'https://cdn.healthyrecipes101.com/wp-content/uploads/2020/10/Tips-for-Making-Pomegranate-Blueberry-Juice.jpg',
        description: '',
        price: 3.5,
      },
      {
        id: 13,
        name: 'Iced / Frozen Coffee',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274587741_312813510879850_2973076665596437501_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=YhUl_uHyghAAX-yTXyU&_nc_ht=scontent-lga3-1.xx&oh=00_AT_gYjmq_dS-F5tywMeiDjvpXt3_uiN96BRsfhnniBI_kg&oe=623DFCF9',
        description: '',
        price: 4,
      },
    ],
  },
  {
    title: 'Build Your Own Smoothies',
    items: [
      {
        id: 14,
        name: 'Fruit Options',
        imageUrl:
          'https://www.smalltownwoman.com/wp-content/uploads/2018/05/Summer-Fruit-Salad-3-III.jpg',
        description:
          'Mango, Pineapple, Strawberry, Banana, Blueberry, Mixed Berry',
        price: 3,
      },
      {
        id: 15,
        name: 'Base Options',
        imageUrl:
          'https://thenewsette.com/app/uploads/2018/04/shutterstock_356792147-milk_alternatives-blog-sm.jpg',
        description: 'Whole Milk, Oat Milk, Almond Milk, Coconut Water',
        price: 3,
      },
      {
        id: 16,
        name: 'Add-Ins',
        imageUrl:
          'https://www.joyfulhealthyeats.com/wp-content/uploads/2021/12/No-Bake-Chocolate-Peanut-Butter-Energy-Balls-web-1.jpg',
        description:
          'Almond Butter, Flaxseed, Chia seeds, hemp seed, Nutella, peanut butter, peanut butter powder, agave, honey, yogurt, protein powder, coconut flakes, Tribe Mix',
        price: 0.5,
      },
    ],
  },
  {
    title: 'Food Items',
    items: [
      {
        id: 17,
        name: 'Lil Tribe Bowl',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275125889_319123706915497_3518227365510990320_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ybJy0Ja0FiEAX-aXxVe&_nc_ht=scontent-lga3-1.xx&oh=00_AT-Qg8F5UjkBfvR-7ufkSZn_lNVdv0Dl92Xz2CFr4hbgBg&oe=623EC981',
        description:
          'Blended Acai Berry with added blueberry, banana, almond butter, topped with strawberry, blueberry and banana',
        price: 7,
      },
      {
        id: 18,
        name: 'Tribe Salad',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274482853_313425530818648_4633102519737583883_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=7epqt9OqsSwAX_Ltsco&_nc_ht=scontent-lga3-1.xx&oh=00_AT9lOEd5t_07nGUGU_OVoHRwNRe_ZFw1mYlhO2pPLL35Nw&oe=623ED0CF',
        description:
          'spinach, cucumber, carrot, everything bagel seasoning, fresh strawberries and blueberries, mozzarella and feta cheese served with Parmesan crisp and your choice of a creamy Italian vinaigrette or Asian Thai dressing',
        price: 7,
      },
      {
        id: 19,
        name: 'Panini',
        imageUrl:
          'https://i0.wp.com/chewnibblenosh.com/wp-content/uploads/2013/06/Grilled-Mozzarella-and-Spinach-BLTs-Chew-Nibble-Nosh.png?ssl=1',
        description:
          'Panini bread, spinach, mozzarella, tomato, Everything Bagel Seasoning',
        price: 6,
      },
      {
        id: 20,
        name: 'Avocado Toast',
        imageUrl:
          'https://valentinascorner.com/wp-content/uploads/2020/08/Avocado-Toast-3.jpg',
        description:
          'Toasted French Bread topped with Avocado spread and Everything Bagel Seasoning',
        price: 5,
      },
      {
        id: 21,
        name: 'Bagels',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0168/5018/products/Keto-Friendly-Bagels_900x.jpg?v=1600379424',
        description:
          'Plain, Everything Seasoned, Cinnamon Raisin | Spreads/Toppings - Honey, peanut butter, Nutella, Tribe mix, almond butter, flaxseed, Chia seeds, hemp seed, yogurt, coconut flakes',
        price: 3,
      },
      {
        id: 22,
        name: 'Tribe Mix',
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/273302903_303069648520903_1454981720849930296_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=mMkv7Gf0xwIAX8g3jc4&_nc_ht=scontent-lga3-1.xx&oh=00_AT9q1w-Cxs7piebjeFNovUdn7bTvstfS54dZCz4oxmDkSQ&oe=623DC91A',
        description:
          'dried cranberries, dried blueberries, pumpkin granola, flaxseed, hemp seed, Chia seed, sunflower seed kernels, peanuts',
        price: 5,
      },
      {
        id: 23,
        name: "Nutty By Nature's",
        imageUrl:
          'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/272991396_298222609005607_816017839472929537_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=hFyh0MvJsZ0AX-9zIYU&_nc_ht=scontent-lga3-1.xx&oh=00_AT_DR-qtLsO9ix_CSGJk-rVHdU-Gta_BlnhIs4JdslnOpQ&oe=623CF96F',
        description:
          'oats, flaxseed, semi sweet chocolate chips, honey, peanut butter',
        price: 5,
      },
      {
        id: 24,
        name: 'Mini Cheesecakes',
        imageUrl:
          'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_44/1502006/joy-bauer-today-main-191101-02.jpg',
        description: '',
        price: 3.5,
      },
    ],
  },
];

export default SHOP_DATA;
