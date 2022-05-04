import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Cold Press Juice',
    imageUrl:
      'https://lifestylefrisco.com/wp-content/uploads/2021/05/cold-press-juice-scaled.jpg',
    route: 'shop/cold press juice',
  },
  {
    id: 2,
    title: 'All is Well Immunity Shots',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/juice-shot-variations-royalty-free-image-1576273623.jpg',
    route: 'shop/all is well immunity shots',
  },
  {
    id: 3,
    title: 'Tribe Drinks 16oz',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0531/8239/8633/products/VARIETY-PACK-FRUIT-DRINKS_400x.jpg?v=1616519354',
    route: 'shop/tribe drinks 16oz',
  },
  {
    id: 4,
    title: 'Build Your Own Smoothies',
    imageUrl:
      'https://www.thelittleepicurean.com/wp-content/uploads/2017/01/green-smoothies.jpg',
    route: 'shop/build your own smoothies',
  },
  {
    id: 5,
    title: 'Food Items',
    imageUrl:
      'https://www.campuscooks.com/wp-content/uploads/2021/06/blog_snacks72.jpg',
    route: 'shop/food items',
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
