import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserContext from "./userContext/userContext";
import UserProvider from "./userContext/UserProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit- Next.js full stack project",
  description: "Next.js full stack project with authentication, API routes and MongoDB database.",
};

export default function RootLayout({ children }) {
  return (
  <html lang="en"  suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900">
            <UserProvider>
                 <main className="min-h-screen flex flex-col justify-between">
                  <Header />  
                  {children}               
                  <Footer />
                </main>   
            </UserProvider>
      </body>
    </html>
  );
}
