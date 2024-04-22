import "./App.css";
// import Menu from "./pages/Menu/Menu";
// import Login from "./pages/Login/Login";
// import Order from "./pages/Order/Order";
// import Users from "./pages/Users/Users";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Menu = lazy(() => import("./pages/Menu/Menu"));
const Login = lazy(() => import("./pages/Login/Login"));
const Order = lazy(() => import("./pages/Order/Order"));
const Users = lazy(() => import("./pages/Users/Users"));

function App() {
  return (
    <>
      <div className="background">
        <Header />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/order/new" element={<Order />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
