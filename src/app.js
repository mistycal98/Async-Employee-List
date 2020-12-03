import { data } from "./data.js";
import { renderMantriCard } from "./components/mantriDiv.js";

window.onload = () => {
  const mantriDiv = document.getElementById('mantri-card');
  data.then((mantris) => {
    mantris.forEach((mantri) => {
      mantriDiv.appendChild(renderMantriCard(mantri));
    });
  }).catch(e => {
    console.warn(e);
  });
};
