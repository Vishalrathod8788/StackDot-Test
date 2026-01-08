import { useState } from "react"
import { StudentForm } from "./components/StudentForm"
import { StudentList } from "./components/StudentList"
import { StudentDetail } from "./components/StudentDetail"

function App() {
  const [students, setStudents] = useState([]);
  const [serach, setSearch] = useState("");

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  }

  const handleDeleteStudent = (index) => {
    setStudents(students.filter((id) => id !== index));
  }

  const handleSearchInput = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchInput) ||
      student.rollnum.toLowerCase().includes(searchInput) ||
      student.course.toLowerCase().includes(searchInput)
    );
    setSearch(filteredStudents);
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-10">
        Student Management System
      </h1>
      <div className="text-center mt-10">
        Search :
        <input type="text" placeholder="Search Student" className="border rounded pl-2 ml-2 max-w-3xl" onChange={handleSearchInput} />
      </div>

      <StudentDetail students={students} />
      <StudentForm onAddStudent={handleAddStudent} students={students} />
      <StudentList students={students} onDeleteStudent={handleDeleteStudent} />
    </div>
  )
}

export default App
