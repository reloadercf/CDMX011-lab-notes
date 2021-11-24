function Note({ notes, deleteNotes }) {
  return (
    <div className="container-notes">
      <div className="container-post">
        <h4>{notes.title}</h4>
        <h4>{notes.date.toDate().toLocaleString()}</h4>
        <p>{notes.text}</p>
        <div className="container-btn">
          <button
            className="delete-btn"
            onClick={() => {
              console.log(notes.id);
              deleteNotes(notes.id)
                .then(() => {
                  console.log("exito");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          ></button>
          <button className="edit-btn"></button>
        </div>
      </div>
    </div>
  );
}

export default Note;
