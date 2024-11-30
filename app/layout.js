"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat), sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 314,
      smm: 530,
      md: 768,
      lg: 1024,
      xl: 1220,
      xll: 1440,
      xxl: 1600,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={montserrat.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
