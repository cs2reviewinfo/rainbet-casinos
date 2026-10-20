// Shared data, layout and content components for the static Rainbet Poland site.
// Every page in build/pages/ returns plain HTML strings built with these helpers.

export const SITE = 'https://rainbet-casinos.pl/';
export const REF = 'https://zynto.top/go-rainbet-casinospl';
// Set to e.g. 'HELLA' once the code is publicly confirmed on rainbet.com/promotions.
// While null, the promo pages state that no public code is verified (as the brief requires).
export const PROMO_CODE = null;
export const YEAR = 2026;

// Facts from the brief. Recheck against / before publication.
export const FACT = {
  company: 'RBGAMING N.V.',
  address: 'Rain Group Ltd., Hamchako, Mustamudu, Autonomous Island of Anjouan, Union of Comoros',
  founded: '2023',
  email: 'support@rainbet.com',
  crypto: ['BTC', 'ETH', 'LTC', 'XRP', 'SOL', 'TRX', 'BNB', 'USDT', 'USDC'],
  minDep: '$30',
  maxDep: '$700',
  wager: '40×',
  withdraw: '5–15 minut',
};

export const PAGES = {
  home:        { path: '',                    nav: 'Rainbet',            icon: 'home',   group: 'Kasyno' },
  games:       { path: 'games/',              nav: 'Gry i sloty',        icon: 'slots',  group: 'Kasyno' },
  spins:       { path: 'free-spins/',         nav: 'Free Spins',         icon: 'spin',   group: 'Kasyno' },
  promo:       { path: 'promo-code/',         nav: 'Promo code',         icon: 'ticket', group: 'Promocje' },
  bonus:       { path: 'bonus/',              nav: 'Bonus powitalny',    icon: 'gift',   group: 'Promocje' },
  registration:{ path: 'registration/',       nav: 'Rejestracja',        icon: 'user+',  group: 'Konto' },
  login:       { path: 'login/',              nav: 'Logowanie',          icon: 'login',  group: 'Konto' },
  app:         { path: 'app/',                nav: 'Aplikacja mobilna',  icon: 'phone',  group: 'Konto' },
  payments:    { path: 'payments/',           nav: 'Płatności',          icon: 'wallet', group: 'Płatności i sport' },
  sportsbook:  { path: 'sportsbook/',         nav: 'Sportsbook',         icon: 'ball',   group: 'Płatności i sport' },
  about:       { path: 'about/',              nav: 'O Rainbet',          icon: 'info',   group: 'Informacje' },
  support:     { path: 'support/',            nav: 'Wsparcie',           icon: 'chat',   group: 'Informacje' },
  responsible: { path: 'responsible-gaming/', nav: 'Odpowiedzialna gra', icon: 'shield', group: 'Informacje' },
};

const ICONS = {
  home: '<path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  slots: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 9v6M12 9v6M16 9v6"/>',
  spin: '<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5 5"/>',
  ticket: '<path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z"/><path d="M14 4v12" stroke-dasharray="2 2"/>',
  gift: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9v12M12 9S10 4 7.5 5.5 9 9 12 9zm0 0s2-5 4.5-3.5S15 9 12 9z"/>',
  'user+': '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
  login: '<path d="M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5M10 16l4-4-4-4M14 12H3"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  wallet: '<rect x="2" y="6" width="20" height="14" rx="3"/><path d="M2 10h20M16 15h2"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="m12 7 4 3-1.5 5h-5L8 10z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  live: '<circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cards: '<rect x="3" y="5" width="12" height="16" rx="2"/><path d="M9 3h10a2 2 0 0 1 2 2v14"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1"/><circle cx="15.5" cy="15.5" r="1"/><circle cx="12" cy="12" r="1"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  crown: '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>',
};
export const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;

