import React from "react";

function Task(props) {
    return (
        <div className="taskHolder">
            <div
                className="taskName"
                style={{
                    textDecoration: props.task.checked
                        ? "line-through"
                        : "none",
                }}
            >
                {props.task.taskName}
            </div>
            <button
                className="deleteBtn"
                onClick={() => props.deleteTask(props.task.id)}
            >
                🗑️
            </button>
        </div>
    );
}

export default Task;
