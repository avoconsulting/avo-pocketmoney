# Bumle · Kodeonsdag

Fra prototype til samarbeid: lær å gjøre, forstå og dele endringer med VS Code og Git.

Dette er en avgrenset øvingsversjon inspirert av Julies Bumle-app. Den kjører lokalt med fiktive data, uten Supabase, innlogging, API-nøkler eller database. Demoen har saldo, kjøpssimulator, sparemål og historikk. Endringer i saldo varer til du laster siden på nytt eller nullstiller demoen.

## Start her

1. Følg [oppsett for Mac og Windows](docs/01-kom-i-gang.md).
2. Gjør [oppgavene](docs/02-oppgaver.md).
3. Bruk [Git-hjelpen](docs/03-git-og-feilsoking.md) når du står fast.

Ingen erfaring med kode er nødvendig. Jobb gjerne i par; bytt på å bruke tastaturet. Du trenger ingen betalt AI-tjeneste.

## Hurtigstart

Krever Node.js 24 LTS (minimum 22.12), npm og Git. Bruk lenken Vite skriver i terminalen; porten kan variere.

```sh
git clone https://github.com/avoconsulting/avo-pockeymoney.git
cd avo-pockeymoney
npm ci
npm run dev
```

Åpne vanligvis http://127.0.0.1:5173. Stopp serveren med Ctrl+C.

```sh
npm test
npm run build
```

## Finn frem i koden

| Fil                               | Hva du finner                                  |
| --------------------------------- | ---------------------------------------------- |
| `src/content.js`                  | Tekster, demosaldo og sparemål. Begynn her.    |
| `src/styles.css`                  | Farger, avstander og mobilvisning.             |
| `src/components/QuickAmounts.jsx` | Stedet du bygger hurtigknapper i oppgave 2.    |
| `src/App.jsx`                     | Siden og hvordan den reagerer på klikk.        |
| `src/money.js`                    | Validering og beregning av beløp i øre.        |
| `tests/money.test.js`             | Sjekker for desimaler, saldo og ugyldig input. |

Appen bruker React og Vite med JavaScript og vanlig CSS. Dette er et bevisst mindre oppsett enn originalens Next.js-app. `npm ci` installerer alle nødvendige prosjektpakker; ingen ekstra VS Code-utvidelser er påkrevd. `package-lock.json` gir alle de samme pakkeversjonene.

## Til Julie og veiledere

- [Loop-tekst og lenker](docs/00-loop.md)
- [Kjøreplan, forberedelser og suksesskriterier](docs/04-veileder.md)
- [Løsningsforslag og kontrollpunkter](docs/05-losningsforslag.md)
- [Et ferdig eksempel på hurtigknapper](examples/QuickAmounts.solution.jsx)

Hold `main` som et stabilt utgangspunkt gjennom økten. Deltakere bruker egne branches; PR-er kan gjennomgås uten å merges underveis. Første versjon er også merket `workshop-start`.
