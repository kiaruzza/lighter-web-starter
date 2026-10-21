# Images: send only what is needed

**English** | [Italiano](../IMMAGINI.md)

Keep local originals in `src/assets/` and use Astro's `Picture` to generate
variants at build time. Do not preload every image. Adapt this example after
adding a file named `src/assets/example.png`:

```astro
---
import { Picture } from 'astro:assets';
import image from '../assets/example.png';
---
<Picture
  src={image}
  alt="Description of the image's meaningful content"
  widths={[480, 768, 960]}
  sizes="(max-width: 50rem) calc(100vw - 2rem), 40rem"
  formats={['avif']}
  fallbackFormat="webp"
  quality={55}
  loading="lazy"
  decoding="async"
/>
```

For the main image visible immediately, use `loading="eager"`. Consider
`fetchpriority="high"` only if it is an LCP candidate. For a decorative image,
use `alt=""`. Keep intrinsic dimensions to reserve layout space.
Check which variant the browser actually downloads.

Quality 55 is a starting point, not a rule. Compare format, pixel dimensions
and quality in Squoosh, then assess the result at its display size.
A smaller file that makes text unreadable is not an improvement.
