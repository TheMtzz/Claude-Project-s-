# Beauty Care — Versão 1 (29/10/2026)

Modelo de landing page de salão de beleza da Hanei Tech (base para manicure e barbearia). Todos os nomes, preços, endereço, WhatsApp e dados são fictícios (demonstração). Sem carrinho, sem Pix, sem catálogo e sem área do funcionário: é só site institucional com agenda.

## O que tem
- **Início** com carrossel de 5 slides (retrato, coloração, escova, corte, cosméticos), status "aberto agora", faixa de serviços, **serviços** (coloração e mechas, corte, escova e penteados, hidratação e tratamentos, alisamento e progressiva), seção **"Produtos e equipamentos de quem leva beleza a sério"** (secadores, pranchas, escovas, produtos profissionais, higiene), quiz "Qual cuidado combina com você hoje?", 3 passos para agendar, galeria e chamada final.
- **Agenda** em 4 passos: serviço; comprimento e tipo do cabelo (com **valor estimado por comprimento**); dia e horário livres; nome, WhatsApp e observações. Gera o pedido pronto para enviar pelo **WhatsApp**. Sem conexão com Google Agenda.
- **Sobre nós**: história, valores, equipe, perguntas frequentes e localização.
- **Páginas legais (LGPD)**: Privacidade, Termos de Uso, Cookies, Cancelamento e Reembolso, Direitos do Titular.
- Menu flutuante enxuto, setinha "Voltar" em todas as telas (menos a inicial), PT/EN/ES com bandeirinha e painel de acessibilidade.
- Visual: preto, dourado e marfim, serifa elegante (Cormorant Garamond) e Manrope.

## Qualidade
Lighthouse: acessibilidade, boas práticas e SEO 100 nas páginas públicas. Desempenho mobile: 90 na Início (LCP 3,3 s com a foto grande) e 100 nas demais; desktop 99–100. axe sem violações reais; testes automáticos PT/EN/ES e celular sem falhas.

## Antes de usar com um cliente real
- Trocar nome, endereço, WhatsApp, e-mail, horários e preços (`js/dados.js` e textos de `tools/build.py`).
- Trocar as fotos pelas do cliente (guia `GUIA-IMAGENS.md` no código-fonte).
- Trocar os textos de "Produtos e equipamentos" pelas marcas e diferenciais reais.
- Revisar as páginas legais com um advogado e preencher os campos entre colchetes.
- Para manicure ou barbearia: trocar fotos, serviços em `js/dados.js` e textos.
