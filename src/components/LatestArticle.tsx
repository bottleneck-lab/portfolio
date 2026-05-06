import { ArrowUpRight, BookOpen } from "lucide-react";
import { LINKS } from "@/lib/constants";

export function LatestArticle() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href={LINKS.noteLatestArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal card group block p-7 md:p-9"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[color:var(--color-fg-dim)]">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--color-bg-elev-2)] text-[color:var(--color-accent)]">
              <BookOpen size={16} />
            </span>
            <span>Latest Article on note</span>
            <span className="ml-auto inline-flex items-center gap-1 text-[color:var(--color-accent-bright)]">
              読む
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <h3 className="mt-5 text-xl font-semibold leading-snug md:text-2xl">
            {LINKS.noteLatestTitle}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
            「ボトルネックは“転記”じゃなく、“データが分散したまま月末まで待つこと”だった」——
            個人サロン経営者向けに、業務改善担当が
            “詰まり”の正体と解き方を、自社の生産管理システム実装の知見とあわせて公開しました。
          </p>
        </a>
      </div>
    </section>
  );
}
