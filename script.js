// Handle Sign-Up
function signup(event) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Store user details in localStorage (or use a database in real applications)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Sign-up successful! You can now log in.");
    toggleSignup();
}

// Handle Login
function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored user details from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if the email and password match
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        showTimetableSection();
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Toggle between login and signup forms
function toggleSignup() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
}

// Show Timetable Section after successful login
function showTimetableSection() {
    document.getElementById("authFormContainer").style.display = "none";
    document.getElementById("authNav").style.display = "block";
    document.getElementById("timetableSection").style.display = "block";
}

// Logout Function
function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    document.getElementById("authNav").style.display = "none";
    document.getElementById("timetableSection").style.display = "none";
    document.getElementById("authFormContainer").style.display = "flex";
}


// Timetable Data (Real Data Example)
const timetableData = {
    sections: {
        "Section A": generateTimetable("Math", "Room 1", "Teacher 1"),
        "Section B": generateTimetable("Science", "Room 2", "Teacher 2"),
        "Section C": generateTimetable("English", "Room 3", "Teacher 3"),
        "Section D": generateTimetable("History", "Room 4", "Teacher 4"),
        "Section E": generateTimetable("Geography", "Room 5", "Teacher 5"),
        "Section F": generateTimetable("Biology", "Room 6", "Teacher 6")
    },
    teachers: {
        "Teacher 1": generateTeacherTimetable("Room 1", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 2": generateTeacherTimetable("Room 2", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 3": generateTeacherTimetable("Room 3", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 4": generateTeacherTimetable("Room 4", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 5": generateTeacherTimetable("Room 5", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 6": generateTeacherTimetable("Room 6", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"])
    },
    rooms: {
        "Room 1": generateRoomTimetable("Room 1", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 2": generateRoomTimetable("Room 2", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 3": generateRoomTimetable("Room 3", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 4": generateRoomTimetable("Room 4", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 5": generateRoomTimetable("Room 5", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 6": generateRoomTimetable("Room 6", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"])
    }
};

// Function to generate timetable for sections, teachers, or rooms
function generateTimetable(subject, room, teacher) {
    return [
        ["Monday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Tuesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Wednesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Thursday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Friday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Saturday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`]
    ];
}

// Function to generate teacher timetable based on sections
function generateTeacherTimetable(teacher, sections, room) {
    const subject = "Section"; 
    return [
        ["Monday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Tuesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Wednesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Thursday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Friday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Saturday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`]
    ];
}

// Function to generate room timetable based on sections
function generateRoomTimetable(room, sections) {
    const subject = "Section"; 
    const teacher = "Teacher"; 
    return [
        ["Monday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`],
        ["Tuesday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`],
        ["Wednesday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`],
        ["Thursday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`],
        ["Friday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`],
        ["Saturday", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "BREAK", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`, "LUNCH", `${subject} (${room}) (${teacher})`, `${subject} (${room}) (${teacher})`]
    ];
}

// Function to handle dynamic options and timetable loading
let currentType = "";

function showTimetable(type) {
    currentType = type;
    const selectOption = document.getElementById("selectOption");
    selectOption.innerHTML = ""; // Clear previous options

    // Populate dropdown based on selected type (teacher, section, room)
    for (let key in timetableData[type]) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        selectOption.appendChild(option);
    }
    loadTimetable(); // Load first option by default
}

// Function to load and display the timetable
function loadTimetable() {
    const selectedOption = document.getElementById("selectOption").value;
    if (!selectedOption) return; // Return if no selection is made

    const timetable = timetableData[currentType][selectedOption];
    const timetableContainer = document.getElementById("timetable");
    timetableContainer.innerHTML = ""; // Clear previous timetable

    // Create table headers (now the X-axis is time slots and Y-axis is days)
    const headerRow = document.createElement("tr");
// First cell should be for "Day" label (left-most)
    const thDay = document.createElement("th");
    thDay.textContent = "Day";
    headerRow.appendChild(thDay);

    // Time slots as header
    const headers = ["08:15-09:10", "09:10-10:05", "10:05-10:20", "10:20-11:15", "11:15-12:10", "12:10-01:05", "01:05-02:00", "02:00-02:55", "02:55-03:50"];
    headers.forEach(timeSlot => {
        const th = document.createElement("th");
        th.textContent = timeSlot;
        headerRow.appendChild(th);
    });

    timetableContainer.appendChild(headerRow);

    // Populate each day row (Y-axis is days, with "Day" as first column)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    days.forEach(day => {
        const tr = document.createElement("tr");

        // Add the day in the first column
        const th = document.createElement("th");
        th.textContent = day;
        tr.appendChild(th);








// Fill in the time slots for each day (X-axis)
        timetable.forEach((row) => {
            if (row[0] === day) {
                row.slice(1).forEach((cell, index) => {
                    const td = document.createElement("td");
                    td.textContent = cell;

                    // Add a click event to edit the cell
                    td.addEventListener("click", function() {
                        const newValue = prompt("Edit this period:", cell);
                        if (newValue !== null && newValue !== "") {
                            row[index + 1] = newValue;  // Update the correct cell
                            loadTimetable(); // Reload timetable after edit
                        }
                    });

                    // Apply styles for breaks and lunch
                    if (cell === "BREAK") td.classList.add("break");
                    if (cell === "LUNCH") td.classList.add("lunch");
                    tr.appendChild(td);
                });
            }
        });

        timetableContainer.appendChild(tr);
    });
}