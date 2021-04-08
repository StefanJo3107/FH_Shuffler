import logo from "./logo.svg";
import "./App.css";
import Clouds from "./Components/Clouds";
import Logo from "./Components/Logo";
import TeamsModal from "./Components/TeamsModal";
import Shuffler from "./Components/Shuffler";
import Mountains from "./Components/Mountains";

function App() {
    return (
        <div id="App">
            <div className="main">
                <Logo className="flex-item" />
                <TeamsModal className="flex-item" />
                <Shuffler className="flex-item" />
            </div>
        </div>
    );
}

export default App;
