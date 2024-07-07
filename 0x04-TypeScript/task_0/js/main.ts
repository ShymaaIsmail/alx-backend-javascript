interface Student{
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
    firstName: "Ahmed",
    lastName: "Mohamed",
    location: "Alex",
    age: 33,
}
const student2: Student = {
    firstName: "Amy",
    lastName: "Jon",
    location: "Cairo",
    age: 22,
}
const studentsList = [student1, student2]

// Function to render the table
function renderTable() {
    const tableBody = document.createElement('table');
    
   // const tableBody = document.getElementById('tableBody') as HTMLTableSectionElement;

    // Clear existing rows
    tableBody.innerHTML = '';

    // Iterate over each student and create a row
    studentsList.forEach(student => {
        const row = tableBody.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    });
    document.body.appendChild(tableBody);
}

// Initial rendering of the table
renderTable();
