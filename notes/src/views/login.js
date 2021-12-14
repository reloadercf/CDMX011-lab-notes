import { Link, useHistory } from "react-router-dom";

export default function Login() {

  let history = useHistory();

  const goToReg = () => {
    history.push("/signup");
  };

  return (
    <div>
      <h1>Here's the login</h1>
      <Link to="/">
        <button>Ir al home</button>
      </Link>
      <button onClick={goToReg}>Register</button>
    </div>
  );
}
