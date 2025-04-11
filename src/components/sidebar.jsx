import { useState } from "react";


export function Sidebar({ theme, setThemeName, handleMenuClick }) {
    const [showThemeOptions, setShowThemeOptions] = useState(false);

    return (
        <aside
            className="p-3"
            style={{
                backgroundColor: theme.menuBg,
                width: '200px',
                minHeight: 'calc(100vh - 70px)',
            }}
        >
            <ul className="list-unstyled">
                <li className="mb-3">
                    <button
                        className="btn btn-link d-flex align-items-center p-0 mb-1 text-decoration-none text-dark"
                        onClick={() => setShowThemeOptions(!showThemeOptions)}
                    >
                        <i className="bi bi-palette-fill me-2"></i>Theme
                    </button>

                    {showThemeOptions && (
                        <select
                            className="form-select mt-2"
                            onChange={(e) => setThemeName(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="blue">Blue</option>
                        </select>
                    )}
                </li>
                <li className="mb-3">
                    <button
                        className="btn btn-link d-flex align-items-center p-0 mb-1 text-decoration-none text-dark"
                        onClick={() => handleMenuClick('ToDoList')}
                    >
                        <i className="bi bi-list-task me-2"></i>To-Do List
                    </button>
                </li>
                <li className="mb-3">
                    <button
                        className="btn btn-link d-flex align-items-center p-0 mb-1 text-decoration-none text-dark"
                        onClick={() => handleMenuClick('StudentsForm')} 
                    >
                        <i className="bi bi-person-vcard-fill me-2"></i>Students
                    </button>
                </li>
            </ul>
        </aside>
    );
}
