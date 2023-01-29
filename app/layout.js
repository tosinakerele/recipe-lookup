import Header from "@/components/Header";
import "/styles/globals.css";
Header

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
