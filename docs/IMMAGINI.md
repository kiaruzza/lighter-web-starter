# Immagini: inviare solo ciò che serve

[English](en/IMAGES.md) | **Italiano**

Conserva gli originali locali in `src/assets/` e usa `Picture` di Astro per
produrre le varianti durante la build. Non precaricare tutte le immagini.
Esempio da adattare dopo aver aggiunto un file `src/assets/esempio.png`:

```astro
---
import { Picture } from 'astro:assets';
import immagine from '../assets/esempio.png';
---
<Picture
  src={immagine}
  alt="Descrizione del contenuto significativo dell'immagine"
  widths={[480, 768, 960]}
  sizes="(max-width: 50rem) calc(100vw - 2rem), 40rem"
  formats={['avif']}
  fallbackFormat="webp"
  quality={55}
  loading="lazy"
  decoding="async"
/>
```

Per l'immagine principale visibile subito usa `loading="eager"`; valuta
`fetchpriority="high"` solo se è candidata LCP. Per un'immagine decorativa usa
`alt=""`. Mantieni dimensioni intrinseche per riservare spazio nel layout.
Controlla nel browser quale variante viene effettivamente scaricata.

La qualità 55 è un punto di partenza, non una regola. Confronta in Squoosh
formato, dimensioni in pixel e qualità, poi valuta il risultato alla dimensione
di utilizzo. Un file più piccolo che rende il testo illeggibile non è un miglioramento.
