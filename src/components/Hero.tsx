import { ArrowRight, MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-32 md:pt-44 md:pb-40">
      <div className="hero-glow" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-center">
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            個人サロン・小規模事業者むけの業務改善ラボ
          </span>
        </div>

        <h1 className="mt-6 text-center font-bold leading-[1.1] tracking-tight">
          <span className="block text-4xl text-gradient md:text-6xl lg:text-7xl">
            “詰まり” を解く。
          </span>
          <span className="mt-3 block text-3xl text-[color:var(--color-fg)] md:text-5xl lg:text-6xl">
            あなたの現場に、ちょうどいい仕組みを。
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-[color:var(--color-fg-muted)] md:text-lg">
          大手SaaSは高すぎる、Excelはもう限界。
          <br className="hidden sm:block" />
          AIを“伴走者”として、現場のボトルネックを見つけ、
          <br className="hidden sm:block" />
          あなたの業務に合うカスタムシステムを最短2週間で。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            LINEで無料相談
          </a>
          <a href="#works" className="btn-ghost">
            事例を見る
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-y border-[color:var(--color-line)] py-8 md:grid-cols-4">
          {[
            { num: "2週間〜", label: "最短納期" },
            { num: "¥30,000〜", label: "スモール導入" },
            { num: "月20h+", label: "業務改善実績" },
            { num: "1on1", label: "オーナー直接対応" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold text-[color:var(--color-fg)] md:text-3xl">
                {s.num}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[color:var(--color-fg-dim)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
