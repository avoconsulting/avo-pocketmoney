import { useState } from "react";
import {
  content,
  initialBalance,
  initialTransactions,
  goalTarget,
} from "./content.js";
import { formatMoney, parseAmount, getPurchaseError } from "./money.js";
import QuickAmounts from "./components/QuickAmounts.jsx";

export default function App() {
  const [balance, setBalance] = useState(initialBalance);
  const [amountText, setAmountText] = useState("");
  const [transactions, setTransactions] = useState(initialTransactions);
  const [notice, setNotice] = useState("");

  const amount = parseAmount(amountText);
  const error = amountText.trim() ? getPurchaseError(amount, balance) : "";
  const canBuy = amount !== null && !getPurchaseError(amount, balance);
  const remaining = amount !== null ? balance - amount : balance;
  const remainingPercent =
    balance > 0 ? Math.max(0, Math.min(100, (remaining / balance) * 100)) : 0;
  const goalPercent = Math.min(100, Math.round((balance / goalTarget) * 100));
  const mood =
    remaining < 0 ? "danger" : remainingPercent < 25 ? "warning" : "positive";

  function recordPurchase(event) {
    event.preventDefault();
    if (!canBuy) return;
    setBalance(balance - amount);
    setTransactions([
      {
        id: crypto.randomUUID(),
        description: "Et lite kjøp",
        amount: -amount,
        date: "Akkurat nå",
        emoji: "🛍️",
      },
      ...transactions,
    ]);
    setNotice(`Kjøp på ${formatMoney(amount)} registrert i demoen.`);
    setAmountText("");
  }

  function resetDemo() {
    setBalance(initialBalance);
    setTransactions(initialTransactions);
    setAmountText("");
    setNotice("Demoen er nullstilt. Du kan prøve på nytt!");
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Hopp til innhold
      </a>
      <header className="site-header">
        <a className="brand" href="#main" aria-label="Bumle, til oversikten">
          <span className="brand-icon">b</span>bumle
          <span className="brand-dot">.</span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#simulator">Prøv et kjøp</a>
          <a href="#sparemal">Sparemål</a>
          <a href="#historikk">Historikk</a>
        </nav>
        <span className="demo-badge">
          <span />
          Demofamilien
        </span>
      </header>

      <main id="main">
        <section className="intro" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">MINE LOMMEPENGER</p>
            <h1 id="page-title">
              {content.greeting} <span aria-hidden="true">👋</span>
            </h1>
            <p>{content.introduction}</p>
          </div>
          <div className="profile">
            <span className="avatar" aria-hidden="true">
              🧑‍🚀
            </span>
            <div>
              <strong>Alex</strong>
              <span>På vei mot nye mål</span>
            </div>
          </div>
        </section>

        <section className="balance-card" aria-labelledby="balance-title">
          <div>
            <p id="balance-title">Dette er pengene dine</p>
            <strong className="balance" data-testid="balance">
              {formatMoney(balance)}
            </strong>
            <span className="balance-caption">
              Litt å bruke. Litt å drømme om.
            </span>
          </div>
          <div className="balance-art" aria-hidden="true">
            <span className="coin coin-one">kr</span>
            <span className="coin coin-two">kr</span>
            <span className="coin coin-three">kr</span>
            <span className="spark">✦</span>
          </div>
          <span className="balance-note">✦ {content.headline}</span>
        </section>

        <div className="workspace">
          <section
            className="card simulator"
            id="simulator"
            aria-labelledby="simulator-title"
          >
            <div className="section-heading">
              <span className="section-icon blue" aria-hidden="true">
                ↗
              </span>
              <span className="eyebrow">PRØV FØRST, BESTEM DEG ETTERPÅ</span>
            </div>
            <h2 id="simulator-title">{content.simulatorTitle}</h2>
            <p className="muted">{content.simulatorDescription}</p>
            <form onSubmit={recordPurchase}>
              <label htmlFor="amount">Hva koster det?</label>
              <div className="amount-input">
                <input
                  id="amount"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="0"
                  maxLength={12}
                  value={amountText}
                  onChange={(event) => {
                    setAmountText(event.target.value);
                    setNotice("");
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "amount-error" : "amount-help"}
                />
                <span>kr</span>
              </div>
              <p className="input-help" id="amount-help">
                Du kan også skrive beløp med komma, som 29,90.
              </p>
              <QuickAmounts
                onSelect={(value) => {
                  setAmountText(value);
                  setNotice("");
                }}
              />
              {error && (
                <p className="error" id="amount-error" role="alert">
                  {error}
                </p>
              )}
              <div
                className={`preview ${mood}`}
                aria-live="polite"
                aria-atomic="true"
              >
                <div>
                  <span>Da har du igjen</span>
                  <strong data-testid="remaining">
                    {formatMoney(remaining)}
                  </strong>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label="Andel av saldo igjen etter kjøpet"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(remainingPercent)}
                >
                  <span style={{ width: `${remainingPercent}%` }} />
                </div>
                <p>
                  {remaining < 0
                    ? "Prøv et mindre beløp, eller spar litt til."
                    : "Du bestemmer hva pengene dine skal bli til."}
                </p>
              </div>
              <div className="actions">
                <button className="primary" type="submit" disabled={!canBuy}>
                  Registrer kjøp <span aria-hidden="true">↗</span>
                </button>
                <button
                  className="secondary"
                  type="button"
                  onClick={() => {
                    setAmountText("");
                    setNotice("");
                  }}
                  disabled={!amountText}
                >
                  Tøm felt
                </button>
              </div>
            </form>
          </section>

          <aside
            className="card goal-card"
            id="sparemal"
            aria-labelledby="goal-title"
          >
            <div className="section-heading">
              <span className="section-icon peach" aria-hidden="true">
                ☆
              </span>
              <span className="eyebrow">NOE Å GLEDE SEG TIL</span>
            </div>
            <h2 id="goal-title">Mitt sparemål</h2>
            <div className="goal-picture" aria-hidden="true">
              {content.goalEmoji}
              <span>Én krone nærmere!</span>
            </div>
            <h3>{content.goalName}</h3>
            <p className="muted">
              Hva om du sparer pengene til noe du virkelig ønsker deg?
            </p>
            <div className="goal-numbers">
              <strong>{formatMoney(balance)}</strong>
              <span>av {formatMoney(goalTarget)}</span>
            </div>
            <div
              className="progress-track goal-progress"
              role="progressbar"
              aria-label="Fremdrift mot sparemålet"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={goalPercent}
            >
              <span style={{ width: `${goalPercent}%` }} />
            </div>
            <p className="goal-caption">
              {balance >= goalTarget
                ? "Du har nådd målet! 🎉"
                : `${formatMoney(goalTarget - balance)} igjen til drømmen`}
            </p>
            <p className="goal-explanation">
              Her teller vi hele saldoen mot sparemålet.
            </p>
          </aside>
        </div>

        <p className="notice" role="status">
          {notice}
        </p>

        <section
          className="card history"
          id="historikk"
          aria-labelledby="history-title"
        >
          <div className="history-heading">
            <div>
              <p className="eyebrow">INN OG UT AV SPAREGRISEN</p>
              <h2 id="history-title">Siste bevegelser</h2>
            </div>
            <span className="history-count">
              {transactions.length} bevegelser
            </span>
          </div>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <span
                  className={`transaction-icon ${transaction.amount > 0 ? "mint" : "peach"}`}
                  aria-hidden="true"
                >
                  {transaction.emoji}
                </span>
                <div>
                  <strong>{transaction.description}</strong>
                  <span>{transaction.date}</span>
                </div>
                <strong
                  className={transaction.amount > 0 ? "income" : "expense"}
                >
                  {transaction.amount > 0 ? "+" : "−"}
                  {formatMoney(Math.abs(transaction.amount))}
                </strong>
              </li>
            ))}
          </ul>
          <p className="history-footnote">
            Et lite utdrag av historikken. Saldoen inkluderer også eldre
            bevegelser.
          </p>
        </section>

        <footer>
          <p>
            <strong>Et trygt sted å prøve.</strong> Alle data er fiktive.
            Endringer varer til siden lastes inn på nytt.
          </p>
          <button className="reset-button" onClick={resetDemo}>
            ↺ Nullstill demo
          </button>
        </footer>
      </main>
    </>
  );
}
