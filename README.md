# SpendWise — Personal Budget Tracker

## Project Description

SpendWise is a responsive personal budgeting website. It helps users set a monthly budget, record expenses, filter spending by category, remove records and monitor their remaining balance. The dashboard gives feedback when spending reaches 80% of the budget or goes over budget. All amounts are shown in Kenyan shillings (KES).

## Technologies Used

- HTML5 for the page structure and forms.
- CSS3 for the responsive layout, styling and typography.
- JavaScript for expense data, calculations, validation, conditional messages and interactive dashboard updates.
- Google Fonts (DM Sans and Manrope) for typography.
- GitHub for source-code version control.
- Netlify for website hosting and continuous deployment.

## Project Files

- `index.html` — dashboard structure, budget and expense forms, expense table and help content.
- `style.css` — visual design, responsive layout, cards, forms and table styles.
- `script.js` — expense array, calculations, validation, loops, conditionals, DOM updates and event listeners.
- `README.md` — project information and deployment documentation.

## GitHub Repository Information

- Repository: [SpendWise — Budget_tracker](https://github.com/musadeho32-maker/Budget_tracker)
- Owner: `musadeho32-maker`
- Visibility: Public
- Deployment branch: `main`

## Live Netlify Website URL

[https://budget-tracker-b8f9.netlify.app/](https://budget-tracker-b8f9.netlify.app/)

## Deployment Process Summary

1. Confirm that `index.html`, `style.css` and `script.js` are in the repository root and that the HTML links to the CSS and JavaScript files using relative paths.
2. Sign in to Netlify and choose **Add new project / Import an existing project**.
3. Select GitHub, authorize Netlify to access the account, and choose `musadeho32-maker/Budget_tracker`.
4. Select the `main` branch. This is a static HTML, CSS and JavaScript project, so no build command is needed and the publish directory is the repository root (`.`).
5. Deploy the site. In Netlify's site settings, change the generated site name to a meaningful available name such as `spendwise-budget-tracker`.
6. Open the published URL and test the application.
7. After the first deployment, make a visible change, commit and push it to `main`. Confirm in Netlify's **Deploys** page that a new deployment starts and publishes the latest commit.
8. Add the published Netlify URL to this README and commit the update. The current URL was supplied for this project.

## Deployment Testing Checklist

- [ ] The Netlify website opens using its public HTTPS URL.
- [ ] The SpendWise page, fonts, styles and JavaScript load.
- [ ] The startup prompts accept valid values and reject invalid values.
- [ ] A user can add an expense and see the table and totals update.
- [ ] The category filter displays the selected category.
- [ ] A user can remove an expense and see totals recalculate.
- [ ] Updating the monthly budget refreshes the remaining balance and status message.
- [ ] The layout works on desktop and mobile screen sizes.
- [ ] A new GitHub commit triggers an automatic Netlify deployment.
- [ ] The live site shows the visible change from the latest commit.

## Challenges Encountered During Deployment

The deployment-specific challenges and their actual resolutions will be recorded after the first Netlify deployment and automatic-deployment test. Do not report a challenge as resolved until it has been observed and tested. A possible configuration point to check is that this project is a static site: the publish directory should be the repository root and the build command should be left blank.

## Lessons Learned

- A public GitHub repository can act as the source for a hosted website.
- Netlify can connect to a GitHub branch and publish changes automatically after new commits.
- A simple static website does not need a build command when its HTML, CSS and JavaScript files are already ready to serve.
- Correct file paths and a suitable publish directory are important for loading styles and scripts.
- A successful deployment should be verified by testing the live website, not just by seeing a successful build message.
- Continuous deployment should be tested by pushing a new commit after the initial deployment and checking that the live site updates.

## Local Testing

Download or clone the repository, then open `index.html` in a modern web browser. Enter a monthly budget and starting expenses when prompted. Add, filter and remove expenses, and update the budget to test the dashboard.

## Data Storage Note

Expense records are stored in JavaScript memory only. They are not saved to a database or browser storage, so refreshing the page resets the records and asks for the starting values again.
