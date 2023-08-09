import Title from "../Layout/Title";

const faqData = [
  {
    question: "How secure is SmartFinTrack for managing my financial data?",
    answer:
      "At SmartFinTrack, we take the security and privacy of your financial data very seriously. We employ industry-standard encryption protocols to protect your data during transmission and storage. Additionally, we do not store any sensitive financial information, such as credit card details or bank account numbers. Your data is encrypted and stored securely in our servers, safeguarded by stringent access controls, and we regularly update our security measures to ensure the utmost protection.",
  },
  {
    question: "Can I access SmartFinTrack on my mobile devices?",
    answer:
      "Absolutely! SmartFinTrack is designed to be accessible on a wide range of devices, including smartphones and tablets. We offer a responsive web application that adapts seamlessly to different screen sizes, allowing you to manage your finances on the go. Simply log in to your account from your mobile browser, and you'll have full access to all the features SmartFinTrack has to offer, right at your fingertips.",
  },
  {
    question:
      "Are there any fees or subscription charges for using SmartFinTrack?",
    answer:
      "No, SmartFinTrack is a free financial management tool. We believe in providing essential financial tools and features to our users without any charges. You can enjoy all the benefits of SmartFinTrack without any subscription fees. Simply sign up for a free account and start managing your finances more effectively.",
  },
  {
    question: "How does SmartFinTrack help me achieve my financial goals?",
    answer:
      "SmartFinTrack is your personal financial ally. Our budgeting tools and expense tracking features provide you with a clear view of your spending habits, empowering you to make informed financial decisions. You can set savings goals and track your progress over time, staying motivated as you see your goals come to life. Our bill reminders ensure you never miss a payment, helping you maintain a strong financial track record. By providing valuable insights and organizing your finances efficiently, SmartFinTrack enables you to take control of your money and work towards a brighter financial future.",
  },
  // Add more FAQ entries here if needed
];

const Faq = () => {
  return (
    <div className="h-screen flex px-4 items-center justify-center flex-col gap-8 max-w-screen-md mx-auto">
      <Title color="secondary" type="level2">
        Faq's
      </Title>
      {faqData.map((faq, i) => (
        <div key={i} className="collapse collapse-plus ring-1 ring-offset-4 ring-offset-base-100 ring-secondary">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content bg-neutral">
            <p className="py-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
