import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py-10 flex justifyt-center items-center">
          Hecho with LOVE por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
