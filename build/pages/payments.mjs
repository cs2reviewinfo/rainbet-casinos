import { FACT, section, steps, table, cards, coins, ctaInline, ctaBand, checklist, callout, trouble } from '../lib.mjs';

export default (c) => ({
  title: 'Płatności Rainbet — wpłaty i wypłaty krypto | Rainbet',
  description: 'Wpłaty i wypłaty w Rainbet: BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT i USDC oraz karty, przelewy i karty podarunkowe. Wypłaty zwykle w 5–15 minut.',
  canonical: 'https://rainbet-casinos.pl',
  ogImage: 'rainbet-home-crypto-payments.webp',
  hero: {
    image: 'rainbet-home-crypto-payments.webp',
    eyebrow: 'Kasjer Rainbet',
    h1: 'Wpłaty i wypłaty w Rainbet',
    text: 'Obsługujemy dziewięć kryptowalut, a zależnie od konta i regionu także karty, przelewy bankowe i karty podarunkowe. Wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut.',
    stats: [['9 kryptowalut', 'w tym USDT i USDC'], [FACT.minDep, 'wpłata do progów powitalnych'], ['5–15 min', 'typowa wysyłka wypłaty']],
    buttons: ['Wpłać środki', 'Odbierz bonus do wpłaty'],
    note: 'Metody i limity widoczne w kasjerze Twojego konta mają pierwszeństwo przed ogólnym opisem.',
  },
  body: `
${section('metody', 'Metody płatności w Rainbet', `
<p class="lead">Płatności są sercem crypto casino Rainbet. Kryptowaluty działają dla wszystkich kont, na których kasjer je wyświetla; metody tradycyjne pojawiają się w zależności od konta i regionu.</p>
${coins(c)}
${table(['Metoda', 'Wpłata', 'Wypłata', 'Uwagi'], [
  ['Kryptowaluty (BTC, ETH, LTC, XRP, SOL, TRX, BNB)', 'Tak', 'Tak', 'Saldo księgowane po potwierdzeniach sieci'],
  ['Stablecoiny (USDT, USDC)', 'Tak', 'Tak', 'Wartość powiązana z dolarem — wygodne przy planowaniu budżetu'],
  ['Karty płatnicze', 'Zależnie od konta', 'Według kasjera', 'Widoczne tylko, gdy kasjer je udostępnia'],
  ['Przelewy bankowe', 'Zależnie od konta', 'Według kasjera', 'Dostępność zależy od regionu'],
  ['Karty podarunkowe', 'Zależnie od konta', '—', 'Metoda doładowania salda, nie osobny bonus'],
], 'PayPal, Google Pay i Apple Pay podajemy tylko, jeśli kasjer pokazuje je dla Twojego konta.')}`)}

${section('wplata', 'Jak wpłacić środki w Rainbet', `
${steps([
  ['Otwórz kasjer', 'Po zalogowaniu otwórz portfel i wybierz wpłatę.'],
  ['Wybierz metodę', 'Kryptowalutę albo metodę tradycyjną dostępną dla konta.'],
  ['Dopasuj sieć', 'Przy krypto wybierz sieć, a w portfelu nadawcy ustaw dokładnie tę samą.'],
  ['Skopiuj adres i wyślij', 'Wklej wygenerowany adres w portfelu i sprawdź pierwsze oraz ostatnie znaki przed wysłaniem.'],
  ['Poczekaj na zaksięgowanie', 'Saldo pojawi się po wymaganej liczbie potwierdzeń sieci.'],
])}
${callout('Chcesz bonus? Aktywuj ofertę powitalną w Promocjach <strong>przed</strong> wpłatą — wpłata wykonana wcześniej nie kwalifikuje się do progu. Szczegóły: ' + c.a('bonus', 'bonus Rainbet') + '.', true)}
${ctaInline(`Pierwsza wpłata od ${FACT.minDep} może uruchomić 100% + 20 Free Spins.`, 'Wpłać i odbierz bonus')}`)}

${section('limity', 'Minimalna wpłata, przetwarzanie i waluty', `
${cards([
  ['wallet', 'Minimalna wpłata', `${FACT.minDep} to minimum dla progów pakietu powitalnego. Poszczególne metody i sieci mogą mieć własne minima widoczne w kasjerze.`],
  ['clock', 'Przetwarzanie', 'Wpłaty krypto księgujemy po potwierdzeniach sieci — czas zależy od monety i obciążenia blockchaina.'],
  ['percent', 'Waluty', 'Saldo wyświetlamy w walucie wybranej w ustawieniach konta; wpłaty przyjmujemy w obsługiwanych kryptowalutach i metodach z kasjera.'],
])}`)}

${section('wyplata', 'Wypłaty z Rainbet', `
<div class="split even"><div>
${steps([
  ['Otwórz kasjer → Wypłata', 'Wybierz monetę i sieć, na którą chcesz otrzymać środki.'],
  ['Podaj adres portfela', 'Adres musi obsługiwać wybraną sieć — sprawdź go dwukrotnie.'],
  ['Wpisz kwotę i potwierdź', 'Kwota nie może zawierać środków bonusowych z niespełnionym obrotem.'],
  ['Śledź status', 'Status wypłaty widzisz w historii transakcji.'],
])}
</div><div>
${table(['Status', 'Co oznacza'], [
  ['Oczekująca', 'Wypłata została zlecona i czeka na przetworzenie lub weryfikację.'],
  ['Wysłana', 'Transakcja trafiła do sieci blockchain — czas dotarcia zależy od sieci i portfela.'],
  ['Zakończona', 'Środki są w Twoim portfelu.'],
], 'Nazwy statusów w kasjerze mogą się nieco różnić.')}
</div></div>
${checklist([
  '<strong>Typowy czas:</strong> w normalnych warunkach wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut.',
  '<strong>Metody:</strong> wypłata trafia metodą dostępną dla konta; przy krypto — na adres, który podajesz.',
  '<strong>Weryfikacja:</strong> przy niektórych wypłatach możemy poprosić o dokumenty — do czasu weryfikacji wypłata czeka.',
  '<strong>Limity i warunki:</strong> aktywny bonus z obrotem 40× blokuje wypłatę środków bonusowych; limity metod są w kasjerze.',
])}`)}

${section('bezpieczne-platnosci', 'Bezpieczne płatności krypto', `
${trouble([
  ['Zła sieć', 'Wysłanie monety w innej sieci niż wybrana w kasjerze może skutkować utratą środków.'],
  ['Błędny adres', 'Transakcji blockchain nie da się cofnąć — zawsze sprawdzaj adres przed wysłaniem.'],
  ['Wpłata z giełdy', 'Niektóre giełdy mają własne minima i opłaty; sprawdź je, zanim zlecisz przelew.'],
  ['Brak zaksięgowania', 'Sprawdź transakcję w eksploratorze blockchain; jeśli ma potwierdzenia, a saldo się nie zmieniło, napisz do wsparcia.'],
])}
<p>Jeśli płatność utknęła, przygotuj identyfikator transakcji i napisz do ${c.a('support', 'wsparcia Rainbet')}.</p>`)}

${ctaBand('Pierwsza wpłata z bonusem', 'Aktywuj pakiet powitalny w Promocjach i wpłać od $30 w jednej z dziewięciu kryptowalut lub metodą z kasjera.', ['Wpłać środki', 'Aktywuj bonus'], 'bonus')}
`,
  faqTitle: 'Płatności Rainbet — FAQ',
  faq: [
    ['Jak szybko Rainbet wysyła wypłaty?', 'W normalnych warunkach wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut. Czas dotarcia zależy od sieci blockchain i portfela.'],
    ['Jakie kryptowaluty obsługuje Rainbet?', 'BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT i USDC.'],
    ['Czy w Polsce dostępne są karty i przelewy?', 'Metody tradycyjne zależą od konta i regionu — sprawdź, co pokazuje kasjer po zalogowaniu.'],
    ['Czy mogę wpłacić kartą podarunkową?', 'Karty podarunkowe są metodą wpłaty dostępną dla wybranych kont. Nie są osobnym bonusem.'],
    ['Jaka jest minimalna wpłata?', 'Minimum dla progów pakietu powitalnego to $30; metody mogą mieć własne limity.'],
  ],
});
