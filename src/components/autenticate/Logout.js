import { handleLogout } from '../../lib/auth';

const Logout = () => (
  <button type="button" onClick={handleLogout}>
    Cerrar sesion
  </button>
);
export default Logout;
