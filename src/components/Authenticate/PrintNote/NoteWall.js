import PropTypes from 'prop-types';

import DeleteNote from './DeleteNote';

import { handleDeleteNote } from '../../../lib/notes';

const NoteWall = ({ data, idDoc }) => {
  const { text } = data;
  return (
    <div>
      <p>
        {text}
      </p>
      <DeleteNote idDoc={idDoc} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

NoteWall.propTypes = {
  data: PropTypes.object.isRequired,
  idDoc: PropTypes.string.isRequired,
};
export default NoteWall;
