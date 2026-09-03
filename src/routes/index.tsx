import { createFileRoute } from "@tanstack/react-router";
import { Hero, ScarcityBanner } from "@/components/landing/hero";
import { Benefits, Inside, WhyBuy } from "@/components/landing/benefits";
import { Bonuses, Feedbacks } from "@/components/landing/bonuses";
import { Offers } from "@/components/landing/offers";
import { Faq, Footer, Guarantee } from "@/components/landing/faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100 Truques de Mágica Passo a Passo — 80% OFF Hoje" },
      {
        name: "description",
        content:
          "Manual digital com 100 truques de mágica explicados passo a passo + 4 bônus grátis. Aprenda em minutos e impressione qualquer pessoa. Garantia de 7 dias.",
      },
      {
        property: "og:title",
        content: "100 Truques de Mágica Passo a Passo — 80% OFF Hoje",
      },
      {
        property: "og:description",
        content:
          "Manual digital com 100 truques de mágica explicados passo a passo + 4 bônus grátis. Aprenda em minutos e impressione qualquer pessoa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <ScarcityBanner />
      <main>
        <Hero />
        <Benefits />
        <Inside />
        <WhyBuy />
        <Feedbacks />
        <Bonuses />
        <Offers />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
