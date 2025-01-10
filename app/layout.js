import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Specify the weights you want
  variable: "--font-poppins",
});

export const metadata = {
  title: "Top Supplier of Culture Media & Microbiological Products",
  description:
    "Microbiano, located in KEZAD, Abu Dhabi, UAE, is a top supplier of premium culture media and microbiological products across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
