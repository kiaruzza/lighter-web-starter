# ✅ Qualità e rilascio

[English](en/RELEASE.md) | **Italiano**

## Prima della build pubblicabile

- [ ] Sostituisci dominio, nome, email, descrizioni e favicon di esempio.
- [ ] Rivedi contenuti, titoli, navigazione e sitemap per le pagine effettive.
- [ ] Controlla diritti delle risorse e presenza di dati riservati.
- [ ] Esegui `npm ci`, installa Chromium per Playwright ed esegui `npm test`.
- [ ] Completa la scheda manuale di accessibilità.
- [ ] Esamina `npm run measure:weight`: una soglia superata richiede una decisione.

La build è `dist/`. Il report riguarda i file generati e stima la compressione;
non misura le impostazioni del server, il trasferimento reale o emissioni.
Le categorie inline sono già comprese nell'HTML e non vanno sommate di nuovo.

## Sul dominio definitivo

- [ ] HTTPS e redirect arrivano al dominio scelto senza catene inutili.
- [ ] HTML e risorse sono serviti con Content-Type corretto.
- [ ] Compressione e cache funzionano, anche alla visita successiva.
- [ ] La cache lunga riguarda file versionati; gli aggiornamenti HTML restano disponibili.
- [ ] Un percorso inesistente restituisce HTTP 404 e una pagina utile.
- [ ] Canonical, robots e sitemap indicano il dominio pubblicato.
- [ ] Network non mostra integrazioni inattese o risorse mancanti.
- [ ] Lighthouse e percorso manuale sono ripetuti sulle pagine rappresentative.

Il toolkit complementare fornisce procedure curl, misurazione Network con tre
ripetizioni, Lighthouse CI e importazione di risultati EcoIndex esistenti.
Conserva condizioni e report, evitando di sostituire i test d'uso con un voto.

## Manutenzione

Assegna proprietari a contenuti e controlli, pianifica revisione di dipendenze,
link, fornitori e dichiarazioni. Limita conservazione di log, build e report in
base alle necessità reali. Una modifica editoriale semplice non richiede tutte
le scansioni esterne a ogni commit.
