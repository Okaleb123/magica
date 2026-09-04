import { Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import { CtaButton } from "./shared";

export function ScarcityBanner() {
  return (
    <div className="flex items-center justify-center gap-2 bg-destructive px-4 py-2.5 text-destructive-foreground">
      <Zap className="h-4 w-4 shrink-0 fill-current" />
      <p className="text-xs font-extrabold uppercase tracking-wide">
        Promoção de 80% válida somente hoje
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-5 px-5 pb-10 pt-8 text-center">
      <h1 className="text-balance font-display text-3xl font-extrabold leading-[1.1]">
        100 Truques de Mágica <span className="text-gold">Passo a Passo</span>{" "}
        Para Impressionar Qualquer Pessoa
      </h1>
      <p className="text-balance text-sm leading-relaxed text-muted-foreground">
        O manual completo que transforma qualquer iniciante no centro das
        atenções — mesmo começando do zero.
      </p>
      <img
        src={heroMockup}
        alt="Manual com 100 truques de mágica passo a passo"
        className="w-full max-w-[280px]"
        loading="eager"
      />
      <CtaButton>Eu quero</CtaButton>
      <p className="text-xs text-muted-foreground">
        Acesso imediato · Garantia de 7 dias
      </p>
    </section>
  );
}
