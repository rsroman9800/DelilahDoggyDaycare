/*jshint esversion: 6 */
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayCost = 0;
let dayCounter = 0;
let calculatedCost = 0;
const dayButtons = document.querySelectorAll('.day-selector li'); // All list items in day-selector class get put under one variable
const clearButton = document.getElementById("clear-button");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");

dayButtons.forEach(button => {button.addEventListener("click", buttonClick);}); // Using for each so that all buttons will add the Event Listener and also to avoid repetition
clearButton.addEventListener("click", clearAllDays);
halfDayButton.addEventListener("click", halfDayCalculate);
fullDayButton.addEventListener("click", fullDayCalculate);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function buttonClick(onclick) {
    const clickedButton = onclick.target; // Once a button is clicked, it is set as a clickedButton
    const alreadyClicked = clickedButton.classList.contains('clicked'); // As per the challenge, sets the constant of alreadyClicked if the button has already been clicked
    clickedButton.classList.add('clicked');
    if (!alreadyClicked) { // If the button is not already clicked, increase the dayCounter
        dayCounter += 1;
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearAllDays() {
    dayButtons.forEach(button => {button.classList.remove('clicked');}); // Using forEach to remove the clicked class from all dayButtons
    let costLabel = document.getElementById("calculated-cost");
    calculatedCost = 0;
    dayCounter = 0;
    dayCost = 0;
    costLabel.innerHTML = calculatedCost; // Sets the innerHTML cost to $0 as well
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayCalculate() {
    dayCost = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayCalculate() {
    dayCost = 35;
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.add('clicked');
    recalculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let calculatedCost = dayCounter * dayCost; 

    costLabel.innerHTML = calculatedCost;
}
