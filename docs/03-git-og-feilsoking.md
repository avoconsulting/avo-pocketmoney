# Git-hjelp og feilsøking

## Begreper du får bruk for

| Begrep            | Betyr                                                                |
| ----------------- | -------------------------------------------------------------------- |
| Repository / repo | Prosjektfilene og historikken Git holder orden på.                   |
| Fork              | Din egen kopi av Avo-repoet på GitHub, under din konto.              |
| Klone             | Laste ned repoet med Git-historikken til maskinen din.               |
| Branch            | En egen utviklingslinje for endringen din.                           |
| Diff              | Forskjellen mellom to versjoner; les denne før commit.               |
| Commit            | Et lagret øyeblikksbilde i lokal Git-historikk.                      |
| Push / pull       | Laste commits opp / hente og integrere andres commits.               |
| Pull request / PR | Be om at en branch blir vurdert og eventuelt flettet inn i en annen. |

**Lagre** oppdaterer filen. **Stage** velger hva neste commit skal inneholde. **Commit** lagrer det i lokal historikk. **Push** deler commitene på GitHub. Git og GitHub er forskjellige ting.

I opplegget finnes koden tre steder:

| Sted                                        | Rolle                                                                     |
| ------------------------------------------- | ------------------------------------------------------------------------- |
| `avoconsulting/avo-pocketmoney` på GitHub   | Felles original og mottaker av PR-en din. Kalles ofte upstream.           |
| `DITT-BRUKERNAVN/avo-pocketmoney` på GitHub | Din fork. Hit pusher du endringene.                                       |
| Prosjektmappen i VS Code                    | Lokal klone av din fork. Her redigerer og committer du på en egen branch. |

`origin` er navnet Git bruker på adressen til **din fork**. Du trenger ikke legge til en egen remote kalt `upstream` for å gjøre oppgavene; mottaker for PR-en velges i GitHub.

## Samme arbeidsflyt i terminalen

Bruk gjerne VS Code-grensesnittet. Dette er et oppslagsverk, ikke en ekstra liste kommandoer alle må lære. Lag først din fork og klon den som beskrevet i [oppsettsguiden](01-kom-i-gang.md). Kjør kommandoene i den lokale prosjektmappen. Erstatt `dittnavn` med ditt eget navn.

Før du begynner: `git remote -v` skal vise din fork som `origin`. Lag så branchen:

```sh
git switch -c dittnavn/tydeligere-tekst
```

Gjør og lagre en endring i `src/content.js` i editoren. Fortsett deretter med én kommando om gangen. Stopp og les feilen hvis en kommando feiler:

```sh
git status
git diff
git add src/content.js
git diff --staged
git commit -m "Gjør forklaringen i simulatoren tydeligere"
npm test
npm run build
git push -u origin HEAD
```

