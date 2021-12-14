import { useHistory } from "react-router-dom";
import "../../styles/index.scss";
import FetchNotes from "./fetchNotes";
import { BiExit } from "react-icons/bi";

export default function Home() {

  let history = useHistory();

  const logOut = () => {
    history.push("/login");
  };

  return (
    <div className="background">
      <section className="upper">
        <h1 className="logo">&cetera</h1>
        <span>
          <BiExit
            onClick={logOut}
            style={{ color: "white", fontSize: "47px" }}
          />
        </span>
      </section>
      <hr />
      <div className="notesDiv">
        <FetchNotes />
      </div>
    </div>
  );
}
