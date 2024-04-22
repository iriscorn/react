import { useReducer, useState } from "react";
import reducer from "./reducer";

const MenuItem = (props) => {
  const { soldOut, price, id, imageUrl, name, ingredients } = props;
  const [inputValue, setInputValue] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: "increaseCount",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decreaseCount",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "removeCount",
    });
  };

  const handleInputValue = () => {
    dispatch({
      type: "setInputValue",
      payload: inputValue,
    });
    setInputValue(0);
  };

  return (
    <li key={id} className="pizza">
      <img
        src={imageUrl}
        className={!soldOut ? "pizza__image" : "pizza__image pizza__image--mod"}
        alt={name}
      />
      <div className="pizza__info">
        <p className="pizza__name">{name}</p>
        <p className="pizza__ingredients">{ingredients.join(", ")}</p>
        <div className="pizza__actions">
          <p className="pizza__price">{soldOut ? "Sold out" : `€${price}`}</p>
          {!count ? (
            !soldOut && (
              <button className="button" onClick={handleIncrement}>
                Add to cart
              </button>
            )
          ) : (
            <div className="pizza__count">
              <input
                className="pizza__input"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleInputValue}>add value</button>
              <div className="pizza__buttons-wrap">
                <button className="button" onClick={handleDecrement}>
                  -
                </button>
                <p>{count}</p>
                <button className="button" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button className="button" onClick={handleReset}>
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
