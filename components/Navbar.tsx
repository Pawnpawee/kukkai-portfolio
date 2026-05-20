"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FolderIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { navbarData, githubIcon } from "@/data/constants";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ElementType | string> = {
  folder: FolderIcon,
  building: BuildingOfficeIcon,
  users: UserGroupIcon,
  "code-solid": CodeBracketIcon,
  envelope: EnvelopeIcon,
  phone: PhoneIcon,
  github: githubIcon,
};

function NavItemLink({
  item,
  isActive,
  onClick,
}: {
  item: {
    label: string;
    href: string;
    type: string;
    iconType: string;
    iconClassName?: string;
  };
  isActive: boolean;
  onClick: () => void;
}) {
  const commonClassName =
    "flex flex-col items-center justify-center gap-2 text-lg font-bold text-black hover:brightness-90 data-[active=true]:brightness-90";

  const label = item.label.split("\n").map((line: string, index: number) => (
    <span key={`${item.label}-${index}`} className="leading-none">
      {line}
    </span>
  ));

  const Icon = iconMap[item.iconType] || FolderIcon;

  const content = (
    <>
      <div className={`relative ${item.iconClassName || "h-6.25 w-6.25"}`}>
        {typeof Icon === "string" ? (
          <img
            alt=""
            className="absolute inset-0 h-full w-full"
            src={Icon}
          />
        ) : (
          <Icon className="absolute inset-0 h-full w-full text-[#AEDEFC]" />
        )}
      </div>
      <span className="flex flex-col items-center text-center">{label}</span>
    </>
  );

  if (item.type === "internal") {
    return (
      <Link
        href={item.href}
        className={commonClassName}
        data-active={isActive}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  const isExternal = item.type === "external";

  return (
    <a
      href={item.href}
      className={commonClassName}
      data-active={isActive}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden h-200.5 w-[116px] flex-col gap-7 fixed top-[120px] self-start z-40 lg:flex"
      >
        <div className="flex flex-col items-center gap-7 rounded-2xl bg-[rgba(255,255,255,0.7)] px-4 py-8">
          {navbarData.primaryItems.map((item) => (
            <NavItemLink
              key={item.href}
              item={item}
              isActive={item.type === "internal" && pathname === item.href}
              onClick={onClose}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-7 rounded-2xl bg-[rgba(255,255,255,0.7)] px-4 py-8">
          {navbarData.secondaryItems.map((item) => (
            <NavItemLink
              key={item.href}
              item={item}
              isActive={item.type === "internal" && pathname === item.href}
              onClick={onClose}
            />
          ))}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/20 lg:hidden"
              onClick={onClose}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-40 w-64 bg-[rgba(255,255,255,0.92)] px-4 py-24 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-6 rounded-2xl bg-[rgba(255,255,255,0.7)] px-4 py-6">
                  {navbarData.primaryItems.map((item) => (
                    <NavItemLink
                      key={item.href}
                      item={item}
                      isActive={
                        item.type === "internal" && pathname === item.href
                      }
                      onClick={onClose}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-6 rounded-2xl bg-[rgba(255,255,255,0.7)] px-4 py-6">
                  {navbarData.secondaryItems.map((item) => (
                    <NavItemLink
                      key={item.href}
                      item={item}
                      isActive={
                        item.type === "internal" && pathname === item.href
                      }
                      onClick={onClose}
                    />
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
