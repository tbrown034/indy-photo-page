import "./globals.css";

export const metadata = {
  title: "Indy",
  description: "Created by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800 bg-emerald-100">{children}</body>
    </html>
  );
}
