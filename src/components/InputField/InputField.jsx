import PropTypes from 'prop-types';
import s from './InputField.module.css';

const InputField = ({ labelName, type, name, value, handler }) => {
  return (
    <label className={s.label}>
      <span>{labelName}</span>
      <input
        type={type}
        name={name}
        className={s.input}
        value={value}
        onChange={evt => handler(evt.target.value)}
      />
    </label>
  );
};

InputField.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default InputField;
