# Karta

Project & task management — **PWA**, runs the same way on desktop browser and mobile.

- One codebase: `index.html`, `style.css`, `app.js`, `assets/`, `manifest.json`, `sw.js`
- Sync via **Google Drive API** (`drive.file` scope — only files this app creates)
- Install on Windows/Mac: Chrome → ⊕ in URL bar → "Install Karta"
- Install on Android: Chrome → ⋮ menu → "Add to Home Screen"

## Local development

```bash
npm install      # one-time (only dev dep is png-to-ico for icon regen)
npm run dev      # serves at http://localhost:5173
```

Add `http://localhost:5173` to your Cloud Console **Authorized JavaScript origins** once (see below).

## Deploy to GitHub Pages

1. Create a public repo, push everything in this folder.
2. Repo → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / root `/`
   - Save
3. Wait ~1 min, GitHub gives you a URL like `https://your-user.github.io/karta/`.
4. **Add that URL** to Google Cloud Console:
   - https://console.cloud.google.com/ → APIs & Services → Credentials → your OAuth client
   - **Authorized JavaScript origins** → add `https://your-user.github.io`
   - Save
5. Open the URL in Chrome (desktop or Android), sign in with Google, done.

## Alternative: Netlify drop

1. https://app.netlify.com/drop → drag the project folder
2. Get URL like `https://karta-xxx.netlify.app`
3. Add origin to Cloud Console as above

## Cloud Console setup (one-time)

OAuth Client ID is already baked in (`app.js`).

Required:
- **OAuth consent screen** → External
  - App name: `Karta`
  - Test users: add your Gmail + friends' Gmails (max 100 in Testing mode)
- **APIs & Services → Library** → enable **Google Drive API**
- **Credentials → OAuth Client ID** (Web application type)
  - Authorized JavaScript origins: production URL + `http://localhost:5173`

## Folder layout in user's Drive

```
My Drive/
└── Karta/
    ├── karta-backup.json     ← state (projects, tasks, calendar, journal, etc.)
    └── attachments/
        └── <entity-id>/
            └── *.pdf, *.jpg
```

Same account on phone + PC = same data.

## Regenerate icons

```bash
npm run icons   # writes assets/logo.png + assets/icon.ico (512px K logo)
```

## Tech notes

- localStorage holds offline copy of state
- Drive sync: 5-min interval + 2s debounce after each edit
- Service worker (`sw.js`) caches the app shell — works offline after first load
- Token: `drive.file` access token, ~1 hr lifetime, silent refresh on next call
- Modes: Job / Daily — separate sets of projects/lists, persisted in `state.mode`
- Languages: TR / EN — switch via header toggle
- Theme: dark / light — switch via header toggle
