import { section, cards, table, ctaInline, ctaBand, gameCards, callout } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Slots i gry kasynowe w Polsce | Rainbet',
  description: 'Rainbet slots i gry: sloty Pragmatic Play, Hacksaw Gaming i BGaming, live casino, gry stołowe oraz Rainbet Originals — Mines, Plinko, crash i Dice.',
  canonical: 'https://rainbet-casinos.pl/casino/slots',
  ogImage: 'fire-portals.webp',
  hero: {
    cards: ['fist', 'princess', 'avia'],
    eyebrow: 'Rainbet games',
    h1: 'Gry kasynowe Rainbet w Polsce',
    text: 'Sloty, stoły na żywo, gry stołowe i nasze własne Rainbet Originals w jednym lobby. Szukaj po nazwie, filtruj po dostawcy i przechodź między kategoriami bez zmiany salda.',
    stats: [['Sloty', 'największa kategoria'], ['Live casino', 'krupierzy na żywo'], ['Originals', 'Mines · Plinko · Dice']],
    buttons: ['Zagraj w sloty', 'Odbierz 20 Free Spins'],
  },
  body: `
${section('lobby', 'Kasyno Rainbet — jak działa lobby', `
<p class="lead">Rainbet games to jeden katalog podzielony na zakładki: Sloty, Live Casino, Gry stołowe i Originals. Każda zakładka ma własne sekcje, na przykład nowości czy najpopularniejsze tytuły, a wyszukiwarka u góry przeszukuje cały katalog naraz.</p>
${cards([
  ['search', 'Wyszukiwarka', 'Wpisz fragment nazwy gry, a wyniki pojawią się od razu, niezależnie od kategorii.'],
  ['slots', 'Kategorie', 'Sloty, live casino, gry stołowe i Originals mają osobne zakładki i sekcje tematyczne.'],
  ['star', 'Filtry dostawców', 'Wybierz studio, np. Pragmatic Play, Hacksaw Gaming lub BGaming, aby zobaczyć tylko jego gry.'],
])}`)}

${section('sloty', 'Rainbet Slots', `
<p class="lead">Rainbet slots to automaty wideo o bardzo różnym charakterze. Zanim wybierzesz rainbet slot na dłuższą sesję, porównaj trzy rzeczy: mechanikę, zmienność i funkcje bonusowe.</p>
${gameCards(c, [
  ['sweet', 'Cukierkowy motyw z symbolem Super Scatter i darmowymi spinami.', 'Zagraj w Sweet Bonanza'],
  ['spartacus', 'Motyw gladiatorów i rozgrywka nastawiona na rundy bonusowe.', 'Uruchom Eye of Spartacus'],
  ['portals', 'Ognista fantasy z portalami jako głównym motywem.', 'Zagraj w Fire Portals'],
  ['fist', 'Komiksowa akcja i wysoka zmienność charakterystyczna dla Hacksaw.', 'Uruchom Fist of Destruction'],
  ['princess', 'Kolorowa oprawa anime i tęczowy klimat.', 'Zagraj w Rainbow Princess'],
  ['avia', 'Gra w stylu crash: samolot, mnożnik i decyzja o wypłacie.', 'Leć w Aviamasters'],
])}
<div class="split even"><div>
<h3>Kategorie i motywy</h3>
<p>Owoce i słodycze, mitologia, przygoda, fantasy, anime, komiks — motyw jest wizytówką slotu, ale o wynikach decydują symbole, linie i funkcje opisane w tabeli wypłat.</p>
<h3>Nowe i popularne gry</h3>
<p>Sekcje nowości i najczęściej wybieranych gier w lobby pokazują, co właśnie trafiło do katalogu i po co sięgają inni gracze.</p>
</div><div>
<h3>Jackpoty, rundy bonusowe i zmienność</h3>
<p>Informacje o jackpotach, rundach bonusowych i poziomie zmienności znajdziesz w opisie gry tam, gdzie dostawca je udostępnia. Wysoka zmienność to rzadsze, ale większe wygrane; niska — częstsze, mniejsze.</p>
<h3>Sloty mobilne</h3>
<p>Wszystkie nowoczesne sloty działają w przeglądarce telefonu. Szczegóły dla iOS i Androida: ${c.a('app', 'Rainbet app')}.</p>
</div></div>
${ctaInline(`Nowe konto dostaje po 20 Free Spins za każdą z trzech wpłat — ${c.a('spins', 'zobacz zasady spinów')}.`, 'Odbierz Free Spins na slot')}`)}

${section('gry-stolowe', 'Gry stołowe Rainbet', `
${table(['Gra', 'Na czym polega', 'Na co zwrócić uwagę'], [
  ['Ruletka', 'Obstawiasz liczbę, kolor, parzystość lub grupę pól, zanim kulka się zatrzyma.', 'Wariant ruletki i minimalną oraz maksymalną stawkę widzisz przy stole.'],
  ['Blackjack', 'Celem jest zbliżyć się do 21 punktów bardziej niż krupier, bez przekroczenia.', 'Zasady dobierania i zakłady boczne różnią się między wariantami.'],
  ['Bakarat', 'Obstawiasz rękę gracza, bankiera albo remis — karty dobierane są według stałych zasad.', 'Sprawdź prowizję od wygranej bankiera w zasadach stołu.'],
  ['Inne formaty', 'Wirtualne odmiany gier karcianych i kościanych.', 'Limity stawek są podane w opisie gry, jeśli dostawca je wyświetla.'],
])}`)}

${section('live', 'Rainbet Live Casino', `
<p class="lead">W live casino grasz przy stołach transmitowanych ze studia. Krupier prowadzi rozgrywkę, a Ty masz kilka sekund na obstawienie w interfejsie gry.</p>
${cards([
  ['cards', 'Blackjack na żywo', 'Stoły o różnych limitach, klasyczne zasady i zakłady boczne w wybranych wariantach.'],
  ['spin', 'Ruletka na żywo', 'Warianty ruletki z krupierem i historią ostatnich wyników.'],
  ['star', 'Bakarat na żywo', 'Szybkie rozdania, tablice trendów i zakłady na gracza, bankiera lub remis.'],
  ['live', 'Teleturnieje', 'Gry show z kołem fortuny i rundami bonusowymi prowadzone przez gospodarzy.'],
], 'four')}
<p>Dostawcę studia widzisz w opisie każdego stołu. Kasyno na żywo działa także mobilnie.</p>
${ctaInline('Stoły live działają na tym samym saldzie co sloty i Originals.', 'Zagraj w live casino')}`)}

${section('originals', 'Rainbet Originals', `
<p class="lead">Originals to gry opracowane przez Rainbet: krótkie rundy, proste zasady i ustawienia ryzyka, które zmieniasz przed każdym zakładem.</p>
${cards([
  ['lock', 'Mines', 'Plansza z ukrytymi minami. Ustalasz liczbę min, odkrywasz pola i sam decydujesz, kiedy odebrać wygraną z bieżącym mnożnikiem.'],
  ['dice', 'Plinko', 'Kulka odbija się od kołków i wpada do przegródki z mnożnikiem. Liczba rzędów i poziom ryzyka zmieniają rozkład wypłat.'],
  ['bolt', 'Crash', 'Mnożnik rośnie aż do losowego „crashu”. Wypłać przed nim — ręcznie lub automatycznie przy ustawionym mnożniku.'],
  ['percent', 'Dice', 'Wybierasz próg i kierunek rzutu. Niższa szansa oznacza wyższą wypłatę — widać to na suwaku.'],
  ['star', 'Pozostałe Originals', 'Aktualna lista gier jest w zakładce Originals w lobby.'],
  ['phone', 'Na każdym ekranie', 'Originals działają identycznie na komputerze i telefonie.'],
])}
${callout('Wynik każdej rundy jest niezależny — żadna strategia ani „system” nie gwarantuje wygranej.')}`)}

${section('dostawcy', 'Dostawcy gier i tryb demo', `
<p>W katalogu Rainbet znajdziesz m.in. gry Pragmatic Play, Hacksaw Gaming i BGaming — nazwa dostawcy jest widoczna przy każdym tytule i w filtrze lobby. Pełną, aktualną listę studiów pokazuje filtr dostawców.</p>
<p><strong>Tryb demo</strong> jest dostępny przy wybranych grach i zależy od konkretnego tytułu oraz regionu. Jeśli przy grze widzisz przycisk wersji demo, możesz poznać mechanikę bez stawki; brak przycisku oznacza, że dla tej gry demo nie jest udostępnione.</p>`)}

${section('mobile', 'Gry Rainbet na telefonie', `
<p>Na telefonie lobby zachowuje te same zakładki, wyszukiwarkę i filtry dostawców. Gra uruchamia się pełnoekranowo, a po jej zamknięciu wracasz do tego samego miejsca w katalogu. Saldo, aktywne bonusy i postęp obrotu są wspólne dla wszystkich urządzeń, więc możesz zacząć na komputerze i kontynuować w przeglądarce telefonu.</p>`)}

${ctaBand('Wybierz swoją pierwszą grę', 'Sloty, Originals i live casino są dostępne od razu po wpłacie — z pakietem powitalnym na trzy pierwsze wpłaty.', ['Zagraj w sloty', 'Odbierz bonus'], 'bonus')}
`,
  faqTitle: 'Gry Rainbet — FAQ',
  faq: [
    ['Jakie gry są dostępne w Rainbet?', 'Sloty, gry stołowe, live casino z krupierami i teleturniejami oraz Rainbet Originals: Mines, Plinko, crash i Dice.'],
    ['Czy Rainbet ma sloty?', 'Tak, sloty to największa kategoria lobby — z grami m.in. Pragmatic Play, Hacksaw Gaming i BGaming.'],
    ['Czy mogę grać w gry Rainbet na telefonie?', 'Tak, wszystkie kategorie działają w przeglądarce mobilnej na tym samym saldzie.'],
    ['Czy Rainbet Originals działają na telefonie?', 'Tak, Mines, Plinko, crash i Dice działają identycznie na komputerze i telefonie.'],
  ],
});
