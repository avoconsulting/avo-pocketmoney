# Kvalitetssjekk før kodeonsdag

Gjennomført 9. november 2026 på Mac:

- Prosjektpakkene ble installert, og pakkelåsen er lagret.
- `npm test`: tre tester passerte. Dekker desimaler, ugyldige beløp og kjøp mot tilgjengelig saldo.
- `npm run build`: både startversjonen og løsningsforslaget bygger.
- Nettleser: 450 − 299 forhåndsvises som 151 kr uten å endre saldoen. Registrering oppdaterer saldo, sparemål og historikk.
- Nettleser: 29,90 gir 420,10 kr igjen. Et kjøp på 451 kr fra startsaldoen sperres.
- Nettleser: nullstilling gjenoppretter startdata.
- Løsningsforslaget til hurtigknapper ble midlertidig satt inn og prøvd med klikk og tastatur. Det fylte inn beløp uten å registrere kjøp. Startversjonen er deretter gjenopprettet.
- Smal mobilvisning ble visuelt kontrollert, uten horisontal overflyt på testet bredde.
- Ingen konsollfeil eller advarsler i de testede nettleserflytene.

Fortsatt manuelt før økten:

- [ ] Test oppsettsguiden på en Windows-maskin med en kollega.
- [ ] La en nybegynner prøve første oppgave og noter hvor de stopper.
- [ ] Bekreft hver deltakers tilgang til repoet og mulighet til å publisere en egen branch.
- [ ] Bekreft at guiden er kopiert til Loop og delt med gruppen.

Lokal nettlesertesting bekrefter ikke deltakernes organisasjonstilgang eller oppsett på alle maskiner. Se veilederguiden for reserveplan.
