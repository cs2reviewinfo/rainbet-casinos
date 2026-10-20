import { FACT, section, cards, table, checklist, ctaInline, ctaBand, callout } from '../lib.mjs';

export default (c) => ({
  title: 'Wsparcie Rainbet — Live Support 24/7 i e-mail | Rainbet',
  description: 'Wsparcie Rainbet: Live Support 24/7 i support@rainbet.com. Pomoc przy wpłatach, wypłatach, koncie i bonusach oraz jak przygotować zgłoszenie.',
  canonical: 'https://rainbet-casinos.pl',
  ogImage: 'rainbet-home-crypto-payments.webp',
  hero: {
    image: 'rainbet-home-casino-lobby.webp',
    eyebrow: 'Obsługa klienta',
    h1: 'Wsparcie Rainbet',
    text: `Live Support odpowiada przez całą dobę w oknie czatu na stronie Rainbet. Sprawy wymagające dokumentów lub zrzutów ekranu wyślij na ${FACT.email}.`,
    stats: [['24/7', 'Live Support'], ['E-mail', FACT.email], ['Konto · płatności · bonusy', 'zakres pomocy']],
    buttons: ['Napisz do Live Support', 'Zaloguj się, aby uzyskać pomoc'],
  },
  body: `
${section('kanaly', 'Kanały kontaktu z Rainbet', `
${table(['Kanał', 'Kiedy go użyć', 'Dostępność'], [
  ['Live Support (czat)', 'Pilne sprawy: brak bonusu przed grą, zaksięgowanie wpłaty, problem z logowaniem.', '24/7'],
  [`E-mail — ${FACT.email}`, 'Sprawy z załącznikami: dokumenty, szczegółowe reklamacje, historia transakcji.', 'Odpowiedź e-mailem'],
  ['Social media', 'Ogłoszenia i nowości — wyłącznie oficjalne profile podane w stopce rainbet.com.', 'Według kanału'],
])}
${callout('Uważaj na podszywanie się pod wsparcie. Oficjalny zespół Rainbet nie prosi o hasło, kody 2FA ani frazę seed portfela i nie kontaktuje się jako pierwszy przez prywatne komunikatory.', true)}`)}

${section('w-czym-pomagamy', 'W czym pomagamy', `
${cards([
  ['wallet', 'Wpłaty', 'Brak zaksięgowania, wybór złej sieci, pytania o minimalne kwoty i dostępne metody.'],
  ['clock', 'Wypłaty', 'Status wypłaty, oczekująca weryfikacja, pytania o czas dotarcia środków.'],
  ['user+', 'Konto', 'Logowanie, reset hasła, zmiana danych, zabezpieczenia i zamknięcie konta.'],
  ['gift', 'Bonusy', 'Brak bonusu lub Free Spins po wpłacie, postęp obrotu, warunki promocji.'],
  ['slots', 'Gry', 'Przerwana runda, błąd gry, pytania o zasady tytułu lub rozliczenie zakładu.'],
  ['shield', 'Odpowiedzialna gra', 'Ustawienie limitów, przerwy i samowykluczenie.'],
])}`)}

${section('zgloszenie', 'Jak przygotować zgłoszenie', `
<p class="lead">Konkretne zgłoszenie to szybsza odpowiedź. Zanim napiszesz, zbierz podstawowe informacje:</p>
${checklist([
  'Adres e-mail lub nazwę użytkownika konta.',
  'Datę i przybliżoną godzinę zdarzenia.',
  'Rodzaj sprawy: wpłata, wypłata, bonus, gra, konto.',
  'Przy krypto: monetę, sieć i identyfikator transakcji (TXID).',
  'Zrzut ekranu komunikatu błędu, jeśli się pojawił.',
])}
${checklist(['Nie wysyłaj hasła, kodów 2FA ani frazy seed — wsparcie ich nie potrzebuje.'], true)}
${ctaInline('Masz wszystkie informacje? Otwórz okno czatu na stronie Rainbet.', 'Otwórz Live Support')}`)}

${section('szybkie-odpowiedzi', 'Zanim napiszesz — szybkie odpowiedzi', `
<div class="grid two">
<article class="card"><h3>Brak bonusu po wpłacie</h3><p>Sprawdź, czy oferta była aktywna w Promocjach przed wpłatą i czy kwota wynosiła co najmniej $30. Jeśli tak — napisz do czatu przed postawieniem zakładu. Więcej: ${c.a('bonus', 'bonus Rainbet')}.</p></article>
<article class="card"><h3>Wpłata krypto nie dotarła</h3><p>Sprawdź transakcję w eksploratorze blockchain i liczbę potwierdzeń. Upewnij się, że sieć była zgodna z wybraną w kasjerze. Więcej: ${c.a('payments', 'płatności')}.</p></article>
<article class="card"><h3>Nie mogę się zalogować</h3><p>Użyj metody logowania z rejestracji i opcji resetu hasła. Więcej: ${c.a('login', 'Rainbet login')}.</p></article>
<article class="card"><h3>Kod promocyjny nie działa</h3><p>Sprawdź, czy kod jest aktualny i czy formularz ma na niego pole. Więcej: ${c.a('promo', 'Rainbet promo code')}.</p></article>
</div>`)}

${ctaBand('Pomoc 24/7', 'Live Support odpowiada przez całą dobę w oknie czatu na stronie Rainbet.', ['Napisz do wsparcia', 'Zaloguj się'])}
`,
  faqTitle: 'Wsparcie Rainbet — FAQ',
  faq: [
    ['Jak skontaktować się z obsługą Rainbet?', `Najszybciej przez czat Live Support na stronie Rainbet. Sprawy z dokumentami i zrzutami ekranu wyślij na ${FACT.email}.`],
    ['Czy Live Support działa całą dobę?', 'Tak, Live Support Rainbet działa 24/7.'],
    ['Co zrobić, gdy bonus się nie pojawił?', 'Napisz do Live Support przed postawieniem zakładu i podaj godzinę oraz kwotę wpłaty.'],
  ],
});
