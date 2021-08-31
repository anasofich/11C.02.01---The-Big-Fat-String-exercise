"use strict";

const generate = document.querySelector("#generate");
const input = document.querySelector("#input").value;
const options = document.querySelector("#options").value;

generate.addEventListener("click", showOutput);

function showOutput() {
  console.log(`${input}`);

  if (options == "opt1") {
    const output = input.substring(0, 1).toUpperCase() + input.substring(1);
    document.querySelector("#output").value = output;
  } else if (options == "opt2") {
    let firstSpace = input.index(" ");
    let name = input.substring(0, firstSpace);
    let output = name.length;
    document.querySelector("#output").value = output;
  }

  /* if (options == "opt1") {
    let part1 = input.substring(0, 1).toUpperCase();
    let part2 = input.substring(1);
    document.querySelector("#output").value = `${part1}${part2}`;
  } */

  //document.querySelector("#output").value = input;
}

/* function showOutput() {
  const input = document.querySelector("#input").value;

  console.log(input);

  document.querySelector("#output").value = input;
} */
