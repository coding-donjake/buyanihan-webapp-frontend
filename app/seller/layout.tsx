import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyanihan",
  description: "A platform to connect buyers and sellers in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
