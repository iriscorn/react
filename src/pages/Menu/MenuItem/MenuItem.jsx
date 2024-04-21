const MenuItem = (props) => {
  const { soldOut, price } = props;
  return (
    <div className="pizza__actions">
      <p className="pizza__price">{soldOut ? "Sold out" : `€${price}`}</p>
      {!soldOut && <button className="button">Add to cart</button>}
    </div>
  );
};

export default MenuItem;
