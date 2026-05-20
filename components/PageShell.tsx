"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { ReactLenis } from "lenis/react";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-top bg-no-repeat bg-fixed text-black">
        <div className="relative flex min-h-screen flex-col px-4 md:px-8 lg:px-12">
          <Header
            isNavOpen={isNavOpen}
            onToggleNav={() => setIsNavOpen((open) => !open)}
          />
          <div className="relative flex pt-4 lg:pt-8 w-full gap-4 lg:gap-8">
            <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
            <main className="flex flex-col flex-1 w-full shrink min-w-0 items-end">
              {children}
            </main>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
