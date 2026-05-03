import { ArrowUpRight, Factory, Scissors, Utensils } from "lucide-react";

const works = [
  {
    icon: Factory,
    industry: "製造業（社内導入）",
    title: "工場の生産トラッカー",
    summary:
      "バーコードでタスク開始・完了、見積／実績工数の差分分析、月次レポート自動化。Excel集計を週8時間→0時間に削減。",
    metrics: [
      { label: "対象データ", value: "18,000件 / 年" },
      { label: "削減工数", value: "週8h → 0h" },
      { label: "技術", value: "React + Supabase + Realtime" },
    ],
    label: "実績",
    status: "稼働中",
  },
  {
    icon: Scissors,
    industry: "個人サロン（提案構成）",
    title: "予約 × 売上 × 顧客カルテ",
    summary:
      "LINEからの予約自動受付、売上を施術別・スタッフ別に自動集計、来店履歴とカルテを一画面で。リピート促進メッセージも自動送信。",
    metrics: [
      { label: "想定店舗規模", value: "1〜3名" },
      { label: "導入コスト", value: "¥80,000〜" },
      { label: "月額", value: "¥3,000〜" },
    ],
    label: "テンプレ",
    status: "提案可能",
  },
  {
    icon: Utensils,
    industry: "小規模飲食店（提案構成）",
    title: "シフト × 発注 × 売上日報",
    summary:
      "スマホでシフト提出・調整、原価率の自動計算、発注先別の在庫切れアラート。紙とLINEのメモから卒業。",
    metrics: [
      { label: "想定店舗規模", value: "席数〜30席" },
      { label: "導入コスト", value: "¥100,000〜" },
      { label: "月額", value: "¥3,000〜" },
    ],
    label: "テンプレ",
    status: "提案可能",
  },
];

export function Works() {
  return (
    <section id="works" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="num">03 / WORKS</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            実績と、
            <br />
            すぐ提案できる構成。
          </h2>
          <p className="mt-5 text-[color:var(--color-fg-muted)]">
            自社の業務改善で実装してきた仕組みを、業種ごとにテンプレ化しています。
            ここに無い業種でも、まずはご相談ください。
          </p>
        </div>

        <div className="space-y-6">
          {works.map((w) => (
            <article
              key={w.title}
              className="reveal card group grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-start md:p-8"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--color-bg-elev-2)] text-[color:var(--color-accent)]">
                  <w.icon size={22} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-fg-dim)]">
                    {w.label}
                  </div>
                  <div className="text-xs text-[color:var(--color-accent-bright)]">
                    {w.status}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-[color:var(--color-fg-dim)]">
                  {w.industry}
                </div>
                <h3 className="mt-1 text-xl font-semibold md:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                  {w.summary}
                </p>
                <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {w.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg-elev-2)] px-4 py-3"
                    >
                      <dt className="text-[10px] uppercase tracking-wider text-[color:var(--color-fg-dim)]">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="hidden md:block">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-line-bright)] text-[color:var(--color-fg-muted)] transition-colors group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
