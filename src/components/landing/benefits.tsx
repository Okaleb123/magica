import { Sparkles, Clock, House, TrendingUp, Users, Smartphone } from "lucide-react";
import { SectionTitle } from "./shared";
import inside1 from "@/assets/inside-1.png";
import inside2 from "@/assets/inside-2.png";
import inside3 from "@/assets/inside-3.png";
import inside4 from "@/assets/inside-4.png";
import inside5 from "@/assets/inside-5.png";

const insideImages = [inside1, inside2, inside3, inside4, inside5];

const benefits = [
  {
    icon: Sparkles,
    title: "100 truques explicados",
    desc: "Cada mágica com passo a passo simples, imagens e o segredo revelado.",
  },
  {
    icon: Clock,
    title: "Aprenda em minutos",
    desc: "Truques pensados para iniciantes: sem anos de treino, sem complicação.",
  },
  {
    icon: House,
    title: "Sem materiais caros",
    desc: "Use cartas, moedas e objetos que você já tem em casa.",
  },
];

export function Benefits() {
  return (
    <section className="px-5 py-10">
      <SectionTitle
        tag="Versão atualizada"
        title="O que você vai receber"
        sub="Tudo digital, com acesso imediato após a compra."
      />
      <div className="flex flex-col gap-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex items-start gap-4 rounded-2xl border bg-card p-5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
              <b.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold">{b.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Inside() {
  return (
    <section className="py-10">
      <div className="px-5">
        <SectionTitle
          tag="Por dentro"
          title="Veja como é o manual por dentro"
        />
      </div>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 no-scrollbar">
        {insideImages.map((img, i) => (
          <div key={i} className="w-[68%] shrink-0 snap-center">
            <img
              src={img}
              alt={`Página do manual ${i + 1}`}
              className="w-full rounded-2xl border object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Arraste para o lado
      </p>
    </section>
  );
}

const reasons = [
  {
    icon: Users,
    text: "Seja a pessoa mais interessante de qualquer roda de amigos",
  },
  {
    icon: TrendingUp,
    text: "Ganhe confiança e presença em festas, encontros e redes sociais",
  },
  {
    icon: Smartphone,
    text: "Aprenda direto do celular, no seu ritmo, para sempre",
  },
];

export function WhyBuy() {
  return (
    <section className="px-5 py-10">
      <SectionTitle title="Por que adquirir agora?" />
      <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-card p-6">
        <h3 className="font-display text-xl font-extrabold leading-snug">
          Em 7 dias você já estará fazendo mágicas que ninguém consegue
          explicar
        </h3>
        <ul className="mt-5 flex flex-col gap-4">
          {reasons.map((r) => (
            <li key={r.text} className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <r.icon className="h-4 w-4" />
              </div>
              <p className="pt-1.5 text-sm leading-relaxed">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
