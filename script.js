// --- Part 1: Variable declarations and conditionals ---

// Declare visitorCount initialized to 0; message stores greeting text
let visitorCount = 0;
let message = "Hello, visitor!";

// --- Part 2: Custom functions ---

/**
 * Updates the greeting message based on visitor count.
 * @param {number} count - Number of visitors to greet
 */
function updateGreeting(count) {
    if (count > 10) {
        message = "Thanks for being one of our many visitors!";
    } else if (count > 0) {
        message = "Welcome! Come back soon.";
    } else {
        message = "Hello! Be the first visitor today.";
    }
    updateMessage(message);
}

/**
 * Updates text content of the message element in the DOM.
 * @param {string} text - Text to display on page
 */
function updateMessage(text) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = text;
}

/**
 * Removes all child nodes from a provided parent element.
 * @param {HTMLElement} parentElement - DOM element to clear
 */
function clearElementChildren(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

/**
 * Populates a list with list items from 1 to count.
 * @param {number} count - Number of items to add
 */
function populateNumberList(count) {
    const list = document.getElementById("number-list");
    clearElementChildren(list);

    for (let i = 1; i <= count; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Number ${i}`;
        list.appendChild(listItem);
    }
}

/**
 * Logs even numbers up to maxLimit in the console.
 * @param {number} maxLimit - Maximum even number to log
 */
function logEvenNumbers(maxLimit) {
    let num = 2;
    while (num <= maxLimit) {
        console.log(`Even Number: ${num}`);
        num += 2;
    }
}

// --- Part 4: DOM interactions ---

// Initialize with default visitor message
updateGreeting(visitorCount);

// Event listener for visitor greeting update button
const updateButton = document.getElementById("update-btn");
updateButton.addEventListener("click", () => {
    const input = document.getElementById("visitor-input");
    const count = Number(input.value);
    if (isNaN(count) || count < 0) {
        alert("Please enter a valid non-negative number for visitor count.");
        return;
    }
    visitorCount = count;
    updateGreeting(visitorCount);
});

// Event listener for populate number list button
const populateButton = document.getElementById("populate-btn");
populateButton.addEventListener("click", () => {
    populateNumberList(10);
    logEvenNumbers(20);
});
