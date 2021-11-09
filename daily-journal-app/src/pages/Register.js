import "../styles/home.css";

export function Register() {
  return (
    <>
      <form id="register">
        <input placeholder="Nohely"></input>
        <input placeholder="Email"></input>
        <input placeholder="Contraseña"></input>
        <input placeholder="Confirma tu contraseña"></input>
        <button>Ingresar</button>
        <button>Ingresar con Google</button>
      </form>
    </>
  );
}
