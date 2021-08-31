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
    console.log(output);
  } else if (options == "opt2") {
    const firstSpace = input.indexOf(" ");
    const output = input.substring(0, firstSpace);
    document.querySelector("#output").value = output;
  } else if (options == "opt3") {
    const firstSpace = input.indexOf(" ");
    const firstName = input.substring(0, firstSpace);
    const output = firstName.length;
    document.querySelector("#output").value = output;
  } else if (options == "opt4") {
    const firstSpace = input.indexOf(" ");
    const lastSpace = input.lastIndexOf(" ");
    const middleName = input.substring(firstSpace + 1, lastSpace);
    const output = `Start position: ${firstSpace + 1}, end position: ${lastSpace - 1}, middle name: ${middleName}`;
    document.querySelector("#output").value = output;
  } else if (options == "opt5") {
    if (input.endsWith(".jpg")) {
      const output = "the file is a .jpg";
      document.querySelector("#output").value = output;
    } else if (input.endsWith(".png")) {
      const output = "the file is a .png";
      document.querySelector("#output").value = output;
    }
  } else if (options == "opt6") {
    const len = input.length;
    const output = "*";
    document.querySelector("#output").value = output.repeat(len);
  } else if (options == "opt7") {
    const output = input.substring(0, 2).toLowerCase() + input.substring(2, 3).toUpperCase() + input.substring(3).toLowerCase();
    document.querySelector("#output").value = output;
  } else if (options == "opt8") {
    const space = input.indexOf(" ");
    const hyphen = input.indexOf("-");
    const output = input.substring(0, space).toLowerCase() + input.substring(space + 1, space + 2).toUpperCase() + input.substring(space + 2).toLowerCase();
    document.querySelector("#output").value = output;
  }
}
