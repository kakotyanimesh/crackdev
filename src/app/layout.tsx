import type { Metadata } from "next";
import { Inter, JetBrains_Mono  } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable : "--font-jetbrains-mono",
  subsets : ["latin"]
})


export const metadata: Metadata = {
  title: "Crack the dev",
  description: "JUST AN AI WRAPPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
