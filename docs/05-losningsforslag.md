# Løsningsforslag og kontrollpunkter

Bruk dette etter å ha prøvd, eller når du trenger et fungerende eksempel. Det finnes flere gode løsninger.

## Nivå 1

Eksempel i `src/content.js`:

```js
simulatorTitle: 'Hva har du igjen etter kjøpet?',
simulatorDescription: 'Skriv inn prisen. Du kan prøve uten å bruke penger.',
```

Det viktigste er at deltakeren kan begrunne ordvalget, se resultatet og finne endringen i diffen.

## Nivå 2 · Ferdig komponent

Erstatt innholdet i `src/components/QuickAmounts.jsx` med dette. Det samme eksemplet ligger i `examples/QuickAmounts.solution.jsx`.

```jsx
export default function QuickAmounts({ onSelect }) {
  return (
    <div className="quick-amounts" role="group" aria-label="Velg et beløp">
      {[25, 50, 100].map((amount) => (
        <button
          key={amount}
          type="button"
          onClick={() => onSelect(String(amount))}
        >
          {amount} kr
        </button>
      ))}
    </div>
  );
}
```

`map` lager én knapp per beløp. `key` gir hver knapp en identitet for React. `onSelect` er funksjonen fra `App.jsx`; den fyller beløpsfeltet uten å registrere kjøpet.

## Nivå 3 · Uker til sparemålet

I `src/App.jsx`, sammen med de øvrige beregningene:

```jsx
const weeklyAllowance = 5_000; // 50 kr i øre
const weeksToGoal = Math.ceil(
  Math.max(0, goalTarget - balance) / weeklyAllowance,
);
```

I sparemålskortet, under `goal-caption`:

```jsx
<p className="goal-caption">
  {weeksToGoal === 0
    ? "Du har nådd målet!"
    : `${weeksToGoal} uker igjen hvis du sparer 50 kr i uken.`}
</p>
```

1200 − 450 = 750 kr. 750 / 50 = 15 uker. Etter et kjøp på 100 kr: 1200 − 350 = 850 kr → 17 uker. `Math.ceil` runder opp, fordi en halv uke med ukepenger ikke er en ekstra utbetaling. Beregningen forutsetter at saldoen går til målet og at ingen nye kjøp skjer.

## Felles kontroll av appen

Start alltid med **Nullstill demo**:

| Handling                     | Forventet resultat                                                   |
| ---------------------------- | -------------------------------------------------------------------- |
| Skriv 299                    | Forhåndsvisningen viser 151 kr. Saldo er fortsatt 450 kr.            |
| Registrer kjøpet             | Saldo og sparemål viser 151 kr, og en ny bevegelse på −299 kr vises. |
| Skriv 451 fra start          | Vis negativ forhåndsvisning og forklaring. Registrering er sperret.  |
| Skriv 29,90 fra start        | Forhåndsvisningen viser 420,10 kr. Registrering gir samme saldo.     |
| Skriv 0, −10 eller bokstaver | Forklaring vises, og registrering er sperret.                        |
| Kjøp for nøyaktig saldo      | 0 kr igjen. Flere positive kjøp sperres.                             |
| Tøm felt                     | Input blir tomt; saldo og historikk beholdes.                        |
| Nullstill demo               | Startsaldo og opprinnelig historikk kommer tilbake.                  |
| Last inn siden på nytt       | Startsaldo og opprinnelig historikk kommer tilbake.                  |

Kjør `npm test` og `npm run build`. Test også endringen i nettleseren: automatiske tester av beløpslogikken oppdager ikke nødvendigvis en knapp uten riktig klikkhandling.
