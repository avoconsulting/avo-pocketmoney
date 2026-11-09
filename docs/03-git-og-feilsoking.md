# Git-hjelp og feilsøking

## Begreper du får bruk for

| Begrep            | Betyr                                                                |
| ----------------- | -------------------------------------------------------------------- |
| Repository / repo | Prosjektfilene og historikken Git holder orden på.                   |
| Branch            | En egen utviklingslinje for endringen din.                           |
| Diff              | Forskjellen mellom to versjoner; les denne før commit.               |
| Commit            | Et lagret øyeblikksbilde i lokal Git-historikk.                      |
| Push / pull       | Laste commits opp / hente og integrere andres commits.               |
| Pull request / PR | Be om at en branch blir vurdert og eventuelt flettet inn i en annen. |

**Lagre** oppdaterer filen. **Stage** velger hva neste commit skal inneholde. **Commit** lagrer det i lokal historikk. **Push** deler commitene på GitHub. Git og GitHub er forskjellige ting.

## Samme arbeidsflyt i terminalen

Bruk gjerne VS Code-grensesnittet. Dette er et oppslagsverk, ikke en ekstra liste kommandoer alle må lære.

```sh
git switch -c dittnavn/tydeligere-tekst
git status
git diff
git add src/content.js
git diff --staged
git commit -m "Gjør forklaringen i simulatoren tydeligere"
git push -u origin HEAD
```

Etter neste endring: stage filene du vil ta med, lag en commit og bruk `git push`. Se hvilken branch du er på før du deler. Ikke bruk `--force`.

## Vanlige stoppere

| Symptom                                 | Prøv dette                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `node` eller `npm` finnes ikke          | Installer Node.js og åpne VS Code på nytt.                                                                          |
| PowerShell blokkerer `npm.ps1`          | Velg Command Prompt-profil, eller skriv `npm.cmd ci` og `npm.cmd run dev`.                                          |
| `git` finnes ikke                       | Installer Git og åpne VS Code på nytt. På Mac kan Command Line Tools mangle.                                        |
| GitHub viser 404                        | Sjekk riktig konto og eventuell organisasjons-SSO. Be Julie sjekke medlemskap/tilgang.                              |
| `Permission denied` eller 403 ved push  | Du kan ha lesetilgang uten skrivetilgang. Be Julie sjekke, eller jobb lokalt/i par.                                 |
| `npm ci` sier at `package.json` mangler | Terminalen må stå i prosjektmappen `avo-pocketmoney`. Bruk `pwd` på Mac eller `cd` uten argument på Command Prompt. |
| `npm ci` feiler på nedlasting           | Sjekk nett/VPN og organisasjonens pakkeregister med en veileder. Ikke slå av sertifikatkontroll.                    |
| Node-versjonen er for gammel            | Installer Node 24 LTS og åpne terminalen på nytt.                                                                   |
| Port 5173 er opptatt                    | Vite velger normalt neste port. Bruk Local-adressen som faktisk vises.                                              |
| Nettleseren får ikke kontakt            | Sjekk at `npm run dev` fortsatt kjører og at du bruker riktig adresse.                                              |
| Endringen vises ikke                    | Lagre filen, sjekk riktig nettleserfane og se etter feil i terminalen.                                              |
| Rød feilmelding etter JSX-endring       | Les filnavn og linjenummer. Sjekk anførselstegn, parenteser og at HTML-lignende elementer lukkes.                   |
| Git ber om identitet                    | Sett `git config user.name` og `git config user.email` som beskrevet i oppsettsguiden.                              |
| Ingen endringer i Source Control        | Har du lagret? Er riktig mappe åpen? Er endringen allerede committet?                                               |

## Angre med forståelse

- **Ikke lagret:** Cmd+Z / Ctrl+Z i editoren.
- **Lagt til staging ved en feil:** Trykk minus ved filen i Source Control. Filendringen beholdes.
- **Vil sammenligne med sist:** Klikk på filen i Source Control og les diffen.
- **Allerede committet:** Be gjerne en veileder vise hvordan en ny commit kan rette opp eller reversere endringen. Unngå å omskrive historikk andre bruker.

**Discard Changes** sletter lokale endringer i de valgte filene. Bruk det bare hvis du forstår hva du kaster. Be om hjelp før `reset --hard`, `clean` eller force-push.

## Hvis du mister tråden

Stopp og vis en veileder hva du ser. Du kan alltid fortsette med nivå 1, jobbe med en makker eller be Julie om et løsningsforslag. Ingen trenger å holde samme tempo.

Referanser: [Git i VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview), [GitHub: pull requests](https://docs.github.com/en/pull-requests).
