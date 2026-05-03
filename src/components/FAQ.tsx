const faqs = [
  {
    q: "他社のツール（kintone、楽楽精算など）と何が違うの？",
    a: "それらは“汎用ツール”なので、あなたの業務に合わせるカスタマイズに別料金が発生します。私のサービスは最初から“あなたの業務専用”として作るので、習熟コストも最小化できます。",
  },
  {
    q: "AIで作るって、品質は大丈夫？",
    a: "AIは“設計に従って早く書く”役割で、設計と最終チェックは人間（私）が責任を持ちます。むしろAIを使うことで、人間が単独で書くより検証・テストの密度を上げられます。",
  },
  {
    q: "1人でやっているなら、納期や対応に不安があります。",
    a: "その通りで、誠実にお伝えします。本業との兼業のため、平日昼間は応答が遅れる場合があります。逆に“1人で完結”するから、伝言ゲームや営業マージンが無く、コストと意思疎通が最適化されます。",
  },
  {
    q: "導入後、自分たちでメンテナンスできますか？",
    a: "“管理画面で完結する範囲”は、納品時にハンドオーバー資料と動画を添えてお渡しします。コードを触る必要がある変更は、月額顧問契約か単発依頼で対応します。",
  },
  {
    q: "個人事業主・1人サロンでも対応してもらえる？",
    a: "むしろ、そこが私の主戦場です。大手SaaSが割に合わない規模ほど、“ちょうどいい仕組み”の効果が大きい傾向があります。",
  },
  {
    q: "請求書は発行できる？インボイス対応は？",
    a: "請求書は発行可能です。インボイス登録の対応有無については、ご相談時にお伝えします。",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-[color:var(--color-line)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal mb-14">
          <div className="num">06 / FAQ</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="reveal group card cursor-pointer p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-start justify-between gap-4 list-none">
                <span className="font-medium text-[color:var(--color-fg)]">
                  {f.q}
                </span>
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[color:var(--color-line-bright)] text-sm transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