Push laster bare opp til din fork. Følg deretter [stegene for å opprette PR til Avo](02-oppgaver.md#2-opprett-pull-request-til-avo). Etter neste endring på samme branch: stage filene du vil ta med, lag en commit, test og bruk `git push`. Den åpne PR-en oppdateres automatisk. Se hvilken branch du er på før du deler. Ikke bruk `--force`.

## Jeg klonet Avo-repoet direkte

Du trenger ikke slette mappen, klone på nytt eller miste endringene dine:

1. Lag en fork under din egen konto i nettleseren, som beskrevet i oppsettsguiden.
2. Kjør `git remote -v` i den eksisterende prosjektmappen. Hvis `origin` peker til `avoconsulting/avo-pocketmoney`, endrer du adressen til din egen fork med kommandoen nedenfor. Erstatt `DITT-BRUKERNAVN` med ditt GitHub-brukernavn.

```sh
git remote set-url origin https://github.com/DITT-BRUKERNAVN/avo-pocketmoney.git
git remote -v
```

**Sjekk:** Både fetch- og push-adressen for `origin` viser ditt brukernavn. Dette endrer bare adressen; filene og commitene dine beholdes.

Fortsett på oppgavebranchen din. Har du allerede gjort endringer eller laget commits på lokal `main`, lag en ny branch med `git switch -c dittnavn/bedre-simulator` før du pusher; endringene følger med. Ikke opprett branchen på nytt hvis du allerede står på den. Første push fra oppgavebranchen er `git push -u origin HEAD`.

## Vanlige stoppere

| Symptom                                              | Prøv dette                                                                                                                                                                                                            |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node` eller `npm` finnes ikke                       | Installer Node.js og åpne VS Code på nytt.                                                                                                                                                                            |
| PowerShell blokkerer `npm.ps1`                       | Velg Command Prompt-profil, eller skriv `npm.cmd ci` og `npm.cmd run dev`.                                                                                                                                            |
| `git` finnes ikke                                    | Installer Git og åpne VS Code på nytt. På Mac kan Command Line Tools mangle.                                                                                                                                          |
| GitHub viser 404                                     | Åpne originaladressen fra oppsettsguiden. Originalen er offentlig og krever ikke Avo-medlemskap. Sjekk stavemåten, og at din fork faktisk er opprettet hvis adressen inneholder ditt brukernavn.                      |
| `Permission denied` eller 403 ved push               | Kjør `git remote -v`. `origin` skal være din fork, og du må være innlogget som kontoen som eier den. Se avsnittet over hvis du klonet Avo direkte.                                                                    |
| Git ber om passord, men GitHub avviser det           | GitHub-kontopassord brukes ikke til HTTPS-push. Prøv **Push** fra VS Code og følg nettleserinnloggingen. Be en veileder hjelpe med Git-innlogging hvis ingen slik flyt vises; ikke legg passord eller tokens i filer. |
| Du er logget inn med feil konto ved push             | GitHub i nettleseren og Git på maskinen kan bruke forskjellige kontoer. Be en veileder hjelpe med Git-legitimasjon for riktig konto; det er ikke alltid nok å bytte nettleserfane.                                    |
| Fork-knappen viser at du allerede har en kopi        | Åpne forken under din egen konto. Du trenger bare én fork til opplegget.                                                                                                                                              |
| «There isn't anything to compare» ved PR             | Sjekk at du har committet og pushet, og velg din oppgavebranch som compare. Base skal være Avo-repoets `main`.                                                                                                        |
| PR-en havnet i din egen fork                         | Lukk den feilrettede PR-en uten å merge, og lag en ny med Avo som base repository. Commitene dine beholdes.                                                                                                           |
| GitHub-kontroller venter på godkjenning              | Første bidrag fra en fork kan kreve at Julie godkjenner kjøring. Vis henne PR-en. Lokale tester kan kjøres mens du venter.                                                                                            |
| «The current branch has no upstream branch» ved push | På oppgavebranchen, kjør `git push -u origin HEAD` én gang. Her betyr upstream branch hvilken branch Git skal pushe til, ikke at du skal pushe til Avo.                                                               |
| `npm ci` sier at `package.json` mangler              | Terminalen må stå i prosjektmappen `avo-pocketmoney`. Bruk `pwd` på Mac eller `cd` uten argument på Command Prompt.                                                                                                   |
| `npm ci` feiler på nedlasting                        | Sjekk nett/VPN og organisasjonens pakkeregister med en veileder. Ikke slå av sertifikatkontroll.                                                                                                                      |
| Node-versjonen er for gammel                         | Installer Node 24 LTS og åpne terminalen på nytt.                                                                                                                                                                     |
| Port 5173 er opptatt                                 | Vite velger normalt neste port. Bruk Local-adressen som faktisk vises.                                                                                                                                                |
| Nettleseren får ikke kontakt                         | Sjekk at `npm run dev` fortsatt kjører og at du bruker riktig adresse.                                                                                                                                                |
| Endringen vises ikke                                 | Lagre filen, sjekk riktig nettleserfane og se etter feil i terminalen.                                                                                                                                                |
| Rød feilmelding etter JSX-endring                    | Les filnavn og linjenummer. Sjekk anførselstegn, parenteser og at HTML-lignende elementer lukkes.                                                                                                                     |
| Git ber om identitet                                 | Sett `git config user.name` og `git config user.email` som beskrevet i oppsettsguiden.                                                                                                                                |
| Ingen endringer i Source Control                     | Har du lagret? Er riktig mappe åpen? Er endringen allerede committet?                                                                                                                                                 |

## Angre med forståelse

- **Ikke lagret:** Cmd+Z / Ctrl+Z i editoren.
- **Lagt til staging ved en feil:** Trykk minus ved filen i Source Control. Filendringen beholdes.
- **Vil sammenligne med sist:** Klikk på filen i Source Control og les diffen.
- **Allerede committet:** Be gjerne en veileder vise hvordan en ny commit kan rette opp eller reversere endringen. Unngå å omskrive historikk andre bruker.

**Discard Changes** sletter lokale endringer i de valgte filene. Bruk det bare hvis du forstår hva du kaster. Be om hjelp før `reset --hard`, `clean` eller force-push.

## Hvis du mister tråden

Stopp og vis en veileder hva du ser. Du kan alltid fortsette med nivå 1, jobbe med en makker eller be Julie om et løsningsforslag. Ingen trenger å holde samme tempo.

Referanser: [Git i VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview), [GitHub: pull requests](https://docs.github.com/en/pull-requests).
