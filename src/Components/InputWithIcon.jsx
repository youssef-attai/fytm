const InputWithIcon = ({ onKeyUpHandler, icon, placeholder }) => {
  return (
    <div className="input-with-icon">
      <i className={`fas fa-${icon}`}></i>
      <input type="text" placeholder={placeholder} onKeyUp={onKeyUpHandler} />
    </div>
  );
};

export default InputWithIcon;
