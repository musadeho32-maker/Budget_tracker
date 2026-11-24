// SpendWise: JavaScript foundation for a simple personal budget tracker.

// Variables store the budget, expenses and user-entered information.
let monthlyBudget = 0;
let expenses = [];
let totalExpenses = 0;

// Ask the user for starting budget information using browser prompts.
function getStartingBudget() {
    const budgetInput = prompt("Welcome to SpendWise! Enter your monthly budget in KES:");
    if (budgetInput === null || budgetInput.trim() === "") {
        return false;
    }

    const budgetValue = Number(budgetInput);
    if (!Number.isFinite(budgetValue) || budgetValue < 0) {
        alert("Please enter a valid budget amount (zero or more).");
        return false;
    }

    const expensesInput = prompt("Enter your current total expenses in KES (enter 0 if you have none):");
    if (expensesInput === null || expensesInput.trim() === "") {
        return false;
    }

    const expensesValue = Number(expensesInput);
    if (!Number.isFinite(expensesValue) || expensesValue < 0) {
        alert("Please enter a valid expense amount (zero or more).");
        return false;
    }

    monthlyBudget = budgetValue;
    totalExpenses = expensesValue;

    // Keep the starting figures as one opening expense record for the calculation.
    if (totalExpenses > 0) {
        expenses.push({
            name: "Starting expenses",
            amount: totalExpenses,
            category: "Other",
            date: new Date().toISOString().slice(0, 10)
        });
    }
    return true;
}

// Add every expense amount together and return the total.
function calculateTotalExpenses(expenseList) {
    return expenseList.reduce((total, expense) => total + expense.amount, 0);
}

// Subtract total spending from the monthly budget.
function calculateRemainingBalance(budget, spent) {
    return budget - spent;
}

// Format amounts consistently as Kenyan shillings.
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        minimumFractionDigits: 2
    }).format(amount);
}

// Update the summary on the webpage and print clearly labelled results.
function displayBudgetSummary() {
    totalExpenses = calculateTotalExpenses(expenses);
    const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

    document.getElementById("budget-total").textContent = formatCurrency(monthlyBudget);
    document.getElementById("spent-total").textContent = formatCurrency(totalExpenses);
    document.getElementById("remaining-total").textContent = formatCurrency(remainingBalance);

    const message = document.getElementById("budget-message");
    if (remainingBalance < 0) {
        message.textContent = "You are over budget by " + formatCurrency(Math.abs(remainingBalance)) + ". Review your spending.";
        message.classList.add("over-budget");
    } else {
        message.textContent = "You have " + formatCurrency(remainingBalance) + " left in your budget.";
        message.classList.remove("over-budget");
    }

    console.clear();
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly budget: " + formatCurrency(monthlyBudget));
    console.log("Total expenses: " + formatCurrency(totalExpenses));
    console.log("Remaining balance: " + formatCurrency(remainingBalance));
    console.log("Number of expense records: " + expenses.length);
    console.log("====================================");
}

// Add a new expense row safely using textContent, then refresh the calculations.
function addExpense(event) {
    event.preventDefault();

    const nameInput = document.getElementById("expense-name");
    const amountInput = document.getElementById("expense-amount");
    const categoryInput = document.getElementById("expense-category");
    const dateInput = document.getElementById("expense-date");
    const amount = Number(amountInput.value);

    if (!nameInput.value.trim() || !Number.isFinite(amount) || amount <= 0 ||
        !categoryInput.value || !dateInput.value) {
        alert("Please complete all fields and enter an amount greater than zero.");
        return;
    }

    const newExpense = {
        name: nameInput.value.trim(),
        amount: amount,
        category: categoryInput.value,
        date: dateInput.value
    };

    expenses.push(newExpense);

    const row = document.createElement("tr");
    [newExpense.name, formatCurrency(newExpense.amount), newExpense.category, newExpense.date]
        .forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
    document.getElementById("expenses-body").appendChild(row);

    document.getElementById("expense-form").reset();
    displayBudgetSummary();
}

// Start the application after the HTML document has loaded.
document.addEventListener("DOMContentLoaded", function () {
    const startingDataEntered = getStartingBudget();

    if (!startingDataEntered) {
        document.getElementById("budget-message").textContent =
            "Budget setup was cancelled. Refresh the page to enter your budget and start tracking.";
        return;
    }

    displayBudgetSummary();
    document.getElementById("expense-form").addEventListener("submit", addExpense);
});
