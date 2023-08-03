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
    name: "Name",
    type: "text",
    title: "What's your Name?",
    message: "Use only letters or numbers!",
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

export const defaultCurrency:ReturnType<typeof currenciesEnum>[number]="USD"