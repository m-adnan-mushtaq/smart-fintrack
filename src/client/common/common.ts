import { InputI } from "@client/types/types";
import { CreateUserKeys, LoginKeys, SecurityKeys } from "@/lib/dto";
import BudgetSvg from "@/components/svg/BudgetSvg";
import ExpenseSvg from "@/components/svg/ExpenseSvg";
import GraphSvg from "@/components/svg/GraphSvg";
import IncomeSvg from "@/components/svg/IncomeSvg";
import ReminderSvg from "@/components/svg/ReminderSvg";
import SavingSvg from "@/components/svg/SavingSvg";
import AccountSvg from "@/components/svg/AccountSvg";
import LockSvg from "@/components/svg/LockSvg";
import VerifySvg from "@/components/svg/VerifySvg";
import BellSvg from "@/components/svg/BellSvg";
import { currencies } from "@/lib/common";

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
export const logInputs: InputI<LoginKeys>[] = [
  {
    name: "email",
    type: "email",
    label: "What's your email?",
    infoText: "Enter a valid email",
  },
  {
    name: "password",
    type: "password",
    label: "Enter you password?",
    infoText: "Minimum 5 characters",
  },
];

export const joinInputs: InputI<CreateUserKeys>[] = [
  {
    name: "name",
    type: "text",
    label: "What's your Name?",
    infoText: "Only letters and spaces are allowed",
  },
  ...logInputs,
];

export const securityInputs: InputI<SecurityKeys>[] = [
  {
    infoText: "Enter your new password",
    label: "New password",
    name: "newPassword",
    type: "password",
  },
  {
    infoText: "Password must match new password",
    label: "Confirm password",
    name: "confirmPassword",
    type: "password",
  },
];

export type Currency = (typeof currencies)[number];

export const defaultAavatarUrl = "/assets/avatar.svg";
export const EMAIL_SERVICE = "email_service";
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    path: "/admin/income",
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

export const SEKELETON_COLOR = "bg-blue-950";

export const PROFILE_LINKS = [
  {
    label: "Settings",
    path: "/admin/profile",
    Icon: AccountSvg,
  },
  {
    label: "Security",
    path: "/admin/profile/security",
    Icon: LockSvg,
  },
  {
    label: "Verification",
    path: "/admin/profile/verification",
    Icon: VerifySvg,
  },
  {
    label: "Activity Log",
    path: "/admin/profile/activity",
    Icon: BellSvg,
  },
];


