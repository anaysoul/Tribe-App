import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Cold Press Juice',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/272668265_295801445914390_6761783403408780219_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=5aH9mAqA1psAX-Ae3nh&tn=F-N0ZrL6P3BitgYl&_nc_ht=scontent-lga3-1.xx&oh=00_AT9ZQAbZoqWyEuXG4rCo3euvSdpAU7GuPWEvCD1IKFPwLQ&oe=623B8368',
    },
    {
      id: 2,
      title: 'All is Well Immunity Shots',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/276277714_327779976049870_1746200204362147358_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=USDZ0IuokTYAX8j27KF&_nc_ht=scontent-lga3-1.xx&oh=00_AT8yQiPBV7W0TyAMgibiKvR31vPjDkMTz5xRZsTVx0eYfA&oe=623A9BE7',
    },
    {
      id: 3,
      title: 'Tribe Drinks 16oz',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275672424_324156473078887_7178719646634436105_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NQjznVn_X0IAX_bDH1x&_nc_ht=scontent-lga3-1.xx&oh=00_AT_-JgbEfOYa7ZNnoiF-tecRgbGlZTVj6i7OveYsbnhZRA&oe=623BCC40',
    },
    {
      id: 4,
      title: 'Build Your Own Smoothies',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/245509539_232081288953073_8038754401020890526_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XNqsC1N3I6sAX8E9cvU&_nc_ht=scontent-lga3-1.xx&oh=00_AT8XbwVA8TjyzIqYSNqPpu6mxbkt2vJS8BDXHQQmPVe9Dg&oe=623C3F67',
    },
    {
      id: 5,
      title: 'Food Items',
      imageUrl:
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274987452_317165230444678_8246997711663751173_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xF9c7zHaxTEAX9VNPES&_nc_ht=scontent-lga3-1.xx&oh=00_AT8VigJcN5_Aner17dMLAWXz_XrUiG5pyeKnqrp-eBtl9w&oe=623AA720',
    },
  ];
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
