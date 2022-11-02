const ButtonWithIcon = ({ className, icon, text }) => {
    return (
        <button className={className}>
            <img className="svg-icon" src={icon} alt="Button icon" />
            {text}
        </button>
    )
};

export default ButtonWithIcon;
