import { FACT, PROMO_CODE, section, kv, steps, cards, ctaInline, ctaBand, trouble, callout, gameCards } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Free Spins Poland — spiny w pakiecie powitalnym | Rainbet',
  description: 'Rainbet free spins: 20 darmowych spinów w każdym z trzech progów pakietu powitalnego na slocie Pragmatic Play. Obrót 40×, kod, odbiór i rozwiązywanie problemów.',
  canonical: '/promotions',
  ogImage: 'sweet-bonanza-super-scatter.webp',
  hero: {
    cards: ['sweet', 'spartacus', 'portals'],
    eyebrow: 'Rainbet free spins',
    h1: 'Rainbet Free Spins Poland',
    text: 'Free Spins są częścią naszego pakietu powitalnego: po 20 spinów za każdą z trzech kwalifikujących wpłat, do wykorzystania na slocie Pragmatic Play wskazanym w ofercie.',
    stats: [['3 × 20 FS', 'do 60 spinów w pakiecie'], ['Pragmatic Play', 'dostawca gry'], [PROMO_CODE || 'Bez kodu', 'aktywacja w Promocjach'], [FACT.wager, 'obrót wygranych']],
    buttons: ['Odbierz Free Spins', 'Aktywuj pakiet powitalny'],
    note: 'Dostępność spinów dla kont z Polski zależy od regulaminu, rejestracji i ograniczeń dostawcy gry.',
  },
  body: `
${section('aktualne', 'Aktualne Free Spins w Rainbet', `
${kv([
  ['Czy oferta jest aktywna', 'Tak, w ramach ścieżki powitalnej z obrotem 40×, jeśli jest widoczna w Promocjach Twojego konta'],
  ['Liczba spinów', '20 w każdym z trzech progów (łącznie do 60)'],
  ['Gra / dostawca', 'Slot Pragmatic Play wskazany w warunkach oferty'],
  ['Kod promocyjny', PROMO_CODE ? `${PROMO_CODE} — w polu na kod, jeśli jest dostępne` : 'Nie jest wymagany; nie potwierdzamy publicznego kodu na spiny'],
  ['Obrót i ważność', 'Wygrane ze spinów: obrót 40×; termin ważności podany przy ofercie w Promocjach'],
  ['Gracze z Polski', 'Po akceptacji rejestracji i jeśli dostawca nie ogranicza gry w regionie'],
])}
${ctaInline('Spiny z pierwszego progu dostajesz po aktywacji oferty i pierwszej wpłacie.', 'Odbierz 20 Free Spins')}`)}

${section('jak-dzialaja', 'Jak działają Rainbet Free Spins', `
<p class="lead">Nasze Free Spins nie są dostępne osobno — są powiązane z kwalifikującą wpłatą w pakiecie powitalnym. Nie ma spinów za samą rejestrację ani za kod, dopóki taka kampania nie pojawi się w Promocjach.</p>
<div class="grid two">
<article class="card"><h3>Z czym są powiązane</h3><p>Z każdą z trzech wpłat w ścieżce powitalnej (100%, 50%, 100%). Kampanie czasowe ze spinami publikujemy w Promocjach tylko wtedy, gdy są aktywne.</p></article>
<article class="card"><h3>Jak pojawiają się na koncie</h3><p>Po zaksięgowaniu kwalifikującej wpłaty spiny są dodawane do gry, do której zostały przypisane. Uruchom ją, a licznik spinów pojawi się w interfejsie slotu.</p></article>
</div>`)}

${section('wygrane', 'Jak księgowane są wygrane z Free Spins', `
<p class="lead">Wygrane ze spinów nie trafiają od razu na saldo do wypłaty — przechodzą na saldo bonusowe i muszą zostać obrócone 40 razy.</p>
<p>Przykład: jeśli 20 spinów przyniesie $8, do wypłaty tych środków trzeba postawić łącznie $320 (40 × $8). Obowiązuje przy tym limit zakładu 2% wpłaty i wyłączenie gier o RTP powyżej 97,4%. Postęp obrotu widzisz w zakładce Promocje.</p>
${callout('Free Spins są dostępne tylko w ramach potwierdzonej promocji. Jeśli w Promocjach nie widzisz oferty ze spinami, nie są one aktualnie dostępne dla Twojego konta.')}`)}

${section('kod', 'Rainbet free spins code', `
<p class="lead">Rainbet free spins code i Rainbet promo code for free spins to popularne wyszukiwania, ale spiny w pakiecie powitalnym ${PROMO_CODE ? `można powiązać z kodem <strong>${PROMO_CODE}</strong>` : '<strong>nie wymagają kodu</strong>'}.</p>
<p>Jeśli pojawi się kampania ze spinami wymagająca kodu, pole na kod znajdzie się w formularzu rejestracji lub w zakładce Promocje, a sam kod będzie opisany przy ofercie. Nie publikujemy kodów, które nie są aktywne. Więcej o kodach: ${c.a('promo', 'Rainbet promo code')}.</p>`)}

${section('jak-odebrac', 'Jak odebrać Rainbet Free Spins', `
${steps([
  ['Załóż konto lub zaloguj się', `Nowe konto założysz w kilka minut — ${c.a('registration', 'zobacz rejestrację')}.`],
  ['Aktywuj powiązaną promocję', 'W Promocjach wybierz ścieżkę powitalną przed wpłatą, jeśli oferta tego wymaga.'],
  ['Wpisz kod, jeśli jest wymagany', 'Tylko w polu udostępnionym przez formularz lub Promocje.'],
  ['Wykonaj kwalifikującą wpłatę', `Od ${FACT.minDep} do ${FACT.maxDep}, właściwą metodą i siecią.`],
  ['Uruchom kwalifikującą grę', 'Po dodaniu spinów otwórz slot Pragmatic Play wskazany w ofercie.'],
])}`)}

${section('gry', 'Sloty, które znajdziesz w lobby', `
<p>Spiny z pakietu działają tylko na slocie wskazanym w ofercie, ale po ich wykorzystaniu możesz grać w każdą inną grę z katalogu. Oto kilka przykładów z naszego lobby — pełny katalog opisujemy w dziale ${c.a('games', 'Rainbet slots')}.</p>
${gameCards(c, [
  ['sweet', 'Słodki motyw i symbol Super Scatter od Pragmatic Play.', 'Zagraj w Sweet Bonanza'],
  ['spartacus', 'Antyczna arena i rozbudowane funkcje bonusowe.', 'Uruchom Eye of Spartacus'],
  ['portals', 'Fantasy z ognistymi portalami w roli głównej.', 'Zagraj w Fire Portals'],
], 'three')}`)}

${section('warunki', 'Warunki Rainbet Free Spins', `
${kv([
  ['Rodzaj nagrody', 'Free Spins w ramach pakietu powitalnego'],
  ['Gra / dostawca', 'Slot Pragmatic Play wskazany w ofercie'],
  ['Wyzwalacz', `Kwalifikująca wpłata ${FACT.minDep}–${FACT.maxDep} po aktywacji oferty`],
  ['Ważność', 'Podana przy ofercie w zakładce Promocje'],
  ['Obrót', '40× wygranych ze spinów'],
  ['Maksymalny zakład i dostępność', 'Maks. 2% wpłaty przy aktywnym bonusie; dostępność zależy od kraju i dostawcy'],
])}`)}

${section('polska', 'Free Spins dla graczy z Polski', `
${cards([
  ['info', 'Dostępność', 'Spiny zobaczysz, jeśli rejestracja z Polski zostanie zaakceptowana, a oferta pojawi się w Promocjach Twojego konta.'],
  ['wallet', 'Metody płatności', `Kryptowaluty (BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT, USDC) oraz metody tradycyjne widoczne w kasjerze. Szczegóły: ${c.a('payments', 'płatności')}.`],
  ['bolt', 'Wpłata krypto', 'Spiny pojawiają się po zaksięgowaniu wpłaty w wymaganej liczbie potwierdzeń sieci.'],
  ['shield', 'Ograniczenia dostawcy', 'Jeśli Pragmatic Play nie udostępnia gry w danym kraju, spiny mogą być niedostępne.'],
], 'two')}`)}

${section('nie-widac', 'Rainbet Free Spins nie pojawiają się', `
${trouble([
  ['Promocja nieaktywowana', 'Spiny nie zostaną dodane, jeśli oferta nie była wybrana przed wpłatą.'],
  ['Wpłata się nie kwalifikuje', `Za mała kwota (poniżej ${FACT.minDep}) lub wpłata jeszcze niezaksięgowana.`],
  ['Nagroda wygasła lub zła gra', 'Spiny mają termin ważności i działają tylko w przypisanej grze.'],
  ['Ograniczenie konta, dostawcy lub regionu', 'Dostawca gry lub regulamin może wyłączać spiny w danym kraju.'],
])}
${callout('Jeśli spiny powinny być na koncie, a ich nie ma — skontaktuj się z Live Support, zanim zaczniesz grać.', true)}`)}

${ctaBand('20 Free Spins w każdym progu', 'Aktywuj pakiet powitalny i odbierz spiny na slocie Pragmatic Play po kwalifikującej wpłacie.', ['Odbierz Free Spins', 'Zobacz bonus'], 'bonus')}
`,
  faqTitle: 'Rainbet free spins — FAQ',
  faq: [
    ['Czy Rainbet oferuje obecnie Free Spins?', 'Tak — po 20 spinów w każdym z trzech progów pakietu powitalnego, jeśli oferta jest widoczna w Promocjach Twojego konta.'],
    ['Czy potrzebuję kodu na Free Spins Rainbet?', PROMO_CODE ? `Możesz użyć kodu ${PROMO_CODE}, jeśli formularz udostępnia pole na kod.` : 'Nie. Spiny z pakietu powitalnego aktywujesz w Promocjach bez kodu.'],
    ['W których grach działają Free Spins Rainbet?', 'Na slocie Pragmatic Play wskazanym w warunkach oferty. W innych grach spiny nie działają.'],
    ['Czy gracze z Polski mogą odebrać Free Spins?', 'Jeśli rejestracja zostanie zaakceptowana, oferta jest widoczna w Promocjach, a dostawca nie ogranicza gry w regionie — tak.'],
  ],
});
