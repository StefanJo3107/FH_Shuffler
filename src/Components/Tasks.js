import React, { useState, useEffect } from "react";
import Task from "./Task";
import Header from "./TasksHeader";
import "./Tasks.css";

function Tasks(props) {
    const [tasks, setTasks] = useState({
        items: [],
        currId: 0,
    });

    useEffect(() => {
        if (GetFromStorage("Tasks") === null) {
            AddToStorage("Tasks", { items: [], currId: 0 });
        } else {
            let t = GetFromStorage("Tasks");
            setTasks(t);
        }
    }, []);

    function addTask(taskName) {
        taskName = taskName.trim();
        if (!taskName) return;

        let newTasks = { ...tasks };
        newTasks.items.push({
            id: newTasks.currId,
            taskName,
            checked: false,
        });

        newTasks.currId++;

        setTasks(newTasks);
        AddToStorage("Tasks", newTasks);
    }

    function deleteTask(id) {
        let newTasks = { ...tasks };

        for (let i = 0; i < newTasks.items.length; i++) {
            if (newTasks.items[i].id == id) {
                newTasks.items.splice(i, 1);
                break;
            }
        }

        setTasks(newTasks);
        AddToStorage("Tasks", tasks);
    }

    function checkTask(id) {
        let newTasks = { ...tasks };

        for (let i = 0; i < newTasks.items.length; i++) {
            if (newTasks.items[i].id == id) {
                newTasks.items[i].checked = !newTasks.items[i].checked;
                break;
            }
        }

        setTasks(newTasks);
    }
    let taskElements;
    if (tasks.items)
        taskElements = tasks.items.map((item) => (
            <Task
                key={item.id}
                task={item}
                updateTask={checkTask}
                deleteTask={deleteTask}
            />
        ));
    else taskElements = <></>;

    return (
        <div className="tasks">
            <Header addItem={addTask} />
            {taskElements}
        </div>
    );
}

function AddToStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
}

function GetFromStorage(key) {
    let tasks = localStorage.getItem(key);

    if (tasks) return JSON.parse(tasks);
    else return null;
}

export default Tasks;
