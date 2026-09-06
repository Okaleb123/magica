import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Check, Crown, Loader2, Minus, PartyPopper } from "lucide-react";
import { SectionTitle, Tag } from "./shared";

type ModalState = "closed" | "loading" | "discount";

const premiumItems = [
  "Manual com 100 truques passo a passo",
  "Kit com 30 vídeos de mágica",
  "Guia do Mágico Confiante",
  "Desafio de 7 Dias para o Grande Show",
  "Itens Mágicos para Imprimir",
  "Acesso à comunidade de mágicos",
  "+50 mágicas extras",
  "Área de membros profissional",
  "Acesso a todas as atualizações",
];

const iscaMissing = premiumItems.slice(1);

export function Offers() {
  const [modal, setModal] = useState<ModalState>("closed");

  useEffect(() => {
    if (modal !== "discount") return;
    const fire = () =>
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        zIndex: 9999,
      });
    fire();
    const t = setTimeout(fire, 400);
    return () => clearTimeout(t);
  }, [modal]);

  const openIsca = () => {
    setModal("loading");
    setTimeout(() => setModal("discount"), 1000);
  };

  return (
    <section id="ofertas" className="scroll-mt-16 px-5 py-10">
      <SectionTitle
        tag="Oferta de hoje"
        title="Escolha sua oferta"
        sub="Ambas com acesso imediato e garantia de 7 dias."
      />

      <div className="flex flex-col gap-4">
        {/* Oferta isca */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="font-display text-base font-bold">Manual Essencial</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Manual com 100 truques passo a passo
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li className="flex items-start gap-2 text-sm font-medium">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              <span>Manual com 100 truques passo a passo</span>
            </li>
            {iscaMissing.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-muted-foreground/40"
              >
                <Minus className="h-3.5 w-3.5 shrink-0 opacity-40" />
                <span className="line-through">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-display text-3xl font-extrabold">
            R$ 10<span className="text-sm font-bold">,00</span>
          </p>
          <button
            onClick={openIsca}
            className="checkout mt-4 w-full rounded-2xl border border-input bg-secondary py-3.5 font-display text-sm font-extrabold uppercase tracking-wide transition-colors hover:bg-accent"
          >
            Quero o essencial
          </button>
        </div>

        {/* Oferta premium */}
        <div className="relative rounded-2xl border-2 border-cta bg-card p-5 shadow-[0_0_40px_-10px] shadow-cta/30">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-cta px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-cta-foreground">
              <Crown className="h-3.5 w-3.5" /> Mais escolhida
            </span>
          </div>
          <h3 className="mt-2 font-display text-lg font-extrabold">
            Pacote Premium Completo
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Manual + os 4 bônus liberados hoje
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {premiumItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground line-through">
                De R$ 130 por
              </p>
              <p className="font-display text-3xl font-extrabold text-cta">
                R$ 27<span className="text-sm font-bold">,90</span>
              </p>
            </div>
            <Tag>-80% hoje</Tag>
          </div>
          <a
            href="#ofertas"
            className="checkout mt-4 block w-full rounded-2xl bg-cta py-4 text-center font-display text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-[0_6px_24px_-6px] shadow-cta/50 transition-transform active:scale-95"
          >
            Quero o premium
          </a>
        </div>
      </div>

      {/* Modal: carregando -> desconto com confete */}
      {modal !== "closed" ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-5 backdrop-blur-sm">
          {modal === "loading" ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-8">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
              <p className="text-sm font-bold">Verificando disponibilidade…</p>
            </div>
          ) : (
            <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-2xl border-2 border-gold bg-card p-6 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold">
                <PartyPopper className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-extrabold leading-snug">
                Parabéns! Você ganhou um desconto exclusivo
              </h3>
              <p className="text-sm text-muted-foreground">
                O Pacote Premium de{" "}
                <span className="line-through">R$ 27,90</span> saiu por apenas:
              </p>
              <p className="font-display text-4xl font-extrabold text-cta">
                R$ 17,90
              </p>
              <a
                href="#ofertas"
                className="checkout mt-2 block w-full rounded-2xl bg-cta py-4 font-display text-base font-extrabold uppercase tracking-wide text-cta-foreground transition-transform active:scale-95"
              >
                Aceitar desconto
              </a>
              <button
                onClick={() => setModal("closed")}
                className="text-xs font-semibold text-muted-foreground underline underline-offset-2"
              >
                Não, obrigado
              </button>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
