import { RiMoreFill } from "react-icons/ri";
import { ShowModal } from "../../Hooks/showModal";
import Modal from "./modal";

export function Note({ data }) {
  const { title, content } = data;
  const [open, openModal, closeModal] = ShowModal(false);

  return (
    <div>
      <section className="Note">
        <h3 className="titleData">{title}</h3>
        <pre className="contentData">{content}</pre>
        <footer>
          <RiMoreFill onClick={openModal} style={{ fontSize: "30" }} />
        </footer>
      </section>
      {open && (
        <Modal
          data={data}
          closeModal={closeModal}
          openModal={openModal}
          use="updateNote"
        />
      )}
    </div>
  );
}