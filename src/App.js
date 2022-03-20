import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Cold Press Juice',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/276148606_329098219251379_2245295210243879570_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oT5bzIKTCeoAX_QZCII&_nc_ht=scontent-lga3-1.xx&oh=00_AT9Ot8lq2j46oHg5MAyIqNS1klQkqA9LZouQrPohl_sdGw&oe=623B8A97',
    },
    {
      id: 2,
      title: 'Immunity Shots',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/276277714_327779976049870_1746200204362147358_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=USDZ0IuokTYAX8j27KF&_nc_ht=scontent-lga3-1.xx&oh=00_AT8yQiPBV7W0TyAMgibiKvR31vPjDkMTz5xRZsTVx0eYfA&oe=623A9BE7',
    },
    {
      id: 3,
      title: 'Tribe Drinks',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275285005_319716410189560_9217494086313510319_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxliX6Mit5UAX-eYVHM&_nc_ht=scontent-lga3-1.xx&oh=00_AT9dMwvhsUvQJ6FaMcd33aa9Ib_xZAyMexHsEiIEbpOtlA&oe=623A985D',
    },
    {
      id: 4,
      title: 'BYO Smoothies',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/245509539_232081288953073_8038754401020890526_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XNqsC1N3I6sAX8E9cvU&_nc_ht=scontent-lga3-1.xx&oh=00_AT8XbwVA8TjyzIqYSNqPpu6mxbkt2vJS8BDXHQQmPVe9Dg&oe=623C3F67',
    },
    {
      id: 5,
      title: 'Entrees',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274987452_317165230444678_8246997711663751173_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xF9c7zHaxTEAX9VNPES&_nc_ht=scontent-lga3-1.xx&oh=00_AT8VigJcN5_Aner17dMLAWXz_XrUiG5pyeKnqrp-eBtl9w&oe=623AA720',
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
