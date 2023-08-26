import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import RootProvider from "@/components/Provider/RootProvider";

export const metadata: Metadata = {
  title: "Smart FinTrack",
  description:
    "SmartFinTrack is a powerful finance management website that helps you track your income, expenses, and savings goals effectively. Take control of your finances with SmartFinTrack today!",
  keywords: [
    "finance",
    "management,",
    "budgeting,",
    "income",
    "tracking,",
    "expense",
    "tracking,",
    "savings",
    "goals,",
    "bill",
    "reminders",
  ],
  applicationName: "Smart FinTrack",
  manifest: "/site.webmanifest",
  icons: [
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  robots: { index: true, follow: true },
  category: "Fianance",
  viewport: { width: "device-width", initialScale: 1 },
  authors: [
    {
      name: "Adnan Mushtaq",
      url: "https://www.linkedin.com/in/m-adnan-mushtaq",
    },
  ],
  themeColor:"#1a103c"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1a103c",
              color: "#fff",
              border: "1px solid #58c7f3",
            },
          }}
        />
        <RootProvider>
          {children}
          </RootProvider>
      </body>
    </html>
  );
}
