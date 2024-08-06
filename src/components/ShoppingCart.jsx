import Contact from "./Contact/Contact";

import ShopHeader from './ShoppingCart/ShopHeader';
import Shop from './ShoppingCart/Shop';
import Product from './ShoppingCart/Product';
import { DUMMY_PRODUCTS } from "./ShoppingCart/dummy-products";
import CartContextProvider from './ShoppingCart/ShoppingCartContext';

function ShoppingCart() {

  return (
    <CartContextProvider>
    <div className="myApp">
      <section className="SoppingCart">
        <ShopHeader />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
        <div className='shoppingCart-footer'></div>
      </section>
      
    </div>
    </CartContextProvider>
  );
}

export default ShoppingCart;
