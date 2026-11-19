import { ReactNode } from "react";
import { useRouter } from "next/router";

import Navbar from "@/layout/navbar";
import CursorTrail from "@/components/cursor-trail";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";

export default function MainLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar routes={routes} />
      <main id="main" tabIndex={-1} key={router.pathname}>
        {children}
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}
