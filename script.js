// 🎯 Part 1: Variables, Data Types, Conditionals
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const userInput = parseInt(document.getElementById("userInput").value);
  if (isNaN(userInput)) {
    result.textContent = "Please enter a valid number.";
  } else if (userInput % 2 === 0) {
    result.textContent = `${userInput} is even.`;
  } else {
    result.textContent = `${userInput} is odd.`;
  }
});

// ❤️ Part 2: Custom Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Example usage
console.log(calculateTotal(10, 3)); // 30
console.log(formatGreeting("Coder")); // Hello, Coder!

// 🔁 Part 3: Loops
const countdownList = document.getElementById("countdownList");

for (let i = 5; i >= 1; i--) {
  const li = document.createElement("li");
  li.textContent = `Countdown: ${i}`;
  countdownList.appendChild(li);
}

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit}`);
});

// 🌐 Part 4: DOM Interactions
const toggleBtn = document.getElementById("toggleBtn");
const toggleMessage = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", () => {
  toggleMessage.classList.toggle("hidden");
});

// Additional DOM interaction: create element dynamically
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);

