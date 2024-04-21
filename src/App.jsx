import "./App.css";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
