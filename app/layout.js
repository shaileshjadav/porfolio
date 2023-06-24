import "./globals.css";
import { Montserrat } from "next/font/google"; //Inter, Roboto_Mono,
import { ThemeProvider } from "./Theme";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Shailesh Jadav | Full Stack Developer Portfolio",
  description:
    "Explore the impressive portfolio of Shailesh Jadav, a skilled full stack developer based in Ahmedabad, India. Discover innovative web solutions and captivating designs crafted with precision and passion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
