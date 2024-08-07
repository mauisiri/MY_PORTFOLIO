import { useContext, useState } from "react";
import { CartContext } from "./ShoppingCartContext";
import info from "../../assets/ShoppingCart/products/info.png";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddToCart = () => {
    addItemToCart(id);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <article className="product">
      <div className="img-overlay-box">
        <img src={image} alt={title} />
        <p className="product-overlay">{description}</p>
      </div>
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price}€</p>
        </div>
        <p className="product-actions">
          <div>
            <div className="card-buttons">
              <button className="product-info-button" onClick={handleOpenPopup}>
                <img src={info} alt="Product Info" />
              </button>
              <button className="add-button" onClick={handleAddToCart}>
                Add
              </button>
              <div className="animation-container">
                {" "}
                {showAnimation && <span className="animation">+1</span>}
              </div>
            </div>
          </div>
        </p>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <p>{description}</p>
          <div>
            <button onClick={handleClosePopup}>X</button>
          </div>
        </div>
      )}
    </article>
  );
}
