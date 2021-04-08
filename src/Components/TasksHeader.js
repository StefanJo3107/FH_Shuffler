import React, { useState } from "react";
import "./Tasks.css";

function TasksHeader(props) {
    const [taskName, setName] = useState("");

    return (
        <div className="tasksHeader">
            <span className="tasksTitle">TIMOVI</span>
            <input
                type="submit"
                className="addBtn"
                value="➕"
                onClick={() => props.addItem(taskName)}
            />

            <input
                className="addInput"
                type="text"
                placeholder="Naziv tima"
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    );
}

export default TasksHeader;
