import { BRAND, LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[color:var(--color-accent)] font-mono text-sm font-bold text-black">
            BL
          </span>
          <div>
            <div className="text-sm font-semibold">{BRAND.name}</div>
            <div className="text-xs text-[color:var(--color-fg-dim)]">
              {BRAND.shortTagline}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-fg-muted)]">
          <a href={LINKS.line} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-fg)]">
            LINE
          </a>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-fg)]">
            X
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-fg)]">
            Instagram
          </a>
          <a href={LINKS.note} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-fg)]">
            note
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-fg)]">
            GitHub
          </a>
        </div>

        <div className="text-xs text-[color:var(--color-fg-dim)]">
          © {new Date().getFullYear()} {BRAND.name}
        </div>
      </div>
    </footer>
  );
}
