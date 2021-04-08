import Button from "./Button";
import { useEffect, useState } from "react";
import "./Shuffler.css";
export default function Shuffler(props) {
    const [tasks, setTasks] = useState([]);
    const [hide, setHide] = useState(true);

    useEffect(() => {
        let tasks = GetFromStorage("Tasks").items;
        setTasks(tasks);
    }, []);

    function shuffleTeams() {
        if (GetFromStorage("Tasks").items) {
            let teams = shuffle(GetFromStorage("Tasks").items);
            document.querySelector(".add-team").style.display = "none";
            setTasks(teams);
            setHide(false);
        }
    }
    let teamElements;
    if (tasks)
        teamElements = tasks.map((item) => (
            <div className={"team " + (hide ? "hidden" : "")} key={item.id}>
                {item.taskName}
            </div>
        ));
    else teamElements = <></>;

    return (
        <div>
            <div className={"teams " + (hide ? "hidden" : "")}>
                {teamElements}
            </div>

            <Button click={shuffleTeams}>Pomešaj timove</Button>
        </div>
    );
}

function GetFromStorage(key) {
    let tasks = localStorage.getItem(key);

    if (tasks) return JSON.parse(tasks);
    else return {};
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
