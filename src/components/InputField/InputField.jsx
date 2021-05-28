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

export default InputField;
