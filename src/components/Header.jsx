import Search from "./Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { BsFillCartFill } from "react-icons/bs";
import { Squash as Hamburger } from 'hamburger-react'



function Header({ count, inputValue, headerHomeClick, setSelectedGenres, setGenre, setOpen, isOpen }) {
  const [show, setShow] = useState(false)

  return (

    <header>

      <Link to={`/`} style={{ textDecoration: "none" }} onClick={headerHomeClick} className="logo" data-aos="fade-in" data-aos-delay="400">
        <img src={logo} alt="" onClick={() => setSelectedGenres('')} />
      </Link>
      <Search count={count} inputValue={inputValue} />

      <div className="nav-right" data-aos="fade-in" data-aos-delay="600">
        <Link to={`/signup`} className="login">
          Login
        </Link>

        <Link to={`/`} className="signup">
          SignUp
        </Link>

        <Link to={`/`} className="cart">
          <BsFillCartFill className="cart-icon" onClick={() => setShow(false)} />
        </Link>
        <div >
          <Hamburger rounded color="#18FFAC" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>


    </header >

  );
}

export default Header;
