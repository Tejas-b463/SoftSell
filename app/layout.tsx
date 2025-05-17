import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import {Inter} from "next/font/google"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {Toaster} from 'react-hot-toast'
import ChatWidget from "./components/sections/ChatWidget";

export const metadata = {
  title: "SoftSell",
  description: "A trusted platform to buy and resell licensed software easily.",
};

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
             <Toaster position="top-center" reverseOrder={false} />
            {children}
            </main>
            <Footer/>
            <ChatWidget/>
        </ThemeProvider>
      </body>
    </html>
  );
}
