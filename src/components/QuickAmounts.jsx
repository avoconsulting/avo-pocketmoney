// OPPGAVE 2: Lag hurtigknapper for 25, 50 og 100 kr.
// onSelect('50') fyller inn beløpet i simulatoren. Se docs/02-oppgaver.md.
export default function QuickAmounts({ onSelect }) {
  return (
    <div className="quick-amounts" role="group" aria-label="Velg et beløp">
      <button type="button" onClick={() => onSelect("25")}>
        25 kr
      </button>
      <button type="button" onClick={() => onSelect("50")}>
        50 kr
      </button>
      <button type="button" onClick={() => onSelect("100")}>
        100 kr
      </button>
    </div>
  );
}
