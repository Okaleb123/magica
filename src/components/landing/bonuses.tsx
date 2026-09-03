import { Placeholder, SectionTitle } from "./shared";

const bonuses = [
  {
    title: "Kit com 30 vídeos de mágica",
    desc: "Veja cada truque sendo executado do ângulo do mágico.",
    price: "R$ 47",
  },
  {
    title: "Guia do Mágico Confiante",
    desc: "Como apresentar, falar e prender a atenção do público.",
    price: "R$ 27",
  },
  {
    title: "Desafio de 7 Dias para o Grande Show",
    desc: "Um plano diário até sua primeira apresentação completa.",
    price: "R$ 37",
  },
  {
    title: "Itens Mágicos para Imprimir",
    desc: "Cartas, moedas cinematográficas e acessórios prontos.",
    price: "R$ 19",
  },
];

export function Feedbacks() {
  return (
    <section className="py-10">
      <div className="px-5">
        <SectionTitle
          tag="Feedbacks"
          title="Quem já aprendeu, não para mais"
        />
      </div>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 no-scrollbar">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-[62%] shrink-0 snap-center">
            <Placeholder ratio="aspect-[9/16]" label={`Print ${i} · 9:16`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Bonuses() {
  return (
    <section className="px-5 py-10">
      <SectionTitle
        tag="Bônus de hoje"
        title="4 bônus liberados junto com o manual"
        sub="Inclusos apenas na promoção de hoje."
      />
      <div className="flex flex-col gap-4">
        {bonuses.map((b, i) => (
          <div key={b.title} className="rounded-2xl border bg-card p-4">
            <div className="flex items-start gap-4">
              <Placeholder
                ratio="aspect-square w-24 shrink-0 !rounded-xl"
                label={`Bônus ${i + 1}`}
              />
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold leading-snug">
                  {b.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary px-3 py-2">
              <span className="text-xs text-muted-foreground line-through">
                Valor {b.price}
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-cta">
                Hoje = R$ 0
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold">
          Somando os bônus
        </p>
        <p className="mt-2 text-lg text-muted-foreground line-through">
          R$ 130,00
        </p>
        <p className="font-display text-3xl font-extrabold text-cta">
          Hoje = R$ 0
        </p>
      </div>
    </section>
  );
}
