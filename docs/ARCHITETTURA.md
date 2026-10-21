# Architettura e costo delle modifiche

[English](en/ARCHITECTURE.md) | **Italiano**

## Che cosa deriva dal sito originale

Astro genera HTML statico; un layout condiviso centralizza lingua, metadati,
navigazione e salto al contenuto. I font sono di sistema, le risorse locali e
il foglio di stampa dedicato. I controlli di link e budget analizzano la build,
mentre axe e Playwright verificano pagine nel browser.

L'estrazione elimina testi personali, illustrazioni e vincoli di deploy.
Sono inclusi esempi in italiano e inglese con documenti distinti, collegamenti
equivalenti e metadati. Se introduci altre lingue, estendi e verifica lo stesso approccio. Non copiare
risultati di audit del sito originale attribuendoli al tuo progetto.

## Prima di aggiungere JavaScript

1. Descrivi il bisogno della persona e il percorso coinvolto.
2. Prova un elemento HTML nativo, una soluzione CSS o la generazione durante la build.
3. Se scegli uno script, documenta cosa resta disponibile quando non arriva o fallisce.
4. Misura nuovi byte, richieste, lavoro CPU e dipendenze.
5. Verifica nomi, ruoli, stati, focus, tastiera e messaggi di errore.
6. Aggiorna il budget con una motivazione e una prova di regressione pertinente.

Zero byte JS è il valore iniziale del template, non una proibizione universale.
Il sito originale aveva un piccolo controller per il tema; qui la preferenza
segue il sistema via CSS. Un selettore manuale è possibile se il suo costo e il
comportamento sono deliberati.

## Dipendenze e build

Astro è una dipendenza eseguita durante la build. Non implica automaticamente un
runtime JavaScript nel browser. Prima di aggiungere un pacchetto verifica
funzione, alternativa nativa, licenza, transitive, manutenzione e luogo di esecuzione.
Conserva il lockfile e valida gli aggiornamenti; evita correzioni forzate senza
esaminare le incompatibilità.

Se il progetto richiede contenuti dinamici, identifica il componente necessario
e il suo fallback. Non perdere di vista costo delle build, frequenza dei job,
cache delle immagini e conservazione degli artefatti.
