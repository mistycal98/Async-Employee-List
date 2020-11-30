/* <div class="employee-card">
        <div class="employee-image">
          <img src="source for employee image" alt="" />
          <!-- alternativ 2 -->
          <!-- add background to employee-image div -->
        </div>
        <p id="emp-random">Employee Name</p>
        <p>Company Name</p>
      </div> */

export const renderEmployeeCard  = (employee) => {
    const employeeCard = document.createElement('div');
    employeeCard.classList.add('employee-card');
    employeeCard.innerHTML =`<div class="employee-image">
            <img src="${employee.imageUrl}" alt="" />
        </div>
        <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
        <p>${employee.company}</p>`

        // return employeeCard;
}