import { section, cards, checklist, steps, callout, ctaInline } from '../lib.mjs';

export default (c) => ({
  title: 'Odpowiedzialna gra w Rainbet — limity i samowykluczenie | Rainbet',
  description: 'Odpowiedzialna gra w Rainbet: ograniczenia wiekowe, limity, przerwy, samowykluczenie i sygnały ostrzegawcze. Graj wyłącznie dla rozrywki.',
  canonical: 'https://rainbet-casinos.pl',
  hero: {
    mark: 'rainbet.webp',
    eyebrow: 'Graj odpowiedzialnie',
    h1: 'Odpowiedzialna gra w Rainbet',
    text: 'Gra w kasynie i zakłady sportowe to rozrywka, a nie sposób na zarabianie pieniędzy. Dajemy narzędzia, które pomagają zachować kontrolę nad czasem i budżetem.',
    stats: [['18+', 'tylko dla dorosłych'], ['Limity', 'w ustawieniach konta'], ['Samowykluczenie', 'na czas określony lub stałe']],
    buttons: ['Ustaw limity w koncie', 'Porozmawiaj z Live Support'],
  },
  body: `
${section('podejscie', 'Nasze podejście do odpowiedzialnej gry', `
<p class="lead">Każdy wynik w kasynie jest losowy, a przewaga kasyna działa na dłuższą metę. Dlatego zachęcamy, by traktować środki przeznaczone na grę jak koszt rozrywki — tak jak bilet do kina — i nigdy nie grać za pieniądze potrzebne na rachunki czy codzienne wydatki.</p>
<p>Warunki promocji pokazujemy przed aktywacją, a w ustawieniach konta udostępniamy narzędzia kontroli. Jeśli czujesz, że gra przestaje być zabawą, skontaktuj się z nami — pomożemy ustawić ograniczenia lub zablokować konto.</p>`)}

${section('wiek', 'Ograniczenia wiekowe', `
<p>Z Rainbet mogą korzystać wyłącznie osoby, które ukończyły 18 lat lub wiek wymagany w ich jurysdykcji, jeśli jest wyższy. Możemy poprosić o dokument potwierdzający wiek; konta osób niepełnoletnich są zamykane.</p>
${checklist([
  'Nie udostępniaj konta ani danych logowania osobom niepełnoletnim.',
  'Nie zostawiaj zalogowanego konta na urządzeniu, z którego korzystają dzieci.',
  'Rozważ oprogramowanie kontroli rodzicielskiej na współdzielonych urządzeniach.',
])}`)}

${section('narzedzia', 'Kontrola konta', `
${cards([
  ['wallet', 'Limity wpłat', 'Ustal maksymalną kwotę wpłat w wybranym okresie, jeśli to narzędzie jest dostępne w ustawieniach Twojego konta.'],
  ['clock', 'Przerwa od gry', 'Zablokuj konto na krótki okres, gdy potrzebujesz odpocząć od gry.'],
  ['lock', 'Samowykluczenie', 'Dłuższa lub stała blokada dostępu do gry — zasady i okresy opisuje regulamin oraz ustawienia konta.'],
  ['chat', 'Pomoc Live Support', 'Jeśli nie znajdziesz narzędzia w ustawieniach, zespół wsparcia ustawi je za Ciebie.'],
])}
<p>Dostępne narzędzia i ich zakres widzisz w ustawieniach konta; część z nich możesz też włączyć przez ${c.a('support', 'Live Support')}.</p>`)}

${section('samowykluczenie', 'Jak włączyć samowykluczenie', `
${steps([
  ['Zaloguj się', 'Otwórz ustawienia konta lub czat Live Support.'],
  ['Wybierz okres', 'Określ, na jak długo konto ma zostać zablokowane — lub poproś o blokadę stałą.'],
  ['Potwierdź decyzję', 'Blokada zaczyna obowiązywać zgodnie z zasadami regulaminu — przed potwierdzeniem przeczytaj, czy można ją później skrócić.'],
  ['Wypłać saldo', 'Pozostałe środki możesz wypłacić zgodnie z zasadami regulaminu.'],
])}`)}

${section('sygnaly', 'Sygnały ostrzegawcze', `
<p class="lead">Zadaj sobie kilka pytań. Jeśli na któreś odpowiadasz „tak”, to dobry moment na przerwę:</p>
${checklist([
  'Grasz dłużej lub za większe kwoty, niż zakładał Twój plan?',
  'Próbujesz odegrać przegrane pieniądze?',
  'Pożyczasz pieniądze lub sprzedajesz rzeczy, by grać?',
  'Gra wpływa na Twoją pracę, naukę lub relacje?',
  'Ukrywasz przed bliskimi, ile czasu lub pieniędzy przeznaczasz na grę?',
  'Czujesz niepokój lub rozdrażnienie, gdy nie grasz?',
], true)}`)}

${section('ochrona', 'Ochrona gracza — dobre nawyki', `
${cards([
  ['wallet', 'Budżet z góry', 'Ustal kwotę przed sesją i nie doładowuj konta w trakcie gry.'],
  ['clock', 'Limit czasu', 'Ustaw alarm w telefonie — łatwo stracić poczucie czasu przy szybkich grach.'],
  ['percent', 'Bonus to nie obowiązek', 'Nie musisz aktywować żadnej promocji. Wymogi obrotu mogą wydłużać grę.'],
  ['shield', 'Bez alkoholu i emocji', 'Nie graj pod wpływem alkoholu, stresu ani po to, by poprawić sobie nastrój.'],
])}
${callout('Jeśli potrzebujesz wsparcia, porozmawiaj z kimś bliskim lub skontaktuj się z organizacją pomagającą osobom z problemem hazardowym, np. grupami Anonimowych Hazardzistów działającymi w Polsce. Rozmowa to pierwszy krok.', true)}
${ctaInline('Chcesz ustawić limit lub przerwę? Zespół wsparcia pomoże od razu.', 'Porozmawiaj z Live Support')}`)}
`,
  faqTitle: 'Odpowiedzialna gra — FAQ',
  faq: [
    ['Od ilu lat można grać w Rainbet?', 'Wyłącznie od 18 lat lub od wieku wymaganego w Twojej jurysdykcji, jeśli jest wyższy.'],
    ['Jak ustawić limit wpłat?', 'W ustawieniach konta lub przez Live Support, jeśli narzędzie nie jest widoczne w ustawieniach.'],
    ['Czy mogę zablokować swoje konto?', 'Tak, przez samowykluczenie na określony czas lub na stałe — w ustawieniach konta lub przez Live Support.'],
  ],
});
