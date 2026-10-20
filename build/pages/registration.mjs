import { section, steps, cards, ctaInline, ctaBand, trouble, checklist, callout } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Sign Up — rejestracja konta dla Polski | Rainbet',
  description: 'Rainbet sign up krok po kroku: jak założyć konto, wymagania rejestracji, weryfikacja tożsamości, pierwsze kroki po rejestracji i rozwiązywanie problemów.',
  canonical: 'https://rainbet-casinos.pl',
  hero: {
    image: 'rainbet-home-casino-lobby.webp',
    eyebrow: 'Rainbet sign up',
    h1: 'Rejestracja Rainbet dla Polski',
    text: 'Konto Rainbet zakładasz w aktualnym formularzu rejestracji — metody zakładania konta widzisz bezpośrednio w nim. Jedno konto obsługuje kasyno, live casino, Originals i sportsbook.',
    stats: [['18+', 'wymagany wiek'], ['1 konto', 'na osobę'], ['Kasyno + sport', 'jedno saldo']],
    buttons: ['Załóż konto Rainbet', 'Odbierz bonus po rejestracji'],
    note: 'Formularz rejestracji i regulamin potwierdzają, czy konto z Polski może zostać otwarte.',
  },
  body: `
${section('zaloz-konto', 'Załóż konto Rainbet', `
<p class="lead">Rejestracja w Rainbet zajmuje kilka minut. Obsługiwane metody zakładania konta pokazuje sam formularz — korzystaj wyłącznie z tych opcji, które tam widzisz, i podawaj prawdziwe dane, bo będą potrzebne przy ewentualnej weryfikacji.</p>
<p>Konta z Polski podlegają tym samym zasadom co inne regiony: formularz sprawdza lokalizację, a regulamin określa kraje wyłączone. Jeśli rejestracja z Twojej lokalizacji nie jest możliwa, formularz wyświetli odpowiedni komunikat.</p>`)}

${section('jak-sie-zarejestrowac', 'Jak zarejestrować się w Rainbet', `
${steps([
  ['Otwórz formularz rejestracji', 'Wybierz przycisk rejestracji na stronie Rainbet.'],
  ['Wybierz metodę rejestracji', 'Skorzystaj z jednej z metod wyświetlanych w formularzu.'],
  ['Podaj dokładne dane', 'Adres e-mail, nazwa użytkownika i hasło — unikalne, niewykorzystywane w innych serwisach.'],
  ['Potwierdź e-mail lub inną weryfikację', 'Jeśli system wyśle link aktywacyjny, kliknij go przed pierwszą wpłatą.'],
  ['Przejdź wymagane kontrole', 'Przed wpłatami lub wypłatami możemy poprosić o dodatkowe dane lub dokumenty.'],
])}
${ctaInline('Konto zakładasz raz — potem wybierasz pakiet powitalny w Promocjach.', 'Zarejestruj się w Rainbet')}`)}

${section('wymagania', 'Wymagania rejestracji Rainbet', `
${cards([
  ['user+', 'Minimalny wiek', 'Konto mogą założyć wyłącznie osoby, które ukończyły 18 lat lub wiek wymagany w ich jurysdykcji.'],
  ['info', 'Jedno konto', 'Jedna osoba może mieć jedno konto. Duplikaty mogą zostać zamknięte, a bonusy anulowane.'],
  ['shield', 'Ograniczenia lokalizacji', 'Rejestracja z krajów wyłączonych w regulaminie nie jest możliwa.'],
  ['check', 'Prawdziwe dane', 'Dane w profilu muszą zgadzać się z dokumentami, jeśli pojawi się prośba o weryfikację.'],
  ['lock', 'Weryfikacja tożsamości', 'Może być wymagana przy wypłatach lub na żądanie działu zgodności.'],
  ['mail', 'Dostęp do e-maila', 'Adres e-mail służy do potwierdzenia konta i resetu hasła — użyj takiego, do którego masz dostęp.'],
])}`)}

${section('weryfikacja', 'Weryfikacja konta Rainbet', `
<div class="split even"><div>
<p class="lead">Weryfikacja (KYC) to potwierdzenie, że konto należy do Ciebie. Nie zawsze jest wymagana od razu — zwykle pojawia się przy wypłacie, większych transakcjach lub gdy wymaga tego dział zgodności.</p>
<p>Chroni ona konto przed przejęciem i przed zakładaniem kont na cudze dane. Do czasu zakończenia weryfikacji wypłata może pozostać w statusie oczekującym, dlatego warto przygotować dokumenty wcześniej.</p>
</div><div>
${checklist([
  'Dokument tożsamości ze zdjęciem (dowód osobisty lub paszport).',
  'Potwierdzenie adresu zamieszkania, jeśli zostaniesz o nie poproszony.',
  'Czytelne skany lub zdjęcia całego dokumentu, bez zasłoniętych danych.',
  'Dokumenty przesyłasz wyłącznie przez oficjalne kanały Rainbet.',
])}
</div></div>`)}

${section('po-rejestracji', 'Co dalej po rejestracji', `
<p class="lead">Po założeniu konta masz kilka opcji na start — każda opisana jest na osobnej stronie.</p>
<p>Zanim wpłacisz pierwsze środki, przejdź do zakładki Promocje i wybierz ${c.a('bonus', 'bonus powitalny Rainbet')} — trzy progi z Free Spins aktywujesz tylko przed wpłatą. Jeśli szukasz kodu, sprawdź aktualny status na stronie ${c.a('promo', 'Rainbet promo code')}. Po zaksięgowaniu wpłaty odbierzesz ${c.a('spins', 'Free Spins na slot Pragmatic Play')}, a potem możesz przejrzeć ${c.a('games', 'sloty i gry kasynowe')} albo sprawdzić, jak grać na ${c.a('app', 'telefonie w przeglądarce')}.</p>
${ctaInline('Nowe konto ma dostęp do pakietu 100% + 20 FS za pierwszą wpłatę.', 'Aktywuj bonus powitalny')}`)}

${section('problemy', 'Problemy z rejestracją w Rainbet', `
${trouble([
  ['Komunikat o duplikacie konta', 'Adres e-mail lub dane są już przypisane do konta. Spróbuj zresetować hasło zamiast zakładać nowe konto.'],
  ['Brak e-maila weryfikacyjnego', 'Sprawdź folder spam i oferty, odczekaj kilka minut i poproś o ponowne wysłanie.'],
  ['Błędne dane', 'Popraw dane w profilu, zanim poprosisz o wypłatę — muszą zgadzać się z dokumentem.'],
  ['Ograniczenie wieku lub regionu', 'Formularz zablokuje rejestrację, jeśli wiek lub lokalizacja nie spełniają wymagań regulaminu.'],
  ['Błąd formularza', 'Odśwież stronę, wyłącz blokery skryptów i spróbuj ponownie w aktualnej przeglądarce.'],
])}
${callout('Sprawy dotyczące konkretnego konta zgłoś do Live Support lub na support@rainbet.com — ' + c.a('support', 'zobacz, jak przygotować zgłoszenie') + '.')}`)}

${ctaBand('Konto, bonus i gra w kilka minut', 'Zarejestruj się, wybierz pakiet powitalny w Promocjach i wpłać od $30.', ['Załóż konto Rainbet', 'Zobacz bonus'], 'bonus')}
`,
  faqTitle: 'Rejestracja Rainbet — FAQ',
  faq: [
    ['Jak założyć konto Rainbet?', 'Kliknij „Zarejestruj się”, wybierz metodę widoczną w formularzu, podaj dane i potwierdź e-mail, jeśli system o to poprosi.'],
    ['Czy mogę zarejestrować się w Rainbet z Polski?', 'O tym decyduje formularz rejestracji i aktualny regulamin z listą krajów wyłączonych. Nie gwarantujemy dostępności z góry.'],
    ['Czy muszę weryfikować konto Rainbet?', 'Weryfikacja może być wymagana przy wypłatach lub na żądanie działu zgodności. Przygotuj dokument tożsamości i potwierdzenie adresu.'],
    ['Czy jedno konto działa w kasynie i sportsbooku?', 'Tak, jedno konto i jedno saldo obsługują kasyno, live casino, Originals i zakłady sportowe.'],
  ],
});
