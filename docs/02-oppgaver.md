# Fra prototype til samarbeid

Målet er at du kan gjøre, forstå og dele en endring. Begynn på nivå 1. Det er helt fint å bruke hele økten der. Jobb gjerne i par og bytt på tastaturet. En erfaren makker stiller spørsmål og hjelper deg å finne frem.

Appen er en liten versjon av Bumle. Alle data er fiktive, og appen trenger ingen kontoer. Saldo lagres bare mens siden er åpen. Under utvikling kan React bevare eller nullstille tilstanden når du endrer filer; bruk **Nullstill demo** for å starte fra 450 kr.

**Før du begynner:** Følg [oppsettsguiden](01-kom-i-gang.md). Appen skal kjøre lokalt, og `origin` skal peke til **din egen fork**. Appen trenger ingen innlogging, men du bruker GitHub-kontoen din når du deler kode.

Hele flyten er **fork → klon egen fork → egen branch → endring → commit → push til egen fork → PR til Avo**. En branch skiller oppgaven din fra `main`; en fork gir deg et eget repo du kan laste opp til.

## Første steg: lag din egen branch

Klikk på `main` nederst til venstre i VS Code og velg **Create new branch**. Du kan også åpne kommandopaletten med **Cmd+Shift+P / Ctrl+Shift+P** og velge **Git: Create Branch**. Gi den et navn, for eksempel `dittnavn/bedre-simulator`, med ditt navn, små bokstaver og uten mellomrom.

**Hvorfor:** En branch lar deg jobbe med en endring uten å endre det felles utgangspunktet. Lag branchen før du begynner å redigere.

**Sjekk:** Du ser ditt branch-navn nederst til venstre. Ikke velg **Publish Branch** før du er klar til å dele.

Alternativ i terminalen: `git switch -c dittnavn/bedre-simulator`. Bruk enten VS Code-valget eller kommandoen; du trenger ikke gjøre begge deler.

## Nivå 1 · Gjør appen litt bedre

**Oppdrag:** Gjør appen lettere å forstå for et barn som skal vurdere et kjøp.

1. Åpne `src/content.js`. Endre `simulatorTitle` og `simulatorDescription` til noe du mener er tydeligere.
2. Lagre med **Cmd+S / Ctrl+S** og se på appen i nettleseren.
3. Hvis du vil: endre `goalName` og `goalEmoji`, eller velg en annen `--accent` øverst i `src/styles.css`.
4. Åpne **Source Control** i venstremenyen. Klikk på filen du endret og les diffen: hva ble tatt bort og hva ble lagt til?
5. Trykk **+** ved filen for å stage den. Skriv en beskrivende melding, for eksempel `Gjør forklaringen i kjøpssimulatoren tydeligere`, og velg **Commit**.

**Sjekkpunkt:** Endringen vises i nettleseren, og du kan vise den i Git-historikken. Forklar til makkeren: Hva er forskjellen på å lagre en fil og lage en commit?

Hvis VS Code tilbyr å stage alle filer automatisk, velg heller filene du faktisk ønsker å ta med. `node_modules` skal ikke inn i Git.

