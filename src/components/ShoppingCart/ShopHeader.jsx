import { useRef } from "react";
import CartModal from "./CartModal";
import "./ShoppingCart.css";
import Logo from "../../assets/ShoppingCart/roundedLogo.png";
import ShoppingSection from "../../assets/ShoppingCart/shoppingSection1.jpeg";
import BackHome from "../../assets/ShoppingCart/backHome.png";

export default function ShopHeader({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();

  const cartQuantity = cart.items.length;

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
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Logo"
        actions={modalActions}
      />
      <header>
        <div className="backHome-img">
          <div>
            <button
              id="backHome-button"
              onClick={() => (window.location.href = "/")}
            >
              <img id="backHome-img" src={BackHome} alt="Shopping Section" />
            </button>
          </div>
        </div>

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
            <h1>Code Monster</h1>
          </div>
          <p>
            <button onclick={handleOpenCartClick}>Cart ({cartQuantity})</button>
          </p>
        </div>
      </header>
    </>
  );
}
