import { useState } from "react";
const MenuItem = (props) => {
  const { soldOut, price, id, imageUrl, name, ingredients } = props;
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const removeCount = ()=> {
    setCount(0);
  }

  return (
    <li key={id} className="pizza">
      <img src={imageUrl} className={!soldOut? "pizza__image" : "pizza__image pizza__image--mod"} alt={name} />
      <div className="pizza__info">
        <p className="pizza__name">{name}</p>
        <p className="pizza__ingredients">{ingredients.join(", ")}</p>
        <div className="pizza__actions">
          <p className="pizza__price">{soldOut ? "Sold out" : `€${price}`}</p>
          {!count ? (
            !soldOut && <button className="button" onClick={increaseCount} >Add to cart</button>
          ) : (
            <div className="pizza__count">
              <div className="pizza__buttons-wrap">
                <button className="button" onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button className="button" onClick={increaseCount}>+</button>
              </div>
              <button className="button" onClick={removeCount}>delete</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
