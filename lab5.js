function time_now() {
    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear() + ', ' + days[today.getDay()];
    var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    document.getElementById("current-date-time").innerHTML = "Today is " + date + "<br>" + "The current time is " + time;
}


function Student (name, age, email, course) {
    this.Student_ID = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    this.name = name;
    this.age = age;
    this.email = email;
    this.course = course;
}

let students = [];

function add_student() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let course = document.querySelector('input[name="course"]:checked').value;

    // required fields
    if (name.trim() === "" || name === null || age.trim() === "" || age === null || email.trim() === "" || email === null || course === null) {
        alert("Please fill in all required fields.");
        return;
    }
    
    // email restrictions
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // age restrictions
    if (age === "" || age <= 0 || age > 100) {
        alert("Please enter a valid age between 1 and 100.");
        return;
    }

    // 
    let student = new Student(name, age, email, course);

    students.push(student);

    document.getElementById("student-form").reset();

    alert("Student added! Student ID: " + student.Student_ID);
}
console.log(students);

function findStudent() {
    // get data from user input
    const searchId = (document.getElementById("searchId").value);
    
    // find student with matching ID
    const student = students.find(function(s) {return s.Student_ID === searchId;});

    // display student info
    if (student) {
        document.getElementById("find-student").innerHTML = "Student_ID: " + student.Student_ID + "<br>" + "Name: " + student.name + "<br>" + "Age: " + student.age + "<br>" + "Email: " + student.email + "<br>" + "Course: " + student.course;
    } else {                    
        alert("Unable to find the student with that ID.");
    }
}

function display_list() {

    // display error message if no students
    if (students.length === 0) {
        alert("There are no students as for now.");
        return;
    }

    // display each student's info
    let display = "";
    for (let i = 0; i < students.length; i++) {
        display += "Student_ID: " + students[i].Student_ID + "<br>" + "Name: " + students[i].name + "<br>" + "Age: " + students[i].age + "<br>" + "Email: " + students[i].email + "<br>" + "Course: " + students[i].course + "<br><br>";
    }

    document.getElementById("display-list").innerHTML = display;
}
