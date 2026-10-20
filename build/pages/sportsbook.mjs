import { section, cards, table, steps, ctaInline, ctaBand, callout, figure } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Sports — sportsbook i zakłady na żywo | Rainbet',
  description: 'Rainbet sports: zakłady przedmeczowe i na żywo, e-sport, rynki i kursy na jednym koncie z kasynem. Jak czytać kursy i postawić pierwszy kupon.',
  canonical: 'https://rainbet-casinos.pl/sportsbook',
  ogImage: 'rainbet-home-sportsbook.webp',
  hero: {
    image: 'rainbet-home-sportsbook.webp',
    eyebrow: 'Rainbet sports',
    h1: 'Rainbet Sportsbook w Polsce',
    text: 'Zakłady przedmeczowe, zakłady na żywo i e-sport, jeśli jest dostępny dla Twojego konta — na tym samym saldzie, którego używasz w kasynie Rainbet.',
    stats: [['Przed meczem', 'zakłady z wyprzedzeniem'], ['Na żywo', 'kursy w czasie rzeczywistym'], ['Jedno saldo', 'sport i kasyno']],
    buttons: ['Postaw zakład', 'Wpłać na zakłady'],
  },
  body: `
${section('przed-meczem', 'Zakłady przedmeczowe', `
<div class="split"><div>
<p class="lead">Zakłady przedmeczowe to kupony stawiane przed rozpoczęciem wydarzenia. Masz czas na analizę formy, składów i statystyk, a kurs jest ustalony w chwili potwierdzenia zakładu.</p>
<p>W sportsbooku Rainbet wydarzenia są pogrupowane według dyscypliny, kraju i rozgrywek. Listę dostępnych dyscyplin i lig zobaczysz w menu sportsbooku — zakres oferty zależy od kalendarza wydarzeń i Twojego konta.</p>
</div><div>
${figure(c, 'rainbet-home-sportsbook.webp', 'Sportsbook Rainbet — lista wydarzeń i kursów', '', 1020, 560)}
</div></div>`)}

${section('na-zywo', 'Zakłady na żywo', `
<p class="lead">W trakcie meczu kursy zmieniają się wraz z wynikiem i przebiegiem gry. Przy ważnych akcjach, np. rzucie karnym, rynki mogą być na chwilę zawieszone.</p>
${cards([
  ['live', 'Kursy w ruchu', 'Kurs na kuponie może się zmienić przed potwierdzeniem — sprawdź go jeszcze raz przed kliknięciem.'],
  ['clock', 'Zawieszenia rynków', 'Krótkie blokady przy kluczowych momentach to standard; kupon da się potwierdzić po ich zniesieniu.'],
  ['phone', 'Live na telefonie', 'Zakłady na żywo działają w przeglądarce mobilnej — przydatne, gdy oglądasz mecz poza domem.'],
])}
${ctaInline('Zakłady live są dostępne na tym samym saldzie co kasyno.', 'Obstawiaj na żywo')}`)}

${section('rynki', 'Rynki i kursy', `
<p class="lead">Rynek to rodzaj zakładu na danym wydarzeniu. Lista rynków zależy od dyscypliny i rangi meczu — przy topowych wydarzeniach jest zwykle szersza.</p>
${table(['Rynek', 'Na czym polega', 'Przykład'], [
  ['Wynik meczu (1X2)', 'Obstawiasz zwycięstwo gospodarzy, remis lub zwycięstwo gości.', '1 — wygrana gospodarzy'],
  ['Handicap', 'Jedna drużyna startuje z wirtualną przewagą lub stratą bramek/punktów.', '-1,5 — faworyt musi wygrać różnicą co najmniej 2'],
  ['Powyżej/poniżej', 'Obstawiasz, czy łączna liczba goli, punktów lub rund przekroczy linię.', 'Powyżej 2,5 gola — co najmniej 3 gole'],
  ['Obie drużyny strzelą', 'Wystarczy, że każda z drużyn zdobędzie gola.', 'Tak — wynik 1:1 lub wyższy'],
], 'Dostępność rynków zależy od wydarzenia.')}
<h3>Jak czytać kursy</h3>
<p>Kurs pokazuje potencjalną wypłatę: stawka × kurs = wypłata przy wygranej (łącznie ze stawką). Przykład: $10 × 2,50 = $25, z czego $15 to zysk. Kurs można też przeliczyć na szansę implikowaną: 1 ÷ 2,50 = 40%. Porównanie tej wartości z Twoją własną oceną pomaga zdecydować, czy zakład ma sens.</p>`)}

${section('esport', 'E-sport w Rainbet', `
<p>Jeśli e-sport jest dostępny dla Twojego konta, znajdziesz go w osobnej sekcji menu sportsbooku. Rynki e-sportowe działają podobnie do tradycyjnych — obstawiasz zwycięzcę meczu lub mapy, handicapy i łączną liczbę map czy rund. Listę gier i turniejów zobaczysz w menu, bo zmienia się wraz z kalendarzem rozgrywek.</p>`)}

${section('jedno-konto', 'Jedno konto Rainbet do kasyna i sportu', `
${cards([
  ['wallet', 'Wspólne saldo', 'Środki wpłacone na konto są dostępne od razu w sportsbooku i w kasynie.'],
  ['info', 'Wspólna historia', 'Zakłady sportowe i transakcje widzisz w jednym panelu konta.'],
  ['crown', 'Program nagród', 'Postęp rangi i dostępne nagrody widzisz w panelu Rewards tego samego konta.'],
])}
<p>Bonus powitalny działa w grach kasynowych — ${c.a('bonus', 'zobacz jego zasady')}. Promocje sportowe publikujemy w zakładce Promocje, gdy są aktywne.</p>`)}

${section('pierwszy-kupon', 'Jak postawić pierwszy zakład', `
${steps([
  ['Zaloguj się i wpłać środki', `Metody opisujemy w dziale ${c.a('payments', 'płatności')}.`],
  ['Wybierz wydarzenie', 'Znajdź dyscyplinę i mecz w menu lub wyszukiwarce sportsbooku.'],
  ['Kliknij kurs', 'Wybrany zakład trafia na kupon.'],
  ['Wpisz stawkę', 'Kupon pokaże potencjalną wypłatę przed potwierdzeniem.'],
  ['Potwierdź i śledź', 'Zakład znajdziesz w historii; rozliczenie następuje po zakończeniu wydarzenia zgodnie z zasadami rynku.'],
])}
${callout('Przed pierwszym zakładem przeczytaj zasady rozliczania rynków w regulaminie sportsbooku — np. co dzieje się z zakładem przy przełożonym meczu.')}`)}

${ctaBand('Rainbet sports na jednym koncie', 'Zakłady przedmeczowe i na żywo z tym samym saldem, którego używasz w kasynie.', ['Postaw zakład sportowy', 'Załóż konto'])}
`,
  faqTitle: 'Rainbet sportsbook — FAQ',
  faq: [
    ['Czy Rainbet ma zakłady na żywo?', 'Tak, sportsbook obejmuje zakłady przedmeczowe i na żywo z kursami aktualizowanymi w czasie rzeczywistym.'],
    ['Czy mogę obstawiać e-sport w Rainbet?', 'Tak, jeśli e-sport jest dostępny dla Twojego konta — znajdziesz go w osobnej sekcji menu sportsbooku.'],
    ['Czy do sportsbooku potrzebuję osobnego konta?', 'Nie. Jedno konto i jedno saldo obsługują kasyno i sportsbook.'],
    ['Jak obliczyć wypłatę z zakładu?', 'Pomnóż stawkę przez kurs: $10 × 2,50 = $25 wypłaty, w tym stawka.'],
  ],
});