// Per-page URL context: all links are relative so the site works from any host or sub-folder.
export function context(key) {
  const root = PAGES[key].path ? '../' : '';
  const href = (k) => (root + PAGES[k].path) || './';
  return {
    key, root, href,
    img: (f) => `${root}images/${f}`,
    a: (k, text) => `<a href="${href(k)}">${text}</a>`,
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

// ---------- Components ----------
export const btn = (label, cls = '') =>
  `<a class="button ${cls}" href="${REF}" rel="nofollow sponsored noopener" target="_blank">${label}</a>`;

export const section = (id, h2, inner, cls = '') =>
  `<section class="section ${cls}" id="${id}"><h2>${h2}</h2>${inner}</section>`;

export const ctaInline = (text, label) => `<div class="cta-inline"><p>${text}</p>${btn(label)}</div>`;

export const ctaBand = (h2, text, labels, cls = '') =>
  `<section class="cta-band ${cls}"><div><h2>${h2}</h2><p>${text}</p></div><div class="btn-row">${labels.map((l, i) => btn(l, i ? 'alt' : '')).join('')}</div></section>`;

export const cards = (items, cls = '') =>
  `<div class="grid ${cls}">${items.map(([ic, h, p, tag]) =>
    `<article class="card">${ic ? `<div class="ico">${icon(ic)}</div>` : ''}<h3>${h}</h3>${[].concat(p).map((t) => `<p>${t}</p>`).join('')}${tag ? `<span class="tag">${tag}</span>` : ''}</article>`).join('')}</div>`;

export const kv = (rows, caption = '') =>
  `<div class="table-wrap"><table class="table kv">${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}${caption ? `<caption>${caption}</caption>` : ''}</table></div>`;

export const table = (head, rows, caption = '') =>
  `<div class="table-wrap"><table class="table"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>${caption ? `<caption>${caption}</caption>` : ''}</table></div>`;

export const steps = (items) =>
  `<ol class="steps">${items.map(([b, t]) => `<li><b>${b}</b>${t}</li>`).join('')}</ol>`;

export const visualSteps = (c, items) =>
  `<ol class="steps visual">${items.map(([im, b, t]) => `<li><img src="${c.img(im)}" alt="" loading="lazy" width="400" height="130"><div class="txt"><b>${b}</b>${t}</div></li>`).join('')}</ol>`;

export const checklist = (items, warn = false) =>
  `<ul class="checklist${warn ? ' warn' : ''}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

export const trouble = (items) =>
  `<div class="trouble">${items.map(([b, t]) => `<div><b>${b}</b><p>${t}</p></div>`).join('')}</div>`;

export const callout = (html, warn = false) => `<div class="callout${warn ? ' warn' : ''}"><p>${html}</p></div>`;

export const figure = (c, file, alt, caption, w, h) =>
  `<figure class="figure"><img src="${c.img(file)}" alt="${esc(alt)}" loading="lazy" width="${w}" height="${h}">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;

const COIN_ICONS = { BTC: 'btc.webp', ETH: 'eth.webp', LTC: 'ltc.webp' };
export const coins = (c) =>
  `<div class="coins">${FACT.crypto.map((s) => COIN_ICONS[s]
    ? `<span class="coin"><img src="${c.root}footer/${COIN_ICONS[s]}" alt="" width="22" height="22">${s}</span>`
    : `<span class="coin"><i>${s.slice(0, 2)}</i>${s}</span>`).join('')}</div>`;

// Supplied game-card visuals (Appendix A). Provider names are those printed on the approved cards.
export const GAMES = {
  sweet:     { img: 'sweet-bonanza-super-scatter.webp', name: 'Sweet Bonanza Super Scatter', prov: 'Pragmatic Play' },
  spartacus: { img: 'eye-of-spartacus.webp',            name: 'Eye of Spartacus',            prov: 'Pragmatic Play' },
  portals:   { img: 'fire-portals.webp',                name: 'Fire Portals',                prov: 'Pragmatic Play' },
  fist:      { img: 'fist-of-destruction.webp',         name: 'Fist of Destruction',         prov: 'Hacksaw Gaming' },
  princess:  { img: 'rainbow-princess.webp',            name: 'Rainbow Princess',            prov: 'Hacksaw Gaming' },
  avia:      { img: 'rainbet-aviamasters.webp',         name: 'Rainbet Aviamasters',         prov: 'BGaming' },
};
export const gameCards = (c, list, cls = '') =>
  `<div class="game-grid ${cls}">${list.map(([k, text, label]) => {
    const g = GAMES[k];
    return `<article class="game"><img src="${c.img(g.img)}" alt="${esc(g.name)} — ${g.prov}" loading="lazy" width="320" height="480"><div class="meta"><span class="prov">${g.prov}</span><h3>${g.name}</h3><p>${text}</p>${btn(label, 'small')}</div></article>`;
  }).join('')}</div>`;

export const faq = (items) =>
  `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;

// ---------- Layout ----------
function sidebar(c) {
  let last = '', out = '';
  for (const [k, p] of Object.entries(PAGES)) {
    if (p.group !== last) { out += `<div class="nav-group">${p.group}</div>`; last = p.group; }
    out += `<a href="${c.href(k)}"${k === c.key ? ' aria-current="page"' : ''}>${icon(p.icon)}<span>${p.nav}</span></a>`;
  }
  return `<aside class="sidebar" id="sidebar" aria-label="Menu główne">
<a class="brand" href="${c.href('home')}"><img src="${c.img('logo.svg')}" alt="Rainbet" width="124" height="42"></a>
<nav>${out}</nav>
<div class="side-promo"><strong>Pakiet powitalny: 3 wpłaty i do 60 Free Spins</strong>${btn('Odbierz bonus')}</div>
</aside><div class="scrim"></div>`;
}

function topbar(c) {
  return `<header class="topbar">
<button class="menu-toggle" type="button" aria-controls="sidebar" aria-expanded="true" aria-label="Pokaż lub ukryj menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<a class="top-logo" href="${c.href('home')}"><img src="${c.img('logo.svg')}" alt="Rainbet" width="104" height="35"></a>
<div class="actions">${btn('Zaloguj się', 'alt small')}${btn('Załóż konto', 'small')}</div>
</header>`;
}

function footer(c) {
  const col = (h, keys, extra = '') =>
    `<div><h3>${h}</h3><ul>${keys.map((k) => `<li><a href="${c.href(k)}">${PAGES[k].nav}</a></li>`).join('')}${extra}</ul></div>`;
  return `<footer class="footer"><div class="footer-inner">
<div class="footer-grid">
<div><img class="logo" src="${c.img('logo.svg')}" alt="Rainbet" width="128" height="44" loading="lazy">
<p>Rainbet to kasyno kryptowalutowe, zakłady sportowe i program nagród w jednym koncie. Szczegóły ofert, metod płatności i dostępności dla Twojego regionu pokazujemy w koncie przed każdą wpłatą.</p>
<div class="footer-coins"><img src="${c.root}footer/btc.webp" alt="Bitcoin" width="28" height="28" loading="lazy"><img src="${c.root}footer/eth.webp" alt="Ethereum" width="28" height="28" loading="lazy"><img src="${c.root}footer/ltc.webp" alt="Litecoin" width="28" height="28" loading="lazy"></div></div>
${col('Kasyno', ['home', 'games', 'spins', 'sportsbook'])}
${col('Promocje i konto', ['promo', 'bonus', 'registration', 'login', 'payments'])}
${col('Pomoc', ['app', 'support', 'about', 'responsible'], `<li><a href="/terms-of-service" target="_blank" rel="noopener">Regulamin</a></li>`)}
</div>
<div class="footer-legal"><span class="age" aria-label="Tylko dla osób pełnoletnich">18+</span>
<p>Operatorem Rainbet jest ${FACT.company}; adres podany na oficjalnej stronie: ${FACT.address}. W stopce rainbet.com znajdziesz link do weryfikacji licencji Anjouan Gaming — to obowiązujące strony prawne rozstrzygają o statusie licencji i dostępności w danym kraju. Gra jest przeznaczona wyłącznie dla osób pełnoletnich i może uzależniać. Graj rozsądnie i korzystaj z ${c.a('responsible', 'narzędzi odpowiedzialnej gry')}.</p></div>
<div class="footer-bottom"><span>© ${YEAR} Rainbet. Wszelkie prawa zastrzeżone.</span><span>Kontakt: <a href="mailto:${FACT.email}">${FACT.email}</a></span></div>
</div></footer>`;
}

function hero(c, h) {
  const style = h.image ? ` style="background-image:url('${c.img(h.image)}')"` : '';
  const cls = h.cards ? 'hero hero--cards' : h.mark ? 'hero hero--brand' : 'hero';
  const stats = h.stats ? `<div class="hero-stats">${h.stats.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join('')}</div>` : '';
  const side = h.cards
    ? `<div class="hero-cards" aria-hidden="true">${h.cards.map((k) => `<img src="${c.img(GAMES[k].img)}" alt="" width="150" height="225">`).join('')}</div>`
    : h.mark ? `<img class="hero-mark" src="${c.img(h.mark)}" alt="" width="340" height="132">` : '';
  return `<section class="${cls}"${style}><div class="hero-copy">
<span class="eyebrow">${h.eyebrow}</span><h1>${h.h1}</h1><p>${h.text}</p>${stats}
<div class="btn-row">${h.buttons.map((l, i) => btn(l, i ? 'alt' : '')).join('')}</div>
${h.note ? `<p class="hero-note">${h.note}</p>` : ''}</div>${side}</section>`;
}

export function render(page) {
  const c = page.c;
  const url = SITE + PAGES[c.key].path;
  const faqLd = page.faq ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: page.faq.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
  })}</script>` : '';
  const heroImg = page.hero.image ? `<link rel="preload" as="image" href="${c.img(page.hero.image)}">` : '';
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${page.canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}images/${page.ogImage || 'rainbet-home-casino-lobby.webp'}">
<meta name="theme-color" content="#07111f">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2307111f'/%3E%3Cpath fill='%2324d6e4' d='m6 11 5 4 5-8 5 8 5-4-2 13H8z'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap">
<link rel="stylesheet" href="${c.root}styles.css">
${heroImg}
${faqLd}
</head>
<body>
${sidebar(c)}
<div class="shell">
${topbar(c)}
<main class="page">
${hero(c, page.hero)}
${page.body}
${page.faq ? section('faq', page.faqTitle || 'Najczęstsze pytania', faq(page.faq)) : ''}
</main>
${footer(c)}
</div>
<script src="${c.root}main.js" defer></script>
</body>
</html>
`;
}
