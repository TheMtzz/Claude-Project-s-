# Cão do Bem — Versão 1 (29/10/2026)

Modelo de site de pet shop e veterinário da Hanei Tech. Todos os nomes, preços, endereço, WhatsApp e dados são fictícios (demonstração).

## O que tem
- **Início** com carrossel de 5 slides (textos motivacionais), status "aberto agora", quiz "O que o seu pet precisa hoje?", serviços, produtos em destaque e galeria.
- **Produtos**: 8 produtos com foto, filtro por categoria e botão "Adicionar ao carrinho".
- **Agenda** em 4 passos: banho, banho e tosa ou consulta; nome, espécie e **porte** do pet (também na consulta); dias e horários livres; resumo com **valor por porte**; pedido por WhatsApp e arquivo para o calendário.
- **Sobre nós** com história, valores, equipe, perguntas frequentes e localização.
- **Botões flutuantes** em todas as páginas: carrinho (mini carrinho com link "Ver carrinho e finalizar") e menu completo (navegação, políticas e Área do funcionário).
- **Carrinho** (página própria): itens, **retirada na loja ou entrega** (taxa R$ 10, grátis acima de R$ 200), dados (nome, e-mail, telefone, CEP e endereço), pagamento **só Pix** (código copia e cola e QR de exemplo, validade de 15 min), confirmação e comprovante por WhatsApp.
- **Área do funcionário** (`funcionario.html`, não indexada): login de demonstração, visão geral, **estoque** (busca, filtros, entrada/saída, novo produto, editar, excluir, exportar CSV), **pedidos** do site (ao marcar "Separado" o estoque baixa) e **histórico** de movimentações (quem, quando, por quê). Perfis: gerente (tudo) e balcão (movimenta estoque e vê pedidos).
- **Páginas legais**: Política de Privacidade, Termos de Uso, Aviso de Cookies, Cancelamento e Reembolso, Entrega e Retirada, Direitos do Titular (LGPD), Segurança e Pagamentos.
- **Idiomas**: PT, EN e ES com bandeirinha (a Área do funcionário e as páginas legais são só em português). Painel de acessibilidade.

## Para testar a Área do funcionário
Usuário `gerente` ou `balcao`, senha `demo123`. O login é **simulado no navegador** (sem proteção real). Pedido de teste: faça uma compra pelo carrinho e abra a aba Pedidos.

## Qualidade (Lighthouse mobile)
Acessibilidade, boas práticas e SEO: 100 em todas as páginas públicas. Desempenho: 98 a 100. Páginas internas (funcionário e privacidade) têm SEO 60 de propósito (não indexadas). axe sem violações; testes automáticos PT/EN/ES e celular sem falhas.

## Antes de usar com um cliente real
- Trocar nome, endereço, WhatsApp, e-mail, CNPJ, horários e preços (`js/dados.js` e textos do `tools/build.py`).
- Trocar as fotos pelas do cliente (guia: `GUIA-IMAGENS.md` no código-fonte).
- Pagamento: o Pix é só de exemplo (chave fictícia). Para vender de verdade, usar um provedor de pagamento (as chaves ficam em variáveis de ambiente, nunca no código).
- Área do funcionário: ligar a um banco com login de verdade (ex.: Supabase) e senhas protegidas.
- Revisar as páginas legais com um advogado e preencher os campos entre colchetes.
