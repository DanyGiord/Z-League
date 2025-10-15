import { useState } from "react";
import { useEffect } from "react";
import "../components/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(false);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((game) => (ans += 1 * game.metacritic));
    setPrice(ans);
    console.log(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((game) => game.id !== id);
    setCart(arr);
    console.log(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <div className="wrapper-cart">
        <div className="background-cart container">
          {cart?.map((game) => (
            <div className="cart_box" key={game.id}>
              <div className="cart_img">
                <img src={game.background_image} alt={game.name} />
                <p>{game.name}</p>
              </div>

              <div className="d-flex align-content-center justify-content-center">
                <span className="pricerino">{game.metacritic} &euro;</span>
                <button
                  className="game-card-button"
                  onClick={() => handleRemove(game.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          <div className="total">
            <span>Total</span>
            <span>{price} &euro;</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cart;
