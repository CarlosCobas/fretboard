import type { Metadata } from "next";
// import "./globals.css";
import "./css/base.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export const metadata: Metadata = {
  title: "Notas en el mástil",
  description: "Experimento de visualización de notas en el mástil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
