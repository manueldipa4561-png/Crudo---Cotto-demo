# Crudo & Cotto — Demo

Concept website demo progettato e sviluppato da Punto Due Studio per **Ristorante Crudo & Cotto**, Langhirano (PR).

> Concept dimostrativo non commissionato · Punto Due Studio

## Creative thesis

**Due stati. Un solo gesto.**

Il concept usa il nome del locale come sistema narrativo, ma evita il cliché dello split-screen 50/50. Crudo e cotto sono trattati come due stati collegati da una linea di trasformazione: freddo/raw, precisione, taglio e materia da una parte; calore, piastra e cottura dall'altra.

La hero utilizza una “thermal plate” astratta in CSS 3D con una linea di trasformazione centrale e micro-interazione pointer su desktop. Nessun asset fotografico di terzi viene re-hostato.

## Standard demo — upgrade v3

Questa demo applica un quality gate più severo rispetto alle precedenti:

- business understanding prima del design
- fact / inference / creative separation
- concept proprietario derivato dal nome e dall'offerta
- portfolio-distance check contro Sanafollia, Sój, Vicolo Stretto e Da Sergio
- no template sections salvo necessità funzionale
- interaction design con funzione narrativa, non decorativa
- progressive enhancement: contenuti leggibili anche senza JavaScript
- mobile progettato separatamente, non solo “ridotto”
- `prefers-reduced-motion`
- touch target mobile minimi
- nessun dato business inventato
- nessuna foto di directory o review site re-hostata
- QA strutturale e responsive prima del deploy quando l'ambiente lo consente

## Dati verificati utilizzati

Verifica effettuata il 15/09/2026.

- Nome: Ristorante Crudo & Cotto
- Indirizzo: Via Cascinapiano 19, 43013 Langhirano PR
- Telefono: +39 0521 357227
- Categorie ricorrenti: cinese, giapponese, sushi; Tripadvisor aggiunge pesce, asiatica e fusion
- Google: 4,5/5 nelle fonti recenti
- Tripadvisor: 4,3/5 su 36 recensioni al momento della verifica
- Fascia pubblica indicativa: circa €20–30 / €€–€€€
- Servizi pubblicamente riportati: prenotazioni, servizio al tavolo, takeaway, delivery, posti esterni, accessibilità in sedia a rotelle, carte accettate

## Presenza digitale

La presenza proprietaria forte non emerge.

- Restaurant Guru, aggiornato nel 2026, indica `facebook.com` come sito web.
- Pro Loco Langhirano continua a riportare il vecchio indirizzo `ristorante-crudo-cotto.business.site/`.
- Il profilo Tripadvisor risulta non rivendicato al momento della verifica.

La demo non pubblica un link Facebook diretto perché non è stato possibile verificare con sufficiente certezza l'URL esatto della pagina ufficiale.

## Cucina / menu

La demo non presenta un menu corrente ufficiale. Usa solo categorie e piatti documentati da fonti pubbliche, chiarendo che disponibilità e prezzi possono cambiare.

Elementi documentati:

- sushi
- sashimi / salmone nelle fonti recenti
- cruditè di pesce
- spaghetti di soia
- tagliolini misto mare
- gamberini alla piastra
- fritto misto di pesce
- involtini primavera

Sluurpy (aggiornamento 19/12/2025) e archivi menu online riportano alcuni di questi piatti e relativi prezzi storici; la demo evita volutamente di mostrare prezzi potenzialmente non aggiornati.

## Orari e conflitti tra fonti

Restaurant Guru nel 2026 riporta:

- lunedì chiuso
- martedì–domenica: 12:00–14:30 e 18:30–22:30

TuttiAffari mostra invece fasce serali 19:00–23:00 / 23:30. Per questo la demo presenta gli orari recenti di Restaurant Guru con invito esplicito a confermarli telefonicamente.

## Fonti principali

- Restaurant Guru — Ristorante Crudo & Cotto, Langhirano
- Tripadvisor — Ristorante Crudo & Cotto, Langhirano
- Pro Loco Langhirano — elenco ristoranti
- Sluurpy — menu/archivio pubblico
- TuttiAffari — confronto contatti e orari
- Google business data / local result — rating, servizi e caratteristiche

## Distinctive decisions

1. Hero “thermal plate” CSS 3D, non foto food standard.
2. Linguaggio grafico freddo/caldo: cyan tecnico + coral/ember su nero profondo.
3. Menu trattato come `state ledger`, non cards.
4. Servizi rappresentati come sistema orbitale, non icone generiche.
5. Reputazione presentata come grande segnale tipografico, non carousel recensioni.
6. Digital gap dichiarato con cautela: presenza frammentata, senza affermare falsamente che non esista alcuna presenza online.

## Funzionalità

- responsive navigation
- click-to-call
- Google Maps
- mobile action dock
- scroll progress
- CSS 3D hero interaction desktop
- subtle magnetic CTA desktop
- progressive reveal
- no-JS readable fallback
- `prefers-reduced-motion`
- keyboard focus states
- touch target mobile minimi
- Schema.org `Restaurant`
- SEO / Open Graph base
- custom 404
- Netlify config
- security headers

## Deploy Netlify

Sito statico senza build step.

- Base directory: vuota
- Build command: vuoto
- Publish directory: `.`
- Functions directory: vuota

Dopo il deploy aggiungere canonical, `og:url`, sitemap e `og:image` definitivo.

## QA responsive completo

QA eseguito il 15/09/2026 con Chromium headless usando la versione finale dei file.

Viewport verificati:

- 320 px
- 360 px
- 375 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1440 px

Controlli eseguiti:

- nessun overflow orizzontale
- nessun errore JavaScript o console
- tutti gli elementi reveal visibili dopo lo scroll completo
- menu mobile verificato a 320, 360, 375, 390, 430 e 768 px
- menu mobile posizionato sotto l'header senza clipping
- nessuna sovrapposizione brand/navigation nei layout desktop
- mobile dock contenuto nel viewport
- touch target mobile verificati
- hero 3D, state ledger, servizi, reputazione, orari, contatti, closing e footer verificati responsive

### Fix applicato durante il QA

Il link “Conferma gli orari” aveva una hit-area verticale inferiore al target mobile. È stato trasformato in un controllo inline-flex con `min-height: 44px` senza alterare il layout visivo.

Esito finale: **PASS** sugli 8 viewport richiesti.
