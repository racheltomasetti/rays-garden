import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "This is Ki",
  description: "mind garden",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
