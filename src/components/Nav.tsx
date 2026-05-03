"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND, LINKS, NAV_ITEMS } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[color:var(--color-accent)] font-mono text-sm font-bold text-black">
            BL
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--color-fg-muted)] transition-colors hover:text-[color:var(--color-fg)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            無料相談
          </a>
        </div>

        <button
          aria-label="メニューを開く"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-[color:var(--color-fg-muted)] hover:bg-[color:var(--color-bg-elev-2)] hover:text-[color:var(--color-fg)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center text-sm"
            >
              無料相談
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
