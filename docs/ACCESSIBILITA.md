# Accessibilità: verifiche per ogni modifica

[English](en/ACCESSIBILITY.md) | **Italiano**

## Controlli inclusi

`npm test` valida HTML, link, budget e pagine con axe. La prova senza JavaScript
controlla h1 e salto al contenuto. Sono controlli utili, con una copertura limitata;
non attestano da soli conformità a [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Scheda manuale da compilare

Per ogni pagina e stato nuovo registra data, browser, tecnologia assistiva,
versione, viewport, esito e problemi aperti.

- [ ] Titolo pagina, lingua, h1 e gerarchia spiegano il contenuto.
- [ ] Il primo Tab raggiunge il salto al contenuto e l'attivazione funziona.
- [ ] Tab e Shift+Tab seguono un ordine comprensibile con focus visibile.
- [ ] Link e controlli si attivano con i comandi attesi senza trappole.
- [ ] Uno screen reader permette di trovare sezioni e completare il percorso.
- [ ] Tema chiaro e scuro mantengono leggibili testo, link, focus e controlli.
- [ ] Zoom al 200% e 400% e viewport stretta non nascondono contenuti o comandi.
- [ ] Immagini hanno alternative adeguate; i contenuti decorativi non aggiungono rumore.
- [ ] Form, se aggiunti, hanno etichette, istruzioni ed errori comprensibili.
- [ ] Lettura e navigazione restano disponibili senza JavaScript.
- [ ] Animazioni, se aggiunte, rispettano le esigenze di movimento e pausa.

Prova anche stati espansi, errori e contenuti lunghi. Se aggiungi lingue, verifica
lunghezza delle etichette, caratteri e ordine di lettura. Per un problema annota
passi, risultato osservato, risultato atteso e criterio pertinente; chiudilo
ripetendo la prova dopo la correzione.

Per ampliare le verifiche: [strumenti WAI](https://www.w3.org/WAI/test-evaluate/tools/),
[WAVE](https://wave.webaim.org/), [axe-core](https://github.com/dequelabs/axe-core).

Per le prove su Linux includi [Orca](https://help.gnome.org/orca/): registra
ambiente desktop, browser, versioni e configurazione della tastiera. Verifica
lettura, navigazione per titoli e link, nomi e stati dei controlli e completamento
del percorso. Il manuale del toolkit contiene una procedura dedicata a Orca.
La sola navigazione con Tab non verifica gli annunci dello screen reader.
