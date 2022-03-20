const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Cold Press Juice',
    },
    {
      id: 2,
      title: 'Immunity Shots',
    },
    {
      id: 3,
      title: 'Tribe Drinks',
    },
    {
      id: 4,
      title: 'BYO Smoothies',
    },
    {
      id: 5,
      title: 'Entrees',
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
