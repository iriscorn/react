import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const getContext = (e) => {
    e.preventDefault();
    setIsAuth(fullName);
    navigate("/menu");
  };

  return (
    <>
      <main className="content">
        <h1 className="title">
          The best pizza. <br />
          <span className="text-yellow">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <p className="sub-title">
          👋 Welcome! Please start by telling us your name:
        </p>
        <form onSubmit={getContext} className="login-form">
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="login-input"
            type="text"
            placeholder="Your full name"
          />
          <button>login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
