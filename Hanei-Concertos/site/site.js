/* Hanei Concertos — JavaScript (script comum, sem módulos, funciona abrindo o index.html direto do computador).
   1) Troque o número do WhatsApp na constante ZAP (formato: 55 + DDD + número, só dígitos).
   2) A cena do celular: a rolagem vira --abre (0 a 1) e acende o rótulo da peça em foco.
   3) O formulário monta a mensagem e abre o WhatsApp. Nada é enviado nem guardado pelo site. */
(function () {
  'use strict';
  var ZAP = '5562900000000';                       // <- TROCAR pelo WhatsApp da loja
  var NOME = 'Hanei Concertos';
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var html = document.documentElement;
  var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduz) html.classList.add('anim');

  /* ---------- WhatsApp ---------- */
  function wa(texto) { return 'https://wa.me/' + ZAP + '?text=' + encodeURIComponent(texto); }
  $$('a[data-wa]').forEach(function (a) { a.href = wa('Olá, ' + NOME + '! Vim pelo site e gostaria de um orçamento.'); a.target = '_blank'; a.rel = 'noopener noreferrer'; });
  var ano = $('#ano'); if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- menu lateral (celular) ---------- */
  var bt = $('#menu-bt'), gv = $('#gaveta'), fd = $('#fundo-gaveta'), ultimo = null;
  function abrir(sim) {
    gv.hidden = fd.hidden = !sim; bt.setAttribute('aria-expanded', String(sim)); bt.setAttribute('aria-label', sim ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = sim ? 'hidden' : '';
    if (sim) { ultimo = document.activeElement; var a = $('a', gv); a && a.focus(); } else if (ultimo) ultimo.focus();
  }
  bt.addEventListener('click', function () { abrir(gv.hidden); });
  fd.addEventListener('click', function () { abrir(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !gv.hidden) abrir(false); });
  $$('a', gv).forEach(function (a) { a.addEventListener('click', function () { abrir(false); }); });

  /* cabeçalho some ao descer e volta ao subir (só no celular, via CSS) */
  var topo = $('#topo'), yAnt = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY; topo.classList.toggle('some', y > yAnt && y > 120); yAnt = y;
  }, { passive: true });

  /* ---------- cena do celular ---------- */
  var area = $('#inicio'), cena = $('#cena'), intro = $('#intro'), fim = $('#fim'), barra = $('#barra'), palco = $('#palco');
  var legenda = $('#legenda'), pontos = $$('#pontos i'), rot = $$('#rotulos li'), ordem = [5, 4, 3, 2, 1, 0], quadro = 0;
  function atualizar() {
    quadro = 0;
    var r = area.getBoundingClientRect(), total = r.height - window.innerHeight;
    var p = Math.min(1, Math.max(0, -r.top / total));
    cena.style.setProperty('--abre', Math.min(1, p / 0.45).toFixed(3));
    barra.style.width = (p * 100).toFixed(1) + '%';
    var op = Math.max(0, 1 - p * 7); intro.style.opacity = String(op); intro.style.transform = 'translateY(' + (-p * 120).toFixed(1) + 'px)'; intro.classList.toggle('apagado', op < 0.05);
    var fase = Math.max(0, (p - 0.28) / 0.62), qtos = Math.min(6, Math.floor(fase * 6.999) + (fase > 0 ? 1 : 0));
    rot.forEach(function (li) { var pos = ordem.indexOf(Number(li.dataset.i)); li.classList.toggle('on', pos < qtos); li.classList.toggle('ativo', pos === qtos - 1); });
    legenda.classList.toggle('on', qtos > 0);
    pontos.forEach(function (d, i) { d.classList.toggle('on', i === qtos - 1); });
    var fimOn = p > 0.93; fim.classList.toggle('on', fimOn); palco.classList.toggle('fim-on', fimOn);
  }
  function pedir() { if (!quadro) quadro = requestAnimationFrame(atualizar); }
  if (!reduz) { window.addEventListener('scroll', pedir, { passive: true }); window.addEventListener('resize', pedir); atualizar(); }
  else rot.forEach(function (li) { li.classList.add('on'); });

  /* ---------- aparecer ao rolar ---------- */
  var alvos = $$('.card, .selos li, .passos li, .form, .sec h2, .lead');
  if (!reduz && 'IntersectionObserver' in window) {
    alvos.forEach(function (n) { n.classList.add('rev'); });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    alvos.forEach(function (n) { io.observe(n); });
  }

  /* ---------- formulário ---------- */
  var NOMES = { tela: 'Troca de tela', vidro: 'Vidro e película', bateria: 'Troca de bateria', carga: 'Conector de carga', camera: 'Câmeras', placa: 'Não liga / placa', agua: 'Água e oxidação', software: 'Software', carcaca: 'Carcaça e botões', outro: 'Outro / não sei' };
  var form = $('#form'), erro = $('#f-erro');
  function marcar(v) { var r = $('input[name=serv][value="' + v + '"]'); if (r) r.checked = true; }
  $$('a[data-s]').forEach(function (a) { a.addEventListener('click', function () { marcar(a.dataset.s); }); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var s = $('input[name=serv]:checked'); var nome = form.nome.value.trim(), mod = form.modelo.value.trim(), obs = form.obs.value.trim();
    if (!s) { erro.textContent = 'Escolha o tipo de serviço para continuar.'; erro.hidden = false; return; }
    if (!mod) { erro.textContent = 'Informe o modelo do celular.'; erro.hidden = false; form.modelo.focus(); return; }
    erro.hidden = true;
    var t = 'Olá, ' + NOME + '! ' + (nome ? 'Meu nome é ' + nome + '. ' : '') + 'Gostaria de um orçamento.\nServiço: ' + NOMES[s.value] + '\nCelular: ' + mod + (obs ? '\nO que aconteceu: ' + obs : '');
    window.open(wa(t), '_blank', 'noopener');
  });
})();
