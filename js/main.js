let human = document.getElementById("human").value;
let gender = document.getElementById("gender").value;
let country = document.getElementById("country").value;
let sumbit = document.getElementById("sumbit").value;

// human.addEventListener('click', mine)
// gender.addEventListener('click', mine)
// country.addEventListener('click', mine)
sumbit.addEventListener("click", mine);

function mine() {
  if (
    document.getElementById("human").value < 8 &&
    document.getElementById("human").value > -1
  ) {
    document.getElementById("result").innerText = "for you free";
  } else if (
    document.getElementById("human").value > 7 &&
    document.getElementById("human").value < 31 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "uzb"
  ) {
    document.getElementById("result").innerText = "for you 20$";
  } else if (
    document.getElementById("human").value > 7 &&
    document.getElementById("human").value < 31 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "ru"
  ) {
    document.getElementById("result").innerText = "for you 25$";
  } else if (
    document.getElementById("human").value > 7 &&
    document.getElementById("human").value < 31 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "other"
  ) {
    document.getElementById("result").innerText = "for you 30$";
  } else if (
    document.getElementById("human").value > 7 &&
    document.getElementById("human").value < 31 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "uzb"
  ) {
    document.getElementById("result").innerText = "for you 35$";
  } else if (
    document.getElementById("human").value > 7 &&
    document.getElementById("human").value < 31 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "other"
  ) {
    document.getElementById("result").innerText = "for you 45$";
  } else if (
    document.getElementById("human").value > 30 &&
    document.getElementById("human").value < 61 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "ru"
  ) {
    document.getElementById("result").innerText = "for you 55$";
  } else if (
    document.getElementById("human").value > 30 &&
    document.getElementById("human").value < 61 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "other"
  ) {
    document.getElementById("result").innerText = "for you 60$";
  } else if (
    document.getElementById("human").value > 30 &&
    document.getElementById("human").value < 61 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "uzb"
  ) {
    document.getElementById("result").innerText = "for you 65$";
  } else if (
    document.getElementById("human").value > 30 &&
    document.getElementById("human").value < 61 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "ru"
  ) {
    document.getElementById("result").innerText = "for you 70$";
  } else if (
    document.getElementById("human").value > 30 &&
    document.getElementById("human").value < 61 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "other"
  ) {
    document.getElementById("result").innerText = "for you 70$";
  } else if (
    document.getElementById("human").value > 60 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "uzb"
  ) {
    document.getElementById("result").innerText = "for you 75$";
  } else if (
    document.getElementById("human").value > 60 &&
    document.getElementById("gender").value == "female" &&
    document.getElementById("country").value == "ru"
  ) {
    document.getElementById("result").innerText = "for you 80$";
  } else if (
    document.getElementById("human").value > 60 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "uzb"
  ) {
    document.getElementById("result").innerText = "for you 90$";
  } else if (
    document.getElementById("human").value > 60 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "ru"
  ) {
    document.getElementById("result").innerText = "for you 95$";
  } else if (
    document.getElementById("human").value > 60 &&
    document.getElementById("gender").value == "male" &&
    document.getElementById("country").value == "other"
  ) {
    document.getElementById("result").innerText = "for you 100$";
  } else {
    document.getElementById("result").innerText =
      "Sorry! But only you can enter words above.";
  }
}
