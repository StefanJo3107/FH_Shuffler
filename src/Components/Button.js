import "./Button.css";

export default function Button(props) {
    return (
        <button
            className={"button flex-item " + props.className}
            onClick={props.click}
        >
            {props.children}
        </button>
    );
}
