"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Montserrat } from "next/font/google";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});
const theme = createTheme({
  typography: {
    fontFamily: `"Euclid Flex", var(--font-montserrat), sans-serif`,
    h1: { fontWeight: 100 }, // Example for headlines
    body1: { fontWeight: 400 }, // Example for body text
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
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <body className={montserrat.className}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
          </body>
        </QueryClientProvider>
      </ThemeProvider>
    </html>
  );
}
