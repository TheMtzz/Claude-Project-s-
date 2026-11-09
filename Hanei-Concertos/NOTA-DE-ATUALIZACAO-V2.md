# Hanei Concertos — Site V2 (07/11/2026)

**V2: visual refeito no estilo "produto premium" (fundo preto, tipografia gigante, cartões grandes sem borda, barra superior fina, celular que sobe da base da tela e abre; uma legenda por peça, com pontos de progresso).**

Site de assistência técnica de celular. A tela inicial é a demo da anatomia: o celular abre em camadas ao rolar e cada peça mostra o serviço relacionado.

## Seções
1. Tela inicial animada (celular fechado -> aberto, rótulos por peça, botão "Pedir orçamento" em cada serviço)
2. Serviços (9 cartões)
3. Como funciona (3 passos)
4. Pedir orçamento (escolhe o serviço, modelo, nome e conta o problema; abre o WhatsApp com a mensagem pronta)
5. Rodapé

## O que trocar antes de publicar
- **Número do WhatsApp**: em `site.js` (constante ZAP) e nos links `wa.me/5562900000000` do `index.html`. Exemplo atual: 5562900000000.
- **Horário e endereço** no rodapé (hoje: seg a sáb 9h às 18h, "Rua Exemplo, 123, Centro").
- **Garantia**: o texto diz "combinada no orçamento". Ajuste ao que a loja oferece.
- **Nome**: está "Hanei Concertos", como pedido (o correto na língua portuguesa para reparo é "Consertos"; é só trocar se quiser).
- Imagens do celular são genéricas, geradas por IA; a carcaça e as câmeras lembram o iPhone, então para cliente real vale pedir versões sem essa cara.

## Testes feitos
PC (1440), tablet (768) e celular (390): sem rolagem lateral, um h1, âncoras, imagens e fonte local, links e mensagem do WhatsApp, formulário com validação, menu lateral e cabeçalho que some no celular, alvos de toque de 44 px, abre direto pelo arquivo (file://), versão sem JavaScript e com "reduzir movimento" (tudo já aberto, em lista).

## Como subir
Arraste a pasta no Netlify Drop (app.netlify.com/drop) ou suba no Vercel.
