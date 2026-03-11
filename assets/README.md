# Asset Placeholders

Replace these placeholder images with your own before building:

- `icon.png` -- 1024x1024 app icon
- `splash.png` -- 1284x2778 splash screen
- `adaptive-icon.png` -- 1024x1024 Android adaptive icon foreground

To generate solid-color placeholders quickly:

```bash
# Using ImageMagick (brew install imagemagick)
convert -size 1024x1024 xc:#4630EB assets/icon.png
convert -size 1284x2778 xc:#ffffff assets/splash.png
convert -size 1024x1024 xc:#4630EB assets/adaptive-icon.png
```
