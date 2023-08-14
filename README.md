# SmartFinTrack
<center>
<div>
    <img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" title="NextJs" alt="NextJs" width="40" height="40"/>
    <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" title="Postgress" alt="Postgress" width="40" height="40"/>
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript" width="40" height="40"/>
    <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind css" alt="Tailwind Css" width="40" height="40"/>
</div>
</center>

## gonna be the best resume personal project,
SmartFinTrack is a finance management website built using Next.js, PostgresSQL, Prisma, Tailwind CSS, and NextAuth.js for authentication. The application aims to help users manage their finances effectively by providing budgeting tools, income tracking, expense tracking, savings goals, bill reminders, and more.

## Features

- **Budgeting Tools:** SmartFinTrack offers pre-designed budget templates and the flexibility to create custom budgets. Users can allocate their income into different spending categories and track their expenses accordingly.

- **Income Tracking:** Users can manually enter their income data and view income trends over time. SmartFinTrack provides visualization tools to help users understand their various income sources.

- **Expense Tracking:** Track expenses with ease by categorizing and managing spending. Users can upload receipts and split expenses for better financial tracking.

- **Savings Goals:** Set and manage savings goals to work towards financial milestones. SmartFinTrack provides calculators to help users plan their savings effectively.

- **Bill Reminders:** Receive email notifications for bill payment due dates to avoid late payments and potential penalties.

## Tech Stack

- Frontend: Next.js and Tailwind CSS
- Backend: NextAuth.js for authentication, Prisma as the ORM, and PostgresSQL as the database.

## Getting Started

Follow these steps to set up and run SmartFinTrack on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/m-adnan-mushtaq/smart-fintrack
   cd SmartFinTrack
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure Environment Variables:

   - Rename `.env` to `.env.local` and update the required environment variables for your database and NextAuth.js configuration.

4. Run Migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   pnpm run dev
   ```

6. Access SmartFinTrack on `http://localhost:3000` in your web browser.

## Contributing

Contributions to SmartFinTrack are welcome! Feel free to open issues for bug reports or feature requests. If you'd like to contribute code, please create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author
Adnan Malik Reach Me at [LinkedIn](https://www.linkedin.com/in/m-adnan-mushtaq)
