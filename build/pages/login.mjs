import { section, steps, cards, ctaInline, ctaBand, trouble, checklist, callout } from '../lib.mjs';

export default (c) => ({
  title: 'Rainbet Login — logowanie do konta w Polsce | Rainbet',
  description: 'Rainbet login: jak zalogować się do konta, rozwiązać problemy z logowaniem, zresetować hasło i chronić konto na komputerze i telefonie.',
  canonical: 'https://rainbet-casinos.pl',
  ogImage: 'rainbet-home-crypto-payments.webp',
  hero: {
    image: 'rainbet-home-crypto-payments.webp',
    eyebrow: 'Rainbet login',
    h1: 'Rainbet Login dla Polski',
    text: 'Po zalogowaniu masz dostęp do salda, aktywnych bonusów, historii transakcji i ustawień konta — w kasynie i sportsbooku jednocześnie.',
    stats: [['1 login', 'kasyno i sport'], ['Live Support', 'pomoc 24/7'], ['Desktop i mobile', 'ta sama metoda logowania']],
    buttons: ['Zaloguj się do Rainbet', 'Załóż nowe konto'],
  },
  body: `
${section('logowanie', 'Logowanie do Rainbet', `
<p class="lead">Rainbet login znajdziesz na oficjalnej stronie rainbet.com — przycisk logowania znajdziesz w nagłówku serwisu. Logujesz się tą samą metodą, której użyto przy zakładaniu konta; metody logowania wyświetla formularz.</p>
<p>Jeśli konto zostało założone przez jedną metodę, a próbujesz zalogować się inną, system może nie rozpoznać konta. W razie wątpliwości użyj opcji odzyskiwania dostępu zamiast tworzyć nowe konto — duplikaty naruszają zasadę jednego konta na osobę.</p>`)}

${section('jak-sie-zalogowac', 'Jak zalogować się do Rainbet', `
${steps([
  ['Otwórz Rainbet', 'Wejdź na rainbet.com w przeglądarce komputera lub telefonu i sprawdź adres w pasku.'],
  ['Wybierz „Zaloguj się”', 'Przycisk logowania otwiera formularz z dostępnymi metodami.'],
  ['Użyj metody powiązanej z kontem', 'Tej samej, którą wybrano przy rejestracji.'],
  ['Przejdź kontrolę bezpieczeństwa', 'Jeśli system poprosi o dodatkowe potwierdzenie, dokończ je.'],
  ['Otwórz panel konta', 'Saldo, Promocje, historia transakcji i ustawienia są dostępne od razu.'],
])}
${ctaInline('Po zalogowaniu sprawdź zakładkę Promocje — tam widać status bonusów.', 'Zaloguj się do Promocji')}`)}

${section('problemy', 'Problemy z logowaniem do Rainbet', `
${trouble([
  ['Zapomniane hasło', 'Użyj opcji resetu hasła w formularzu logowania — link trafi na adres e-mail konta.'],
  ['Niezweryfikowany e-mail', 'Dokończ weryfikację linkiem z wiadomości aktywacyjnej; sprawdź też folder spam.'],
  ['Zablokowana sesja', 'Wyloguj się na innych urządzeniach, wyczyść pliki cookie strony i zaloguj się ponownie.'],
  ['Niewłaściwa metoda logowania', 'Konto odpowiada na metodę użytą przy rejestracji — wybierz ją w formularzu.'],
  ['Problem z uwierzytelnianiem dwuetapowym', 'Jeśli 2FA jest włączone, sprawdź czas na telefonie i aplikację uwierzytelniającą; przy utracie dostępu napisz do wsparcia.'],
])}`)}

${section('reset-hasla', 'Reset hasła w Rainbet', `
<p class="lead">Reset hasła rozpoczynasz w formularzu logowania. Link resetujący przychodzi na adres e-mail przypisany do konta — tylko na niego.</p>
${checklist([
  'Sprawdź, czy wpisujesz adres e-mail użyty przy rejestracji.',
  'Poszukaj wiadomości w folderach spam, oferty i powiadomienia.',
  'Link resetujący ma ograniczoną ważność — użyj go od razu po otrzymaniu.',
  'Nowe hasło powinno być unikalne i niewykorzystywane w innych serwisach.',
])}
<p>Jeśli e-mail resetujący nie dociera lub nie masz już dostępu do skrzynki, skontaktuj się z ${c.a('support', 'wsparciem Rainbet')} — nie zakładaj nowego konta.</p>`)}

${section('bezpieczenstwo', 'Bezpieczeństwo konta Rainbet', `
${cards([
  ['lock', 'Silne hasło', 'Co najmniej kilkanaście znaków, mieszanka liter, cyfr i symboli; bez danych osobowych.'],
  ['shield', 'Dwuetapowe logowanie', 'Włącz uwierzytelnianie dwuetapowe w ustawieniach, jeśli jest dostępne dla Twojego konta.'],
  ['phone', 'Współdzielone urządzenia', 'Nie zapisuj hasła w przeglądarce i wyloguj się po zakończeniu sesji.'],
  ['user+', 'Brak udostępniania konta', 'Konto jest osobiste — udostępnianie danych logowania narusza regulamin.'],
])}
${callout('Rainbet nigdy nie prosi o hasło ani frazę seed portfela — ani na czacie, ani e-mailem. Podejrzane wiadomości zgłoś do wsparcia.', true)}`)}

${section('mobile', 'Logowanie do Rainbet na telefonie', `
<p>Na telefonie logujesz się w Safari lub Chrome dokładnie tak samo jak na komputerze. Po zalogowaniu masz dostęp do tego samego konta w kasynie i sportsbooku — z tym samym saldem, bonusami i historią. Jak dodać skrót do ekranu głównego, opisujemy w dziale ${c.a('app', 'Rainbet app')}.</p>`)}

${ctaBand('Wróć do gry', 'Zaloguj się, sprawdź saldo i status bonusów, a potem wybierz grę lub wydarzenie sportowe.', ['Zaloguj się do Rainbet', 'Wpłać środki'])}
`,
  faqTitle: 'Rainbet login — FAQ',
  faq: [
    ['Czy używam tego samego loginu w kasynie i sportsbooku?', 'Tak, jedno konto i jedno logowanie obsługują kasyno, live casino, Originals i sportsbook.'],
    ['Co zrobić, jeśli nie mogę się zalogować?', 'Sprawdź metodę logowania, zresetuj hasło, dokończ weryfikację e-mail. Jeśli to nie pomoże, napisz do Live Support.'],
    ['Jak zresetować hasło do Rainbet?', 'W formularzu logowania wybierz opcję resetu hasła; link przyjdzie na adres e-mail przypisany do konta.'],
    ['Czy mogę zalogować się z telefonu?', 'Tak, w przeglądarce mobilnej (Safari, Chrome) — tą samą metodą co na komputerze.'],
  ],
});
