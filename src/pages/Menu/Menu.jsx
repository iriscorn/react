import MenuItem from "./MenuItem/MenuItem";
import { useEffect, useState } from "react";

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setData(data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <main>
        <ul>
          {data.map((pizza) => {
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
