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
      <div id="home">
        <button onClick={loginButton}>Login</button>
        <button onClick={registerButton}>Registro</button>
      </div>
    </>
  );
}
