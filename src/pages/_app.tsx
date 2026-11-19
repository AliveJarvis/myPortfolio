import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import MainLayout from "@/layout/main-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MotionConfig>
      <Analytics />
    </ThemeProvider>
  );
}
