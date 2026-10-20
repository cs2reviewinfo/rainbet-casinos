import { FACT, section, table, kv, steps, cards, ctaInline, ctaBand, trouble, callout, checklist } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Bonus dla nowych graczy — pakiet powitalny | Rainbet',
  description: 'Rainbet bonus powitalny: 100% + 20 FS, 50% + 20 FS i 100% + 20 FS za trzy pierwsze wpłaty. Wpłata $30–$700, obrót 40×, zasady i odbiór krok po kroku.',
  canonical: 'https://rainbet-casinos.pl/promotions',
  ogImage: 'rainbet-1.webp',
  hero: {
    image: 'rainbet-1.webp',
    eyebrow: 'Rainbet welcome bonus',
    h1: 'Rainbet Bonus dla nowych graczy w Polsce',
    text: 'Nasz pakiet powitalny obejmuje trzy pierwsze wpłaty: 100% + 20 Free Spins, potem 50% + 20 Free Spins i ponownie 100% + 20 Free Spins. Ofertę wybierasz w Promocjach przed wpłatą.',
    stats: [['100% + 20 FS', '1. wpłata'], ['50% + 20 FS', '2. wpłata'], ['100% + 20 FS', '3. wpłata'], [`${FACT.minDep} · ${FACT.wager}`, 'min. wpłata · obrót']],
    buttons: ['Odbierz bonus Rainbet', 'Zobacz ofertę w Promocjach'],
    note: 'Dostępność bonusu dla kont z Polski potwierdza regulamin i proces rejestracji.',
  },
  body: `
${section('bonus-powitalny', 'Rainbet bonus powitalny', `
<p class="lead">Rainbet welcome bonus to ścieżka rozłożona na trzy wpłaty, a nie jednorazowy prezent. Dzięki temu nie musisz wpłacać dużej kwoty na start — każdy próg ma własny zakres wpłaty i własną pulę 20 Free Spins.</p>
<div class="grid two">
<article class="card"><h3>Co zawiera</h3><p>Bonus procentowy od każdej z trzech kwalifikujących wpłat oraz łącznie do 60 Free Spins (po 20 w każdym progu) na slocie Pragmatic Play wskazanym w ofercie.</p></article>
<article class="card"><h3>Kto może odebrać</h3><p>Nowe konta, które nie wykonały jeszcze pierwszej wpłaty i spełniają warunki kwalifikacji dla swojego regionu.</p></article>
<article class="card"><h3>Kiedy jest dostępny</h3><p>Od momentu założenia konta — w zakładce Promocje. Aktywujesz go przed wpłatą; po wpłacie bez aktywacji próg przepada.</p></article>
<article class="card"><h3>Gdzie go zobaczysz</h3><p>Status i postęp obrotu wyświetlamy w zakładce Promocje, a Free Spins — w grze, do której zostały przypisane.</p></article>
</div>
<p>Masz też alternatywę: ścieżkę <strong>bez blokady obrotu</strong>, w której do 100% bonusu odblokowuje się stopniowo w miarę gry. Wybierasz jedną z dwóch ścieżek — zanim zdecydujesz, porównaj, czy wolisz bonus od razu z obrotem 40×, czy stopniowe odblokowanie bez blokady salda.</p>`)}

${section('szczegoly', 'Szczegóły bonusu Rainbet', `
${kv([
  ['Rodzaj bonusu', 'Bonus od wpłaty + Free Spins, ścieżka z obrotem 40×'],
  ['Dopasowanie wpłaty', '100% (1. wpłata) · 50% (2. wpłata) · 100% (3. wpłata)'],
  ['Maksymalny bonus', `Wynika z maksymalnej wpłaty ${FACT.maxDep} w progu i procentu danego progu`],
  ['Free Spins', '20 w każdym progu, łącznie do 60'],
  ['Minimalna wpłata', FACT.minDep],
  ['Maksymalna wpłata kwalifikująca', FACT.maxDep],
  ['Wymóg obrotu', '40×'],
  ['Maksymalny zakład', '2% wpłaty przy aktywnym bonusie'],
  ['Gry', 'Gry kasynowe; tytuły o RTP powyżej 97,4% są zablokowane przy aktywnym bonusie'],
  ['Dostępność w Polsce', 'Zależy od regulaminu i procesu rejestracji'],
], 'Wszystkie parametry potwierdzasz w zakładce Promocje przed aktywacją.')}
<h3>Przykład na liczbach</h3>
${table(['Próg', 'Wpłata', 'Bonus', 'Free Spins'], [
  ['1. wpłata (100%)', '$100', '$100', '20'],
  ['2. wpłata (50%)', '$100', '$50', '20'],
  ['3. wpłata (100%)', '$100', '$100', '20'],
], 'Przykład poglądowy dla wpłat po $100. Rzeczywista wartość zależy od kwoty wpłaty w zakresie $30–$700.')}`)}

${section('jak-odebrac', 'Jak odebrać bonus Rainbet', `
${steps([
  ['Załóż konto Rainbet', `Przez aktualny formularz — opis w dziale ${c.a('registration', 'rejestracja')}.`],
  ['Otwórz Promocje', 'Zakładka Promocje jest dostępna w menu konta.'],
  ['Aktywuj ofertę powitalną', 'Wybierz ścieżkę z obrotem 40× lub ścieżkę bez blokady obrotu.'],
  ['Wpłać kwalifikującą kwotę', `Od ${FACT.minDep} do ${FACT.maxDep}, obsługiwaną metodą; przy krypto — właściwą siecią.`],
  ['Odbierz bonus', 'Bonus i 20 Free Spins pojawiają się po zaksięgowaniu wpłaty.'],
  ['Graj zgodnie z warunkami', 'Pilnuj limitu 2% wpłaty na zakład i omijaj gry wyłączone z bonusu, aż obrót zostanie spełniony.'],
])}
${ctaInline('Pierwszy próg to 100% + 20 Free Spins — aktywuj go przed wpłatą.', 'Odbierz bonus za 1. wpłatę')}`)}

${section('pierwsza-wplata', 'Bonus za pierwszą wpłatę Rainbet', `
<p class="lead">Pierwszy próg jest najważniejszy, bo nie da się go nadrobić. Kwalifikuje się tylko ta wpłata, która jest pierwszą na koncie i następuje po aktywacji oferty.</p>
${checklist([
  `<strong>Kwalifikacja:</strong> pierwsza wpłata po wybraniu ścieżki powitalnej w Promocjach.`,
  `<strong>Limity wpłaty:</strong> od ${FACT.minDep} do ${FACT.maxDep}; nadwyżka ponad maksimum nie zwiększa bonusu.`,
  '<strong>Tylko kasyno:</strong> środki bonusowe wykorzystasz w grach kasynowych, nie w sportsbooku.',
  '<strong>Kiedy przepada:</strong> gdy wpłacisz przed aktywacją lub pominiesz ten próg — nie można go aktywować wstecz.',
], true)}`)}

${section('free-spins', 'Rainbet Free Spins w pakiecie', `
<div class="grid">
<article class="card"><h3>Liczba spinów</h3><p>20 Free Spins w każdym z trzech progów — razem do 60.</p></article>
<article class="card"><h3>Gra i dostawca</h3><p>Slot Pragmatic Play wskazany w ofercie. Spiny nie działają w innych grach.</p></article>
<article class="card"><h3>Wygrane ze spinów</h3><p>Trafiają na saldo bonusowe i podlegają obrotowi 40× przed wypłatą.</p></article>
</div>
<p>Jeśli dostawca ogranicza grę w Twoim kraju, spiny mogą być niedostępne. Więcej o spinach, także poza pakietem: ${c.a('spins', 'Rainbet free spins')}.</p>`)}

${section('obrot', 'Wymogi obrotu bonusu Rainbet', `
<p class="lead">Obrót 40× oznacza, że łączna wartość postawionych zakładów musi osiągnąć 40-krotność kwoty bonusu, zanim środki bonusowe będzie można wypłacić.</p>
${cards([
  ['percent', 'Blokada 40×', 'Dotyczy ścieżki z blokadą obrotu. Przy bonusie $100 do obrotu jest $4 000 w zakładach.'],
  ['wallet', 'Co trzeba obrócić', 'Środki bonusowe oraz wygrane z Free Spins — każde z wymogiem 40×.'],
  ['shield', 'Maksymalny zakład', 'Pojedyncza stawka nie może przekroczyć 2% wpłaty. Przy wpłacie $100 to $2 na spin lub rundę.'],
  ['slots', 'Wkład gier', 'Bonus działa w grach kasynowych; gry o RTP powyżej 97,4% są zablokowane do czasu spełnienia obrotu.'],
  ['info', 'Utrata bonusu', 'Anulowanie lub naruszenie zasad usuwa środki bonusowe i powiązane z nimi wygrane.'],
  ['star', 'Postęp rangi', 'Przy aktywnym bonusie ranga VIP rośnie wolniej niż przy grze bez bonusu.'],
])}`)}

${section('polska', 'Bonus Rainbet dla graczy z Polski', `
${checklist([
  '<strong>Kwalifikacja z Polski:</strong> potwierdza ją formularz rejestracji i regulamin — oferty dostępne dla konta widać w Promocjach.',
  '<strong>Metody wpłat:</strong> BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT, USDC, a także karty, przelewy i karty podarunkowe, jeśli kasjer je pokazuje.',
  '<strong>Wpłaty krypto:</strong> bonus nalicza się po zaksięgowaniu wpłaty w wymaganej liczbie potwierdzeń.',
  '<strong>Free Spins:</strong> mogą być niedostępne, jeśli dostawca Pragmatic Play ogranicza grę w danym regionie.',
  `<strong>Minimalna wpłata:</strong> ${FACT.minDep} na próg.`,
])}
<p><strong>Rainbet gift card:</strong> karty podarunkowe to metoda wpłaty dostępna dla wybranych kont, a nie osobny bonus. Wpłata kartą podarunkową kwalifikuje się do progu tylko wtedy, gdy warunki promocji ją obejmują — sprawdź to w Promocjach.</p>`)}

${section('bonus-nie-dotarl', 'Bonus Rainbet się nie pojawił', `
${trouble([
  ['Promocja nieaktywowana', 'Bonus nie nalicza się, jeśli ścieżka powitalna nie została wybrana w Promocjach.'],
  ['Za mała wpłata', `Kwota poniżej ${FACT.minDep} nie kwalifikuje się do progu.`],
  ['Wpłata przed aktywacją', 'Wpłata wykonana przed wyborem oferty nie zostanie zaliczona.'],
  ['Pierwsza wpłata już wykorzystana', 'Próg pierwszej wpłaty nie wraca po jej wykonaniu.'],
  ['Ograniczenie dostawcy lub kraju', 'Free Spins mogą być zablokowane w regionie, w którym dostawca nie działa.'],
  ['Brak potwierdzeń sieci', 'Wpłata krypto nalicza bonus po zaksięgowaniu — sprawdź status w historii transakcji.'],
])}
${callout('Brakuje bonusu? Napisz do Live Support, zanim postawisz zakład — tak najłatwiej wyjaśnić sprawę.', true)}`)}

${section('inne-promocje', 'Inne promocje Rainbet', `
<p class="lead">Po pakiecie powitalnym aktywność na koncie nadal się opłaca — główną rolę grają nagrody zależne od rangi.</p>
${cards([
  ['percent', 'Rakeback', 'Zwrot części przewagi kasyna z Twoich zakładów, zależny od rangi. Część środków może wymagać obrotu.'],
  ['star', 'Turnieje', 'Pojawiają się w Promocjach, gdy są aktywne — zawsze z własnym regulaminem i harmonogramem.'],
  ['shield', 'Lossback', 'Akcje zwrotu części strat publikujemy tylko jako aktywne kampanie z własnymi warunkami w Promocjach.'],
  ['ball', 'Promocje sportowe', 'Oferty dla sportsbooku, gdy są dostępne — z zasadami rozliczenia opisanymi przy kampanii.'],
  ['bolt', 'Wyzwania', 'Zadania w konkretnych grach, publikowane w Promocjach w czasie trwania akcji.'],
  ['clock', 'Nagrody cykliczne', 'Codzienne reloady i bonusy dzienne, tygodniowe, przedmiesięczne i miesięczne.'],
])}
<p>Informacje o kodach promocyjnych zebraliśmy na stronie ${c.a('promo', 'Rainbet promo code')}.</p>`)}

${ctaBand('Aktywuj pakiet powitalny', 'Trzy progi, do 60 Free Spins i obrót 40×. Wybierz ofertę w Promocjach przed pierwszą wpłatą.', ['Odbierz bonus Rainbet', 'Wpłać od $30'], 'bonus')}
`,
  faqTitle: 'Rainbet bonus — FAQ',
  faq: [
    ['Czym jest bonus Rainbet?', 'To pakiet powitalny na trzy wpłaty: 100% + 20 FS, 50% + 20 FS i 100% + 20 FS, z obrotem 40×. Alternatywą jest ścieżka bez blokady obrotu.'],
    ['Jak odebrać bonus Rainbet?', 'Załóż konto, aktywuj ofertę w Promocjach, a potem wpłać od $30 do $700. Bonus i spiny pojawią się po zaksięgowaniu wpłaty.'],
    ['Jaka jest minimalna wpłata?', 'Minimalna kwalifikująca wpłata to $30, a maksymalna — $700 w każdym progu.'],
    ['Jaki jest wymóg obrotu?', '40× bonusu, maksymalny zakład 2% wpłaty i wyłączenie gier o RTP powyżej 97,4% do czasu spełnienia obrotu.'],
    ['Czy gracze z Polski mogą odebrać bonus Rainbet?', 'Jeśli rejestracja z Polski zostanie zaakceptowana i oferta jest widoczna w Promocjach, tak. Decyduje regulamin i proces rejestracji.'],
    ['Czy mogę odebrać bonus po pierwszej wpłacie?', 'Nie za pierwszy próg — trzeba go aktywować przed pierwszą wpłatą. Kolejne progi zależą od statusu ścieżki w Promocjach.'],
    ['Dlaczego bonus Rainbet się nie pojawił?', 'Najczęściej promocja nie była aktywna przed wpłatą, kwota była za mała lub wpłata nie została jeszcze zaksięgowana. Skontaktuj się z Live Support przed grą.'],
  ],
});
