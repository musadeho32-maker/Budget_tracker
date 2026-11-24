// SpendWise: interactive budgeting application.

// Application data: an array stores multiple expense objects.
let monthlyBudget = 0;
let expenses = [];
let nextExpenseId = 1;

// Collect initial values using browser prompts and validate them.
function getStartingBudget() {
    const budgetInput = prompt("Welcome to SpendWise! Enter your monthly budget in KES:");
    if (budgetInput === null || budgetInput.trim() === "") return false;

    const budgetValue = Number(budgetInput);
    if (!Number.isFinite(budgetValue) || budgetValue < 0) {
        alert("Please enter a valid budget amount (zero or more).");
        return false;
    }

    const startingExpensesInput = prompt("Enter your current total expenses in KES (enter 0 if none):");
    if (startingExpensesInput === null || startingExpensesInput.trim() === "") return false;

    const startingExpenses = Number(startingExpensesInput);
    if (!Number.isFinite(startingExpenses) || startingExpenses < 0) {
        alert("Please enter a valid expense amount (zero or more).");
        return false;
    }

    monthlyBudget = budgetValue;
    if (startingExpenses > 0) {
        expenses.push({
            id: nextExpenseId++,
            name: "Starting expenses",
            amount: startingExpenses,
            category: "Other",
            date: new Date().toISOString().slice(0, 10)
        });
    }
    return true;
}

// Use a loop to calculate the sum of all expense records.
function calculateTotalExpenses() {
    let total = 0;
    for (const expense of expenses) {
        total += expense.amount;
    }
    return total;
}

function calculateRemainingBalance(budget, spent) {
    return budget - spent;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        minimumFractionDigits: 2
    }).format(amount);
}

// Build table rows safely. textContent prevents user text being treated as HTML.
function createExpenseRow(expense) {
    const row = document.createElement("tr");
    [expense.name, formatCurrency(expense.amount), expense.category, expense.date]
        .forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "delete-expense-button";
    removeButton.textContent = "Remove";
    removeButton.dataset.expenseId = expense.id;
    removeButton.setAttribute("aria-label", "Remove " + expense.name);
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);
    return row;
}

// Loop through the array and display records matching the selected category.
function renderExpenses() {
    const tableBody = document.getElementById("expenses-body");
    const selectedCategory = document.getElementById("category-filter").value;
    tableBody.replaceChildren();

    for (const expense of expenses) {
        if (selectedCategory !== "All" && expense.category !== selectedCategory) {
            continue;
        }
        tableBody.appendChild(createExpenseRow(expense));
    }

    if (tableBody.children.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.textContent = "No expenses found for this category.";
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
}

// Conditional statements provide feedback for different budget situations.
function displayBudgetSummary() {
    const totalSpent = calculateTotalExpenses();
    const remaining = calculateRemainingBalance(monthlyBudget, totalSpent);
    const spendingRate = monthlyBudget > 0 ? (totalSpent / monthlyBudget) * 100 : 0;

    document.getElementById("budget-total").textContent = formatCurrency(monthlyBudget);
    document.getElementById("spent-total").textContent = formatCurrency(totalSpent);
    document.getElementById("remaining-total").textContent = formatCurrency(remaining);

    const message = document.getElementById("budget-message");
    message.classList.remove("over-budget", "budget-warning");

    if (remaining < 0) {
        message.textContent = "Over budget by " + formatCurrency(Math.abs(remaining)) + ". Reduce your spending.";
        message.classList.add("over-budget");
    } else if (monthlyBudget === 0) {
        message.textContent = "Your budget is zero. Update it to set a spending limit.";
        message.classList.add("budget-warning");
    } else if (spendingRate >= 80) {
        message.textContent = "Budget alert: you have used " + spendingRate.toFixed(1) +
            "% of your budget. " + formatCurrency(remaining) + " remains.";
        message.classList.add("budget-warning");
    } else {
        message.textContent = "Good progress! You have " + formatCurrency(remaining) + " left.";
    }

    console.clear();
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly budget: " + formatCurrency(monthlyBudget));
    console.log("Total expenses: " + formatCurrency(totalSpent));
    console.log("Remaining balance: " + formatCurrency(remaining));
    console.log("Budget used: " + spendingRate.toFixed(1) + "%");
    console.log("Expense records: " + expenses.length);
    console.log("====================================");
}

// Read form values, validate them, add a record and refresh the dashboard.
function addExpense(event) {
    event.preventDefault();
    const name = document.getElementById("expense-name").value.trim();
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;
    const date = document.getElementById("expense-date").value;

    if (!name || !Number.isFinite(amount) || amount <= 0 || !category || !date) {
        alert("Complete every field and enter an amount greater than zero.");
        return;
    }

    expenses.push({
        id: nextExpenseId++,
        name: name,
        amount: amount,
        category: category,
        date: date
    });

    document.getElementById("expense-form").reset();
    renderExpenses();
    displayBudgetSummary();
}

function updateBudget(event) {
    event.preventDefault();
    const newBudget = Number(document.getElementById("new-budget").value);
    if (!Number.isFinite(newBudget) || newBudget < 0) {
        alert("Enter a valid budget of zero or more.");
        return;
    }
    monthlyBudget = newBudget;
    document.getElementById("budget-form").reset();
    displayBudgetSummary();
}

// Register event listeners after the page has loaded.
document.addEventListener("DOMContentLoaded", function () {
    const setupComplete = getStartingBudget();
    if (!setupComplete) {
        document.getElementById("budget-message").textContent =
            "Setup was cancelled. Refresh the page to enter your budget and begin.";
        return;
    }

    renderExpenses();
    displayBudgetSummary();

    document.getElementById("expense-form").addEventListener("submit", addExpense);
    document.getElementById("budget-form").addEventListener("submit", updateBudget);
    document.getElementById("category-filter").addEventListener("change", renderExpenses);

    // Event delegation handles remove clicks for dynamically-created table rows.
    document.getElementById("expenses-body").addEventListener("click", function (event) {
        if (event.target.matches(".delete-expense-button")) {
            const idToRemove = Number(event.target.dataset.expenseId);
            expenses = expenses.filter(function (expense) {
                return expense.id !== idToRemove;
            });
            renderExpenses();
            displayBudgetSummary();
        }
    });
});
