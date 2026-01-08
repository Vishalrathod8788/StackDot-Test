export const StudentList = ({ students, onDeleteStudent }) => {
    return (
        <div className="mt-8 max-w-3xl mx-auto p-10">
            <h2 className="text-xl font-bold mb-4">Students List:</h2>
            {students.length === 0 ? (
                <p>No students added yet.</p>
            ) : (
                <ul className="space-y-2">
                    {students.map((student, index) => (
                        <li key={index} className="border p-3 rounded">
                            <div>Name: {student.name}</div>
                            <div>Roll No: {student.rollnum}</div>
                            <div>Course: {student.course}</div>
                            <div
                                onClick={() => onDeleteStudent(index)}
                                className="cursor-pointer text-red-500 mt-2 w-24 text-center border border-red-500 rounded py-1"
                            >
                                Delete
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}