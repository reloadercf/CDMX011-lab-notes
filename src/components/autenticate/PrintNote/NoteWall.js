import PropTypes from 'prop-types';

const NoteWall = ({ data }) => {
  const { text, id } = data;
  return (
    <div id={id}>
      <p>
        {text}
      </p>
    </div>
  );
};

NoteWall.propTypes = {
  data: PropTypes.object.isRequired,
};
export default NoteWall;
