import test from "node:test";
import assert from "node:assert/strict";
import { incrementar } from "./contador.js";

test("el contador empieza en cero y avanza a uno", () => {
  assert.equal(incrementar(0), 1);
});

test("cada clic aumenta el contador en una unidad", () => {
  let valor = 0;

  for (let clic = 0; clic < 5; clic++) {
    valor = incrementar(valor);
  }

  assert.equal(valor, 5);
});