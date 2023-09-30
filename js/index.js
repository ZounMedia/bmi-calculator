function calculateBMI() {
  // get input values
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  // check if inputs are empty
  if (height === "" || weight === "") {
    alert("Please fill in all fields");
    return;
  }

  // calculate BMI
  var bmi = weight / (((height / 100) * height) / 100);

  // display result of calculation
  document.getElementById("bmi").value = bmi.toFixed(2);
  document.getElementById("status").value = bmiStatus(bmi);
}
