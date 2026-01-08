export const StudentDetail = ({ students }) => {
    let bcaCount = 0;
    let bscCount = 0;
    let mcaCount = 0;
    let btechCount = 0;

    students.forEach(student => {
        if (student.course === "BCA") {
            bcaCount = bcaCount + 1;
        } else if (student.course === "BSc") {
            bscCount = bscCount + 1;
        } else if (student.course === "MCA") {
            mcaCount = mcaCount + 1;
        } else if (student.course === "BTech") {
            btechCount = btechCount + 1;
        }
    });

    return (
        <div className="max-w-3xl mx-auto p-5 mb-5">
            <div className=" p-4 rounded">
                <h2 className="text-xl font-bold mb-3">Student Summary:</h2>
                <div className="mb-2">
                    <strong>Total Students: {students.length}</strong>
                </div>
                <div>
                    <strong>Course-wise Count:</strong>
                    {students.length === 0 ? (
                        <span className="ml-2">No students added yet</span>
                    ) : (
                        <ul className="ml-4 mt-1">
                            <li>BCA: {bcaCount}</li>
                            <li>BSc: {bscCount}</li>
                            <li>MCA: {mcaCount}</li>
                            <li>BTech: {btechCount}</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}