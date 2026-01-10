# CBC Species Plot

Static Plotly-based visualization of the CBC long-term dataset.

- Project page: https://github.com/hydrospheric0/cbc-capcplot

## Project layout

- `data/CAPC_CBC_1971_2025_v2.1.csv` – long-term CBC table (wide format with year columns)
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

- Replace `data/CAPC_CBC_1971_2025_v2.1.csv` with the latest compilation (same wide format, with the new year column).
- Or run the updater script from the compilation repo to sync a species-level (no double-count) CSV and regenerate this README section:
	- `cbc-compilation/.venv/bin/python cbc-compilation/scripts/update_species_plot_dataset_and_stats.py`
- Rebuild the deployable folder with `npm run build`.

<!-- BEGIN AUTO-GENERATED 2025 SUMMARY -->

## 2025 count summary

This section is a quick write-up for the 2025 CBC based on `data/CAPC_CBC_1971_2025_v2.1.csv`.

**Overview (2025)**

- Species with non-zero count in 2025 (species-level, no subspecies double counting): **154**
- Total individuals counted in 2025 (sum across species rows): **29,632**

**Method notes (outliers / comparisons)**

- Baseline comparisons use **1971–2024**.
- For summary statistics only, a long leading run of zeros is trimmed up to the first non-zero when it’s long enough (≥5 years).
- “Outlier-ness” is summarized as a baseline **percentile** vs the baseline years (higher % = unusually high; low % = unusually low).

### Narrative (2025 vs previous years)

The clearest signal in 2025 was a new record for Turkey Vulture (574).

gull sp. (318) also landed in the upper tail of its historical distribution.

Black-throated Gray Warbler (1) also landed in the upper tail of its historical distribution.

Swamp Sparrow (1) also landed in the upper tail of its historical distribution.

Greater Yellowlegs (56) also landed in the upper tail of its historical distribution.

On the low side, Loggerhead Shrike (6) was unusually low vs its baseline.

On the low side, White-tailed Kite (1) was unusually low vs its baseline.

On the low side, American Goldfinch (76) was unusually low vs its baseline.

### Highest counts (2025)

| Species | 2025 |
| --- | --- |
| European Starling | 3,105 |
| White-crowned Sparrow | 2,269 |
| Yellow-rumped Warbler | 1,895 |
| American Robin | 1,715 |
| Dark-eyed Junco | 1,261 |
| Western Meadowlark | 1,000 |
| Brewer's Blackbird | 891 |
| Golden-crowned Sparrow | 886 |
| House Finch | 823 |
| blackbird sp. | 805 |
| California Quail | 786 |
| Bufflehead | 670 |


### Unusually high vs history (2025)

| Species | 2025 | Baseline median (≤2024) | Percentile vs baseline |
| --- | --- | --- | --- |
| Turkey Vulture | 574 | 111 | 100% |
| gull sp. | 318 | 6 | 100% |
| Black-throated Gray Warbler | 1 | 0 | 100% |
| Swamp Sparrow | 1 | 0 | 100% |
| Greater Yellowlegs | 56 | 15 | 98% |
| American Herring Gull | 31 | 1 | 98% |
| Northern Shoveler | 30 | 2 | 98% |
| Blue-gray Gnatcatcher | 15 | 4 | 98% |
| Bald Eagle | 9 | 2 | 98% |
| California Quail | 786 | 354 | 96% |
| Common Goldeneye | 278 | 90 | 96% |
| Tricolored Blackbird | 20 | 0 | 96% |


### Unusually low vs history (2025)

| Species | 2025 | Baseline median (≤2024) | Percentile vs baseline |
| --- | --- | --- | --- |
| Loggerhead Shrike | 6 | 24 | 0% |
| White-tailed Kite | 1 | 14 | 2% |
| American Goldfinch | 76 | 246 | 4% |
| Sharp-shinned Hawk | 4 | 10 | 9% |
| American Coot | 21 | 323 | 9% |
| Wrentit | 35 | 84 | 13% |
| Lesser Goldfinch | 392 | 762 | 13% |
| Golden-crowned Kinglet | 1 | 13 | 15% |
| Hutton's Vireo | 1 | 6 | 15% |
| Common Merganser | 4 | 32 | 15% |
| Pied-billed Grebe | 30 | 42 | 19% |
| Fox Sparrow | 24 | 52 | 20% |


### Record highs (new max vs 1971–2024)

| Species | 2025 | Baseline median (≤2024) |
| --- | --- | --- |
| Turkey Vulture | 574 | 111 |
| gull sp. | 318 | 6 |
| Zonotrichia sp. | 33 |  |
| finch sp. | 30 |  |
| Sharp-shinned/Cooper's Hawk | 2 |  |
| Indian Peafowl | 2 |  |
| Accipitrine hawk sp. | 1 |  |
| hummingbird sp. | 1 |  |
| Hammond’s Flycatcher | 1 |  |


### First-time taxa in 2025

Note: this is “first non-zero in the table”, which can include new/changed taxonomic rows.
| Species | 2025 |
| --- | --- |
| Zonotrichia sp. | 33 |
| finch sp. | 30 |
| Indian Peafowl | 2 |
| Sharp-shinned/Cooper's Hawk | 2 |
| Accipitrine hawk sp. | 1 |
| Hammond’s Flycatcher | 1 |
| hummingbird sp. | 1 |

<!-- END AUTO-GENERATED 2025 SUMMARY -->
Black-throated Gray Warbler

## Support
If you find this tool useful, please consider supporting its development: https://github.com/sponsors/hydrospheric0