import "./button.css";

const Button = ({ value, type, action, icon, additional_class }) => {
    return (
        <button className={`button ${additional_class && additional_class}`} type={type} onClick={action}>
            <span>{value}</span>
            {icon && icon}
        </button>
    )
}

export default Button;