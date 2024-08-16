import React from 'react';
import Header from './Header';
import Cards from './Cards';

const Shop = () => {
  return (
    <div>
      <Header /> {/* This will render the header at the top of the page */}
      <Cards />  {/* This will render the cards below the header */}
    </div>
  );
}

export default Shop;
