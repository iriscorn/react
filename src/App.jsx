import "./App.css";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import Header from "./components/Header/Header";
import Users from "./pages/Users/Users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="background">
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order/new" element={<Order />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
