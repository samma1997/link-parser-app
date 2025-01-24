# FreeScrap - Strumento di Web Scraping

Benvenuto in **FreeScrap** - Uno strumento potente per estrarre email e numeri di telefono da siti web, costruito con [Next.js](https://nextjs.org).

Questo progetto è stato avviato con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![Screenshot di FreeScrap](./public/images/screenshot.png) <!-- Aggiungi questa immagine nella tua cartella /public/images -->

## Descrizione

**FreeScrap** aiuta gli utenti a estrarre dati utili come email e numeri di telefono da qualsiasi sito web. Basta inserire una lista di link e l'app estrarrà le informazioni di contatto da ogni pagina.

Realizzato con il moderno framework [Next.js](https://nextjs.org) e distribuito su [Vercel](https://vercel.com), **FreeScrap** è ottimizzato per le prestazioni e la facilità d'uso.

Visita la versione live dell'app su [Vercel](https://vast-depths-70889-b1585b8d6463.herokuapp.com/) o il mio sito web personale per maggiori informazioni: [Luca Sammarco](https://lucasammarco.com).

## Iniziare

Per avviare il progetto localmente, segui i passaggi seguenti:

### Prerequisiti

Prima di eseguire l'app, assicurati di avere installato **Node.js** e **npm** (oppure **yarn**, **pnpm**, o **bun**).

1. **Clona il repository:**

   ```bash
   git clone https://github.com/samma1997/link-parser-app.git
   Installa le dipendenze:
   ```

bash
Copia
cd link-parser-app
npm install
Oppure, se utilizzi yarn:

bash
Copia
yarn install
Eseguire il Server di Sviluppo
Una volta installate le dipendenze, puoi eseguire il server di sviluppo:

bash
Copia
npm run dev

# oppure

yarn dev

# oppure

pnpm dev

# oppure

bun dev
Ora apri http://localhost:3000 nel tuo browser per vedere il risultato.

La pagina si aggiorna automaticamente mentre modifichi i file in app/page.tsx.

Struttura del Progetto
I principali file in questo progetto includono:

app/page.tsx: Punto di ingresso principale dell'app, dove puoi modificare la home page.
public/images/: Cartella per immagini e risorse (come la schermata dell'app).
Funzionalità
Facile inserimento di URL multipli per fare scraping.
Estrazione di email e numeri di telefono dai siti web.
UI responsive, ottimizzata per mobile e desktop.
Distribuito e ospitato su Vercel.
Approfondisci
Per scoprire di più sulle tecnologie utilizzate in questo progetto, consulta le seguenti risorse:

Documentazione di Next.js - Scopri le funzionalità e le API di Next.js.
Impara Next.js - Un tutorial interattivo su Next.js.
Deployment
Questo progetto è ospitato su Vercel. Se vuoi distribuirlo autonomamente, segui questi passaggi:

Pusha le tue modifiche su GitHub.
Collega il tuo repository GitHub a Vercel per attivare un deploy automatico.
Per maggiori dettagli, consulta la documentazione di deployment di Next.js.

Contribuire
Accettiamo contributi! Se hai idee o miglioramenti per il progetto, sentiti libero di aprire un'issue o una pull request.

Licenza
Questo progetto è concesso in licenza sotto la licenza MIT - consulta il file LICENSE per maggiori dettagli.

Creato con ❤️ da Luca Sammarco.

markdown
Copia

### Modifiche principali:

1. Ho aggiunto i dettagli mancanti nel codice di installazione e avvio (come il comando `git clone`).
2. Ho precisato che l'immagine dovrebbe essere aggiunta nella cartella `/public/images/`.
3. Ho migliorato la formattazione dei vari comandi Bash per facilitarne la lettura.

### Passaggi successivi:

1. **Aggiungi l'immagine** del progetto nella cartella `/public/images/` (se non l'hai già fatto).
2. **Fai il commit e push** del file `README.md` nel repository GitHub.
3. Vai su [GitHub](https://github.com) per vedere l'aggiornamento del file `README.md`.
