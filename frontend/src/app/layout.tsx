import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GreetAI - ИИ-генератор поздравлений и открыток",
    template: "%s | GreetAI"
  },
  description: "Создавайте уникальные поздравления и открытки с помощью искусственного интеллекта. Экономьте время и радуйте близких персонализированными сообщениями.",
  keywords: ["поздравления", "открытки", "ИИ", "генератор", "праздник", "день рождения"],
  authors: [{ name: "GreetAI Team" }],
  creator: "GreetAI",
  publisher: "GreetAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://greetai.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://greetai.ru',
    title: 'GreetAI - ИИ-генератор поздравлений и открыток',
    description: 'Создавайте уникальные поздравления и открытки с помощью искусственного интеллекта. Экономьте время и радуйте близких.',
    siteName: 'GreetAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GreetAI - ИИ-генератор поздравлений',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreetAI - ИИ-генератор поздравлений и открыток',
    description: 'Создавайте уникальные поздравления и открытки с помощью искусственного интеллекта.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
