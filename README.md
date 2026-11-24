# SpendWise — Interactive JavaScript Budget Tracker

## Project overview

SpendWise is a personal budgeting application that helps users set a monthly budget, record expenses and monitor their remaining balance. This week's improvements make the dashboard interactive: users can add and remove expense records, filter expenses by category, update their monthly budget and receive feedback when spending approaches or exceeds the budget.

All amounts are displayed in Kenyan shillings (KES).

## Project files

- **`index.html`** — provides the dashboard, budget summary, expense form, category filter and expense table.
- **`style.css`** — styles the application, including its forms, summary cards, table, warning messages and responsive mobile layout.
- **`script.js`** — stores expense data, validates input, calculates totals, makes budget decisions, updates the webpage and handles user events.
- **`README.md`** — explains the project, JavaScript concepts and how to run and test the application.

## Improvements made this week

1. Added a form for recording an expense name, amount, category and date.
2. Added an expense array so the application can manage multiple expense records.
3. Added a loop to calculate total expenses and another loop to display records in the table.
4. Added conditional feedback for a zero budget, spending at or above 80% of the budget, and spending beyond the budget.
5. Made the dashboard update when an expense is added or removed, or when the monthly budget changes.
6. Added a category filter so users can view selected types of expenses.
7. Added remove buttons for individual expense records.
8. Added input validation and accessible status feedback.

## How JavaScript concepts are used

### 1. Decision making with conditionals

The `displayBudgetSummary()` function uses `if`, `else if` and `else` statements to evaluate the user's budget:

- If the remaining balance is below zero, the page displays an over-budget warning.
- If the monthly budget is zero, the page asks the user to set a spending limit.
- If the user has spent at least 80% of the budget, the page displays a budget alert.
- Otherwise, the page displays a positive message showing the remaining balance.

Conditional checks are also used to validate prompt and form values and to decide which expense records should be displayed.

### 2. Arrays store multiple records

The `expenses` array stores expense objects instead of keeping each expense in a separate variable. Each object contains an ID, name, amount, category and date.

When a user submits the expense form, `addExpense()` creates an object and adds it to the array with `expenses.push()`. The array's `filter()` method is used to remove a selected record and to support category filtering.

### 3. Loops process expense records

The `calculateTotalExpenses()` function uses a `for...of` loop to visit each expense and add its amount to the total. The `renderExpenses()` function uses another `for...of` loop to display each record that matches the selected category.

These loops allow the application to process many expenses without writing separate code for every record.

### 4. DOM manipulation updates the dashboard

JavaScript changes webpage content directly through the Document Object Model (DOM):

- `getElementById()` selects the dashboard elements and form controls.
- `textContent` updates the budget, spending, remaining balance and feedback message.
- `createElement()` creates table rows, cells and remove buttons.
- `appendChild()` adds the new elements to the expense table.
- `replaceChildren()` clears the old table rows before the current records are displayed.
- `classList` adds or removes warning styles according to the budget result.

The totals and expense list therefore change on the page without requiring a manual refresh.

### 5. Events handle user interactions

The application uses `addEventListener()` to respond to user actions:

- The expense form's `submit` event calls `addExpense()`.
- The budget form's `submit` event calls `updateBudget()`.
- The category filter's `change` event calls `renderExpenses()`.
- A `click` event on the expense table handles remove-button actions.

The table uses event delegation: one click listener on the table body handles remove buttons created dynamically. After an action changes the data, the application renders the expense list and recalculates the dashboard.

## Challenges encountered and how they were resolved

- **Keeping totals accurate when records change:** The totals could become outdated after adding or removing expenses. The application now recalculates the total from the expenses array and refreshes the dashboard after each data change.
- **Handling buttons created dynamically:** Remove buttons do not exist when the page first loads. Event delegation on the table body allows one event listener to handle those buttons after rows are created.
- **Preventing invalid entries:** Empty names, missing categories, invalid dates and amounts that are not greater than zero are checked before an expense is added. Budget inputs are also checked to prevent negative or invalid values.
- **Showing useful feedback:** Conditional statements select the appropriate message and warning style for the user's budget situation.

## How to run SpendWise

1. Open this public GitHub repository and download or clone the project.
2. Open `index.html` in a modern web browser.
3. Enter a monthly budget when prompted.
4. Enter your current total expenses when prompted. Enter `0` if you have no starting expenses.
5. Use the expense form to add expenses with a name, amount, category and date.
6. Use the category filter to view selected records.
7. Select **Remove** beside a record to delete it.
8. Use **Update Budget** to change the monthly budget.
9. Watch the Budget Overview and feedback message update after each action.

## Testing checklist

- [ ] Enter a valid monthly budget and starting expense amount.
- [ ] Check that invalid or negative prompt values are rejected.
- [ ] Add multiple expenses and confirm each appears in the table.
- [ ] Confirm that total spent and remaining balance update after adding an expense.
- [ ] Filter expenses by category and confirm only matching records appear.
- [ ] Remove an expense and confirm the totals update.
- [ ] Update the monthly budget and confirm the summary changes.
- [ ] Test spending below 80%, at or above 80%, and above 100% of the budget.
- [ ] Confirm the appropriate feedback message appears for each budget situation.
- [ ] Check the layout on desktop and mobile screen sizes.

## Current limitation

Expense records and the monthly budget are held in JavaScript variables while the page is open. They are not saved permanently, so refreshing the page starts a new session and asks for the budget again.
