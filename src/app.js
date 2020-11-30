import { data } from "./data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";

window.onload = () => {
  const rootDiv = document.getElementById('root');
  data.then((employees) => {
    employees.forEach((employee) => {
      rootDiv.appendChild(renderEmployeeCard(employee));
    });
  }).catch(e => {
    console.warn(e);
  });
};
