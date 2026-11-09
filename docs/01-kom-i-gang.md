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

## 2. Sjekk GitHub-tilgang

Logg inn på GitHub i nettleseren og åpne https://github.com/avoconsulting/avo-pocketmoney. Du skal se prosjektfilene. Får du 404 eller en forespørsel om organisasjonstilgang/SSO, si fra til Julie før økten. Du kan lese et repo uten nødvendigvis å ha lov til å laste opp endringer.

Dette er to forskjellige ting:

- **Git** virker lokalt uten GitHub-innlogging.
- **GitHub** brukes når vi deler branches og pull requests.

## 3. Hent prosjektet i VS Code

1. Åpne kommandopaletten: **Cmd+Shift+P** på Mac eller **Ctrl+Shift+P** på Windows.
2. Søk etter **Git: Clone**.
3. Lim inn `https://github.com/avoconsulting/avo-pocketmoney.git`.
4. Velg en mappe du finner igjen, og trykk **Open** når kloningen er ferdig.
5. Hvis VS Code spør om du stoler på prosjektet, vurder at adressen er riktig og at dette er øvingsrepoet Julie har delt.

Hvis GitHub krever innlogging, følg innloggingen i nettleseren. Ikke lim passord eller tilgangstokener inn i kildekoden.

Alternativ med terminal:

```sh
git clone https://github.com/avoconsulting/avo-pocketmoney.git
cd avo-pocketmoney
```

**Sjekkpunkt:** Du ser `package.json`, `README.md` og mappen `src` i venstremenyen. Åpne terminalen i denne prosjektmappen.

## 4. Installer prosjektpakkene og start

```sh
npm ci
npm run dev
```

`npm ci` bruker den ferdige pakkelisten og låsefilen. Første gang trenger du internett. Når terminalen viser en **Local**-adresse, åpner du den i nettleseren. Vanligvis er adressen http://127.0.0.1:5173, men bruk adressen terminalen viser.

La terminalen stå åpen mens du jobber. Stopp appen med **Ctrl+C**, også på Mac. Åpne en ekstra terminal når du trenger å kjøre andre kommandoer.

**Sjekkpunkt:** Bumle viser Alex med **450 kr**. Skriv **299**. Du skal se **151 kr** igjen. Ingenting trekkes før du trykker **Registrer kjøp**. Prøv knappen og deretter **Nullstill demo** nederst på siden.

## 5. Fortell Git hvem du er

Bare hvis Git ber om navn og e-post når du lager din første commit: kjør dette i prosjektmappen, med ditt eget navn og e-post. Verdiene lagres kun for dette repoet.

```sh
git config user.name "Ditt navn"
git config user.email "din-epost@example.com"
```

Bruk gjerne GitHub-adressen merket `noreply` fra **GitHub → Settings → Emails** dersom du ønsker at vanlig e-postadresse ikke skal vises i commits.

## Klar til onsdag?

- [ ] VS Code åpner prosjektet.
- [ ] Node, npm og Git viser versjon.
- [ ] Appen starter, og 450 − 299 gir 151 kr.
- [ ] Du får åpnet GitHub-repoet, eller har avtalt en makker.

Står du fast? Send Julie hvilken kommando du kjørte og feilmeldingen du får. Unngå å dele passord eller andre hemmeligheter.

Kilder: [Vite: oppstart og systemkrav](https://vite.dev/guide/), [VS Code: Git-oppstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart).
