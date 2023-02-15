import React from 'react';
import { useSelector } from 'react-redux';

import Cart from './react/redux/components/Cart/Cart';
import Layout from './react/redux/components/Layout/Layout';
import Products from './react/redux/components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
