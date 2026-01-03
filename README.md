# CBC Species Plot

Static Plotly-based visualization of the CBC long-term dataset.

## Project layout

- `data/CAPC_CBC_1971_2025_v2.csv` – long-term CBC table (wide format with year columns)
- `data/archive/` – archived historical input datasets
- `index.html` – the plot (self-contained HTML)
- `package.json` – npm scripts for dev/build/preview

Older CSV inputs are archived under `data/archive/`.

## Setup

## View / host (npm)

This repo includes a minimal npm setup so you can run a local dev server and produce a deployable `dist/` folder.

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

Build a deployable static folder:

```bash
npm run build
```

Preview the built `dist/` locally:

```bash
npm run preview
```
## Updating for a new year

The only expected update is adding a new year column to the CBC compilation.

- Replace `data/CAPC_CBC_1971_2025_v2.csv` with the latest compilation (same wide format, with the new year column).
- Rebuild the deployable folder with `npm run build`.
