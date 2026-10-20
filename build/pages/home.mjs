import { FACT, btn, section, cards, kv, ctaInline, ctaBand, gameCards, coins, figure, checklist, callout } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Casino w Polsce — kasyno krypto, sloty i sport | Rainbet',
  description: 'Rainbet casino: sloty, live casino, Rainbet Originals i sportsbook w jednym koncie. Pakiet powitalny na 3 wpłaty, kryptowaluty i szybkie wypłaty.',
  canonical: 'https://rainbet-casinos.pl',
  hero: {
    image: 'rainbet-home-casino-lobby.webp',
    eyebrow: 'Kasyno · Sport · Originals',
    h1: 'Rainbet Casino w Polsce',
    text: 'Sloty, stoły na żywo, własne gry Rainbet Originals i zakłady sportowe działają u nas na jednym saldzie. Nowe konto może wybrać pakiet powitalny rozłożony na trzy pierwsze wpłaty.',
    stats: [['100% + 20 FS', '1. wpłata, ścieżka 40×'], [FACT.minDep, 'minimalna wpłata w progach'], ['5–15 min', 'typowa wysyłka wypłaty'], ['9 kryptowalut', 'oraz metody tradycyjne']],
    buttons: ['Graj w kasynie', 'Odbierz bonus'],
    note: 'Dostępność konta i ofert w Polsce potwierdza formularz rejestracji oraz aktualny regulamin.',
  },
  body: `
${section('popularne-sloty', 'Sloty, od których gracze zaczynają', `
<p class="lead">W naszym lobby kategorie są ułożone tak, by szybko przejść od przeglądania do gry. Poniżej kilka tytułów, które znajdziesz w katalogu — każdy z inną mechaniką, więc łatwo porównać styl rozgrywki. Pełny przegląd kategorii, filtrów i dostawców opisujemy w dziale ${c.a('games', 'Rainbet slots i gry')}.</p>
${gameCards(c, [
  ['sweet', 'Owocowo-cukierkowy klasyk z symbolem Super Scatter w nowej odsłonie.', 'Zagraj w Sweet Bonanza'],
  ['spartacus', 'Motyw antycznej areny i rozgrywka nastawiona na funkcje bonusowe.', 'Uruchom Eye of Spartacus'],
  ['portals', 'Ognisty motyw fantasy z portalami jako centralnym elementem gry.', 'Zagraj w Fire Portals'],
  ['fist', 'Komiksowy styl i wyrazista zmienność typowa dla Hacksaw.', 'Uruchom Fist of Destruction'],
  ['princess', 'Pastelowa grafika anime i lekki, kolorowy klimat.', 'Zagraj w Rainbow Princess'],
  ['avia', 'Samolot, lotniskowiec i decyzja o wypłacie w odpowiednim momencie.', 'Leć w Aviamasters'],
])}`)}

${section('o-rainbet', 'O Rainbet', `
<div class="split"><div>
<p class="lead">Rainbet to platforma, na której kasyno, gry na żywo i zakłady sportowe korzystają z jednego profilu i jednego portfela. Działamy od ${FACT.founded} roku i od początku budujemy serwis wokół płatności kryptowalutowych, szybkich wypłat i systemu nagród, który rośnie razem z aktywnością gracza.</p>
<p><strong>Kasyno i sportsbook w jednym ekosystemie.</strong> Środki zdeponowane raz możesz wykorzystać na slocie, przy stole live albo na kuponie — bez przelewania między portfelami. Historia transakcji, status bonusów i rangi znajdują się w tym samym panelu.</p>
<p><strong>Rainbet Originals.</strong> Oprócz gier zewnętrznych studiów rozwijamy własne tytuły: Mines, Plinko, gry typu crash i Dice. Są szybkie, mają proste zasady i działają tak samo na komputerze i telefonie.</p>
<p><strong>Live casino.</strong> Blackjack, ruletka, bakarat i teleturnieje prowadzone przez krupierów na żywo — szczegóły opisujemy niżej w sekcji o kasynie na żywo.</p>
</div><div>
${figure(c, 'rainbet-home-crypto-payments.webp', 'Panel płatności kryptowalutowych Rainbet', 'Portfel, wpłaty i wypłaty w jednym panelu konta.', 1020, 560)}
</div></div>
<p><strong>Płatności.</strong> Obsługujemy BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT i USDC, a dla wybranych kont także karty, przelewy bankowe i karty podarunkowe. Lista metod zależy od konta i regionu — pełny opis znajdziesz w dziale ${c.a('payments', 'płatności Rainbet')}.</p>
<p><strong>Mobilnie.</strong> Serwis jest w pełni responsywny: lobby, kasjer i sportsbook dopasowują się do ekranu telefonu i tabletu w przeglądarce. Jak to działa na iPhonie i Androidzie, wyjaśniamy na stronie ${c.a('app', 'Rainbet app')}.</p>
<p><strong>Najważniejsze funkcje platformy</strong> to wspólne saldo, wybór ścieżki powitalnej przed wpłatą, rakeback i cykliczne nagrody zależne od rangi, Live Support oraz wyszukiwarka gier z filtrami po kategorii i dostawcy.</p>
${ctaInline('Chcesz sprawdzić lobby i dostępne kategorie na własnym koncie?', 'Otwórz kasyno Rainbet')}`)}

${section('w-skrocie', 'Rainbet w skrócie', kv([
  ['Oficjalna strona', '<a href="/" target="_blank" rel="noopener">/</a>'],
  ['Firma', FACT.company],
  ['Licencja', 'Link weryfikacyjny Anjouan Gaming i status „Licensed” w stopce oficjalnej strony'],
  ['Rok założenia', FACT.founded],
  ['Metody płatności', 'BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT, USDC; karty, przelewy bankowe i karty podarunkowe zależnie od konta'],
  ['Minimalna wpłata', `${FACT.minDep} dla progów pakietu powitalnego; limity metod mogą się różnić`],
  ['Czas wypłaty', 'Zwykle przetworzona i wysłana w 5–15 minut w normalnych warunkach; czas dotarcia zależy od sieci i portfela'],
  ['Języki', 'Wybierasz w selektorze języka na rainbet.com'],
  ['Obsługa klienta', 'Live Support 24/7'],
  ['E-mail', `<a href="mailto:${FACT.email}">${FACT.email}</a>`],
  ['Tryby gry', 'Kasyno, live casino, sportsbook, Rainbet Originals, tryb demo tam, gdzie jest dostępny'],
  ['Dostęp mobilny', 'Responsywna strona w przeglądarce (Safari, Chrome)'],
  ['Adres', FACT.address],
  ['Social media', 'Oficjalne kanały podane w stopce rainbet.com'],
], 'Dane dotyczące licencji, limitów i metod płatności rozstrzygają aktualne strony prawne i kasjer w koncie.'))}

${section('polska', 'Rainbet dla graczy z Polski', `
<p class="lead">Rainbet Poland to dla nas polskojęzyczny opis tej samej globalnej platformy — nie osobny serwis ani oddzielna licencja dla Polski. O tym, czy konto z polską lokalizacją może zostać otwarte, decyduje formularz rejestracji i aktualny regulamin, dlatego nie obiecujemy dostępności z góry.</p>
<div class="grid two">
<article class="card"><h3>Jak zacząć z Polski</h3><p>Otwórz formularz rejestracji, podaj prawdziwe dane i sprawdź komunikaty o kraju. Jeśli rejestracja przejdzie, w Promocjach zobaczysz oferty dostępne dla Twojego konta — dopiero wtedy wybierz ścieżkę powitalną i wpłać środki.</p></article>
<article class="card"><h3>Płatności z Polski</h3><p>Najprościej korzysta się z kryptowalut: wpłata trafia na adres wygenerowany w kasjerze, a saldo pokazuje się po potwierdzeniach sieci. Karty, przelewy i karty podarunkowe widzisz tylko wtedy, gdy kasjer udostępnia je dla Twojego konta.</p></article>
<article class="card"><h3>Wpłaty krypto krok po kroku</h3><p>Wybierz monetę, a potem dokładnie tę samą sieć w portfelu nadawcy (np. USDT na właściwym łańcuchu). Pomyłka sieci lub adresu jest nieodwracalna, dlatego przy pierwszej wpłacie warto zacząć od mniejszej kwoty.</p></article>
<article class="card"><h3>Wymagania konta</h3><p>Konto jest tylko dla osób pełnoletnich, jedno na osobę. Przy wypłatach lub na żądanie działu zgodności możemy poprosić o weryfikację tożsamości — więcej w dziale ${c.a('registration', 'rejestracja Rainbet')}.</p></article>
</div>
${callout('Ograniczenia geograficzne zmieniają się wraz z przepisami. Aktualną listę krajów wyłączonych znajdziesz w <a href="/terms-of-service" target="_blank" rel="noopener">regulaminie Rainbet</a> — nie próbuj obchodzić ograniczeń regionalnych, bo może to naruszać regulamin i skutkować zamknięciem konta.', true)}
<p>Na telefonie z Polski korzystasz z tej samej strony w przeglądarce — bez instalowania plików APK z nieznanych źródeł.</p>
${ctaInline('Sprawdź w formularzu rejestracji, czy Twoje konto może zostać otwarte.', 'Załóż konto Rainbet')}`)}

${section('kasyno', 'Rainbet Casino — lobby i formaty gier', `
<p class="lead">Casino Rainbet zaczyna się od lobby podzielonego na sekcje: sloty, gry stołowe, live casino i Originals. Na górze znajdziesz wyszukiwarkę, a w każdej kategorii filtry dostawców — dzięki temu zamiast przewijać setki kafelków, od razu zawężasz wybór do konkretnego studia lub typu gry.</p>
${cards([
  ['slots', 'Sloty', 'Największa część katalogu: klasyczne automaty, gry z mnożnikami i kaskadami oraz tytuły z rundami darmowych spinów.'],
  ['cards', 'Gry stołowe', 'Cyfrowe wersje ruletki, blackjacka i bakarata z automatycznym rozdaniem — dobre do spokojnej gry we własnym tempie.'],
  ['live', 'Live casino', 'Stoły prowadzone przez krupierów w czasie rzeczywistym oraz teleturnieje z kołem fortuny i rundami bonusowymi.'],
  ['dice', 'Rainbet Originals', 'Nasze własne gry: Mines, Plinko, crash i Dice — krótkie rundy i ustawienia ryzyka pod Twoją kontrolą.'],
  ['search', 'Wyszukiwarka i filtry', 'Szukaj po nazwie i filtruj po dostawcy lub kategorii, zamiast przewijać cały katalog.'],
  ['star', 'Tryb demo', 'Przy wybranych tytułach możesz uruchomić wersję demonstracyjną bez stawki — dostępność zależy od gry i regionu.'],
])}
<p>Dostawców widzisz przy każdej grze i w filtrze lobby. W katalogu są m.in. studia Pragmatic Play, Hacksaw Gaming i BGaming, a przy stołach live — dostawcy wskazani w opisie danego stołu.</p>`)}

${section('sloty', 'Rainbet Slots', `
<p class="lead">Rainbet slots to najobszerniejsza kategoria naszego kasyna i ta, od której gracze z Polski najczęściej zaczynają. Automaty różnią się nie tylko motywem, ale przede wszystkim mechaniką — i to ona decyduje, czy gra pasuje do Twojego stylu.</p>
<div class="split even"><div>
<h3>Kategorie i motywy</h3>
<p>Znajdziesz tu owocowe klasyki, sloty mitologiczne i przygodowe, kolorowe gry w stylu anime oraz tytuły komiksowe. Motyw to jednak tylko oprawa — przed grą zajrzyj do tabeli wypłat w informacjach o slocie.</p>
<h3>Funkcje bonusowe</h3>
<p>Najczęściej spotkasz darmowe spiny uruchamiane symbolami scatter, mnożniki, kaskady (wygrywające symbole znikają i robią miejsce nowym) oraz w niektórych grach opcję zakupu bonusu. Każda funkcja jest opisana w ekranie informacji gry.</p>
<h3>Zmienność i RTP</h3>
<p>Sloty o wysokiej zmienności wypłacają rzadziej, ale potencjalnie więcej; niska zmienność oznacza częstsze, mniejsze wygrane. RTP to długoterminowa wartość statystyczna, a nie obietnica wyniku w pojedynczej sesji.</p>
</div><div>
<h3>Nowe i popularne</h3>
<p>Sekcje z nowościami i najczęściej wybieranymi grami są aktualizowane w lobby na bieżąco — to najszybszy sposób, by zobaczyć, co właśnie wydali dostawcy.</p>
<h3>Sloty mobilne</h3>
<p>Nowoczesne automaty są projektowane w HTML5, więc na telefonie działają w przeglądarce bez instalacji. Większość z nich gra się wygodnie w pionie, niektóre lepiej wyglądają w poziomie.</p>
<h3>Demo tam, gdzie jest dostępne</h3>
<p>Jeśli przy grze widzisz przycisk wersji demo, możesz przetestować mechanikę bez stawki. Brak przycisku oznacza, że dostawca lub region nie udostępnia trybu demonstracyjnego.</p>
</div></div>
${ctaInline(`Free Spins z pakietu powitalnego trafiają na slot Pragmatic Play wskazany w ofercie. Szczegóły: ${c.a('spins', 'Rainbet free spins')}.`, 'Zagraj w sloty')}`)}

${section('originals', 'Rainbet Originals', `
<p class="lead">Originals to kategoria gier tworzonych przez Rainbet. Łączy je krótka runda, czytelne zasady i możliwość ustawienia poziomu ryzyka jeszcze przed zakładem.</p>
${cards([
  ['lock', 'Mines', 'Odkrywasz pola na planszy, omijając miny. Liczbę min ustawiasz przed rundą — im więcej min, tym wyższy mnożnik za każde bezpieczne pole. W dowolnym momencie możesz zakończyć rundę i odebrać bieżącą wygraną.'],
  ['dice', 'Plinko', 'Kulka spada przez rzędy kołków i ląduje w przegródce z mnożnikiem. Wybierasz liczbę rzędów i poziom ryzyka, co zmienia rozkład mnożników.'],
  ['bolt', 'Gry typu crash', 'Mnożnik rośnie od 1,00× do chwili „crashu”. Wygrywasz, jeśli wypłacisz przed nim — ręcznie albo z ustawioną automatyczną wypłatą.'],
  ['percent', 'Dice', 'Ustawiasz próg i kierunek (powyżej/poniżej). Im mniejsza szansa trafienia, tym wyższa wypłata — zależność widzisz na suwaku przed rzutem.'],
  ['star', 'Pozostałe Originals', 'Katalog Originals jest rozwijany; aktualną listę gier zobaczysz w zakładce Originals w lobby.'],
  ['phone', 'Komputer i telefon', 'Wszystkie Originals działają w przeglądarce na desktopie i urządzeniach mobilnych z tym samym saldem.'],
])}
${callout('Żadna strategia nie gwarantuje wygranej w Originals — każda runda jest niezależna od poprzednich. Ustal limit przed grą.')}
${ctaInline('Mines, Plinko, crash i Dice czekają w zakładce Originals.', 'Zagraj w Rainbet Originals')}`)}

${section('live', 'Rainbet Live Casino', `
<p class="lead">W kasynie na żywo grasz przy prawdziwym stole transmitowanym ze studia. Krupier rozdaje karty lub kręci ruletką, a Ty obstawiasz w interfejsie z limitem czasu na decyzję.</p>
${cards([
  ['cards', 'Blackjack na żywo', 'Klasyczne zasady „do 21”, stoły o różnych limitach i warianty z zakładami bocznymi.'],
  ['spin', 'Ruletka na żywo', 'Warianty ruletki — zakłady wewnętrzne, zewnętrzne i statystyki ostatnich wyników.'],
  ['star', 'Bakarat', 'Szybkie rozdania, zakład na gracza, bankiera lub remis oraz tablice trendów.'],
  ['live', 'Teleturnieje', 'Koła fortuny i gry show z rundami bonusowymi, prowadzone przez gospodarzy na żywo.'],
])}
<p>Dostawcę studia i limity stawek widzisz w opisie każdego stołu. Live casino działa także na telefonie — przy słabszym łączu obraz automatycznie obniża jakość, żeby transmisja się nie zacinała.</p>
${ctaInline('Stoły live są dostępne na tym samym saldzie co sloty.', 'Usiądź przy stole live')}`)}

${section('promocje', 'Bonusy i promocje Rainbet', `
<p class="lead">Nasze promocje zaczynają się od pakietu powitalnego, ale na nim się nie kończą — stali gracze korzystają z rakebacku i cyklicznych nagród zależnych od rangi.</p>
${kv([
  ['Pakiet powitalny (ścieżka 40×)', '1. wpłata: 100% + 20 Free Spins · 2. wpłata: 50% + 20 Free Spins · 3. wpłata: 100% + 20 Free Spins'],
  ['Zakres wpłaty w progu', `${FACT.minDep}–${FACT.maxDep}`],
  ['Ścieżka bez blokady obrotu', 'Do 100% odblokowywane stopniowo w miarę gry; obowiązują warunki kwalifikacji i wyłączenia'],
  ['Bonus bez depozytu', 'Nie jest częścią ścieżki powitalnej — pakiet opiera się na kwalifikujących wpłatach'],
  ['Free Spins', '20 spinów w każdym z trzech progów, na slocie Pragmatic Play wskazanym w ofercie'],
])}
<p><strong>Jak aktywować:</strong> promocje wybierasz w zakładce Promocje <em>przed</em> wpłatą — wpłata zrobiona przed aktywacją nie kwalifikuje się do progu. <strong>Kwalifikacja</strong> zależy od konta i regionu. <strong>Obrót 40×</strong> dotyczy ścieżki z blokadą; w jej trakcie maksymalny zakład wynosi 2% wpłaty, a gry o RTP powyżej 97,4% są wyłączone.</p>
<p>Kampanie czasowe (turnieje, wyzwania, promocje sportowe) pokazujemy w zakładce Promocje tylko wtedy, gdy są aktywne. Pełne zasady pakietu opisujemy w dziale ${c.a('bonus', 'Rainbet bonus')}, a status kodów — na stronie ${c.a('promo', 'Rainbet promo code')}.</p>
${ctaInline('Wybierz ścieżkę powitalną w Promocjach przed pierwszą wpłatą.', 'Aktywuj pakiet powitalny')}`)}

${section('vip', 'Rainbet VIP i nagrody', `
<p class="lead">Każdy zakład przybliża Cię do kolejnej rangi. Im wyższa ranga, tym więcej nagród cyklicznych i wyższy poziom rakebacku.</p>
${cards([
  ['crown', 'Progresja VIP', 'Rangi rosną wraz z obrotem na koncie. Postęp widzisz w panelu nagród; w trakcie aktywnego bonusu z obrotem awans postępuje wolniej.'],
  ['percent', 'Rakeback', 'Część przewagi kasyna z Twoich zakładów wraca na konto. Stawka zależy od rangi i aktywności; część środków z rakebacku może wymagać obrotu przed wypłatą.'],
  ['gift', 'Nagrody za rangę', 'Awans na wyższy poziom odblokowuje jednorazową nagrodę i lepsze warunki kolejnych bonusów.'],
  ['clock', 'Reloady i bonusy cykliczne', 'Codzienne reloady oraz bonusy dzienne, tygodniowe, przedmiesięczne i miesięczne — kwoty zależą od aktywności i rangi.'],
  ['star', 'Korzyści lojalnościowe', 'Wyższe rangi to szersze korzyści w programie nagród, opisane w panelu Rewards.'],
  ['ticket', 'Promocje specjalne', 'Dodatkowe akcje pojawiają się w zakładce Promocje, gdy są aktywne — zawsze z pełnymi warunkami.'],
])}`)}

${section('wplaty', 'Wpłaty w Rainbet', `
<div class="split"><div>
<p class="lead">Kasjer otwierasz jednym kliknięciem z górnego paska. Najszybciej działa krypto: wybierasz monetę i sieć, kopiujesz wygenerowany adres i wysyłasz środki ze swojego portfela.</p>
${coins(c)}
<p><strong>Karty, przelewy bankowe i karty podarunkowe</strong> pojawiają się w kasjerze tylko wtedy, gdy są dostępne dla Twojego konta i regionu. PayPal, Google Pay czy Apple Pay podajemy wyłącznie wtedy, gdy kasjer faktycznie je pokazuje.</p>
<p><strong>Minimalna wpłata</strong> do progów pakietu powitalnego to ${FACT.minDep}; poszczególne metody mogą mieć własne limity. <strong>Przetwarzanie</strong> wpłat krypto trwa tyle, ile potrzebuje sieć na wymagane potwierdzenia. <strong>Waluty</strong>: saldo prezentujemy w walucie wybranej w koncie, a wpłaty przyjmujemy w obsługiwanych kryptowalutach i metodach widocznych w kasjerze.</p>
</div><div>
${figure(c, 'rainbet-home-crypto-payments.webp', 'Kasjer Rainbet z listą transakcji', '', 1020, 560)}
</div></div>
${ctaInline(`Wszystkie metody i limity opisujemy w dziale ${c.a('payments', 'płatności')}.`, 'Wpłać pierwsze środki')}`)}

${section('wyplaty', 'Wypłaty z Rainbet', `
${checklist([
  '<strong>Proces:</strong> w kasjerze wybierz „Wypłata”, monetę, sieć i adres portfela, a następnie potwierdź kwotę.',
  '<strong>Czas:</strong> w normalnych warunkach wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut; czas dotarcia zależy od obciążenia sieci blockchain i Twojego portfela.',
  '<strong>Metody:</strong> wypłata trafia metodą dostępną dla Twojego konta — w przypadku krypto na adres, który sam podajesz.',
  '<strong>Weryfikacja:</strong> przy niektórych wypłatach lub na żądanie działu zgodności poprosimy o dokumenty; do ich sprawdzenia wypłata może czekać.',
  '<strong>Status:</strong> każdą wypłatę śledzisz w historii transakcji; wysłaną transakcję krypto możesz też sprawdzić w eksploratorze blockchain.',
  '<strong>Limity i warunki:</strong> aktywny bonus z obrotem blokuje wypłatę środków bonusowych do czasu spełnienia wymogów; limity metod widzisz w kasjerze.',
])}`)}

${section('mobile', 'Rainbet Mobile Casino', `
<p class="lead">Rainbet działa w przeglądarce mobilnej jako w pełni responsywna strona. Nie prezentujemy skrótu na ekranie głównym jako aplikacji natywnej — to ta sama strona, dopasowana do mniejszego ekranu.</p>
${cards([
  ['phone', 'Android', 'Otwórz rainbet.com w Chrome. Możesz dodać skrót do ekranu głównego z menu przeglądarki; nie instaluj plików APK z nieoficjalnych źródeł.'],
  ['phone', 'iPhone / iOS', 'Otwórz stronę w Safari i zaloguj się jak na komputerze. Skrót dodasz przez „Udostępnij → Do ekranu początkowego”.'],
  ['slots', 'Kasyno i sloty', 'Sloty, Originals i stoły live uruchamiają się w przeglądarce; większość gier obsługuje orientację pionową.'],
  ['ball', 'Sportsbook', 'Kupon, zakłady live i historia zakładów działają w przeglądarce, na tym samym saldzie co kasyno.'],
])}
<p>Wszystkie szczegóły dotyczące iOS i Androida zebraliśmy na stronie ${c.a('app', 'aplikacja mobilna Rainbet')}.</p>`)}

${section('sport', 'Rainbet Sportsbook', `
<div class="split"><div>
<p class="lead">Rainbet sports to zakłady przedmeczowe i na żywo oraz e-sport, jeśli są dostępne dla Twojego konta — wszystko na tym samym koncie, którego używasz w kasynie.</p>
<p><strong>Przed meczem</strong> obstawiasz z wyprzedzeniem, mając czas na analizę. <strong>Na żywo</strong> kursy zmieniają się wraz z przebiegiem wydarzenia, a rynki mogą być chwilowo zawieszane przy ważnych akcjach. <strong>Rynki</strong> obejmują m.in. wynik meczu, handicapy i over/under, a ich lista zależy od wydarzenia. <strong>Kursy</strong> widzisz przy każdym rynku przed dodaniem go do kuponu — sprawdź je ponownie przed potwierdzeniem, bo na żywo mogą się zmienić.</p>
<p>Pełny opis rynków i dyscyplin znajdziesz w dziale ${c.a('sportsbook', 'Rainbet sportsbook')}.</p>
</div><div>
${figure(c, 'rainbet-home-sportsbook.webp', 'Sportsbook Rainbet na laptopie i telefonie', '', 1020, 560)}
</div></div>
${ctaInline('Jedno saldo, a kupon sportowy jest dwa kliknięcia od lobby kasyna.', 'Postaw zakład sportowy')}`)}

${section('konto', 'Konto Rainbet', `
${cards([
  ['user+', 'Rejestracja', `Konto zakładasz przez aktualny formularz — metody rejestracji widzisz bezpośrednio w nim. Krok po kroku: ${c.a('registration', 'rejestracja')}.`],
  ['login', 'Logowanie', `Logujesz się tą samą metodą, której użyto przy rejestracji. Problemy z dostępem opisujemy w dziale ${c.a('login', 'Rainbet login')}.`],
  ['home', 'Panel konta', 'Saldo, historia transakcji, aktywne bonusy, postęp rangi i ustawienia w jednym miejscu.'],
  ['info', 'Ustawienia profilu', 'Dane profilu, preferencje, waluta wyświetlania i ustawienia bezpieczeństwa.'],
  ['shield', 'KYC / weryfikacja', 'Na żądanie lub przy wypłatach możemy poprosić o dokument tożsamości i potwierdzenie adresu.'],
  ['lock', 'Bezpieczeństwo i zarządzanie', 'Silne hasło, dwuetapowe logowanie tam, gdzie jest dostępne, oraz narzędzia limitów i przerw w ustawieniach konta.'],
])}`)}

${section('bezpieczenstwo', 'Bezpieczeństwo i uczciwa gra w Rainbet', `
<div class="split even"><div>
<h3>Licencja i operator</h3>
<p>Operatorem jest ${FACT.company}. W stopce oficjalnej strony znajduje się link weryfikacyjny licencji Anjouan Gaming z oznaczeniem „Licensed” — to on, razem z regulaminem, jest wiążącym źródłem informacji o licencji.</p>
<h3>Bezpieczeństwo konta</h3>
<p>Połączenie ze stroną jest szyfrowane (HTTPS), a dostęp do konta chronisz hasłem i dodatkowymi zabezpieczeniami dostępnymi w ustawieniach. Nigdy nie prosimy o hasło ani frazę seed portfela.</p>
</div><div>
<h3>Uczciwa gra i dostawcy</h3>
<p>Gry zewnętrzne pochodzą od studiów takich jak Pragmatic Play, Hacksaw Gaming czy BGaming, które publikują parametry swoich tytułów. Zasady każdej gry, w tym Originals, znajdziesz w jej ekranie informacji.</p>
<h3>Weryfikacja i kontrola gry</h3>
<p>Weryfikacja tożsamości chroni przed kontami zakładanymi na cudze dane. W ustawieniach konta ustawisz limity i przerwy — szczegóły w dziale ${c.a('responsible', 'odpowiedzialna gra')}.</p>
</div></div>`)}

${section('dlaczego', 'Dlaczego warto grać w Rainbet', `
${cards([
  ['wallet', 'Kasyno i sport w jednym koncie', 'Bez przenoszenia środków między portfelami — saldo działa wszędzie.'],
  ['bolt', 'Płatności przyjazne krypto', 'Dziewięć kryptowalut, w tym stablecoiny USDT i USDC, do wpłat bez pośredników.'],
  ['dice', 'Rainbet Originals', 'Własne gry z krótkimi rundami i ustawianym poziomem ryzyka.'],
  ['live', 'Live casino', 'Blackjack, ruletka, bakarat i teleturnieje z prawdziwymi krupierami.'],
  ['clock', 'Szybkie wypłaty', 'Zwykle przetworzone i wysłane w 5–15 minut w normalnych warunkach.'],
  ['gift', 'Promocje i nagrody', 'Pakiet na trzy wpłaty, rakeback i bonusy cykliczne zależne od rangi.'],
  ['phone', 'Wygodnie na telefonie', 'Pełna funkcjonalność w przeglądarce mobilnej, bez instalacji.'],
  ['chat', 'Wsparcie 24/7', 'Live Support przez całą dobę oraz e-mail do spraw wymagających załączników.'],
], 'four')}`)}

${section('wsparcie', 'Obsługa klienta Rainbet', `
<p class="lead">Live Support odpowiada 24/7 w oknie czatu dostępnym na każdej stronie serwisu. Przy sprawach wymagających zrzutów ekranu lub dokumentów napisz na <a href="mailto:${FACT.email}">${FACT.email}</a>.</p>
${checklist([
  'Wpłaty — brak zaksięgowania, zła sieć, brakujące potwierdzenia.',
  'Wypłaty — status, weryfikacja, identyfikator transakcji.',
  'Konto — logowanie, dane profilu, zabezpieczenia.',
  'Bonusy — brak Free Spins lub bonusu po kwalifikującej wpłacie (zgłoś to przed postawieniem zakładu).',
  'Kanały społecznościowe — tylko oficjalne profile podane w stopce rainbet.com.',
])}
<p>Jak przygotować zgłoszenie, by dostać odpowiedź szybciej, opisujemy w dziale ${c.a('support', 'wsparcie Rainbet')}.</p>`)}

${section('odpowiedzialnie', 'Odpowiedzialna gra w Rainbet', `
<p class="lead">Gra ma być rozrywką, a nie sposobem na zarabianie. Z Rainbet mogą korzystać wyłącznie osoby pełnoletnie.</p>
${cards([
  ['shield', 'Nasze podejście', 'Pokazujemy warunki ofert przed wpłatą i dajemy narzędzia, które pomagają zachować kontrolę.'],
  ['user+', 'Ograniczenia wiekowe', 'Konto tylko dla osób, które ukończyły 18 lat lub wiek wymagany w ich jurysdykcji.'],
  ['lock', 'Samowykluczenie', 'Możesz zablokować konto na określony czas lub na stałe — przez ustawienia albo Live Support.'],
  ['clock', 'Kontrola i ochrona', 'Limity, przerwy i przypomnienia w ustawieniach konta. Więcej: ' + c.a('responsible', 'odpowiedzialna gra') + '.'],
], 'four')}`)}

${ctaBand('Zacznij od pakietu powitalnego', 'Trzy progi, łącznie do 60 Free Spins i jasne zasady obrotu widoczne przed aktywacją. Wybierz ofertę w Promocjach, zanim wpłacisz środki.', ['Odbierz pakiet powitalny', 'Graj w kasynie'], 'bonus')}
`,
  faq: [
    ['Czym jest Rainbet?', 'Rainbet to kasyno kryptowalutowe i sportsbook działające od 2023 roku. Na jednym koncie oferujemy sloty, live casino, własne gry Rainbet Originals, zakłady sportowe oraz program nagród z rakebackiem.'],
    ['Czy mogę grać w Rainbet z Polski?', 'O dostępności decyduje formularz rejestracji i aktualny regulamin Rainbet, który zawiera listę krajów wyłączonych. Nie gwarantujemy dostępu z góry — sprawdź komunikaty podczas zakładania konta.'],
    ['Jakie gry są dostępne w Rainbet?', 'Sloty, gry stołowe, live casino (blackjack, ruletka, bakarat, teleturnieje), Rainbet Originals (Mines, Plinko, crash, Dice) oraz zakłady sportowe i e-sportowe.'],
    ['Jakie metody płatności obsługuje Rainbet?', 'BTC, ETH, LTC, XRP, SOL, TRX, BNB, USDT i USDC, a zależnie od konta i regionu także karty, przelewy bankowe i karty podarunkowe.'],
    ['Jaka jest minimalna wpłata?', 'Kwalifikujący zakres wpłaty w progach pakietu powitalnego zaczyna się od $30. Poszczególne metody płatności mogą mieć własne limity widoczne w kasjerze.'],
    ['Jak długo trwają wypłaty z Rainbet?', 'W normalnych warunkach wypłaty są zwykle przetwarzane i wysyłane w 5–15 minut. Czas dotarcia środków zależy od sieci blockchain i portfela odbiorcy.'],
    ['Czy mogę korzystać z Rainbet na telefonie?', 'Tak, strona jest w pełni responsywna i działa w przeglądarce na Androidzie i iOS. Nie oferujemy natywnej aplikacji do pobrania w sklepach.'],
    ['Jakie bonusy oferuje Rainbet?', 'Pakiet powitalny na trzy wpłaty (100% + 20 FS, 50% + 20 FS, 100% + 20 FS przy obrocie 40×), ścieżkę bez blokady obrotu oraz rakeback i bonusy cykliczne zależne od rangi.'],
    ['Jak skontaktować się z obsługą Rainbet?', 'Przez Live Support dostępny 24/7 na stronie lub e-mailem na support@rainbet.com.'],
  ],
});
