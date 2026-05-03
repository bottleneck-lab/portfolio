import { Check, MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/constants";

const plans = [
  {
    name: "ボトルネック診断",
    price: "¥30,000",
    sub: "単発・1〜2時間",
    features: [
      "オンライン1on1ヒアリング",
      "現場フローの可視化（業務マップ）",
      "改善ポイント上位3つ＋優先順位",
      "改善ロードマップPDF納品",
      "見積もりへ進む場合は診断費用全額相殺",
    ],
    highlight: false,
    cta: "診断を申し込む",
  },
  {
    name: "スモール構築",
    price: "¥80,000〜",
    sub: "1〜2機能 / 2〜3週間",
    features: [
      "1ジャンルに絞った機能（例：予約管理 or 売上集計）",
      "スマホ・PC両対応",
      "AIを使った高速開発",
      "ホスティング込み（月3,000円〜）",
      "1ヶ月の運用サポート",
    ],
    highlight: true,
    cta: "詳しく相談する",
  },
  {
    name: "フル構築",
    price: "¥250,000〜",
    sub: "3〜5機能 / 1〜2ヶ月",
    features: [
      "予約・売上・顧客・在庫など複数機能を統合",
      "LINE Bot連携（予約自動受付、リピート促進）",
      "ダッシュボードで経営数字を一元管理",
      "ホスティング込み（月5,000円〜）",
      "3ヶ月の運用サポート",
    ],
    highlight: false,
    cta: "詳しく相談する",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="num">05 / PRICING</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            “高すぎる”も“足りない”も無い、
            <br />
            ちょうどいい価格。
          </h2>
          <p className="mt-5 text-[color:var(--color-fg-muted)]">
            目安価格です。実際の見積もりはヒアリング後にご提示します。
            診断のみのご利用も可能です。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col p-7 ${
                p.highlight
                  ? "card border-2"
                  : "card"
              }`}
              style={
                p.highlight
                  ? {
                      borderColor: "var(--color-accent)",
                      boxShadow: "0 0 0 1px var(--color-accent), 0 30px 80px -20px var(--color-accent-glow)",
                    }
                  : undefined
              }
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
                  おすすめ
                </span>
              )}
              <div className="text-sm font-medium text-[color:var(--color-fg-muted)]">
                {p.name}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight md:text-4xl">
                  {p.price}
                </span>
              </div>
              <div className="mt-1 text-xs text-[color:var(--color-fg-dim)]">
                {p.sub}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[color:var(--color-accent)]"
                    />
                    <span className="text-[color:var(--color-fg-muted)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={LINKS.line}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${p.highlight ? "btn-primary" : "btn-ghost"} justify-center`}
              >
                <MessageCircle size={16} />
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