**Første commit er nok til å øve på hele arbeidsflyten.** Du kan nå gå rett til [Del endringen og få tilbakemelding](#del-endringen-og-få-tilbakemelding). Du trenger ikke fullføre nivå 2 for å sende en PR.

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

### 1. Test og last opp til din egen fork

1. Prøv endringen i nettleseren og les diffen. Åpne en **ekstra terminal** med **Terminal → New Terminal** i prosjektmappen. La terminalen med `npm run dev` fortsette å kjøre.
2. Kjør `npm test` og deretter `npm run build`. Begge skal fullføre uten feil. En vellykket bygging alene bekrefter ikke at knappene gjør riktig ting; sjekk også akseptansekriteriene i nettleseren.
3. Kontroller at filene er lagret og committet, og at du står på oppgavebranchen. Velg **Publish Branch** i Source Control. Hvis du blir spurt om remote, velg **origin**, som skal være **din egen fork**. Ikke velg å opprette et nytt repo med **Publish to GitHub**; du har allerede en fork.
4. Ved første push kan du bli bedt om å logge inn eller godkjenne Git-tilgang i nettleseren. Bruk **samme personlige konto som eier forken**, og følg innloggingen tilbake til VS Code. Hvis terminalen ber om GitHub-passord i stedet, se [feilsøkingen](03-git-og-feilsoking.md).

Alternativ til **Publish Branch**, i terminalen:

```sh
git push -u origin HEAD
```

`HEAD` betyr branchen du står på. Kommandoen laster opp commitene og kobler lokal branch til branchen i din fork. **Sjekkpunkt:** Åpne **din fork** på GitHub, velg oppgavebranchen i branch-menyen og finn din commit og endrede fil. Push har ennå ikke endret noe i Avo-repoet.

### 2. Opprett pull request til Avo

1. Åpne [Avo-repoets PR-side](https://github.com/avoconsulting/avo-pocketmoney/pulls), og velg **New pull request**. Hvis du bruker en snarvei som **Compare & pull request**, kontroller de samme feltene nedenfor.
2. Velg **compare across forks** dersom din fork ikke vises som et valg.
3. Sett feltene slik:

| Felt                            | Velg                                                                |
| ------------------------------- | ------------------------------------------------------------------- |
| **base repository**             | `avoconsulting/avo-pocketmoney` – repoet du foreslår en endring til |
| **base**                        | `main`                                                              |
| **head repository / head fork** | `DITT-BRUKERNAVN/avo-pocketmoney` – din fork                        |
| **compare**                     | Din oppgavebranch, for eksempel `dittnavn/bedre-simulator`          |

4. Les **Files changed** eller diffen på sammenligningssiden. Den skal inneholde dine endringer. Ser du ingen forskjell, sjekk at du valgte oppgavebranchen og at du faktisk pushet commitene.
5. Velg **Create pull request**, og skriv en kort tittel. Fyll ut malen: Hva forbedret du, og hvordan sjekket du resultatet? Hvis malen ikke kommer opp, skriv de samme to punktene selv.
6. Velg **Create pull request** for å sende forslaget. Innstillingen for å la vedlikeholdere redigere branchen din er valgfri; den er ikke nødvendig for øvelsen.

**Sjekkpunkt:** PR-en har et nummer, har status **Open**, og adressen begynner med `https://github.com/avoconsulting/avo-pocketmoney/pull/`. Øverst vises en foreslått endring **til Avo sin `main` fra din fork og branch**. En PR er et forslag; koden er ikke flettet inn ennå.

### 3. Gjennomgå i par og oppdater samme PR

1. Del PR-lenken med en makker. Be makkeren åpne **Files changed**, forklare hva de tror endringen gjør og gi ett konkret forbedringsforslag. Muntlig tilbakemelding holder; formell godkjenning er ikke nødvendig.
2. Gjør eventuelt en forbedring lokalt **på den samme branchen**. Lagre, test, stage og lag en ny commit.
3. Velg **Push** fra menyen i Source Control, eller kjør `git push` i terminalen. Åpne PR-en igjen og sjekk at den nye commiten vises. Du skal ikke opprette en ny PR for denne oppdateringen.

GitHub-kontrollene kan trenge godkjenning fra Julie første gang noen bidrar fra en fork. Det er ikke en feil i koden. Be henne se på det; bruk også de lokale sjekkene mens dere venter. Hvis en kontroll faktisk feiler, åpne detaljene og les feilen.

**Vi gjennomgår PR-ene, men lar være å merge dem til `main` under økten.** Da beholder alle det samme utgangspunktet.

Du trenger ikke skriverettigheter i Avo-repoet for denne arbeidsflyten. Får du 403 ved push, sjekk at `origin` peker til din fork og at du bruker kontoen som eier den. Hvis nett eller innlogging stopper deg, fortsett lokalt og vis diffen til en makker. Se [Git-hjelpen](03-git-og-feilsoking.md).

## Nivå 3 · Velg én egen forbedring

Avtal akseptansekriteriene med en makker før du begynner. Velg én liten oppgave:

- **Sparemål:** Vis hvor mange uker med 50 kr ukepenger som gjenstår til målet. Rund opp, og vis 0 når målet er nådd. Fra start: 15 uker; etter kjøp på 100 kr: 17 uker.
- **Historikk:** La brukeren skrive en beskrivelse til kjøpet. Bruk en fornuftig standardtekst hvis feltet er tomt.
- **Hurtigknapper:** Marker hvilket beløp som er valgt, også for skjermleser. Håndter at brukeren skriver et annet beløp selv.
- **Utforsk validering:** Prøv 0, −10, 451, tekst og 29,90. Forklar hva appen gjør, og forbedre én melding. Behold sperren som hindrer kjøp over saldoen.

Test selv, les diffen, lag commit og oppdater PR-en. Er du ferdig tidlig? Hjelp noen andre med å forstå deres endring.

## Før du går

Vis én endring og forklar hvorfor den er nyttig. Fortell hva du vil prøve videre. Kan du forklare forskjellen på **fork og branch**, og på **lagre, commit, push og PR** med egne ord?

## Referanser

[GitHub: bidra via en fork](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) · [GitHub: opprett en PR fra en fork](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork).
