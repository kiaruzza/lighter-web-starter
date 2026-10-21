export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Page = 'home' | 'project' | 'notFound';

export const paths: Record<Locale, Record<Page, string>> = {
  it: { home: '/', project: '/progetto/', notFound: '/404.html' },
  en: { home: '/en/', project: '/en/project/', notFound: '/en/404/' },
};
export const site = { email: 'hello@example.com' };
export const copy = {
  it: {
    name: 'Un sito più leggero',
    description: 'Un esempio di sito statico essenziale, leggibile e accessibile.',
    skip: 'Vai al contenuto', navigation: 'Navigazione principale', languages: 'Lingua',
    home: 'Home', project: 'Il progetto',
    footer: 'Costruito con HTML, CSS e attenzione alle risorse.',
    headline: 'Più spazio ai contenuti, meno peso alle pagine.',
    lede: 'Un punto di partenza per pubblicare un sito statico leggero e leggibile.',
    principles: 'Tre scelte concrete',
    choices: [
      'HTML generato durante la build, pronto anche senza JavaScript.',
      'Font di sistema e risorse locali, senza richieste a servizi esterni.',
      'Controlli automatici affiancati a prove con tastiera e browser.',
    ],
    start: 'Da dove iniziare', customize: 'Sostituisci questi testi e personalizza colori e navigazione.',
    discover: 'Scopri come è costruito il progetto', contact: 'Scrivici',
    projectDescription: 'Come funziona questo template statico e quali scelte puoi adattare.',
    origin: 'Questo template deriva dal sito di Chiara Corrado. Conserva le scelte riutilizzabili e propone contenuti di esempio.',
    native: 'Interazioni native', question: 'Serve JavaScript per leggere il sito?',
    answer: 'No. Navigazione, contenuti e questo pannello funzionano con HTML nativo.',
    budget: 'Un budget da discutere',
    budgetCopy: 'Le soglie in budget.json aiutano a intercettare le regressioni. Vanno adattate alle esigenze del progetto.',
    back: 'Torna alla home', notFound: 'Pagina non trovata', moved: 'Il contenuto potrebbe essere stato spostato.',
  },
  en: {
    name: 'A lighter website',
    description: 'An example of a simple, readable and accessible static website.',
    skip: 'Skip to content', navigation: 'Main navigation', languages: 'Language',
    home: 'Home', project: 'The project',
    footer: 'Built with HTML, CSS and care for resources.',
    headline: 'More room for content, less weight on the page.',
    lede: 'A starting point for publishing a lightweight, readable static website.',
    principles: 'Three concrete choices',
    choices: [
      'HTML generated at build time, ready even without JavaScript.',
      'System fonts and local resources, without requests to external services.',
      'Automated checks alongside keyboard and browser testing.',
    ],
    start: 'Where to start', customize: 'Replace this text and customize colors and navigation.',
    discover: 'Discover how the project is built', contact: 'Get in touch',
    projectDescription: 'How this static template works and which choices you can adapt.',
    origin: "This template derives from Chiara Corrado's website. It keeps reusable choices and provides example content.",
    native: 'Native interactions', question: 'Do I need JavaScript to read the site?',
    answer: 'No. Navigation, content and this disclosure work with native HTML.',
    budget: 'A budget to discuss',
    budgetCopy: 'The thresholds in budget.json help catch regressions. Adapt them to the needs of your project.',
    back: 'Back to the home page', notFound: 'Page not found', moved: 'This content may have moved.',
  },
};
