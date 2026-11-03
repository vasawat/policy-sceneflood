# SceneFlood Privacy Policy

One public page for SceneFlood's English-language privacy policy. The home page (`/`) displays the policy immediately. It is built with Next.js, Mantine, and Tabler icons.

## Local preview

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/`.

## GitHub Pages

The included workflow publishes a static export when `main` is pushed. Create a GitHub repository named `policy-sceneflood`, push this project to its `main` branch, then set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The public URL will be `https://<github-username>.github.io/policy-sceneflood/` once deployment succeeds.

The build applies `/policy-sceneflood` only in GitHub Actions, so local development remains at `/`. If the repository name changes, update `basePath` in `next.config.mjs`.

The policy text is in `app/page.js`. Review it when SceneFlood's features or data practices change. The contact email is `dinowebcreate@gmail.com`.
