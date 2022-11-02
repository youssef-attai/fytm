const ButtonWithIcon = ({
  className,
  icon,
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      <img className="svg-icon" src={icon} alt="Button icon" />
      {text}
    </button>
  );
};

export default ButtonWithIcon;
