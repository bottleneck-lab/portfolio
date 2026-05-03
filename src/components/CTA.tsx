import { ArrowRight, MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="hero-glow" aria-hidden />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            まずは LINE で
            <br />
            <span className="text-gradient">15分の無料相談を。</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[color:var(--color-fg-muted)]">
            「うちの業務、何が詰まってる？」という曖昧な質問でも大歓迎。
            匿名でもご相談OKです。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              LINEで友達追加して相談する
            </a>
            <a href="#services" className="btn-ghost">
              サービスを見直す
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="mt-6 text-xs text-[color:var(--color-fg-dim)]">
            返信は当日〜翌営業日中。本業の都合で時間帯は不規則です。
          </p>
        </div>
      </div>
    </section>
  );
}
