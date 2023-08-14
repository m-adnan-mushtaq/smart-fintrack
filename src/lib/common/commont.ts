import { InputLabel } from "../types/types";
import BudgetSvg from "@/components/svg/BudgetSvg";
import ExpenseSvg from "@/components/svg/ExpenseSvg";
import GraphSvg from "@/components/svg/GraphSvg";
import IncomeSvg from "@/components/svg/IncomeSvg";
import ReminderSvg from "@/components/svg/ReminderSvg";
import SavingSvg from "@/components/svg/SavingSvg";

export const SITE_TITLE = "Smart Fintrack - ";
export const SALT_ROUNDS = 10;
export const features: Feature[] = [
  {
    title: "Budgeting Tools",
    tagline: "Budget Smarter, Achieve Goals Faster.",
    imgId: "#feature_1",
  },
  {
    title: "Income Tracking",
    tagline: "Track Income, Empower Progress.",
    imgId: "#feature_2",
  },
  {
    title: "Expense Tracking",
    tagline: "Expense Insights, Financial Control.",
    imgId: "#feature_3",
  },
  {
    title: "Savings Goals",
    tagline: "Savings Made Simple, Dreams Realized.",
    imgId: "#feature_4",
  },
  {
    title: "Bill Reminders",
    tagline: "Never Miss a Payment, Stay Ahead.",
    imgId: "#feature_5",
  },
];
export const menuLinks: MenuLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "support",
    path: "/support",
  },
  {
    label: "forum",
    path: "/forum",
  },
];

export const adminLinks: MenuLink[] = [
  {
    label: "Dashboard",
    path: "/admin/",
  },
];
export const logInputs: InputLabel[] = [
  {
    name: "email",
    type: "email",
    title: "What's your email?",
    message: "Enter a valid email address!",
  },
  {
    name: "password",
    type: "password",
    title: "Enter your password!",
    message: "Minimum 5 characters!",
  },
];

export const joinInputs: InputLabel[] = [
  {
    name: "name",
    type: "text",
    title: "What's your Name?",
    message: "Only letters and spaces are allowed",
    sizes: "w-full max-w-sm",
  },
  ...logInputs,
];

export const currencies = [
  { name: "US Dollar", symbol: "USD" },
  { name: "Euro", symbol: "EUR" },
  { name: "Japanese Yen", symbol: "JPY" },
  { name: "British Pound", symbol: "GBP" },
  { name: "Canadian Dollar", symbol: "CAD" },
  { name: "Swiss Franc", symbol: "CHF" },
  { name: "Australian Dollar", symbol: "AUD" },
  { name: "Chinese Yuan", symbol: "CNY" },
  { name: "Swedish Krona", symbol: "SEK" },
  { name: "New Zealand Dollar", symbol: "NZD" },
  { name: "South Korean Won", symbol: "KRW" },
  { name: "Singapore Dollar", symbol: "SGD" },
  { name: "Norwegian Krone", symbol: "NOK" },
  { name: "Mexican Peso", symbol: "MXN" },
  { name: "Indian Rupee", symbol: "INR" },
  { name: "Russian Ruble", symbol: "RUB" },
  { name: "South African Rand", symbol: "ZAR" },
  { name: "Turkish Lira", symbol: "TRY" },
  { name: "Brazilian Real", symbol: "BRL" },
  { name: "Hong Kong Dollar", symbol: "HKD" },
  { name: "Danish Krone", symbol: "DKK" },
  { name: "Israeli Shekel", symbol: "ILS" },
  { name: "Polish Złoty", symbol: "PLN" },
  { name: "Chilean Peso", symbol: "CLP" },
  { name: "Philippine Peso", symbol: "PHP" },
  { name: "Indonesian Rupiah", symbol: "IDR" },
  { name: "Czech Koruna", symbol: "CZK" },
  { name: "Colombian Peso", symbol: "COP" },
  { name: "Saudi Riyal", symbol: "SAR" },
  { name: "Malaysian Ringgit", symbol: "MYR" },
  { name: "Romanian Leu", symbol: "RON" },
  { name: "Hungarian Forint", symbol: "HUF" },
  { name: "Nigerian Naira", symbol: "NGN" },
  { name: "United Arab Emirates Dirham", symbol: "AED" },
  { name: "Pakistani Rupee", symbol: "PKR" },
  { name: "Bangladeshi Taka", symbol: "BDT" },
  { name: "Qatari Riyal", symbol: "QAR" },
  { name: "Kuwaiti Dinar", symbol: "KWD" },
  { name: "Peruvian Sol", symbol: "PEN" },
  { name: "Kenyan Shilling", symbol: "KES" },
  { name: "Thai Baht", symbol: "THB" },
  { name: "Egyptian Pound", symbol: "EGP" },
  { name: "Vietnamese Dong", symbol: "VND" },
  { name: "Ukrainian Hryvnia", symbol: "UAH" },
  { name: "Moroccan Dirham", symbol: "MAD" },
  { name: "Iraqi Dinar", symbol: "IQD" },
  { name: "Algerian Dinar", symbol: "DZD" },
  { name: "Tunisian Dinar", symbol: "TND" },
  { name: "Sri Lankan Rupee", symbol: "LKR" },
  { name: "Costa Rican Colón", symbol: "CRC" },
  { name: "Uruguayan Peso", symbol: "UYU" },
  { name: "Croatian Kuna", symbol: "HRK" },
  { name: "Dominican Peso", symbol: "DOP" },
] as const;

