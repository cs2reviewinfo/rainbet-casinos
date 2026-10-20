import { section, steps, cards, ctaInline, ctaBand, checklist, callout, figure } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet App dla Polski — kasyno i sport na telefonie | Rainbet',
  description: 'Rainbet app: jak korzystać z Rainbet na iPhonie i Androidzie w przeglądarce. Kasyno, sloty, Originals i sportsbook mobilnie, dodanie skrótu i bezpieczeństwo.',
  canonical: 'https://rainbet-casinos.pl',
  ogImage: 'rainbet-home-sportsbook.webp',
  hero: {
    image: 'rainbet-home-sportsbook.webp',
    eyebrow: 'Rainbet app',
    h1: 'Rainbet App dla Polski',
    text: 'Rainbet działa na telefonie i tablecie jako w pełni responsywna strona w przeglądarce. Kasyno, Originals, live casino i sportsbook masz pod ręką bez instalowania czegokolwiek.',
    stats: [['Safari · Chrome', 'dostęp mobilny'], ['Jedno konto', 'kasyno i sport'], ['Bez instalacji', 'strona responsywna']],
    buttons: ['Graj na telefonie', 'Zaloguj się mobilnie'],
    note: 'Nie publikujemy natywnej aplikacji w App Store ani Google Play — skrót na ekranie głównym to zakładka przeglądarki.',
  },
  body: `
${section('mobilny-dostep', 'Mobilny dostęp do Rainbet', `
<div class="split"><div>
<p class="lead">Rainbet app w praktyce oznacza naszą stronę dopasowaną do ekranu telefonu. Lobby, kasjer, kupon sportowy i ustawienia konta układają się w jedną kolumnę, a menu chowa się pod przyciskiem, żeby zostawić miejsce na grę.</p>
<p><strong>Dostęp przez przeglądarkę</strong> oznacza, że zawsze grasz na najnowszej wersji serwisu — bez aktualizacji ze sklepu i bez zajmowania pamięci telefonu.</p>
<p><strong>Oficjalna aplikacja</strong> — gdy Rainbet opublikuje zweryfikowaną aplikację do pobrania, informacja pojawi się na rainbet.com. Do tego czasu nie instaluj plików podszywających się pod Rainbet.</p>
<p><strong>Kasyno i sport</strong> działają mobilnie na tym samym saldzie: sloty, Originals, stoły live i zakłady sportowe są dostępne z jednego menu.</p>
</div><div>
${figure(c, 'rainbet-home-sportsbook.webp', 'Rainbet na telefonie i laptopie', 'Ten sam układ konta na desktopie i telefonie.', 1020, 560)}
</div></div>`)}

${section('czy-jest-aplikacja', 'Czy Rainbet ma aplikację?', `
${cards([
  ['phone', 'iOS', 'Nie oferujemy aplikacji iOS w App Store. Na iPhonie i iPadzie otwórz Rainbet w Safari jako responsywną stronę.'],
  ['phone', 'Android', 'Nie oferujemy aplikacji w Google Play ani oficjalnego pliku APK. Na Androidzie korzystasz z Chrome lub innej aktualnej przeglądarki.'],
  ['shield', 'Uwaga na podróbki', 'Pliki APK i „aplikacje Rainbet” z nieoficjalnych stron mogą wyłudzać dane logowania. Loguj się tylko na rainbet.com.'],
])}
${callout('Skrót dodany do ekranu głównego otwiera stronę Rainbet w przeglądarce — to wygodna zakładka, a nie natywna aplikacja.')}`)}

${section('iphone', 'Rainbet na iPhone', `
${steps([
  ['Otwórz Safari', 'Wpisz rainbet.com i sprawdź, czy adres w pasku jest poprawny.'],
  ['Zaloguj się', 'Użyj tej samej metody co na komputerze; panel konta pokaże saldo i aktywne bonusy.'],
  ['Dodaj skrót (opcjonalnie)', 'Stuknij „Udostępnij”, a potem „Do ekranu początkowego”.'],
])}
<div class="grid">
<article class="card"><h3>Kasyno i live casino</h3><p>Sloty i stoły live uruchamiają się w Safari. Przy transmisjach na żywo stabilne Wi-Fi poprawia jakość obrazu.</p></article>
<article class="card"><h3>Sportsbook</h3><p>Zakłady przedmeczowe i live, kupon i historia zakładów — na tym samym koncie co kasyno.</p></article>
<article class="card"><h3>Płatności i wypłaty</h3><p>Kasjer działa w pełni mobilnie: skopiuj adres wpłaty do portfela na telefonie lub zleć wypłatę na własny adres.</p></article>
</div>`)}

${section('android', 'Rainbet na Androida', `
${steps([
  ['Otwórz Chrome', 'Wejdź na rainbet.com w aktualnej wersji przeglądarki.'],
  ['Zaloguj się', 'Panel konta, saldo i Promocje działają tak samo jak na komputerze.'],
  ['Dodaj do ekranu głównego (opcjonalnie)', 'Menu ⋮ → „Dodaj do ekranu głównego”.'],
])}
<div class="grid">
<article class="card"><h3>Kasyno, sloty i Originals</h3><p>Sloty HTML5 i Rainbet Originals działają w przeglądarce — Mines czy Plinko są wygodne nawet na małym ekranie.</p></article>
<article class="card"><h3>Sportsbook</h3><p>Kursy live aktualizują się w czasie rzeczywistym; przed potwierdzeniem kuponu sprawdź, czy kurs się nie zmienił.</p></article>
<article class="card"><h3>Płatności i wypłaty</h3><p>Wpłaty krypto z portfela mobilnego i wypłaty na własny adres — ta sama sieć po obu stronach.</p></article>
</div>
${ctaInline('Otwórz Rainbet w Chrome lub Safari i zaloguj się na swoje konto.', 'Otwórz Rainbet na telefonie')}`)}

${section('kasyno-mobilne', 'Kasyno Rainbet na telefonie', `
${cards([
  ['slots', 'Sloty mobilne', `Rainbet slots uruchamiają się w pionie lub poziomie zależnie od gry. Katalog opisujemy w dziale ${c.a('games', 'gry i sloty')}.`],
  ['live', 'Live casino i gry stołowe', 'Blackjack, ruletka i bakarat z krupierami; interfejs zakładów dopasowuje się do ekranu.'],
  ['dice', 'Rainbet Originals', 'Krótkie rundy i proste sterowanie — idealne do gry na telefonie.'],
  ['search', 'Nawigacja i wyszukiwarka', 'Wyszukiwarka i filtry dostawców działają tak samo jak na komputerze.'],
  ['phone', 'Pion i poziom', 'Większość gier obsługuje orientację pionową; niektóre sloty i stoły live lepiej wyglądają w poziomie.'],
  ['wallet', 'Kasjer mobilny', 'Wpłata i wypłata bez przełączania na komputer.'],
])}`)}

${section('bezpieczenstwo', 'Bezpieczeństwo na urządzeniu mobilnym', `
${checklist([
  'Loguj się tylko na rainbet.com — sprawdzaj adres przed wpisaniem hasła.',
  'Zablokuj telefon kodem, odciskiem palca lub rozpoznawaniem twarzy.',
  'Nie zapisuj hasła w przeglądarce na urządzeniu, z którego korzystają inni.',
  'Wyloguj się po sesji na współdzielonym telefonie lub tablecie.',
  'Nie udostępniaj konta innym osobom i nie korzystaj z niezaufanych sieci Wi-Fi.',
])}
<p>Więcej o logowaniu i zabezpieczeniach: ${c.a('login', 'Rainbet login')}.</p>`)}

${ctaBand('Rainbet w Twojej kieszeni', 'Kasyno, Originals i sportsbook w przeglądarce telefonu — z tym samym saldem i bonusem powitalnym.', ['Graj na telefonie', 'Odbierz bonus mobilnie'])}
`,
  faqTitle: 'Rainbet app — FAQ',
  faq: [
    ['Czy jest aplikacja Rainbet?', 'Nie oferujemy natywnej aplikacji w App Store ani Google Play. Rainbet działa jako responsywna strona w przeglądarce mobilnej.'],
    ['Czy mogę korzystać z Rainbet na iPhonie?', 'Tak, w Safari. Możesz dodać skrót do ekranu początkowego przez menu „Udostępnij”.'],
    ['Czy mogę korzystać z Rainbet na Androidzie?', 'Tak, w Chrome lub innej aktualnej przeglądarce. Nie instaluj plików APK z nieoficjalnych źródeł.'],
    ['Czy mogę grać w gry kasynowe Rainbet na telefonie?', 'Tak — sloty, Originals, gry stołowe i live casino działają w przeglądarce mobilnej na tym samym saldzie.'],
  ],
});
