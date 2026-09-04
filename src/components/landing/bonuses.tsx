import { Gift } from "lucide-react";
import { SectionTitle } from "./shared";
import feedback1 from "@/assets/feedback-1.png";
import feedback2 from "@/assets/feedback-2.png";
import feedback3 from "@/assets/feedback-3.png";
import bonusMain from "@/assets/bonus-main.png";

const feedbackImages = [feedback1, feedback2, feedback3];

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
        {feedbackImages.map((img, i) => (
          <div key={i} className="w-[68%] shrink-0 snap-center">
            <img
              src={img}
              alt={`Feedback do aluno ${i + 1}`}
              className="w-full rounded-2xl border object-cover shadow-lg"
              loading="lazy"
            />
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

      {/* Imagem 1:1 grande sem fundo dos bônus no topo */}
      <div className="mb-6 flex justify-center">
        <img
          src={bonusMain}
          alt="Bônus Exclusivos Incluídos"
          className="w-full max-w-[280px] rounded-2xl object-contain drop-shadow-xl"
          loading="lazy"
        />
      </div>

      {/* Card com a lista de bônus */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex flex-col gap-4">
          {bonuses.map((b, i) => (
            <div
              key={b.title}
              className="flex flex-col gap-2.5 border-b border-border/50 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                  <Gift className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold leading-snug">
                    Bônus #{i + 1} — {b.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </div>
              <div className="ml-10 flex items-center justify-between rounded-lg bg-secondary/80 px-3 py-1.5">
                <span className="text-[11px] text-muted-foreground line-through">
                  Valor {b.price}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-cta">
                  Hoje = R$ 0
                </span>
              </div>
            </div>
          ))}
        </div>
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
