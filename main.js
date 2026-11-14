import { incrementar } from "./contador.js";
import "./style.css";

let valor = 0;

const contador = document.querySelector("#contador");
const boton = document.querySelector("#incrementar");

boton.addEventListener("click", () => {
  valor = incrementar(valor);
  contador.textContent = String(valor);
});