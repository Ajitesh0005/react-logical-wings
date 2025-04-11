import { useState } from "react";


export function StudentTable({ students, setSelectedStudent, deleteStudent }) {
    const [sortedStudents, setSortedStudents] = useState(students);
    const [sortOrder, setSortOrder] = useState('asc');

    function sortByName() {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        const sortedList = [...students].sort((a, b) =>
            newSortOrder === 'asc'
                ? a.firstName.localeCompare(b.firstName)
                : b.firstName.localeCompare(a.firstName)
        );

        setSortedStudents(sortedList)
    }

    return (
        <div className="table-responsive mt-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th onClick={sortByName} style={{ cursor: 'pointer' }}>
                            First Name
                        </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.mobileNumber}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setSelectedStudent(student)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteStudent(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
