import "../styles/home.css";

export function Login() {
  return (
    <>
      <form id="login">
        <input placeholder="Email"></input>
        <input placeholder="Contraseña"></input>
        <button>Ingresar</button>
        <button>Ingresar con Google</button>
      </form>
    </>
  );
}
