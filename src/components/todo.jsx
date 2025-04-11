import { useState } from "react";


export function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState('');

    function handleAddTask() {
        if (task.trim() === '') return;
        setTasks([...tasks, { task: task, completed: false }]);
        setTask('');
    };

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    function handleEditTask(index) {
        setEditIndex(index);
        setEditTask(tasks[index].task);
    };

    function handleSaveEdit() {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].task = editTask;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditTask('');
    };

    function handleToggleCompleted(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4 text-center">To-Do List</h3>
            <div className="d-flex mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button
                    className="btn btn-primary ms-2"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </div>

            {tasks.length === 0 ? (
                <p>No tasks added yet!</p>
            ) : (
                <ul className="list-group">
                    {tasks.map((taskItem, index) => (
                        <li
                            key={index}
                            className={`list-group-item d-flex justify-content-between align-items-center ${taskItem.completed ? 'text-decoration-line-through' : ''}`}
                        >
                            <div className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    checked={taskItem.completed}
                                    onChange={() => handleToggleCompleted(index)}
                                    className="me-2"
                                />
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                    />
                                ) : (
                                    <span>{taskItem.task}</span>
                                )}
                            </div>
                            <div>
                                {editIndex === index ? (
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={handleSaveEdit}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEditTask(index)}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                )}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteTask(index)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
