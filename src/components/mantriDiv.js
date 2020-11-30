/* <div class="employee-card">
        <div class="employee-image">
          <img src="source for employee image" alt="" />
          <!-- alternativ 2 -->
          <!-- add background to employee-image div -->
        </div>
        <p id="emp-random">Employee Name</p>
        <p>Company Name</p>
      </div> */

export const renderMantriCard  = (mantri) => {
    const mantriCard = document.createElement('div');
    mantriCard.classList.add('card');
    mantriCard.innerHTML = `<div class="card-content-header">
    <div class="company-logo">
      <img src="${mantri.logo}" alt="" />
    </div>
    <div class="employee-heading">
      <h3>${mantri.firstName} ${mantri.lastName}</h3>
      <p>${mantri.party} | ${mantri.state}, ${mantri.country} | ${mantri.birthYear}</p>
    </div>
    <div class="qr-code">
      <img
        src="./assets/images/qrcode.png"
        alt="Click Here for More Details"
        srcset=""
      />
    </div>
  </div>
  <div class="card-content-image">
    <img src="${mantri.imageUrl}" alt="" srcset="" />
  </div>
  <div class="employee-details">
    <div class="employee-detail terms">
      <p class="bold">Number of Terms</p>
      <p>${mantri.numberOfTerms}</p>
    </div>
    <div class="employee-detail education">
      <p class="bold">Education</p>
      <p>${mantri.education}</p>
    </div>
    <div class="employee-detail cc">
      <p class="bold">Criminal Cases</p>
      <p>${mantri.criminalCases}</p>
    </div>
    <div class="employee-detail assets">
      <p class="bold">Assets</p>
      <p>${mantri.assets}</p>
    </div>
    <div class="employee-detail liabilities">
      <p class="bold">Liabilities</p>
      <p>${mantri.liabilities}</p>
    </div>
    <div class="employee-detail voteshare">
      <p class="bold">Vote Share</p>
      <p>${mantri.voteShare}</p>
    </div>
    <div class="footer">
      <p class="footer-1">17th Lok Sabha</p>
      <p class="footer-2">${mantri.email}</p>
    </div>
  </div>`;
    // employeeCard.innerHTML =`<div class="employee-image">
    //         <img src="${employee.imageUrl}" alt="" />
    //     </div>
    //     <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
    //     <p>${employee.company}</p>`;

        return mantriCard;
}