import { useState } from "react"

export const StudentForm = ({ onAddStudent, students }) => {
    const [name, setName] = useState("");
    const [rollnum, setRollNum] = useState("");
    const [course, setCourse] = useState("");
    const [error, setError] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleRollNo = (e) => {
        setRollNum(e.target.value);
    }

    const handleCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!name || !rollnum || !course) {
            setError("All fields are mandatory");
            return;
        }

        const rollNumbers = students.map(student => student.rollnum);

        if (rollNumbers.includes(rollnum)) {
            setError("Roll Number must be unique");
            return;
        }

        const newStudent = { name, rollnum, course };
        onAddStudent(newStudent);
        setName("");
        setRollNum("");
        setCourse("");
    }

    return (
        <div className="max-w-3xl mx-auto p-10">
            <h2 className="text-xl font-bold mb-3">Add Student</h2>
            <form onSubmit={handleSubmit} className="grid gap-3">

                <div>
                    Enter Student Name :
                    <input
                        className="border rounded pl-2"
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={handleName}
                        required
                    />
                </div>
                <div>
                    Enter Student Roll No.
                    <input
                        className="border rounded pl-2"
                        type="number"
                        placeholder="Roll Number"
                        value={rollnum}
                        onChange={handleRollNo}
                        required
                    />
                </div>
                <div>
                    Select Course :
                    <select className="border rounded pl-2" value={course} onChange={handleCourse} required>
                        <option value="">Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="BSc">BSc</option>
                        <option value="MCA">MCA</option>
                        <option value="BTech">BTech</option>
                    </select>
                </div>
                <button type="submit" className="w-30 border items-center p-2 rounded py-1">Add Student</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}