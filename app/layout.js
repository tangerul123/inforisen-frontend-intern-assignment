import { Parkinsans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-parkinsans",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Best SMM Panel in Bangladesh — Fast, Safe & Growth",
  description:
    "SMM is Bangladesh's most reliable & cheap SMM panel for real social media growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${parkinsans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
