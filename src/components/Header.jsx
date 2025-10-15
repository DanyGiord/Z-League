import Search from "./Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { BsFillCartFill } from "react-icons/bs";
import { Squash as Hamburger } from "hamburger-react";
import Cart from "./Cart";

function Header({
  count,
  inputValue,
  headerHomeClick,
  setSelectedGenres,
  setGenre,
  setOpen,
  isOpen,
  size,
  cart,
  setCart,
  warning,
}) {
  const [show, setShow] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setShow((current) => !current);
  };
  return (
    <header>
      <Link
        to={`/`}
        style={{ textDecoration: "none" }}
        onClick={headerHomeClick}
        className="logo"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        <img src={logo} alt="" onClick={() => setSelectedGenres("")} />
      </Link>
      <Search count={count} inputValue={inputValue} />

      <div className="nav-right" data-aos="fade-in" data-aos-delay="600">
        <Link to={`/signup`} className="login">
          Login
        </Link>

        {show ? <div /> : <Cart cart={cart} setCart={setCart} />}

        <div
          className="cart"
          cart={cart}
          setCart={setCart}
          onClick={handleClick}
        >
          {warning && (
            <div className="warning">Item is already added to your cart </div>
          )}
          <BsFillCartFill className="cart-icon" />
          <span>{size}</span>
        </div>

        <div>
          <Hamburger
            rounded
            color="#18FFAC"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
