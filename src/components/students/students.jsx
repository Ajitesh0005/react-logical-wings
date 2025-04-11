import { useState } from "react";
import { StudentFormDetails } from "./studentFormDetails";
import { StudentTable } from "./studentTable";


export function StudentsForm() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    function addStudent(student) {
        setStudents([...students, { id: Date.now(), ...student }]);
    };

    function updateStudent(updatedStudent) {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    };

    function deleteStudent(id) {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div className="container my-5">
            <h3 className="text-center">Student Application Form</h3>
            <StudentFormDetails
                addStudent={addStudent}
                updateStudent={updateStudent}
                selectedStudent={selectedStudent}
                setSelectedStudent={setSelectedStudent}
            />
            <StudentTable
                students={students}
                setSelectedStudent={setSelectedStudent}
                deleteStudent={deleteStudent}
            />
        </div>
    );
};

