import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "./context/todoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoList",
  description: "This is a simple but useful TodoList.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
