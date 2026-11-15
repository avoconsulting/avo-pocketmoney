# Kom i gang · Mac og Windows

Sett av 20–30 minutter før kodeonsdag, gjerne mer hvis du må bestille installasjon eller tilgang på jobbmaskinen. Be Julie om hjelp hvis du står fast. Du kan også jobbe sammen med noen på deres maskin.

## 1. Installer tre verktøy

| Verktøy                       | Hva det brukes til                       | Installer fra                          |
| ----------------------------- | ---------------------------------------- | -------------------------------------- |
| Visual Studio Code            | Åpne, endre og forstå prosjektet         | https://code.visualstudio.com/Download |
| Git                           | Holde orden på endringer og dele dem     | https://git-scm.com/downloads          |
| Node.js 24 LTS, inkludert npm | Kjøre appen og installere prosjektpakker | https://nodejs.org/en/download         |

På Windows: velg Git for Windows. Standardvalgene i installasjonen er normalt tilstrekkelige. På Mac: hvis `git --version` tilbyr installasjon av Command Line Tools, fullfør den eller bruk installasjonsalternativet på Git-nettsiden. Bruk organisasjonens programvareportal hvis det er slik jobbmaskinen din administreres.

Installer Node 24 LTS hvis mulig. Appen krever minst Node 22.12. Du trenger ikke installere React eller Vite manuelt, Docker, Supabase, Visual Studio eller noen VS Code-utvidelser.

Lukk og åpne VS Code på nytt etter installasjon. Velg **Terminal → New Terminal**. Terminalen er et tekstfelt der du kan gi maskinen instruksjoner.

Kjør én linje om gangen:

```sh
node --version
npm --version
git --version
```

**Sjekkpunkt:** Alle tre viser et versjonsnummer. Node viser helst `v24...`. `v22.12.0` eller nyere fungerer også. På Windows: hvis PowerShell stopper `npm.ps1`, bruk **Command Prompt** som terminalprofil i VS Code eller skriv `npm.cmd` i stedet for `npm`. Du trenger ikke endre sikkerhetsinnstillinger.

## 2. Logg inn og lag din egen fork

Åpne https://github.com/avoconsulting/avo-pocketmoney. Repoet er offentlig, så du kan lese guiden uten innlogging. For å dele dine egne endringer trenger du en vanlig, gratis personlig GitHub-konto. Du trenger ikke medlemskap i Avo-organisasjonen eller en betalt GitHub-lisens.

En **fork** er din egen kopi på GitHub. En **klone** er kopien du laster ned til maskinen. Vi lager først en fork og kloner deretter den, slik at du kan laste opp endringer til din egen konto.

