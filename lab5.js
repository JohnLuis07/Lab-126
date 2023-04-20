function time_now() {
    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear() + ', ' + days[today.getDay()];
    var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    document.write("Today is " + date);
    document.write("<br>");
    document.write("The current time is " + time);
}

time_now();

// Define a Student class
function Student(name, age, email, course) {
    this.Student_ID = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    this.name = name;
    this.age = age;
    this.email = email;
    this.course = course;
}

// Create an empty array to hold the students
let students = [];

// Define the add_student function
function add_student() {
    // Get the form values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let course = document.querySelector('input[name="course"]:checked').value;

    // Create a new Student object
    let student = new Student(name, age, email, course);

    // Add the student to the array
    students.push(student);

    // Clear the form
    document.getElementById("student-form").reset();

    // Optionally, display a message to the user
    alert("Student added! Student ID: " + student.Student_ID);
}


  
function findStudent() {
    const searchId = (document.getElementById("searchId").value);
  
    const student = students.find(s => s.Student_ID === searchId);
  
    if (student) {
      document.getElementById("display-list").innerHTML = `<br>Name: ${student.name}<br>Age: ${student.age}<br>Course: ${student.course}`;
    } else {
      alert("Unable to find student with that ID.");
    }
  }

function display_list() {
    let display = "";
    for (let i = 0; i < students.length; i++) {
      display += `<br>Student_ID: ${students[i].Student_ID}<br>Name: ${students[i].name}<br>Age: ${students[i].age}<br>Email: ${students[i].email}<br>Course: ${students[i].course}<br>`;
    }
    document.getElementById("display-list").innerHTML = display;
}

