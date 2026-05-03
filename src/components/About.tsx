import { CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

const points = [
  "製造業の業務改善部で、現場の“詰まり”を毎日特定する仕事をしています",
  "AIを社内に導入し、Excel手作業の業務を自動化してきました",
  "システム開発はAIと一緒に高速で、しかし“現場で使われる仕組み”にこだわります",
  "大手SaaSが入れない・割高になる小規模事業者の隙間を埋めるのが、私の役割です",
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-elev)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="reveal">
            <div className="num">04 / ABOUT</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              現場あがりの
              <br />
              業務改善担当が、
              <br />
              <span className="text-gradient">あなたの伴走者に。</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--color-accent)] text-2xl font-bold text-black">
                Y
              </div>
              <div>
                <div className="text-lg font-semibold">{BRAND.owner}</div>
                <div className="text-sm text-[color:var(--color-fg-muted)]">
                  {BRAND.ownerRole}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <ul className="space-y-4">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[color:var(--color-accent)]"
                  />
                  <p className="text-sm leading-relaxed text-[color:var(--color-fg)]">
                    {p}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["Claude Code", "TypeScript", "React / Next.js", "Supabase", "LINE Bot", "Vercel"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2 text-center text-xs text-[color:var(--color-fg-muted)]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
