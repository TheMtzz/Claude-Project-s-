# Hanei Motorsport Premium V1 (29/10/2026)

Projeto novo (modelo de concessionária premium no estilo Porsche). Não substitui o Hanei Veículos que está no ar.

**O que tem**
- Cabeçalho fixo e translúcido: Menu (cinza ao passar o mouse), logo no centro, bandeiras BR/EUA/Espanha (PT/EN/ES) e Conta.
- Menu lateral flutuante: Categorias (submenu), Estoque completo, Quem somos, Localização, Contato, Política de privacidade e Conta (funcionário) no fim.
- Carrossel com as 5 fotos, 6,5 s por foto, pausa, indicadores, teclado e deslizar no celular, com frases curtas.
- 4 categorias (SUVs, Picapes, Sedãs, Esportivos) com troca de foto ao passar o mouse (aguardando as fotos), busca e filtros múltiplos.
- Catálogo `?cat=` filtrado por categoria; página do carro com foto grande, 4 miniaturas, valor, ficha, descrição e WhatsApp / test drive.
- Quem somos (com localização), contato sempre no rodapé, páginas legais LGPD, painel de acessibilidade.
- Hospedagem Vercel: `vercel.json` com cabeçalhos de segurança (também `_headers` para Netlify).

**Pendências**
- Fotos das categorias e dos carros (ver GUIA-IMAGENS.md); dados reais (endereço, horários, WhatsApp, e-mail, CNPJ, história); veículos reais no lugar dos exemplos.
- Área do funcionário (Conta): ligar ao sistema da Hanei Veículos; regenerar as páginas legais ao incluir login.

**Testes**: PT/EN/ES em 1440 e 390 px; carrossel 6,5 s e pausa; menu, filtros, categoria, página do carro; axe 0 violações; abre via file://; Lighthouse (dist) 98 a 100 em tudo (mobile início 99).

## V1.1 (fotos das categorias)
- 12 fotos das categorias aplicadas (3 por categoria: SUV Jeep, Picape RAM, Sedã Cadillac, Esportivo Aston), com troca ao passar o mouse.
- Esportivo e Sedã foram recentralizados no quadro 4:3 (o carro estava na metade de cima).
- Zoom leve nos quadrados para o carro aparecer maior.

## V2 (catálogo real, 26 carros)
- Carros de exemplo removidos; entram 26 carros novos com 4 fotos cada (frente, lateral, traseira, interior):
  SUV (7): Bentayga, Purosangue, Urus, Trackhawk, Escalade, Cullinan, Durango. Picape (5): F-250 Super Duty, Wrangler, F-150 Raptor, RAM TRX, RAM Rebel.
  Sedã (6): CT5-V Blackwing, AMG E 63 S, RS 7, M5, Charger Hellcat, Flying Spur. Esportivo (8): AMG GT R, Vantage, Temerario, 296 GTB, Huracán, 765LT, 911 GT3 RS, 812.
- Cadastro: categoria, nome, placa, ano, km, câmbio, combustível, cor, valor, descrição própria e destaques (js/dados.js). Placas, km, anos e valores são EXEMPLOS fictícios.
- Nomes dos modelos identificados pelas imagens: conferir.
- Descrições dos carros ainda só em português (EN/ES a traduzir).

## V3 (área do funcionário)
- Entrar (botão Conta do site): login com 3 perfis de teste (admin, gerente, funcionario; senha de teste pública `hanei2026`), sem autenticação de dois fatores, igual à Hanei Industries.
- Painel, Estoque de veículos (cadastrar, editar, vender, ocultar, excluir; valor, placa, km, câmbio, combustível, cor, descrição), upload de até 8 fotos por carro e anexo de laudo cautelar em PDF (até 10 MB).
- Relatórios de estoque e de vendas em PDF; usuários (criar, trocar senha, ativar/desativar, excluir) e registro de atividades.
- O catálogo do site passa a ler esse estoque: o que o funcionário cadastra, vende ou oculta muda sozinho no site. A placa nunca aparece no site (removida também da página do carro, onde estava na V2).
- Botão "Ver laudo cautelar" na página do carro, quando houver PDF anexado.
- Modo demonstração: dados ficam só no navegador (fotos e PDFs no armazenamento do navegador). Para valer de verdade (vários funcionários, vários computadores) falta ligar a um banco de dados e login no servidor.
- Testes: site, área do funcionário (cadastro com foto e PDF, site público, usuários, permissões), PT/EN/ES, mobile, acessibilidade (axe 0). Lighthouse no celular: 95 a 100.
