import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import type { NavbarProps } from "@/layout/navbar";
import ThemeSwitch from "./theme-switch";

interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}
export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const { pathname } = useRouter();
  return (
    <Dialog open={openMenu} onClose={setOpenMenu} className="mobile-dialog">
      <div className="menu-backdrop" aria-hidden="true" />
      <Dialog.Panel className="mobile-panel">
        <Dialog.Title className="sr-only">Navigation</Dialog.Title>
        <button
          className="icon-button close-menu"
          aria-label="Close menu"
          onClick={() => setOpenMenu(false)}
        >
          <X size={20} />
        </button>
        <nav aria-label="Mobile navigation">
          {routes.map(({ href, title }) => (
            <Link
              href={href}
              key={href}
              aria-current={href === pathname ? "page" : undefined}
              onClick={() => setOpenMenu(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="menu-foot">
          ©2025 Arjun Kumar <ThemeSwitch />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
