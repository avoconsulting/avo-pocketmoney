// Ferdig eksempel. Kopier innholdet til src/components/QuickAmounts.jsx.
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
