import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Rohan Kohli — Portfolio",
  description: "Computer Engineering student at UIUC. Software Engineering Intern (Striim), EV Concept Electrical Team, projects in full‑stack apps, C++ data structures, and digital logic.",
  openGraph: {
    title: "Rohan Kohli — Portfolio",
    description: "Computer Engineering @ UIUC • Software Engineering Intern (Striim) • EV Concept Electrical Team • Projects: RecipeGram, Anagram Dictionary, Vending Machine Controller",
    url: "https://example.com",
    type: "website",
  },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-950 text-zinc-200">
        <Nav />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
