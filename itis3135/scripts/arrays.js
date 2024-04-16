// Arrays to store employees and their salaries
let persons = [];
let salaries = [];

// Function to add a person and salary to the arrays
function addSalary() {
    let name = document.getElementById("name").value.trim();
    let salary = document.getElementById("salary").value.trim();

    // Data validation
    if (name === "" || salary === "" || isNaN(salary)) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(parseFloat(salary));

    // Update the dropdown for modifying salary
    updateModifyDropdown();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";

    // Move cursor to the name field
    document.getElementById("name").focus();
}

// Function to modify the salary of an employee
function modifySalary() {
    let nameSelect = document.getElementById("modify-name");
    let selectedIndex = nameSelect.selectedIndex;
    if (selectedIndex === -1) {
        alert("Please select an employee.");
        return;
    }

    let newName = nameSelect.options[selectedIndex].text.split(" - ")[0]; // Extracting name without salary
    let newSalary = document.getElementById("new-salary").value.trim();

    // Data validation
    if (newSalary === "" || isNaN(newSalary)) {
        alert("Please enter a valid numeric salary.");
        return;
    }

    let index = persons.indexOf(newName);
    if (index !== -1) {
        salaries[index] = parseFloat(newSalary);
    }

    // Update the dropdown for modifying salary
    updateModifyDropdown();

    // Clear input fields
    document.getElementById("new-salary").value = "";

    // Move cursor to the name field
    document.getElementById("name").focus();
}

// Function to display average and highest salary
function displayResults() {
    if (salaries.length === 0) {
        alert("Please add some salaries first.");
        return;
    }

    let sum = salaries.reduce((acc, curr) => acc + curr, 0);
    let average = sum / salaries.length;
    let highest = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Salary: " + "$" + average.toFixed(2) + "</p>";
    resultsDiv.innerHTML += "<p>Highest Salary: " + "$" + highest.toFixed(2) + "</p>";
}

// Function to display salaries in table
function displaySalary() {
    let table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = persons[i];
        cell2.innerHTML = "$" + salaries[i];
    }
}

// Function to update the dropdown for modifying salary
function updateModifyDropdown() {
    let nameSelect = document.getElementById("modify-name");
    nameSelect.innerHTML = ""; // Clear existing options

    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.text = persons[i] + " - $" + salaries[i];
        nameSelect.add(option);
    }
}

// Move cursor to the name field when the page loads
window.onload = function() {
    document.getElementById("name").focus();
};
