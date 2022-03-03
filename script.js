// Script for weights

// Pounds
document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("lbsOutput").innerText = kgs * 2.2046;
});

// Ounces
document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("ouncesOutput").innerText = kgs * 35.274;
});

// Stones
document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("stonesOutput").innerText = kgs * 0.1574;
});

// Grams
document.getElementById("kgsInput").addEventListener("input", (e) => {
  let kgs = e.target.value;
  document.getElementById("gramsOutput").innerText = kgs * 1000;
});

// Script for mesurement

// Centimeters
document.getElementById("feetInput").addEventListener("input", (e) => {
  let feet = e.target.value;
  document.getElementById("cmsOutput").innerText = feet * 30.48;
});

// Inches
document.getElementById("feetInput").addEventListener("input", (e) => {
  let feet = e.target.value;
  document.getElementById("inchOutput").innerHTML = feet * 12;
});
