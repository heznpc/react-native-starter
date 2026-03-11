# Asset Placeholders

The SVG files are placeholders. Before building, convert them to PNG or replace with your own images:

- `icon.png` -- 1024x1024 app icon
- `splash.png` -- 1284x2778 splash screen
- `adaptive-icon.png` -- 1024x1024 Android adaptive icon foreground

To generate PNG placeholders quickly:

```bash
# Using ImageMagick (brew install imagemagick)
convert -size 1024x1024 xc:#4630EB assets/icon.png
convert -size 1284x2778 xc:#ffffff assets/splash.png
convert -size 1024x1024 xc:#4630EB assets/adaptive-icon.png

# Or using Python
python3 -c "
from PIL import Image
Image.new('RGB', (1024, 1024), '#4630EB').save('assets/icon.png')
Image.new('RGB', (1284, 2778), '#ffffff').save('assets/splash.png')
Image.new('RGB', (1024, 1024), '#4630EB').save('assets/adaptive-icon.png')
"
```
