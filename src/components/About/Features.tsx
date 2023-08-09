import Line from "@/components/Layout/Line";
import Title from "@/components/Layout/Title";
import BudgetSvg from "@/components/svg/BudgetSvg";
import ExpenseSvg from "@/components/svg/ExpenseSvg";
import IncomeSvg from "@/components/svg/IncomeSvg";
import ReminderSvg from "@/components/svg/ReminderSvg";
import SavingSvg from "@/components/svg/SavingSvg";

const featuresData = [
  {
    title: "Budgeting Tools",
    description:
      "Take control of your finances with our powerful budgeting tools. Easily create and manage budgets, track your spending, and get detailed insights into your financial habits. Stay on top of your expenses and save money like a pro.",
    Icon: BudgetSvg,
  },
  {
    title: "Income Tracking",
    description:
      "Never lose sight of your income sources again. Our income tracking feature allows you to log and categorize your various income streams, helping you understand your cash flow and make informed financial decisions.",
    Icon: IncomeSvg,
  },
  {
    title: "Expense Tracking",
    description:
      "Track your expenses effortlessly with our intuitive expense tracking feature. Categorize your expenses, set spending limits, and receive real-time updates on where your money is going. Stay mindful of your spending and identify areas for potential savings.",
    Icon: ExpenseSvg,
  },
  {
    title: "Savings Goals",
    description:
      "Turn your dreams into reality with our savings goals feature. Set financial targets, whether it's for a dream vacation, a new car, or an emergency fund. SmartFinTrack will help you stay focused and motivated to achieve your savings goals faster.",
    Icon: SavingSvg,
  },
  {
    title: "Bill Reminders",
    description:
      "Never miss a bill payment again. Our bill reminders feature ensures you receive timely notifications about upcoming due dates. Stay organized, avoid late fees, and manage your bills effortlessly.",
    Icon: ReminderSvg,
  },
];

const FeatureCard = ({
  title,
  details,
  SvgIcon,
}: {
  title: string;
  details: string;
  SvgIcon: React.FC;
}) => {
  return (
    <div className="card flex bg-neutral shadow shadow-secondary mx-4 px-4 py-10  text-left flex-col gap-2 w-full max-w-xs">
      <div className="flex items-start justify-start">
        <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg p-2">
          <SvgIcon />
        </div>
      </div>
      <Title color="secondary" type="level3">
        {title}
      </Title>

      <p>{details}</p>
    </div>
  );
};
const Features = () => {
  return (
    <>
      <Title type="level2" color="primary">
        Our innovative Features
        <Line type="primary" />
      </Title>
      <div className="carousel rounded-box py-4">
        {featuresData.map((feature, i) => (
          <div key={i} className="carousel-item">
            <FeatureCard
              title={feature.title}
              details={feature.description}
              SvgIcon={feature.Icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
