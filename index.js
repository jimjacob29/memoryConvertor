const byteConversion = (inputValue, outputUnit) => {
  if (outputUnit === "KB") {
    return inputValue / 1024;
  }
  if (outputUnit === "MB") {
    return inputValue / (1024 * 1024);
  }
  if (outputUnit === "GB") {
    return inputValue / (1024 * 1024 * 1024);
  }
  if (outputUnit === "B") {
    return inputValue;
  }
};
const kiloConversion = (inputValue, outputUnit) => {
  if (outputUnit === "B") {
    return inputValue * 1024;
  }
  if (outputUnit === "MB") {
    return inputValue / 1024;
  }
  if (outputUnit === "GB") {
    return inputValue / (1024 * 1024);
  }
  if (outputUnit === "KB") {
    return inputValue;
  }
};
const megaConversion = (inputValue, outputUnit) => {
  if (outputUnit === "B") {
    return inputValue * 1024 * 1024;
  }
  if (outputUnit === "KB") {
    return inputValue * 1024;
  }
  if (outputUnit === "GB") {
    return inputValue / 1024;
  }
  if (outputUnit === "MB") {
    return inputValue;
  }
};
const gigaConversion = (inputValue, outputUnit) => {
  if (outputUnit === "B") {
    return inputValue * 1024 * 1024 * 1024;
  }
  if (outputUnit === "KB") {
    return inputValue * 1024 * 1024;
  }
  if (outputUnit === "MB") {
    return inputValue * 1024;
  }
  if (outputUnit === "GB") {
    return inputValue;
  }
};

const convertToGB = () => {
  let inputUnit = document.getElementById("input").value;
  let outputUnit = document.getElementById("output").value;
  let inputValue = parseFloat(document.getElementById("byte").value);
  if (isNaN(inputValue)) {
    let answer = "Invalid input!";
    let el = document.getElementById("answer");
    el.value = answer;
    return;
  }
  let outputvalue = 0;
  if (inputUnit === "B") {
    outputvalue = byteConversion(inputValue, outputUnit);
  }
  if (inputUnit === "KB") {
    outputvalue = kiloConversion(inputValue, outputUnit);
  }
  if (inputUnit === "MB") {
    outputvalue = megaConversion(inputValue, outputUnit);
  }
  if (inputUnit === "GB") {
    outputvalue = gigaConversion(inputValue, outputUnit);
  }
  let ans = +outputvalue.toPrecision();
  let answer = `${ans} ${outputUnit}`;
  let el = document.getElementById("answer");
  el.value = answer;
};

/*let input = document.getElementById("byte").value;
  let input1 = document.getElementById("input").value;
  console.log(input1);
  input = parseFloat(input);
  let answer = "";
  if (isNaN(input)) {
    answer = "Invalid input!";
  } else {
    let ans = +(input / 1073741824).toPrecision(2);
    answer = `${ans} GB`;
  }
  let el = document.getElementById("answer");
  el.value = answer;
};*/
