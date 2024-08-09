import { useRef, useContext } from "react";
import CartModal from "./CartModal";
import "../ShoppingCart.css";
import Logo from "../../assets/ShoppingCart/logo-rounded.png";
import ShoppingSection from "../../assets/ShoppingCart/shoppingSection1.jpeg";
import BackHome from "../../assets/ShoppingCart/backHome.png";
import { CartContext } from "./ShoppingCartContext";

export default function ShopHeader() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="My cart" actions={modalActions} />
      <header>
        <div>
          <img
            id="shoppingSection-img"
            src={ShoppingSection}
            alt="Sopping Section"
          />
        </div>
        <div id="main-header">
          <div id="main-title">
            <img id="logo" src={Logo} alt="This is the logo" />
            <h1 className="title">Code Monster</h1>
          </div>
          <div className='right-buttons'>
            <p>
              <button 
                id='cart-button' 
                onClick={handleOpenCartClick}>
                Cart ({cartQuantity})
              </button>
            </p>
            <div className="backHome-img">
                <button
                  id="backHome-button"
                  onClick={() => (window.location.href = "/")}
                >
                  <img
                    id="backHome-img"
                    src={BackHome}
                    alt="Shopping Section"
                  />
                </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
