import localFont from "next/font/local";
import "./assets/globals.css";

import Notification from "@/components/Notification";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`antialiased`}
      >
        <Notification>
          <div className="w-full min-h-screen flex flex-col">
            {children}
          </div>
        </Notification>

      </body>
    </html>
  );
}
