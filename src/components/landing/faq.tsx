import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { CtaButton, SectionTitle } from "./shared";

const faqs = [
  {
    q: "Preciso de experiência com mágica?",
    a: "Não. O manual foi feito para quem nunca fez um truque na vida.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, no seu e-mail.",
  },
  {
    q: "É físico ou digital?",
    a: "100% digital. Você acessa pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso comprar materiais?",
    a: "Não. Os truques usam cartas, moedas e objetos comuns de casa.",
  },
  {
    q: "Serve para crianças?",
    a: "Sim, a linguagem é simples e funciona bem a partir dos 10 anos.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "O acesso é vitalício, incluindo as atualizações futuras.",
  },
  {
    q: "Quanto tempo levo para aprender?",
    a: "Os primeiros truques saem no mesmo dia, em poucos minutos.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Cartão de crédito, Pix e boleto, em ambiente seguro.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias para pedir 100% do seu dinheiro de volta.",
  },
  {
    q: "Os bônus são cobrados à parte?",
    a: "Não. Na promoção de hoje eles vêm junto, sem custo adicional.",
  },
  {
    q: "Tem suporte se eu travar em algum truque?",
    a: "Sim, o suporte por e-mail responde todas as suas dúvidas.",
  },
];

export function Guarantee() {
  return (
    <section className="px-5 py-10">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-cta/40 bg-cta/10 p-6 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cta/20 text-cta">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h2 className="font-display text-xl font-extrabold">
          Garantia de 7 dias
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Teste sem medo. Se não gostar, devolvemos cada centavo em até 7 dias —
          sem perguntas.
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-5 py-10">
      <SectionTitle tag="Dúvidas" title="Perguntas frequentes" />
      <div className="flex flex-col gap-2">
        {faqs.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-xl border bg-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
            >
              <span className="min-w-0 flex-1 text-sm font-bold">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i ? (
              <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-5 py-10 text-center">
      <h2 className="text-balance font-display text-xl font-extrabold leading-snug">
        Pronto para virar a atração da noite?
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        A promoção de 80% encerra hoje.
      </p>
      <div className="mt-5">
        <CtaButton>Quero garantir agora</CtaButton>
      </div>
      <p className="mt-8 text-[11px] leading-relaxed text-muted-foreground">
        © {new Date().getFullYear()} Manual dos 100 Truques. Produto digital de
        entretenimento. Todos os direitos reservados.
      </p>
    </footer>
  );
}
