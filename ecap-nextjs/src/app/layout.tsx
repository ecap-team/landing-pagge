import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "E-CAP - என்னும் வழிகாட்டி | Employment Career Awareness Program",
  description: "E-CAP is a non-profit organization dedicated to creating employment awareness and guiding students towards successful careers. Operating under Sri Mariamman Education & Charitable Trust since 1979.",
  keywords: ["E-CAP", "NGO", "Education", "Career Guidance", "Employment", "Tamil Nadu", "Students", "Social Service"],
  authors: [{ name: "E-CAP Team" }],
  openGraph: {
    title: "E-CAP - என்னும் வழிகாட்டி",
    description: "Employment Career Awareness Program - Guiding Students Towards Success",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
