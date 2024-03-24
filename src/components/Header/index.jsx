import "./header.css";
import CheckboxIcon from "../../assets/icons/CheckBoxIcon";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <CheckboxIcon />
                    <h1>Tout doux</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;