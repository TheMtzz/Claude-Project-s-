# Como subir uma nova versão do site na Vercel

Você não precisa de GitHub nem de terminal. Use o **Vercel Drop** (arrastar a pasta).

1. Pegue o arquivo da versão nova, por exemplo `Hanei-Motorsport-Premium-Site-V3.zip` (o que NÃO é "Codigo-Fonte").
2. **Descompacte** o zip numa pasta (clique direito > Extrair tudo). Dentro deve aparecer `index.html`, a pasta `css`, `js`, `img`...
3. Entre em vercel.com, abra o seu projeto (Dashboard > clique no projeto do Motorsport).
4. **Arraste a pasta já descompactada** para dentro da página do projeto. A Vercel cria um novo deploy de produção do mesmo projeto, com o mesmo endereço.
5. Espere terminar (alguns segundos) e abra o endereço. Se o navegador mostrar a versão antiga, atualize com Ctrl+F5.

Dicas:
- Para voltar a uma versão anterior: no projeto, aba **Deployments**, clique nos três pontinhos do deploy antigo e escolha **Promote to Production**.
- Se arrastar o zip em vez da pasta e algo ficar estranho, use a pasta descompactada.
- Não arraste a pasta "Codigo-Fonte": ela é só para guardar ou para eu continuar o trabalho.
- Depois que subir, me avise: eu atualizo o GitHub com a versão que foi ao ar.

Fonte: documentação da Vercel (vercel.com/docs/drop).
