const steps = [
  {
    n: "01",
    title: "LINEで無料相談",
    desc: "「うちは何が詰まってる？」をチャットで気軽に。所要15分。匿名でもOK。",
    accent: "0〜1日目",
  },
  {
    n: "02",
    title: "ボトルネック診断",
    desc: "オンライン1on1で現場の流れを聞き取り、改善ポイントと優先順位をレポート化。",
    accent: "3〜5日目",
  },
  {
    n: "03",
    title: "見積もり・設計",
    desc: "“いきなりフルシステム”は提案しません。最小コストの選択肢から3案ご提示。",
    accent: "1週目",
  },
  {
    n: "04",
    title: "構築・納品",
    desc: "AIを使った高速開発で最短2週間。スマホとPC両方で動く形で納品。",
    accent: "2〜4週目",
  },
  {
    n: "05",
    title: "運用伴走",
    desc: "“納品して終わり”はしません。最初の1ヶ月は使い方サポート込み。",
    accent: "1ヶ月以降",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="num">02 / PROCESS</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            5ステップで、
            <br />
            “見えなかった改善”を形に。
          </h2>
          <p className="mt-5 text-[color:var(--color-fg-muted)]">
            最初から大きな投資はいりません。診断だけのご利用も歓迎します。
          </p>
        </div>

        <ol className="relative grid gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.n} className="reveal card relative p-6">
              <div className="num">{s.n}</div>
              <div className="mt-2 text-xs font-medium text-[color:var(--color-accent-bright)]">
                {s.accent}
              </div>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute right-[-14px] top-1/2 h-px w-7 bg-[color:var(--color-line-bright)]"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
