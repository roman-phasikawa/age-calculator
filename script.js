const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.className = "go-btn";
btn.innerHTML = "→";
container.appendChild(btn);

// myButton.addEventListener("click", function () {
//   // btn.textContent = `Your age is 21years old years`;
//   alert("Button clicked!");
// });
const dateInput = document.getElementById("datePicker");
const myButton = document.querySelector(".go-btn");
const displayArea = document.getElementById("displayAge");

myButton.addEventListener("click", () => {
  const dateValue = dateInput.value;

  if (dateValue) {
    const dateToday = new Date();
    const selectedDate = new Date(dateValue);
    dateToday.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    calculateAge(selectedDate, dateToday);
  } else {
    // console.log("Select date first!");
    displayArea.innerText = "Please select a date first!";
  }
});
function calculateAge(date, today) {
  const calcMs = today - date;

  const msInDay = 1000 * 60 * 60 * 24;
  const msInMonth = msInDay * 30.4375; // Average month length
  const msInYear = msInDay * 365.25; // Account for leap years

  const resultYear = Math.floor(calcMs / msInYear);
  const remainderAfterYears = calcMs % msInYear;

  const resultMonth = Math.floor(remainderAfterYears / msInMonth);
  const remainderAfterMonths = remainderAfterYears % msInMonth;

  const resultDay = Math.floor(remainderAfterMonths / msInDay);

  // console.log("Your age is " + resultYear + " years " + resultMonth + " months " + resultDay + " days.");
  displayArea.innerHTML = `
  <div class="res-container">
    <p class="res-par">Result:</p>
    <p>Your age is ${resultYear} Years, ${resultMonth} Months, ${resultDay} Days</p>
  </div>
`;
}
dateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    myButton.click();
  }
});
