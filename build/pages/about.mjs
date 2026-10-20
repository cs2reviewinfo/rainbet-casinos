import { FACT, section, kv, cards, ctaInline, ctaBand, callout } from '../lib.mjs';

export default (c) => ({
  title: 'O Rainbet — operator, licencja i platforma | Rainbet',
  description: 'O Rainbet: operator RBGAMING N.V., licencja Anjouan Gaming, działalność od 2023 roku. Kasyno kryptowalutowe, sportsbook, Originals i program nagród.',
  canonical: 'https://rainbet-casinos.pl',
  hero: {
    mark: 'rainbet.webp',
    eyebrow: 'O nas',
    h1: 'O Rainbet',
    text: `Rainbet to kasyno kryptowalutowe i sportsbook, które od ${FACT.founded} roku łączy gry, zakłady i program nagród w jednym koncie. Operatorem platformy jest ${FACT.company}.`,
    stats: [[FACT.founded, 'rok założenia'], ['Anjouan', 'licencja „Licensed”'], ['24/7', 'Live Support']],
    buttons: ['Poznaj kasyno Rainbet', 'Odbierz pakiet powitalny'],
  },
  body: `
${section('kim-jestesmy', 'Kim jesteśmy', `
<p class="lead">Budujemy Rainbet wokół prostego założenia: gracz korzystający z kryptowalut nie powinien czekać godzinami na wypłatę ani przenosić środków między osobnymi portfelami dla kasyna i sportu. Dlatego kasyno, sport i nagrody działają u nas na jednym saldzie.</p>
<p>Nasz katalog łączy sloty zewnętrznych studiów, stoły live, gry stołowe i własne Rainbet Originals, a sportsbook obsługuje zakłady przedmeczowe i na żywo. Całość spina system nagród z rangami, rakebackiem i bonusami cyklicznymi.</p>
<p>Ta strona to polskojęzyczny opis globalnej platformy Rainbet — nie osobny serwis dla Polski. Wiążące informacje prawne publikujemy na rainbet.com.</p>`)}

${section('profil', 'Profil Rainbet', kv([
  ['Marka', 'Rainbet'],
  ['Operator', FACT.company],
  ['Adres', FACT.address],
  ['Rok założenia', FACT.founded],
  ['Licencja', 'Link weryfikacyjny Anjouan Gaming i status „Licensed” w stopce rainbet.com'],
  ['Oficjalna strona', '<a href="/" target="_blank" rel="noopener">rainbet.com</a>'],
  ['Kontakt', `Live Support 24/7 · <a href="mailto:${FACT.email}">${FACT.email}</a>`],
  ['Social media', 'Wyłącznie oficjalne kanały podane w stopce rainbet.com'],
], 'Aktualne strony prawne na rainbet.com są ostatecznym źródłem informacji o licencji i operatorze.'))}

${section('co-oferujemy', 'Co oferujemy', `
${cards([
  ['slots', 'Kasyno', `Sloty, gry stołowe i live casino od uznanych studiów. Przegląd: ${c.a('games', 'gry i sloty')}.`],
  ['dice', 'Rainbet Originals', 'Mines, Plinko, crash i Dice — własne gry z krótkimi rundami.'],
  ['ball', 'Sportsbook', `Zakłady przedmeczowe, na żywo i e-sport. Więcej: ${c.a('sportsbook', 'Rainbet sports')}.`],
  ['bolt', 'Płatności krypto', `Dziewięć kryptowalut i szybkie wypłaty. Zobacz: ${c.a('payments', 'płatności')}.`],
  ['crown', 'Program nagród', 'Rangi, rakeback, reloady i bonusy cykliczne zależne od aktywności.'],
  ['phone', 'Dostęp mobilny', `Responsywna strona w Safari i Chrome — ${c.a('app', 'Rainbet na telefonie')}.`],
])}`)}

${section('zasady', 'Nasze zasady', `
<div class="grid two">
<article class="card"><h3>Warunki przed wpłatą</h3><p>Warunki każdej promocji — obrót, maksymalny zakład, wyłączone gry — pokazujemy w zakładce Promocje, zanim ją aktywujesz.</p></article>
<article class="card"><h3>Szybkie wypłaty</h3><p>W normalnych warunkach wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut.</p></article>
<article class="card"><h3>Bezpieczeństwo konta</h3><p>Weryfikacja tożsamości tam, gdzie jest wymagana, oraz narzędzia ochrony konta w ustawieniach.</p></article>
<article class="card"><h3>Odpowiedzialna gra</h3><p>Limity, przerwy i samowykluczenie — ${c.a('responsible', 'opisujemy je szczegółowo')}.</p></article>
</div>
${callout('Rainbet komunikuje się wyłącznie przez oficjalne kanały: stronę rainbet.com, Live Support i adres support@rainbet.com. Nie prosimy o hasła ani frazy seed.')}
${ctaInline('Chcesz zobaczyć platformę od środka?', 'Załóż konto Rainbet')}`)}

${ctaBand('Zacznij grać w Rainbet', 'Kasyno, sport i nagrody w jednym koncie — z pakietem powitalnym na trzy pierwsze wpłaty.', ['Graj w kasynie Rainbet', 'Zobacz bonus'], 'bonus')}
`,
  faqTitle: 'O Rainbet — FAQ',
  faq: [
    ['Kto jest operatorem Rainbet?', `Operatorem jest ${FACT.company}. Adres podany na oficjalnej stronie: ${FACT.address}.`],
    ['Czy Rainbet ma licencję?', 'W stopce rainbet.com znajduje się link weryfikacyjny licencji Anjouan Gaming ze statusem „Licensed”. Wiążące są aktualne strony prawne.'],
    ['Od kiedy działa Rainbet?', 'Rainbet działa od 2023 roku.'],
  ],
});
