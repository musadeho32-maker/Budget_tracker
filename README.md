# SpendWise — JavaScript Budget Tracker

## Project overview

SpendWise is a beginner-friendly personal budgeting application. It asks the user for a monthly budget and current expenses, calculates the total spending and remaining balance, and displays the results on the webpage and in the browser console. Users can also record additional expenses through the form and see the totals update immediately.

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
- `expenses` is an array containing expense objects.
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
- `displayBudgetSummary()` updates the webpage and prints labelled results in the console.
- `addExpense()` validates form data, stores a new expense, adds a table row and refreshes the totals.

### 5. Displaying results

The budget, total spent and remaining balance appear in the Budget Overview on the webpage. The browser console also displays a clearly labelled SpendWise Budget Summary, including the number of expense records.

## How to run and test SpendWise

1. Open the repository on GitHub, then download or clone the project.
2. Open `index.html` in a modern web browser.
3. Enter a monthly budget when the first prompt appears.
4. Enter your current total expenses in the second prompt (enter `0` if you have none).
5. Check the Budget Overview for the budget, spending and remaining balance.
6. Open the browser developer tools (**F12**) and select the **Console** tab to view the labelled calculation results.
7. Add an expense using the form. Confirm that the new row appears and the totals and console summary update.
8. Try an expense total greater than the budget to confirm that SpendWise reports overspending.
9. Refresh the page to test the prompts again.

## Testing checklist

- [ ] A valid monthly budget and starting expense total are accepted.
- [ ] Invalid or negative prompt values are rejected.
- [ ] The remaining balance equals budget minus total expenses.
- [ ] Adding an expense updates the table and totals.
- [ ] Overspending is clearly reported.
- [ ] Results are labelled in the browser console.
- [ ] The layout works on desktop and mobile screens.

## Notes

The data is stored in JavaScript variables while the page is open. It is not saved permanently; refreshing the page starts a new session and asks for the budget again. The Google Fonts, wallet image and embedded video require an internet connection.
