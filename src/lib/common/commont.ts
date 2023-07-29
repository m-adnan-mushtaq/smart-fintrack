import { InputLabel } from "../types/types";

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
export const menuLinks:MenuLink[] = [
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

export const joinInputs:InputLabel[]=[
  {
    name: "Name",
    type: "text",
    title: "What's your Name?",
    message: "Use only letters or numbers!",
    sizes:"w-full max-w-sm",
  },
  ...logInputs
]