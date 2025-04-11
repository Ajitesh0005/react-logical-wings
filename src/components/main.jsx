import { useState } from "react";
import { Sidebar } from "./sidebar";
import { ToDoList } from "./todo";
import { StudentsForm } from "./students/students";



const themes = {
    light: {
        appBg: '#f8f9fa',
        headerBg: '#ffffff',
        menuBg: '#e9ecef',
        textColor: '#000',
    },
    dark: {
        appBg: '#343a40',
        headerBg: '#212529',
        menuBg: '#495057',
        textColor: '#fff',
    },
    blue: {
        appBg: '#e3f2fd',
        headerBg: '#0d6efd',
        menuBg: '#90caf9',
        textColor: '#000',
    },
};

export function MainApp() {
    const [themeName, setThemeName] = useState('light');
    const theme = themes[themeName];
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeComponent, setActiveComponent] = useState('Welcome');

    function handleMenuClick(component) {
        setActiveComponent(component);
    };

    return (
        <div style={{ backgroundColor: theme.appBg, minHeight: '100vh', color: theme.textColor }}>
            <header className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: theme.headerBg }}>
                <button
                    className="btn btn-outline-secondary me-3"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <i className="bi bi-list"></i>
                </button>
                <h2 className="text-center flex-grow-1 m-0">This is a React Application</h2>
            </header>

            <div className="d-flex">
                {showSidebar && <Sidebar theme={theme} setThemeName={setThemeName} handleMenuClick={handleMenuClick} />}
                <main className="flex-grow-1 p-4">
                    {activeComponent === 'Welcome' && (
                        <div>
                            <h3>Welcome!</h3>
                            <p>Practical Task for Logical Wings</p>
                        </div>
                    )}
                    {activeComponent === 'ToDoList' && <ToDoList />}
                    {activeComponent === 'StudentsForm' && <StudentsForm />}
                </main>
            </div>
        </div>
    );
}
