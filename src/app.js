import { data } from "./data.js";
import { renderMantriCard } from "./components/mantriDiv.js";

window.onload = () => {
  const rootDiv = document.getElementById('root');
  data.then((mantris) => {
    mantris.forEach((mantri) => {
      rootDiv.appendChild(renderMantriCard(mantri));
    });
  }).catch(e => {
    console.warn(e);
  });
};
