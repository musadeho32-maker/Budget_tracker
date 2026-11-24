# SpendWise — JavaScript Budget Tracker

## Project overview

SpendWise is a beginner-friendly personal budgeting application. It asks the user for a monthly budget and current expenses, calculates the total spending and remaining balance, and displays the results on the webpage and in the browser console. Users can record, filter and remove expenses, update their budget, and receive warnings when spending approaches or exceeds the budget.

All amounts are displayed in Kenyan shillings (KES).

## Project files

- **`index.html`** — provides the page structure, budget summary, expense form, expense table and help section. It links the stylesheet and JavaScript file.
- **`style.css`** — controls the colours, typography, cards, form, table and responsive layout.
- **`script.js`** — collects input, stores budget data, performs calculations, updates the page and prints a labelled budget summary in the browser console.
- **`README.md`** — explains the project and how to run it.

## JavaScript concepts implemented

### 1. Variables and data types

The application uses variables to store information while it runs:

- `monthlyBudget` is a number representing the user's budget.
- `expenses` is an array containing multiple expense objects. Each record has an ID, name, amount, category and date.
- `totalExpenses` is a number representing the sum of expense amounts.
- Each expense object stores a `name` (string), `amount` (number), `category` (string) and `date` (string).
- `budgetInput` and `expensesInput` temporarily store text returned by the browser prompts. The `Number()` function converts valid numeric input into numbers.

The variables use `let` because their values can change as expenses are added.

### 2. Collecting user input

When the page loads, JavaScript uses `prompt()` to ask for the monthly budget and current total expenses. It checks that the entries are valid, numeric values and are not negative.

The HTML expense form collects an expense name, amount, category and date. JavaScript reads these values when the user submits the form.

### 3. Budget calculations

- `calculateTotalExpenses(expenseList)` uses the array `reduce()` method to add all expense amounts.
- `calculateRemainingBalance(budget, spent)` subtracts total expenses from the monthly budget.
- The application can show a negative remaining balance when spending is greater than the budget, making overspending visible.

### 4. Reusable functions

Functions keep the code organised and prevent repeating the same instructions:

- `getStartingBudget()` collects and validates the initial budget information.
- `calculateTotalExpenses()` adds expense amounts.
- `calculateRemainingBalance()` calculates the remaining budget.
- `formatCurrency()` formats amounts as KES.
- `displayBudgetSummary()` updates the dashboard, evaluates budget conditions and prints labelled results in the console.
- `renderExpenses()` loops through the array and displays the selected records.
- `createExpenseRow()` creates a table row for one expense.
- `addExpense()` validates form data, stores a new expense and refreshes the dashboard.
- `updateBudget()` validates and updates the monthly budget.

### 5. Decision making with conditionals

The dashboard uses `if`, `else if` and `else` statements to respond to the budget situation:

- If spending exceeds the budget, an over-budget warning appears.
- If the budget is zero, SpendWise asks the user to set a spending limit.
- If 80% or more of the budget has been used, a budget alert appears.
- Otherwise, the dashboard confirms the remaining balance.

### 6. Arrays and loops

The `expenses` array stores expense objects. A `for...of` loop calculates the total and another loop renders the expense records. The `filter()` array method supports category filtering and removing a selected record.

### 7. DOM manipulation and event listeners

SpendWise updates the webpage with `textContent`, `createElement()`, `appendChild()` and `replaceChildren()`. Event listeners respond to form submissions, category changes, remove-button clicks and budget updates. Event delegation lets one listener handle remove buttons in dynamically-created rows.

### 8. Displaying results

The budget, total spent and remaining balance appear in the Budget Overview on the webpage. The browser console also displays a clearly labelled SpendWise Budget Summary, including the number of expense records.

## How to run and test SpendWise

1. Open the repository on GitHub, then download or clone the project.
2. Open `index.html` in a modern web browser.
3. Enter a monthly budget when the first prompt appears.
4. Enter your current total expenses in the second prompt (enter `0` if you have none).
5. Check the Budget Overview for the budget, spending and remaining balance.
6. Open the browser developer tools (**F12**) and select the **Console** tab to view the labelled calculation results.
7. Add several expenses in different categories and confirm that each appears in the table.
8. Use the category filter and confirm that only matching records are displayed.
9. Remove an expense and confirm that the totals are recalculated.
10. Update the monthly budget using the Update Budget form.
11. Test the warning conditions: use 80% or more of the budget for a budget alert, and more than 100% for an over-budget warning.
12. Open the browser developer tools (**F12**) and select the **Console** tab to review the labelled summary.
13. Refresh the page to test the starting prompts again.

## Testing checklist

- [ ] A valid monthly budget and starting expense total are accepted.
- [ ] Invalid or negative prompt values are rejected.
- [ ] The remaining balance equals budget minus total expenses.
- [ ] Adding several expenses updates the table and totals.
- [ ] Category filtering shows matching records only.
- [ ] Removing an expense updates the totals.
- [ ] Updating the budget refreshes the dashboard.
- [ ] The 80% warning and over-budget decision messages work.
- [ ] Results are labelled in the browser console.
- [ ] The layout works on desktop and mobile screens.

## Notes

The data is stored in JavaScript variables while the page is open. It is not saved permanently; refreshing the page starts a new session and asks for the budget again. The Google Fonts, wallet image and embedded video require an internet connection.
