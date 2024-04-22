import MenuItem from "./MenuItem/MenuItem";
import useFetch from "../../hooks/useFetch";

const Menu = () => {
  const { data, isLoading, error } = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );
  
  return (
    <>
      <main>
        {error && <p>{error}</p>}
        {isLoading && <h2>Loading ...</h2>}
        <ul>
          {!!data.data.length && data.data.map((pizza) => {
            return (
              <MenuItem
                soldOut={pizza.soldOut}
                price={pizza.unitPrice}
                key={pizza.id}
                imageUrl={pizza.imageUrl}
                name={pizza.name}
                ingredients={pizza.ingredients}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Menu;
