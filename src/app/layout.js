import { EB_Garamond } from "next/font/google";
import "./globals.css";

const font = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
