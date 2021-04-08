import logo from "./Img/Logo FH-02.png";
import "./Logo.css";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

export default function Logo(props) {
    return (
        <div className="flex-item">
            <img className="logo" src={logo} />
            <GiPerspectiveDiceSixFacesRandom className="dice" />
        </div>
    );
}
