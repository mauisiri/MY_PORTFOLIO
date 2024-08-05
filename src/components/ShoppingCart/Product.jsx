import { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-overlay">
        <p>{description}</p>
      </div>
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price}€</p>
          {/* <p>{description}</p> */}
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add</button>
        </p>
      </div>
    </article>
  );
}
