# Raffaele+

## [Apri il sito Raffaele+ ↗](https://raffaele-pet.github.io/raffaele-plus/)

**Sito online:** [raffaele-pet.github.io/raffaele-plus](https://raffaele-pet.github.io/raffaele-plus/)

Le repository di **raffaele-pet** in un catalogo ispirato all’interfaccia classica di Disney+: grande carosello panoramico, cinque categorie animate e raccolte di locandine orizzontali. Il nome e i contenuti sono personalizzati per questo portfolio.

## Pubblicazione su GitHub Pages

1. Crea una nuova repository pubblica sul tuo account. Nome suggerito: **raffaele-plus**.
2. Carica **il contenuto di questa cartella nella radice della repository**, non la cartella contenitore. Accanto al README devono esserci `index.html`, `app.js`, `styles.css`, `assets/`, `data/`, `scripts/`, `package.json`, `.nojekyll`, `.gitignore` e soprattutto **`.github/workflows/pages.yml`**. Se il file nascosto non compare nel caricamento web, crealo con **Add file → Create new file**, usando quel percorso e copiando il contenuto del workflow.
3. Usa **main** come branch principale.
4. In **Settings → Pages → Build and deployment → Source**, seleziona **GitHub Actions**.
5. In **Actions → Deploy GitHub Pages**, avvia **Run workflow** se il primo caricamento era precedente all’attivazione di Pages. I successivi push su `main` pubblicheranno automaticamente il sito.

Se scegli `raffaele-plus`, l’indirizzo previsto sarà `https://raffaele-pet.github.io/raffaele-plus/`. Il progetto usa percorsi relativi e funziona anche con un altro nome di repository, senza modifiche.

Il workflow controlla la sintassi JavaScript, genera `dist/` e pubblica solo i file del sito. Non richiede dipendenze npm né credenziali aggiuntive. La configurazione segue la [documentazione ufficiale GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

### Alternativa senza GitHub Actions

Puoi selezionare **Deploy from a branch → main → / (root)** in Settings → Pages. La pagina è già statica e funziona senza build. In quel caso rimuovi `.github/workflows/pages.yml` per evitare tentativi di pubblicazione duplicati.

## Anteprima locale

Puoi aprire direttamente `index.html` nel browser. Per un’anteprima HTTP, con Node.js 22 o superiore:

```sh
npm start
```

Apri `http://127.0.0.1:4173`. Non serve `npm install`. Termina il server con Ctrl+C.

```sh
npm run check
npm run build
```

La build copia nella cartella `dist/` solo HTML, CSS, JavaScript, catalogo e immagini. `dist/` è esclusa dal versionamento.

## Funzioni

- Slider iniziale con quattro progetti, avanzamento automatico, frecce, indicatori, pausa e swipe.
- Categorie AI, Immagini, Video, Desktop e Web con effetti al passaggio del mouse.
- Caroselli con scorrimento a frecce, touch, trackpad e tastiera.
- Clic sulle locandine → repository reale su GitHub in una nuova scheda.
- Pulsante **i** → scheda con descrizione, linguaggio, autore e data di aggiornamento.
- Ricerca per nome, descrizione e linguaggio, con filtri per categoria.
- **La mia lista**, salvata nel browser, e raccolta dei progetti visitati.
- Impaginazione responsive, focus da tastiera e rispetto di `prefers-reduced-motion`.

Preferiti e cronologia usano esclusivamente `localStorage`: nessun account, backend, tracker o servizio esterno durante la navigazione. Se l’archiviazione locale è bloccata, la navigazione resta utilizzabile ma i preferiti non persistono tra le visite.

## Repository e personalizzazione

Il catalogo include le **9 repository pubbliche rilevate il 21 ottobre 2026** dal [profilo GitHub](https://github.com/raffaele-pet). Le descrizioni sono adattate in italiano; quella di `chatbot_semplice`, priva di descrizione su GitHub, è volutamente neutra.

Modifica `data/catalog.js` per cambiare:

- `title`, `subtitle`, `kicker`: scritte sulle locandine e nei banner;
- `description`: descrizione in italiano;
- `image`: nome di un’immagine in `assets/`, senza `.jpg`;
- `categories`: una o più fra `ai`, `images`, `video`, `desktop`, `web`;
- `url`: destinazione del clic.

I quattro progetti in evidenza sono selezionati nella funzione `hero()` in `app.js`. Il nome, i collegamenti al profilo e il marchio si personalizzano in `index.html` e `app.js`. Colori, misure e animazioni sono in `styles.css`.

Per rileggere le repository pubbliche da GitHub:

```sh
npm run update-catalog
```

Lo script conserva la personalizzazione delle schede esistenti, aggiorna URL, linguaggi e date, rimuove le repository non più pubbliche e aggiunge le nuove con un’immagine e una categoria provvisorie da rivedere. Esclude la repository `raffaele-plus` per evitare che il catalogo includa sé stesso; se usi un altro nome, aggiorna quell’esclusione nello script. Poi carica o committa il catalogo aggiornato. Non ci sono richieste API durante l’uso del sito: resta disponibile anche se GitHub limita le API.

## Immagini e riferimento visivo

Le fotografie di anteprima sono immagini illustrative scaricate da Unsplash e incluse localmente; non sono screenshot dei progetti. Font di sistema e icone SVG sono inclusi nel codice. Nessun asset Disney viene distribuito.

Le fonti delle fotografie e il riferimento dell’interfaccia sono in [CREDITS.md](CREDITS.md). Interfaccia ispirata a Disney+, senza affiliazione con Disney. È una reinterpretazione del catalogo per repository, non una riproduzione dell’intero servizio di streaming.