1. Opprett en konto på [GitHub](https://github.com/signup) hvis du ikke har en fra før, og fullfør eventuell e-postbekreftelse. Har du allerede en vanlig personlig konto, kan du bruke den.
2. Logg inn og åpne [Avo-repoet](https://github.com/avoconsulting/avo-pocketmoney).
3. Trykk **Fork** øverst på siden.
4. Velg **din personlige konto** under **Owner**, og behold navnet **avo-pocketmoney**. Det holder å kopiere `main` hvis du får dette valget.
5. Velg **Create fork**.

**Sjekkpunkt:** Adressen er nå `https://github.com/DITT-BRUKERNAVN/avo-pocketmoney`. Øverst står ditt brukernavn og **forked from avoconsulting/avo-pocketmoney**. Noter GitHub-brukernavnet ditt; det er ikke nødvendigvis det samme som navnet eller e-postadressen din. `DITT-BRUKERNAVN` i denne guiden er en plassholder du må erstatte.

Har du allerede en fork, åpner du den. Hvis den er gammel: bruk **Sync fork → Update branch** på din forks `main` før du kloner. Spør Julie hvis GitHub melder om konflikt.

Dette er to forskjellige ting:

- **Git** virker lokalt uten GitHub-innlogging.
- **GitHub** brukes når vi deler branches og pull requests.

## 3. Klon din egen fork og åpne den i VS Code

1. På **din fork** i nettleseren: velg **Code → Local → HTTPS**, og kopier adressen. Den skal inneholde ditt brukernavn, ikke `avoconsulting`.
2. Åpne VS Code og kommandopaletten: **Cmd+Shift+P** på Mac eller **Ctrl+Shift+P** på Windows.
3. Søk etter **Git: Clone**, og lim inn adressen du kopierte.
4. Velg en mappe du finner igjen. Velg **Open** når kloningen er ferdig, slik at selve prosjektmappen åpnes i VS Code.
5. Hvis VS Code spør om du stoler på prosjektet, vurder at dette er din kopi av øvingsrepoet Julie har delt.

Hvis GitHub krever innlogging, følg innloggingen i nettleseren. Ikke lim passord eller tilgangstokener inn i kildekoden.

**Alternativ med terminal:** Erstatt `DITT-BRUKERNAVN` før du kjører kommandoene. Velg deretter **File → Open Folder** i VS Code og åpne mappen `avo-pocketmoney` som ble laget. Du trenger ikke ha `code`-kommandoen installert.

```sh
git clone https://github.com/DITT-BRUKERNAVN/avo-pocketmoney.git
cd avo-pocketmoney
```

**Sjekkpunkt:** Du ser `package.json`, `README.md` og mappen `src` i venstremenyen. Åpne **Terminal → New Terminal** i denne prosjektmappen og kjør:

```sh
git remote -v
```

Du skal se `origin` peke til **ditt brukernavn**, med én linje for fetch og én for push. `origin` er Git sitt korte navn på repoet du deler endringene dine med. Hvis det peker til `avoconsulting`, se [hjelpen for deg som allerede klonet originalen](03-git-og-feilsoking.md#jeg-klonet-avo-repoet-direkte).

## 4. Installer prosjektpakkene og start

```sh
npm ci
npm run dev
```

Kjør én kommando om gangen, og vent til `npm ci` er ferdig uten feil før du starter appen. `npm ci` bruker den ferdige pakkelisten og låsefilen. Første gang trenger du internett. Når terminalen viser en **Local**-adresse, åpner du den i nettleseren med **Cmd+klikk** på Mac eller **Ctrl+klikk** på Windows, eller kopierer den inn i adressefeltet. Vanligvis er adressen http://127.0.0.1:5173, men bruk adressen terminalen viser.

La terminalen stå åpen mens du jobber. Stopp appen med **Ctrl+C**, også på Mac. Åpne en ekstra terminal når du trenger å kjøre andre kommandoer.

**Sjekkpunkt:** Bumle viser Alex med **450 kr**. Skriv **299**. Du skal se **151 kr** igjen. Ingenting trekkes før du trykker **Registrer kjøp**. Prøv knappen og deretter **Nullstill demo** nederst på siden.

## 5. Fortell Git hvem du er

Bare hvis Git ber om navn og e-post når du lager din første commit: kjør dette i prosjektmappen, med ditt eget navn og e-post. Verdiene lagres kun for dette repoet.

```sh
git config user.name "Ditt navn"
git config user.email "din-epost@example.com"
```

Bruk gjerne GitHub-adressen merket `noreply` fra **GitHub → Settings → Emails** dersom du ønsker at vanlig e-postadresse ikke skal vises i commits. Dette setter forfatternavnet i historikken; det logger deg ikke inn på GitHub. Vi følger innloggingen i nettleseren ved første push.

## Klar til onsdag?

- [ ] VS Code åpner prosjektet.
- [ ] Node, npm og Git viser versjon.
- [ ] Appen starter, og 450 − 299 gir 151 kr.
- [ ] Du har en fork under din egen GitHub-konto, eller har avtalt en makker.
- [ ] `git remote -v` viser din egen fork som `origin`.

Fortsett med [oppgavene: egen branch, endring og PR](02-oppgaver.md). Du trenger ikke gjøre kodeoppgavene før samlingen.

Står du fast? Send Julie hvilken kommando du kjørte og feilmeldingen du får. Unngå å dele passord eller andre hemmeligheter.

Kilder: [Vite: oppstart og systemkrav](https://vite.dev/guide/), [VS Code: Git-oppstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart), [GitHub: fork og lokal kloning](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).
