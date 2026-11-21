import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export type NavbarRoute = { title: string; href: string };
export type NavbarRoutes = NavbarRoute[];
export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar({ routes }: NavbarProps) {
  const { pathname } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="masthead">
      <div className="shell mast-inner">
        <Link
          href="/"
          aria-label={`${siteMetadata.headerTitle}, return to home page`}
          className="brand"
        >
          <AnimatedLogo />
          {siteMetadata.headerTitle}
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {routes.map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {pathname === href && (
                <motion.span
                  aria-hidden="true"
                  className="active-tab"
                  layoutId="main-nav-tab"
                  transition={{ type: "spring", stiffness: 440, damping: 37 }}
                />
              )}
              {title}
            </Link>
          ))}
        </nav>
        <div className="nav-tools">
          <a href="#contact" className="contact-shortcut" data-pointer>
            <Mail size={16} aria-hidden="true" />
            <span>Contact</span>
          </a>
          <ThemeSwitch />
          <button
            type="button"
            className="icon-button mobile-trigger"
            aria-label="Open menu"
            aria-expanded={openMenu}
            onClick={() => setOpenMenu(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      <MobileMenu
        routes={routes}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </header>
  );
}
