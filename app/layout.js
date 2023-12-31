import "./globals.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

export const metadata = {
  title: "Indy",
  description: "Created by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="p-2 text-gray-800 bg-emerald-100">
        <Header />
        {children}
        <div id="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
