import { FACT, PROMO_CODE, section, table, kv, ctaInline, ctaBand, visualSteps, trouble, callout, checklist } from '../lib.mjs';

const CODE = PROMO_CODE ? `<strong>${PROMO_CODE}</strong>` : 'Brak zweryfikowanego kodu publicznego';

export default (c) => ({
  title: 'Rainbet Promo Code Poland — aktualny status kodu | Rainbet',
  description: 'Rainbet promo code dla Polski: aktualny status kodu, pakiet powitalny 100% + 20 FS, minimalna wpłata $30, obrót 40× i rozwiązania, gdy kod nie działa.',
  canonical: 'https://rainbet-casinos.pl/promotions',
  ogImage: 'rainbet-1.webp',
  hero: {
    image: 'rainbet-1.webp',
    eyebrow: 'Rainbet promo code',
    h1: 'Rainbet Promo Code Poland',
    text: 'Obecnie nie publikujemy zweryfikowanego publicznego kodu promocyjnego. Ofertę powitalną wybierasz bezpośrednio w zakładce Promocje przed wpłatą — kod nie jest do tego potrzebny.',
    stats: [[PROMO_CODE || 'Brak kodu', 'status kodu publicznego'], ['100% + 20 FS', 'bonus za 1. wpłatę'], [FACT.minDep, 'minimalna wpłata'], [FACT.wager, 'wymóg obrotu']],
    buttons: ['Otwórz Promocje', 'Wybierz promocję'],
    note: 'Kwalifikacja graczy z Polski zależy od regulaminu i procesu rejestracji — nie gwarantujemy dostępu na podstawie samego kodu.',
  },
  body: `
${section('status-ofert', 'Aktualny status kodów i ofert', `
${table(['Oferta', 'Szczegóły', 'Promo code'], [
  ['Oficjalna ścieżka powitalna', 'Ścieżka z obrotem 40×: 1. wpłata 100% + 20 Free Spins, 2. wpłata 50% + 20 Free Spins, 3. wpłata 100% + 20 Free Spins.', CODE],
  ['Ścieżka bez blokady obrotu', 'Do 100% odblokowywane stopniowo w miarę gry; obowiązują warunki kwalifikacji i wyłączenia.', CODE],
  ['Nagrody stałe', 'Rakeback, codzienne reloady oraz bonusy dzienne, tygodniowe, przedmiesięczne i miesięczne. Kwoty zależą od aktywności i rangi.', CODE],
])}`)}

${section('rainbet-promo-code', 'Rainbet Promo Code', `
<p class="lead">Rainbet promo code to w naszym systemie ciąg znaków, który — jeśli jest aktywny — przypisuje do konta konkretną promocję. W praktyce najważniejsza oferta dla nowych graczy, czyli pakiet powitalny na trzy wpłaty, <strong>nie wymaga żadnego kodu</strong>: wybierasz ją w zakładce Promocje.</p>
<p><strong>Co otrzymujesz.</strong> Po aktywacji ścieżki powitalnej i kwalifikującej wpłacie dostajesz bonus procentowy od wpłaty oraz 20 Free Spins w każdym z trzech progów. Alternatywnie możesz wybrać ścieżkę bez blokady obrotu, w której bonus odblokowuje się stopniowo w trakcie gry.</p>
<p><strong>Kto może skorzystać.</strong> Pakiet powitalny jest przeznaczony dla nowych kont, które jeszcze nie dokonały pierwszej wpłaty. Stali gracze nie aktywują go ponownie — dla nich działają rakeback i nagrody cykliczne. Kwalifikację zawsze potwierdza konto i region.</p>
<p><strong>Kiedy wpisać kod.</strong> Kod wpisujesz tylko wtedy, gdy formularz rejestracji lub zakładka Promocje pokazuje pole na kod, a sam kod jest publicznie potwierdzony. Ofertę powitalną aktywujesz przed wpłatą; po aktywacji status promocji widzisz w zakładce Promocje, a spiny — przy grze, do której zostały przypisane.</p>
<p>Wyszukiwania takie jak <em>Rainbet code</em>, <em>Rainbet promo</em>, <em>Rainbet promo codes</em> czy <em>Rainbet coupon code</em> dotyczą tej samej mechaniki. Rainbet affiliate code i Rainbet referral code działają jak kody promocyjne tam, gdzie mają zastosowanie — przypisują konto do polecenia, ale nie zmieniają warunków pakietu powitalnego opisanych w Promocjach.</p>
${ctaInline('Pakiet powitalny aktywujesz bez kodu — wystarczy wybrać go w Promocjach.', 'Aktywuj ofertę powitalną')}`)}

${section('status-kodu', 'Aktualny status Rainbet promo code', `
${table(['Promo code', 'Oferta', 'Kto może odebrać', 'Minimalna wpłata', 'Wymagania'], [
  [CODE, 'Aktualna oficjalna promocja wybrana przez gracza w zakładce Promocje', 'Zależy od promocji i konta; pakiet powitalny — nowe konta', `${FACT.minDep} w opublikowanych progach powitalnych`, 'Aktywacja przed wpłatą, gdy jest wymagana; warunki czytasz przed wpłatą'],
])}
${callout(PROMO_CODE
  ? `Kod <strong>${PROMO_CODE}</strong> wpisujesz w polu na kod w formularzu rejestracji lub w Promocjach. Warunki oferty zawsze sprawdzisz w zakładce Promocje przed wpłatą.`
  : 'Nie potwierdzamy obecnie żadnego publicznego kodu promocyjnego. Aktualne oferty znajdziesz w oficjalnej zakładce Promocje — tam też widać, czy dana akcja wymaga kodu.')}`)}

${section('jak-uzyc', 'Jak użyć kodu promocyjnego Rainbet', `
<p class="lead">Kolejność kroków ma znaczenie — zwłaszcza aktywacja promocji przed wpłatą.</p>
${visualSteps(c, [
  ['rainbet-home-casino-lobby.webp', 'Załóż konto', 'Wybierz rejestrację i użyj jednej z metod widocznych w formularzu.'],
  ['rainbet-1.webp', 'Kod tylko przy dostępnym polu', 'Wpisz kod promocyjny lub polecający tylko wtedy, gdy formularz lub Promocje mają pole na kod, a kod jest publicznie potwierdzony.'],
  ['rainbet-home-crypto-payments.webp', 'Potwierdź e-mail', 'Jeśli system o to poprosi, zweryfikuj adres e-mail, a następnie zajrzyj do Promocji.'],
  ['rainbet-home-casino-lobby.webp', 'Sprawdź status', 'Zaloguj się i upewnij się, jaki jest status promocji — bonus nie jest dodawany automatycznie bez wyboru oferty.'],
  ['rainbet-1.webp', 'Przeczytaj warunki', 'W Promocjach sprawdź kroki aktywacji, metody wpłat, wyłączenia i termin ważności.'],
  ['rainbet-1.webp', 'Aktywuj przed wpłatą', 'Wybierz ścieżkę powitalną, zanim wyślesz środki — jeśli warunki wymagają opt-in.'],
  ['rainbet-home-crypto-payments.webp', 'Wpłać kwalifikującą kwotę', 'Użyj obsługiwanej metody; przy krypto wybierz dokładnie tę samą sieć w portfelu i w kasjerze.'],
  ['rainbet-home-casino-lobby.webp', 'Zagraj po zaksięgowaniu', 'Zacznij dopiero, gdy saldo i status oferty są widoczne. Sprawdź obrót, maksymalny zakład i wkład gier.'],
])}
${ctaInline('Masz już konto? Otwórz Promocje i wybierz ofertę przed pierwszą wpłatą.', 'Wybierz promocję')}`)}

${section('warunki', 'Warunki kodu promocyjnego Rainbet', `
${kv([
  ['Aktywacja', 'Przed wpłatą, jeśli promocja wymaga opt-in'],
  ['Minimalna wpłata kwalifikująca', FACT.minDep],
  ['Maksymalna wpłata kwalifikująca', FACT.maxDep],
  ['Pierwsza wpłata', 'Bonus za 1. wpłatę dotyczy wyłącznie pierwszej wpłaty — później nie da się go odebrać'],
  ['Obrót', '40× bonusu przed wypłatą środków bonusowych'],
  ['Maksymalny zakład', '2% wpłaty, dopóki bonus jest aktywny'],
  ['Gry', 'Bonus działa w grach kasynowych; gry o RTP powyżej 97,4% są zablokowane przy aktywnym bonusie'],
  ['Free Spins', 'Dodawane przy kwalifikującej wpłacie, do użycia na slocie Pragmatic Play; wygrane z obrotem 40×'],
])}
<p>Aby odebrać bonus, wpłać w progu od ${FACT.minDep} do ${FACT.maxDep}. Środki bonusowe możesz wykorzystać w grach kasynowych, z wyjątkiem tytułów o bardzo wysokim RTP (powyżej 97,4%), które pozostają zablokowane, dopóki bonus jest aktywny.</p>
<p>Bonus za pierwszą wpłatę przysługuje tylko przy tej jednej transakcji — jeśli wpłacisz bez aktywacji, próg przepada. Zanim wypłacisz środki bonusowe, trzeba obrócić nimi 40 razy. W tym czasie pojedynczy zakład nie może przekroczyć 2% wpłaty, a postęp rangi VIP rośnie wolniej.</p>
<p>Free Spins trafiają na konto przy kwalifikującej pierwszej wpłacie i działają wyłącznie w grze Pragmatic Play wskazanej w ofercie. Wygrane ze spinów również podlegają obrotowi 40×.</p>
<p>Anulowanie lub utrata bonusu oznacza usunięcie środków bonusowych i związanych z nimi wygranych zgodnie z warunkami promocji. Rakeback jest częścią systemu nagród i zależy od aktywności — stawki się różnią, a część środków z rakebacku może wymagać obrotu przed wypłatą.</p>
${callout('Jeśli spiny lub bonus nie pojawiły się po kwalifikującej wpłacie, napisz do Live Support, zanim postawisz pierwszy zakład.', true)}`)}

${section('polska', 'Rainbet promo code dla graczy z Polski', `
<p class="lead">Promocje przypisujemy do konta, a nie do adresu strony — dlatego o tym, czy gracz z Polski zobaczy pakiet powitalny, decyduje proces rejestracji i regulamin.</p>
${checklist([
  '<strong>Dostępność kodu i kwalifikacja:</strong> najpierw formularz rejestracji musi zaakceptować konto; dopiero wtedy w Promocjach widać oferty dostępne dla Twojego regionu.',
  '<strong>Metody wpłat:</strong> BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT i USDC oraz — jeśli kasjer je pokazuje — karty, przelewy i karty podarunkowe.',
  '<strong>Krypto:</strong> wpłata kwalifikuje się po zaksięgowaniu w wymaganej liczbie potwierdzeń; zła sieć oznacza utratę środków.',
  `<strong>Minimalna wpłata:</strong> ${FACT.minDep} — tak samo jak w innych regionach, w których oferta jest dostępna.`,
  '<strong>Free Spins:</strong> działają na slocie Pragmatic Play; jeśli dostawca ogranicza grę w danym kraju, spiny mogą nie być dostępne.',
  '<strong>Ograniczenia regionalne:</strong> aktualna lista krajów wyłączonych znajduje się w regulaminie Rainbet.',
])}`)}

${section('nowi-gracze', 'Rainbet promo code dla nowych graczy', `
<p class="lead">Rainbet sign up promo code to najczęściej szukana wersja kodu — i jednocześnie ta, której nie potrzebujesz, by dostać pakiet powitalny.</p>
<p>Po rejestracji wejdź do Promocji i wybierz ścieżkę powitalną <strong>przed pierwszą wpłatą</strong>. Aktywacja łączy konto z progiem pierwszej wpłaty (100% + 20 FS). Kwalifikującą wpłatę wykonujesz po aktywacji; bonus i spiny są dodawane po jej zaksięgowaniu. Obowiązują obrót 40×, limit zakładu 2% wpłaty i wyłączenie gier o RTP powyżej 97,4%.</p>
<p>Pełny opis trzech progów, maksymalnych kwot i zasad obrotu znajdziesz w dziale ${c.a('bonus', 'Rainbet bonus powitalny')}, a samą rejestrację krok po kroku — w dziale ${c.a('registration', 'rejestracja Rainbet')}.</p>
${ctaInline('Nowe konto? Zarejestruj się i od razu wybierz ścieżkę powitalną.', 'Załóż konto i aktywuj bonus')}`)}

${section('obecni-gracze', 'Rainbet promo code dla obecnych graczy', `
<p class="lead">Jeśli na Twoim koncie jest już pierwsza wpłata, pakietu powitalnego nie da się aktywować wstecz. Nie wpisujesz też żadnego kodu, by dostać nagrody dla stałych graczy.</p>
<p>Obecnym graczom przysługują rakeback i nagrody cykliczne — codzienne reloady oraz bonusy dzienne, tygodniowe, przedmiesięczne i miesięczne, zależne od rangi i aktywności. Odbierasz je w panelu nagród. Jeśli w zakładce Promocje pojawi się kampania z polem na kod dla obecnych kont, warunki będą opisane przy niej.</p>`)}

${section('kod-nie-dziala', 'Rainbet promo code nie działa — co sprawdzić', `
${trouble([
  ['Błędnie wpisany kod', 'Sprawdź wielkość liter, spacje na końcu i znaki podobne do siebie (O/0, I/l).'],
  ['Kod już użyty', 'Większość kodów działa raz na konto; drugi raz nie zostanie przyjęty.'],
  ['Promocja wygasła', 'Kampanie czasowe mają termin — aktualne oferty widać tylko w Promocjach.'],
  ['Brak kwalifikacji', 'Oferta może nie obejmować Twojego konta lub regionu.'],
  ['Wpłata przed aktywacją', 'Jeśli wpłata nastąpiła przed wyborem promocji, ta wpłata nie kwalifikuje się do progu.'],
  ['Za mała wpłata', `Kwota poniżej ${FACT.minDep} nie uruchamia progu powitalnego.`],
  ['Ograniczenie kraju lub dostawcy', 'Free Spins mogą być niedostępne, gdy dostawca gry nie działa w danym kraju.'],
  ['Pierwsza wpłata już wykorzystana', 'Próg pierwszej wpłaty przepada, jeśli nie aktywowano go przed tą wpłatą.'],
  ['Nagroda niezaksięgowana', 'Odczekaj na potwierdzenia sieci; jeśli status się nie zmienia, zgłoś to.'],
])}
${callout('Jeśli bonus powinien już być na koncie, a go nie ma — skontaktuj się z Live Support Rainbet <strong>przed</strong> postawieniem zakładu. Gra na saldzie może utrudnić ręczne dodanie promocji.', true)}`)}

${ctaBand('Oferta powitalna bez kodu', 'Wybierz ścieżkę 40× lub ścieżkę bez blokady obrotu w Promocjach, a potem wpłać od $30.', ['Odbierz ofertę powitalną', 'Otwórz Promocje'], 'bonus')}
`,
  faqTitle: 'Rainbet promo code — FAQ',
  faq: [
    ['Jaki jest Rainbet promo code?', PROMO_CODE ? `Aktualny kod to ${PROMO_CODE}. Warunki oferty sprawdzisz w zakładce Promocje przed wpłatą.` : 'Obecnie nie potwierdzamy publicznego kodu. Pakiet powitalny aktywujesz bez kodu — w zakładce Promocje przed pierwszą wpłatą.'],
    ['Jak użyć kodu promocyjnego Rainbet?', 'Załóż konto, wpisz kod tylko w polu udostępnionym w formularzu lub Promocjach, aktywuj ofertę przed wpłatą i wpłać co najmniej $30.'],
    ['Czy mogę użyć kodu promocyjnego Rainbet w Polsce?', 'Jeśli rejestracja z Polski zostanie zaakceptowana, w Promocjach zobaczysz oferty dostępne dla Twojego konta. Dostępność potwierdza regulamin i proces rejestracji.'],
    ['Gdzie wpisać kod promocyjny Rainbet?', 'W polu na kod w formularzu rejestracji lub w zakładce Promocje — tylko jeśli takie pole jest widoczne.'],
    ['Czy obecni gracze mogą użyć kodu?', 'Pakietu powitalnego nie można aktywować po pierwszej wpłacie. Obecni gracze korzystają z rakebacku i nagród cyklicznych w panelu nagród.'],
    ['Czy Rainbet affiliate code to to samo co promo code?', 'Kod afiliacyjny działa jak kod promocyjny tam, gdzie ma zastosowanie — przypisuje konto do polecenia, ale nie zmienia warunków pakietu powitalnego.'],
    ['Czy Rainbet referral code to to samo co promo code?', 'Tak, kod polecający pełni tę samą funkcję co kod promocyjny, jeśli formularz go przyjmuje. Warunki bonusu i tak określa zakładka Promocje.'],
    ['Dlaczego mój kod Rainbet nie działa?', 'Najczęściej: literówka, kod już użyty lub wygasły, brak kwalifikacji, wpłata przed aktywacją albo kwota poniżej $30.'],
    ['Jaka jest minimalna wpłata do bonusu?', 'Minimalna kwalifikująca wpłata w progach powitalnych to $30, a maksymalna — $700.'],
    ['Jaki obrót obowiązuje przy kodach Rainbet?', 'Ścieżka powitalna z blokadą ma obrót 40×, maksymalny zakład 2% wpłaty i wyłączenie gier o RTP powyżej 97,4%.'],
  ],
});
