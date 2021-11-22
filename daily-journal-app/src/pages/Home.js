import { useHistory } from "react-router";
import "../styles/home.css";

export function Home() {
  const history = useHistory();

  const loginButton = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const registerButton = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <>
    <div>
        <h1>Daily Journal</h1>
      </div>
      <div id="home">
        <button onClick={loginButton} className="log-button">Login</button>
        <button onClick={registerButton} className="log-button">Registro</button>
      </div>
    </>
  );
}
