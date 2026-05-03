import {
  Activity,
  CalendarCheck,
  LineChart,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "ボトルネック診断",
    desc: "1〜2時間のヒアリングで、現場の“一番詰まっているポイント”を特定。改善ロードマップ付きで納品。",
    tag: "診断",
  },
  {
    icon: Wrench,
    title: "カスタム業務システム制作",
    desc: "大手SaaSではフィットしない業務に、自社専用の仕組みを構築。Web・スマホ両対応。",
    tag: "開発",
  },
  {
    icon: CalendarCheck,
    title: "予約・売上・顧客管理",
    desc: "個人サロン・整体・ネイル向けに最適化された、予約と売上を一画面で見られる仕組み。",
    tag: "テンプレ",
  },
  {
    icon: LineChart,
    title: "ダッシュボード制作",
    desc: "Excel手集計から脱出。月次・週次の数字を、ボタン一つで見える化。",
    tag: "可視化",
  },
  {
    icon: Sparkles,
    title: "AI業務効率化サポート",
    desc: "ChatGPT・Claudeを業務に組み込む。記事生成・資料作成・問い合わせ自動化まで。",
    tag: "AI",
  },
  {
    icon: Workflow,
    title: "LINE Bot・自動化",
    desc: "予約自動応答、リピート促進、簡易問診など、LINEを“24時間働く受付”に変える。",
    tag: "自動化",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 max-w-2xl">
          <div className="num">01 / SERVICES</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            “ちょうどいい”を、
            <br />
            まとめて作ります。
          </h2>
          <p className="mt-5 text-[color:var(--color-fg-muted)]">
            業務改善・システム制作・AI活用、すべてを単独の屋号で完結。
            外注を分けない分、コストも納期も短くなります。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="reveal card p-6">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--color-bg-elev-2)] text-[color:var(--color-accent)]">
                  <s.icon size={20} />
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[color:var(--color-fg-dim)]">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
