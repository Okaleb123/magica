# Plano — Landing Page Low Ticket de Mágica

## Objetivo
Landing page de vendas 100% mobile para o produto "Manual com 100 Truques de Mágica passo a passo" + 4 bônus, com oferta isca (R$10), oferta premium (R$27,90) e fluxo de desconto (R$17,90 com confete).

## Estrutura da página (rota `/`)

1. **Introdução**
   - Banner fixo de escassez: "Promoção de 80% válida somente hoje"
   - Logo pequena centralizada (placeholder)
   - Headline direta + subheadline (copy aprimorada, curta)
   - Placeholder de mockup do produto
   - Botão verde "EU QUERO" (rola até ofertas)

2. **Benefícios / O que você recebe**
   - Tag "Versão atualizada"
   - 3 cards de benefícios (aprender rápido, impressionar qualquer pessoa, sem materiais caros)

3. **Por dentro do produto**
   - Carrossel com 5 placeholders de imagem 9:16 (swipe no mobile)

4. **Por que adquirir**
   - Card único com os benefícios mais promissores

5. **Feedbacks**
   - 3 placeholders de imagem 9:16 (prints de depoimentos)

6. **Bônus**
   - 4 cards: imagem 1:1 placeholder, headline, descrição, valor riscado → hoje R$0
     - Kit com 30 vídeos de mágica (R$47)
     - Guia do Mágico Confiante (R$27)
     - Desafio de 7 Dias para o Grande Show (R$37)
     - Itens Mágicos para Imprimir (R$19)
   - Card soma total (R$130) → "Hoje = R$0"

7. **Ofertas**
   - Card oferta isca: R$10
   - Card oferta premium: R$27,90 (destaque)
   - Clique na isca → tela "carregando" 1s → confete + mensagem de desconto: premium por R$17,90 → botões "Aceitar" / "Não, obrigado"

8. **Garantia**
   - Selo garantia incondicional de 7 dias

9. **FAQ**
   - Acordeão com 10+ perguntas (acesso, formato, pagamento, garantia, funciona pra iniciantes etc.)

10. **Rodapé**
    - Botão final que rola para as ofertas + disclaimer curto

## Design
- 100% mobile-first (layout em coluna única, max-width estreita)
- Clean com textura sutil de fundo (ruído/padrão leve de estrelas ou cartas)
- Direção visual: tema "mágica" escuro e elegante (fundo escuro profundo, acento dourado/amarelo, botões verdes de conversão) — proposta aberta a ajuste
- Bordas arredondadas moderadas (rounded-xl/2xl), sem formato "bola"
- Textos curtos e escaneáveis, tipografia forte nas headlines
- Todas as imagens como placeholders (nenhuma imagem gerada)

## Detalhes técnicos
- Arquivos: `src/routes/index.tsx` (página) + componentes em `src/components/landing/` (seções), ajuste de tokens em `src/styles.css`
- Confete: canvas-confetti (bun add)
- Banner de escassez fixo no topo; botões CTA com scroll suave para âncora `#ofertas`
- head() da rota `/` com title, description, og:title, og:description próprios
- Sem backend, sem dados persistentes — tudo estático no frontend
- Fontes via `<link>` no `__root.tsx`
