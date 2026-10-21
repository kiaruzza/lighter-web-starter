# 🪶 Lighter Web Starter

[English](README.md) | **Italiano**

Un template open source per creare un sito statico leggero, accessibile e senza
JavaScript client-side non necessario. Estratto dal sito Astro di Chiara Corrado:
[origine e adattamenti](ORIGINE.md). Licenza [MIT](LICENSE).

## 📚 Guide del progetto

Il [manuale del template](docs/README.md) spiega architettura, decisioni sul
JavaScript, accessibilità, immagini, rilascio e sostenibilità. Il toolkit
complementare sviluppa le guide a WSG, EcoIndex e agli strumenti di audit.

## 🚀 Avvio rapido

Richiede Node.js 22.12 o successivo e npm. Node serve per sviluppare e generare
le pagine; sul server basta un hosting statico.

```sh
npm ci
npm run dev
```

Apri l'indirizzo indicato da Astro. Per generare e vedere la versione pubblicabile:

```sh
npm run build
npm run preview
```

Pubblica il contenuto di `dist/` alla radice del dominio. Configura l'hosting
per usare `404.html` come risposta con stato HTTP 404, abilita HTTPS e verifica
compressione e cache sul sito pubblicato. Il template non contiene un deploy
legato a un fornitore. I percorsi assoluti presuppongono la radice del dominio:
per un sottopercorso occorre configurare `base` e aggiornare URL e controlli.

## Personalizzazione

1. Imposta il dominio in `astro.config.mjs`: sostituisci `https://example.com`.
2. Modifica nomi, descrizioni, email, contenuti e percorsi localizzati in `src/data/site.ts`.
3. Sostituisci le pagine in `src/pages/` e i componenti condivisi; aggiorna la navigazione nel layout.
4. Quando aggiungi pagine indicizzabili, aggiorna `src/pages/sitemap.xml.ts`.
5. Personalizza colori e spaziature in `src/styles/site.css`, verificando il contrasto nei due temi.
6. Sostituisci `public/favicon.svg`. Per immagini, vedi [la guida](docs/IMMAGINI.md).

Le pagine italiane sono alla radice, le inglesi sotto `/en/`, con collegamenti
tra pagine equivalenti. Il layout include lingua, metadati, canonical, alternate
hreflang, navigazione con pagina corrente, salto al contenuto e foglio di stampa.
Le piccole icone SVG affiancano il testo e sono nascoste alle tecnologie assistive. Il tema segue il sistema via CSS.
Il pannello di esempio usa `details` e `summary`, senza script. Non sono presenti
font remoti, analytics o contenuti personali. Non sono incluse illustrazioni del sito originale.

## ✅ Verifiche

```sh
npx playwright install chromium
npm test
npm run measure:weight
```

Su Linux, se mancano librerie di sistema: `npx playwright install --with-deps chromium`.
`npm test` genera la build, valida l'HTML, controlla link interni e frammenti,
applica il budget a tutte le pagine e avvia axe nel browser. Verifica inoltre
presenza dell'h1 e salto al contenuto con JavaScript disabilitato, oltre a lingua,
metadati e collegamenti tra traduzioni.
Il workflow GitHub Actions esegue gli stessi controlli.

Le soglie in `budget.json` sono scelte iniziali, non standard universali:
25 KiB HTML, 20 KiB CSS, zero byte JS, 100 KiB font, 100 KiB per immagine,
200 KiB totali, 15 risorse locali e nessuna risorsa esterna rilevata.
1 KiB = 1024 byte. Una dipendenza usata durante la build non è automaticamente
JavaScript inviato al browser.

Il report `reports/page-weight.json` riguarda i file generati. gzip e Brotli
sono stime locali; il numero di risorse non equivale alle richieste di una visita.
L'analizzatore usa espressioni regolari, conta l'ultimo candidato di ogni srcset
ed entrambe le alternative AVIF/WebP. Non interpreta media query, import JS,
import CSS, script dinamici o tutte le dipendenze CSS annidate; gli URL assoluti
sono classificati come esterni anche se appartengono al sito. Conferma il
trasferimento reale in Network. Non sommare CSS/JS inline all'HTML: sono già inclusi.

Completa i controlli automatici con tastiera, screen reader, zoom al 200% e 400%,
viewport stretta, preferenze di tema e stampa. Nessun risultato automatico
certifica da solo la conformità WCAG.

Per misurare un sito esistente e organizzare gli interventi usa il progetto
complementare [Web Weight Toolkit](https://github.com/kiaruzza/web-weight-toolkit).
