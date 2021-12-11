console.log(`js`);
$(onReady);

function onReady() {
    //blank html append here
    {
    let titleHTML = `
    <h1>Salary Calculator</h1>
    <br>
    <h2>Add Employee Data</h2>
    <br>
    `

    let inputFormHTML = `
    <form class="form" id="inputForm">
    <table>
        <thead>
            <tr> 
                <!-- labels for the inputs -->
                <td> <label class="label" for="firstName">First Name</label> </td>
                <td> <label class="label" for="lastName">Last Name</label> </td>
                <td> <label class="label" for="idNo">ID Number</label> </td>
                <td> <label class="label" for="jobTitle">Job Title</label> </td>
                <td> <label class="label" for="salary">Annual Salary</label> </td>
            </tr>
            <tr>
                <!-- input boxes -->
                <td> <input id="firstName" type="text" required autofocus value="james"/> </td>
                <td> <input id="lastName" type="text" required value="petran"/> </td>
                <td> <input id="idNo" type="text" required value="1234"/> </td> 
                <td> <input id="jobTitle" type="text" required value="cool guy"/> </td>
                <td> <input id="salary" type="number" min="0" step="1" required value="36000"/> </td>    
            </tr>
            <tr>
                <!-- submit button row -->
                <!-- blank tds to indent submit button -->
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <!-- submit button -->
                <td>
                    <input class="button" id="submit" type="submit" value="Submit" />
                </td>
            </tr>
        </thead>
    </table>
</form>
    `
    let h2HTML = `
    <h2>Employee List</h2>
    `
    let employeeTableHTML = `
    <!-- employees table list -->
    <table class="table-striped">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Job Title</th>
                <th>Annual Salary</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
    <br>
    `
    let monthlyCostHTML = `
    <h4 id="monthlyCostDisp">
        <p>Total Monthly Cost: $<span id="cost">0</span></p>
    </h4>
    `
    $('body').append(titleHTML);
    $('body').append(inputFormHTML);
    $('body').append(h2HTML);
    $('body').append(employeeTableHTML);
    $('body').append(monthlyCostHTML);
    $('body').append(`<footer class="footer">the source code for this website can be found <a href="https://github.com/jpetran2/jquery-salary-calculator">here</a></footer>`);
        }

    //event handlers
    $('body').on('click','#submit', onSubmit);
    $('body').on('click','.deleteBtn', onDelete);
    

    //onReady() finished
    console.log(`JQ`);
}

let employeeList= []; //master list of employees. has to be global to be accessible with all functions
let monthlyCost=0; //master monthly cost. has to be global to be accessible with all functions

function onSubmit(event) {
    event.preventDefault(); //stops page from reloading
    console.log('submit'); //logs that we are in submit function

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNo: $('#idNo').val(),
        jobTitle: $('#jobTitle').val(),
        salary: $('#salary').val(),
        monthlySalary: Number($('#salary').val()/12), //annual salary divided by 12, not displayed in table but is used in DOM display
        row: employeeList.length //to track each object in the arrau: first employee is 0, second is 1 etc
    }
    console.log(employee); // log object
    employeeList.push(employee); // add employee object to employeeList array
    console.log(employeeList); // log employeeList array

    monthlyCost += employee.monthlySalary; //add this employee's monthly salary to the budget
    refreshDOM(employeeList); //refresh DOM 
}

function onDelete() {
    console.log('delete');
    let c = $(this).parent().parent().attr('id');
    console.log(c);
    let row = c.substring(11); 
    // extract the row number from the attr('id' string)
    // by extracting part of the string that is after 'employeeRow' which is 11 characters long
    // e.g. if attr('id') = employeeRow56, the logic above will result in row = 56
    // this is to find the proper index value in the employeeList array
    console.log(row);
    employeeList[row].firstName = ''; 
    let cost = employeeList[row].monthlySalary;
    monthlyCost -= cost;
    refreshDOM(employeeList); //refresh DOM 
}

function refreshDOM(employees) {
    console.log('refreshing dom'); //logging that I am in the function
    let tb=$('tbody'); //selecting the tbody, only present in the employee table. if i had a tbody in the input table i would choose a more specific selector
    tb.children().remove(); //remove all the old data in table
    for (employee of employees) { // running through all the employees in the list
        if (employee.firstName !== '') { //if employee.name is blank then skip appending it to DOM, working with delete logic above
            let employeeRowHTML =` 
            <tr id="employeeRow${employee.row}">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNo}</td>
                <td>${employee.jobTitle}</td>
                <td>$${employee.salary}</td>
                <td>
                    <button class="deleteBtn button">Delete</button>
                </td>
            </tr>
            `; //the code to append each piece of data in a single row of the table

            tb.append(employeeRowHTML); //appending this row to the DOM
        }

    } //repeat until you've gone thru the whole employeeList, refeshing the table each time you add a new employee
    
    //makes monthlyCost red if its more than 20k, removes the red if it ain't
    if (monthlyCost > 20000) {
        $('#monthlyCostDisp').addClass('red')
    } else {
        $('#monthlyCostDisp').removeClass('red')
    } 
    $('#cost').text(monthlyCost); //update DOM with monthly cost value
}