export type Currency = (typeof currencies)[number];

export const defaultAavatarUrl = "/assets/avatar.svg";

export const currenciesEnum = () =>
  currencies.map((currency) => currency.symbol);

export const defaultCurrency: ReturnType<typeof currenciesEnum>[number] = "USD";
export const EMAIL_SERVICE = "email_service";
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const OPT_EXIPIRE_TIME = 1800; //30 min

export const featuresData = [
  {
    title: "Overview",
    path: "/admin",
    selector: "admin-link",
    description:
      "Empower your financial decisions with comprehensive reports and insightful analytics. SmartFinTrack provides you with visual breakdowns of your income, expenses, and savings trends over time.",
    Icon: GraphSvg,
  },
  {
    title: "Budgeting Tools",
    path: "/admin/budget",

    selector: "budget-link",
    description:
      "Take control of your finances with our powerful budgeting tools. Easily create and manage budgets, track your spending, and get detailed insights into your financial habits. Stay on top of your expenses and save money like a pro.",
    Icon: BudgetSvg,
  },
  {
    title: "Income Tracking",
    path: "/admin/icome",
    selector: "income-link",
    description:
      "Never lose sight of your income sources again. Our income tracking feature allows you to log and categorize your various income streams, helping you understand your cash flow and make informed financial decisions.",
    Icon: IncomeSvg,
  },
  {
    title: "Expense Tracking",
    path: "/admin/expense",
    selector: "expense-link",
    description:
      "Track your expenses effortlessly with our intuitive expense tracking feature. Categorize your expenses, set spending limits, and receive real-time updates on where your money is going. Stay mindful of your spending and identify areas for potential savings.",
    Icon: ExpenseSvg,
  },
  {
    title: "Savings Goals",
    path: "/admin/saving",
    selector: "saving-link",
    description:
      "Turn your dreams into reality with our savings goals feature. Set financial targets, whether it's for a dream vacation, a new car, or an emergency fund. SmartFinTrack will help you stay focused and motivated to achieve your savings goals faster.",
    Icon: SavingSvg,
  },
  {
    title: "Bill Reminders",
    path: "/admin/bill",
    selector: "bills-link",
    description:
      "Never miss a bill payment again. Our bill reminders feature ensures you receive timely notifications about upcoming due dates. Stay organized, avoid late fees, and manage your bills effortlessly.",
    Icon: ReminderSvg,
  },
];
