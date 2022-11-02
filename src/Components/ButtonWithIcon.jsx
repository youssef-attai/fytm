const ButtonWithIcon = ({ className, icon, text, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            <img className="svg-icon" src={icon} alt="Button icon" />
            {text}
        </button>
    )
};

export default ButtonWithIcon;
