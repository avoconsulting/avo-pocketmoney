# Fra prototype til samarbeid

Målet er at du kan gjøre, forstå og dele en endring. Begynn på nivå 1. Det er helt fint å bruke hele økten der. Jobb gjerne i par og bytt på tastaturet. En erfaren makker stiller spørsmål og hjelper deg å finne frem.

Appen er en liten versjon av Bumle. Alle data er fiktive, og appen trenger ingen kontoer. Saldo lagres bare mens siden er åpen. Under utvikling kan React bevare eller nullstille tilstanden når du endrer filer; bruk **Nullstill demo** for å starte fra 450 kr.

## Første steg: lag din egen branch

Klikk på `main` nederst til venstre i VS Code, velg **Create new branch**, og gi den et unikt navn, for eksempel `julie/bedre-simulator`. Ved like navn, legg til initialer eller et tall.

**Hvorfor:** En branch lar deg jobbe med en endring uten å endre det felles utgangspunktet. Lag branchen før du begynner å redigere.

**Sjekk:** Du ser ditt branch-navn nederst til venstre. Ikke velg **Publish Branch** før du er klar til å dele.

## Nivå 1 · Gjør appen litt bedre

**Oppdrag:** Gjør appen lettere å forstå for et barn som skal vurdere et kjøp.

1. Åpne `src/content.js`. Endre `simulatorTitle` og `simulatorDescription` til noe du mener er tydeligere.
2. Lagre med **Cmd+S / Ctrl+S** og se på appen i nettleseren.
3. Hvis du vil: endre `goalName` og `goalEmoji`, eller velg en annen `--accent` øverst i `src/styles.css`.
4. Åpne **Source Control** i venstremenyen. Klikk på filen du endret og les diffen: hva ble tatt bort og hva ble lagt til?
5. Trykk **+** ved filen for å stage den. Skriv en beskrivende melding, for eksempel `Gjør forklaringen i kjøpssimulatoren tydeligere`, og velg **Commit**.

**Sjekkpunkt:** Endringen vises i nettleseren, og du kan vise den i Git-historikken. Forklar til makkeren: Hva er forskjellen på å lagre en fil og lage en commit?

Hvis VS Code tilbyr å stage alle filer automatisk, velg heller filene du faktisk ønsker å ta med. `node_modules` skal ikke inn i Git.

## Nivå 2 · Lag hurtigknapper

**Oppdrag:** Et barn skal raskt kunne prøve et kjøp på **25, 50 eller 100 kr**.

Åpne `src/components/QuickAmounts.jsx`. Appen har allerede gjort klar en kobling til beløpsfeltet: `onSelect('50')` fyller inn 50 kr.

Bytt ut `return null` med en gruppe knapper. En enkelt knapp kan se slik ut:

```jsx
<button type="button" onClick={() => onSelect("50")}>
  50 kr
</button>
```

Samle knappene i `<div className="quick-amounts" role="group" aria-label="Velg et beløp">...</div>`. Stilen er allerede klar. `type="button"` gjør at et klikk bare fyller inn feltet; det skal ikke registrere et kjøp.

**Akseptansekriterier:**

- [ ] Alle tre beløp vises som knapper.
- [ ] Et klikk oppdaterer feltet og «Da har du igjen».
- [ ] Et klikk endrer ikke selve saldoen eller historikken.
- [ ] Du kan nå og bruke knappene med Tab og Enter eller mellomrom.

Test fra startbalansen: 25 → 425 kr igjen, 50 → 400 kr igjen, 100 → 350 kr igjen. Lag en ny commit når du er fornøyd.

Du kan bruke AI til å få forklart `onClick` eller foreslå en løsning, men be om hjelp til denne ene filen. Les diffen og sjekk kriteriene selv. AI-tilgang er valgfritt.

## Del endringen og få tilbakemelding

1. Velg **Publish Branch** i VS Code. Ved første gangs bruk kan du måtte logge inn på GitHub i nettleseren. Publiser til `origin`, øvingsrepoet du klonet.
2. Åpne repoet på GitHub. Velg **Compare & pull request**, eller **Pull requests → New pull request**. Base er `main`; compare er din branch.
3. Beskriv problemet du løste og hvordan du testet. Repoet har en mal med spørsmålene klare.
4. Be en makker åpne **Files changed** og gi én konkret tilbakemelding, muntlig eller som kommentar.
5. Gjør eventuelt en forbedring lokalt, lag en ny commit og velg **Push**. Samme PR oppdateres.

**Vi gjennomgår PR-ene, men lar være å merge dem til `main` under økten.** Da beholder alle det samme utgangspunktet.

Mangler du skriverettigheter? Be Julie sjekke tilgang. Hvis organisasjonen tillater forks, kan du lage en fork, klone den og sende PR tilbake til originalen. Hvis forks er sperret: fortsett lokalt og vis diffen til en makker, eller jobb på makkerens branch på deres maskin. Du får fortsatt øvd på Git; deling via GitHub kan fullføres når tilgangen er på plass.

## Nivå 3 · Velg én egen forbedring

Avtal akseptansekriteriene med en makker før du begynner. Velg én liten oppgave:

- **Sparemål:** Vis hvor mange uker med 50 kr ukepenger som gjenstår til målet. Rund opp, og vis 0 når målet er nådd. Fra start: 15 uker; etter kjøp på 100 kr: 17 uker.
- **Historikk:** La brukeren skrive en beskrivelse til kjøpet. Bruk en fornuftig standardtekst hvis feltet er tomt.
- **Hurtigknapper:** Marker hvilket beløp som er valgt, også for skjermleser. Håndter at brukeren skriver et annet beløp selv.
- **Utforsk validering:** Prøv 0, −10, 451, tekst og 29,90. Forklar hva appen gjør, og forbedre én melding. Behold sperren som hindrer kjøp over saldoen.

Test selv, les diffen, lag commit og oppdater PR-en. Er du ferdig tidlig? Hjelp noen andre med å forstå deres endring.

## Før du går

Vis én endring og forklar hvorfor den er nyttig. Fortell hva du vil prøve videre. Kan du forklare forskjellen på **lagre**, **commit** og **push** med egne ord?
