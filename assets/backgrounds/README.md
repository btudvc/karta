# Backgrounds

Drop image files in this folder, then register them in `manifest.json`.
The Background picker (Settings → Background) reads that file at
runtime and renders one tile per entry.

## Recommended specs

- **Resolution:** 2560 × 1600 or higher (the image is rendered with
  `background-size: cover`, so any aspect ratio works, but a high-res
  source keeps it sharp on retina / 4K displays).
- **Format:** JPG for photos (good compression), PNG for flat artwork
  with transparency, WEBP for both — smallest file size.
- **Size:** keep each file under ~600 KB if possible. Browsers cache
  the chosen background, but slow connections feel sluggish on the
  first paint.

## Add a new background

1. Save the image into this folder, e.g. `mountain.jpg`.
2. Open `manifest.json` and append an entry to `items`:

```jsonc
{
  "items": [
    { "id": "default",  "name": "Iridescent" },
    { "id": "mountain", "name": "Mountains", "file": "mountain.jpg" }
  ]
}
```

3. (Optional) Provide a smaller thumbnail to keep the picker grid
   light: `{ "thumb": "mountain-thumb.jpg" }`. If absent, the main
   image is used.

4. Commit + push. The new background shows up in the picker after a
   reload.

## Schema

```jsonc
{
  "id":    "string",   // unique key, persisted in localStorage
  "name":  "string",   // shown under the tile
  "file":  "string?",  // image filename in this folder; omit for the
                       // built-in iridescent gradient
  "thumb": "string?"   // optional smaller image for the picker grid
}
```
