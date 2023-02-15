import { useSelector } from 'react-redux';

import Cart from './redux/components/Cart/Cart';
import Layout from './redux/components/Layout/Layout';
import Products from './redux/components/Shop/Products';

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
