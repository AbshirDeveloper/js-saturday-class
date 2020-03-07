// else if practice

/*

A, B, C, D, E, F

A = Excelent
B = Very good
C = Good
D = Poor
E = Very poor
F = Failed

*/

const grades = {
  A: "Excelent",
  B: "Very good",
  C: "Good",
  D: "Poor",
  E: "Very poor",
  F: "Failed"
};

const grade = "Excelent";

if (grade === "Excelent") {
  console.log("A");
} else if (grade === "Poor") {
  console.log("D");
} else if (grade === "Failed") {
  console.log("F");
} else if (grade === "Very good") {
  console.log("B");
} else if (grade === "good") {
  console.log("C");
}

function submit(val) {
  console.log(val);
}

var age = prompt("What is your age");

if (age > 18) {
  document.write("<b>Qualifies for driving</b>");
} else {
  document.write("<b>Does not qualify for driving</b>");
}
