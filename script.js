//========================================================================
// CODE OVERVIEW
// Create the Schema for the MySQL database. Add some seed values for testing (These are on separate sheets) 
// Build a command-line application that at a minimum allows the user to:
    // Add departments, roles, employees
    // View departments, roles, employees
    // Update employee roles
// The command line will access and update the created MYSQL database
//========================================================================

// Require Dependencies:
var mysql = require("mysql"); // For connecting to the MySQL database
var inquirer = require("inquirer"); // For interacting with the user via the command-line
var ctable = require("console.table") // For printing MySQL rows  to the console


// Establish Connection with MySQL:
    // create the connection information for the sql database
    var connection = mysql.createConnection({
        host: "localhost",
    
        // Your port; if not 3306
        port: 3306,
    
        // Your username
        user: "root",
    
        // Your password
        password: "root",
        database: "employeetracker_db"
    });

    // connect to the mysql server and sql database
    connection.connect(function(err) {
        if (err) throw err;
        // run the start function after the connection is made to prompt the user
        start();
    });

// Create the start function that uses inquirer to ask the user what actions he/she wants to take:
// Based off the answer, certain functions will run that perform that action.
function start() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "startOptions",
                message: "What actions do you want to take?",
                choices: [
                    "Add New Department Type",
                    "Add New Employee Role Type",
                    "Add New Employee",
                    "View all Departments",
                    "View all Employee Roles",
                    "View all Employees",
                    "Change the job of the employee",
                    "Exit program"
                ] 
            }
        ])
        .then(answers => {

            switch(answers.startOptions){

                case "Add New Department Type" :
                    addDepartment();
                    break;

                case "Add New Employee Role Type" :
                    addEmployeeRole();
                    break;
                
                case "Add New Employee" : 
                    addEmployee();
                    break;
                
                case "View all Departments" : 
                    viewDepartments();
                    break;
                
                case "View all Employee Roles" : 
                    viewEmployeeRoles();
                    break;

                case "View all Employees" : 
                    viewEmployees();
                    break;

                case "Change the job of the employee" : 
                    changeJob();
                    break;
                
                default:
                    console.log("See you later...");

            };

        });

};

// Function to add departments to the department table:
function addDepartment() {
    console.log("Adding Departments!!!");
    start();
};

// Function to add roles to the employee_role table:
function addEmployeeRole() {
    console.log("Adding Employee Role!!!");
    start();
};

// Function to add employees to the employee table:
function addEmployee() {
    console.log("Adding Employee!!!");
    start();

};

// Function to view departments in the department table:
function viewDepartments() {
    console.log("Viewing Departments!!!");
    start();
};

// Function to view roles in the employee_role table:
function viewEmployeeRoles() {
    console.log("Viewing Employee Roles!!!");
    start();
};

// Function to view employees in the employees table:
function viewEmployees() {
    console.log("Viewing Employees!!!");
    start();

};

// Function to update employee role by changing the role_id in the employee table: 
function changeJob() {
    console.log("Updating Employee Job!!!");
    start();

};