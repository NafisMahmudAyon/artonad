import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "আর্তনাদ",
  description: "২৪'এর আর্তনাদ",
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://artonad.vercel.app/'),
  openGraph: {
    title: "আর্তনাদ ",
    description: "২৪'এর আর্তনাদ",
    url: 'https://artonad.vercel.app/',
    siteName: 'আর্তনাদ',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'আর্তনাদ',
    description: "২৪'এর আর্তনাদ",
    images: ['https://artonad.vercel.app/one.jng'],
  },
  bookmarks: ["https://artonad.vercel.app/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpg" href="/one.jpg" />
      </head>
      <body className={`font-[Font] bg-[rgb(44,44,46)]`} >{children}</body>
    </html>
  );
}
