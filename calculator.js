console.log(`js`);
$(onReady);

function onReady() {
    //blank html append here
    let titleHTML = `
    <h1>Salary Calculator</h1>
    <br>
    <h2>Add Employee Data</h2>
    <br>
    `

    let inputFormHTML = `
    <form class="form" id="form">
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
                <td> <input id="firstName" type="text" required autofocus /> </td>
                <td> <input id="lastName" type="text" required /> </td>
                <td> <input id="idNo" type="text" required /> </td> 
                <td> <input id="jobTitle" type="text" required /> </td>
                <td> <input id="salary" type="number" min="0" step="1" required /> </td>    
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
                    <input id="submit" type="submit" value="Submit" />
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
            <tr>
                <td>Jen</td>
                <td>Barber</td>
                <td>4521</td>
                <td>Team Lead</td>
                <td>$80000</td>
                <td>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>
            <tr>
                <td>Jen</td>
                <td>Barber</td>
                <td>4521</td>
                <td>Team Lead</td>
                <td>$80000</td>
                <td>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    `
    let monthlyCostHTML = `
    <h4 id="monthlyCostDisp">
        <p>Total Monthly Cost: $ <span id="cost">0</span></p>
    </h4>
    `
    $('body').append(titleHTML);
    $('body').append(inputFormHTML);
    $('body').append(h2HTML);
    $('body').append(employeeTableHTML);
    $('body').append(monthlyCostHTML);


    //event handlers

    //onReady() finished
    console.log(`JQ`);
}