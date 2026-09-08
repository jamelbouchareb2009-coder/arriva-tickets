# Arriva Tickets

Replica del biglietto Arriva Italia.

## Deploy su Netlify

1. Vai su [netlify.com](https://www.netlify.com/) → **Add new site** → **Import an existing project** → GitHub
2. Scegli questo repository `arriva-tickets`
3. Conferma:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
4. Deploy. Ottieni un link pubblico da mandare.

Le impostazioni sono già in `netlify.toml`.

Niente database, niente login. Non modificare design, font, spaziature o animazioni.
