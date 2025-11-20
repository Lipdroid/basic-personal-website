# Website Content Management Guide

This guide shows you exactly where to update all your website content.

## ✅ EASIEST WAY: Update config.js (ACTIVE - Recommended!)

**Your website is now set up with automatic content loading!**

Simply update the `config.js` file - all your content is in ONE place with clear sections and comments. When you save changes and refresh your browser, the updates will automatically appear on your website.

**No need to edit HTML files anymore!**

---

## 📐 IMAGE & VIDEO SPECIFICATIONS QUICK REFERENCE

| Section | Aspect Ratio | Recommended Size | Format | Location |
|---------|--------------|------------------|--------|----------|
| **Hero Backgrounds** (SFX, COLOR, TOOLS, PRODUCT) | 16:9 (Landscape) | 1920x1080px+ | JPG/PNG | `images/fulls/` |
| **FILM Background Video** ⭐ | 16:9 (Landscape) | 1920x1080px | MP4 (H.264) | `images/videos/` |
| **GEARS Background Video** ⭐ | 16:9 (Landscape) | 1920x1080px | MP4 (H.264) | `images/videos/` |
| **FILM Fallback Image** | 16:9 (Landscape) | 1920x1080px+ | JPG/PNG | `images/fulls/` |
| **GEARS Fallback Image** | 16:9 (Landscape) | 1920x1080px+ | JPG/PNG | `images/fulls/` |
| **Profile Photo** (Introduction) | 2:3 (Portrait) | 800x1200px | JPG/PNG | `images/fulls/` |
| **Brand Logos** (Tools Powered By) | 1:1 (Square) | 400x400px | PNG (transparent) | `images/thumbs/` |
| **Footer Images** (Portfolio Grid) | Flexible | 400x600px | JPG/PNG | `images/footer/` |
| **YouTube Thumbnails** | 16:9 | Auto-loaded | - | - |

**💡 Quick Tips:**
- All hero backgrounds should be 16:9 landscape format (widescreen)
- FILM and GEARS sections use looping video backgrounds for dynamic effect!
- PRODUCT section has unique styling with margins and rounded corners
- Videos will autoplay, loop, and be muted (required for browser autoplay)

---

## Alternative: Update HTML Files Directly (Advanced Users Only)
If you need to make structural changes or prefer manual editing, you can still update HTML files directly at the locations below.

---

## 📍 NAVIGATION BAR (All Pages)
**Logo Text:**
- **File:** `index.html` (line 723)
- **File:** `sfx.html` (line 187)
- **File:** `color.html` (line 187)
- **File:** `tools.html` (line 187)
- **File:** `portfolio.html` (line 212)
- **Current:** "LipuHossain"

---

## 📍 HERO SECTION (Top 3-Column Section)
**Location:** `index.html` (lines 738-775)

### SFX Section:
- **Title:** Line 748 - "SFX"
- **Subtitle:** Line 749 - "Sound Design & Audio Engineering"
- **Background Image:** Line 735 (CSS) - `images/fulls/01.jpg`
- **Link:** Line 750 - `sfx.html`

### COLOR Section:
- **Title:** Line 757 - "COLOR"
- **Subtitle:** Line 758 - "Visual Arts & Color Grading"
- **Background Image:** Line 739 (CSS) - `images/fulls/02.jpg`
- **Link:** Line 759 - `color.html`

### TOOLS Section:
- **Title:** Line 766 - "TOOLS"
- **Subtitle:** Line 767 - "Creative Technology & Innovation"
- **Background Image:** Line 743 (CSS) - `images/fulls/03.jpg`
- **Link:** Line 768 - `tools.html`

---

## 📍 TOOLS POWERED BY SECTION
**Location:** `index.html` (lines 779-792)

**Heading:** Line 781 - "Assets, films and tools powered by"

**Brand Logos (6 PNG images):**
**Note:** These are separate from footer images
1. Line 785 - `images/thumbs/01.png`
2. Line 786 - `images/thumbs/02.png`
3. Line 787 - `images/thumbs/03.png`
4. Line 788 - `images/thumbs/04.png`
5. Line 789 - `images/thumbs/05.png`
6. Line 790 - `images/thumbs/06.png`

**To Update:** Replace image paths with your brand logo files in PNG format.

---

## 📍 INTRODUCTION SECTION
**Location:** `index.html` (lines 785-792)

**Profile Image:**
- Line 788 - `images/fulls/04.jpg`
- **Folder:** Place your profile photo in `images/fulls/` or `images/profile/`

**Heading Text:**
- Line 791 - "Hi, I'm LipuHossain — a Creative Professional with a passion for innovation."

**Button:**
- **Text:** Line 792 - "View my work"
- **Link:** Line 792 - `#portfolio`

---

## 📍 FILMS SECTION (YouTube Videos)
**Location:** `index.html` (lines 795-811)

**Heading:** Line 797 - "FILMS"

### YouTube Videos (Scrolling Section):
**Video 1:**
- Line 801 - Video ID: `lIxtuNBXcXE`
- Full URL format: `https://img.youtube.com/vi/lIxtuNBXcXE/maxresdefault.jpg`

**Video 2:**
- Line 802 - Video ID: `40yqG6tCoFA`

**Video 3:**
- Line 803 - Video ID: `k2IQ7eCrrVA`

**Video 4:**
- Line 804 - Video ID: `xfxTbzdUTCo`

**To Update YouTube Videos:**
1. Find your YouTube video URL: `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`
2. Copy the VIDEO_ID part
3. Replace in: `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`
4. Update lines 801-808 (first set) and 806-809 (duplicate set for scrolling)

---

## 📍 PORTFOLIO GRID PAGE
**Location:** `portfolio.html` (lines 224-257)

**Page Heading:** Line 221 - "MY WORK"

### Video Cards with Titles:
**Video 1:**
- URL: Line 224 - `https://www.youtube.com/watch?v=lIxtuNBXcXE`
- Thumbnail: Line 225 - Video ID `lIxtuNBXcXE`
- Title: Line 227 - "Your Video Title 1"

**Video 2:**
- URL: Line 233 - `https://www.youtube.com/watch?v=40yqG6tCoFA`
- Thumbnail: Line 234 - Video ID `40yqG6tCoFA`
- Title: Line 236 - "Your Video Title 2"

**Video 3:**
- URL: Line 242 - `https://www.youtube.com/watch?v=k2IQ7eCrrVA`
- Thumbnail: Line 243 - Video ID `k2IQ7eCrrVA`
- Title: Line 245 - "Your Video Title 3"

**Video 4:**
- URL: Line 251 - `https://www.youtube.com/watch?v=xfxTbzdUTCo`
- Thumbnail: Line 252 - Video ID `xfxTbzdUTCo`
- Title: Line 254 - "Your Video Title 4"

**To Add More Videos:**
Copy lines 224-230 (one complete video card) and paste below, then update the video ID and title.

---

## 📍 FOOTER SECTION
**Location:** `index.html` (lines 814-861)

### About Column:
- **Heading:** Line 820 - "ABOUT"
- **Links:**
  - Line 822 - "Works" → `#works`
  - Line 823 - "SFX" → `sfx.html`
  - Line 824 - "Luts & Powergrade" → `color.html`

### Location Column:
- **Heading:** Line 830 - "LOCATION"
- **Items:**
  - Line 832 - "Available Worldwide"
  - Line 833 - "contact@lipuhossain.com" (Update with your email)
  - Line 834 - "Your Location" (Update with your city/country)

### Socials Column:
- **Heading:** Line 840 - "SOCIALS"
- **Links:** (Update with YOUR profiles!)
  - Line 842 - Instagram: `https://instagram.com/yourhandle`
  - Line 843 - Twitter: `https://twitter.com/yourhandle`
  - Line 844 - Behance: `https://behance.net/yourhandle`

### Footer Image Grid (6 vertical images):
**Note:** Footer images are now separate from brand logos in the Tools section
- Line 851 - Image 1: `images/footer/01.jpg`
- Line 852 - Image 2: `images/footer/02.jpg`
- Line 853 - Image 3: `images/footer/03.jpg`
- Line 854 - Image 4: `images/footer/04.jpg`
- Line 855 - Image 5: `images/footer/05.jpg`
- Line 856 - Image 6: `images/footer/06.jpg`

### Footer Handle:
- Line 860 - "@LipuHossain"

---

## 📁 RECOMMENDED FOLDER STRUCTURE

```
basic-personal-website/
├── index.html
├── portfolio.html
├── sfx.html
├── color.html
├── tools.html
├── product.html         (NEW - Product design page)
├── gears.html           (NEW - Gears & equipment page)
├── config.js (Your content reference file)
├── CONTENT-GUIDE.md (This file)
│
├── images/
│   ├── fulls/          (Large background images 1920x1080+)
│   │   ├── 01.jpg     (SFX background)
│   │   ├── 02.jpg     (COLOR background)
│   │   ├── 03.jpg     (TOOLS background)
│   │   ├── 04.jpg     (Introduction profile photo)
│   │   ├── 05.jpg     (FILM fallback background)
│   │   ├── 06.jpg     (PRODUCT background)
│   │   └── 07.jpg     (GEARS fallback background)
│   │
│   ├── videos/         (Background videos)
│   │   ├── film-bg.mp4   (FILM section background video)
│   │   └── gears-bg.mp4  (GEARS section background video)
│   │
│   ├── thumbs/         (Brand logos for "Tools Powered By" section)
│   │   ├── 01.png     (Brand logo 1)
│   │   ├── 02.png     (Brand logo 2)
│   │   ├── 03.png     (Brand logo 3)
│   │   ├── 04.png     (Brand logo 4)
│   │   ├── 05.png     (Brand logo 5)
│   │   └── 06.png     (Brand logo 6)
│   │
│   └── footer/         (Footer portfolio images - separate from brand logos)
│       ├── 01.jpg     (Footer image 1)
│       ├── 02.jpg     (Footer image 2)
│       ├── 03.jpg     (Footer image 3)
│       ├── 04.jpg     (Footer image 4)
│       ├── 05.jpg     (Footer image 5)
│       └── 06.jpg     (Footer image 6)
│
└── assets/
    ├── css/
    └── js/
```

**Note:** The `images/videos/` and `images/footer/` folders have been created for you!

---

## 🎯 COMMON UPDATES

### To Add a New YouTube Video:
1. Get your video URL: `https://www.youtube.com/watch?v=VIDEO_ID`
2. Extract the VIDEO_ID
3. Update in TWO places:
   - `index.html` (scrolling section - lines 800-809)
   - `portfolio.html` (grid section - add new card)

### To Update Brand Logos (Tools Powered By Section):
1. Add your logo images to `images/thumbs/` folder
2. Use PNG format with transparent background
3. Update paths in `index.html` lines 785-790
4. Also update `config.js` toolsPoweredBy.logos array
5. Recommended size: 400x400px PNG with transparent background

### To Update Footer Images:
1. Add your images to `images/footer/` folder (separate from brand logos)
2. Update paths in `index.html` lines ~1359-1364
3. Also update `config.js` footer.imageGrid array
4. Recommended size: 400x600px or similar
5. These are independent from the brand logos

### To Update Profile Photo:
1. Add your photo to `images/fulls/` folder
2. Update path in `index.html` line 788
3. Recommended size: 800x1200px (portrait)

### To Update Social Media Links:
1. Go to `index.html` lines 842-844
2. Replace `yourhandle` with your actual username
3. Full URL format: `https://instagram.com/YOUR_USERNAME`

---

## ⚡ QUICK UPDATE CHECKLIST

- [ ] Update logo/name "LipuHossain" to your name
- [ ] Replace profile photo (images/fulls/04.jpg)
- [ ] Update introduction heading text
- [ ] Add your 4-6 YouTube video IDs
- [ ] Add video titles in portfolio.html
- [ ] Update email address in footer
- [ ] Update location in footer
- [ ] Update social media links (Instagram, Twitter, Behance)
- [ ] Replace brand logos in "Tools Powered By" section
- [ ] Replace footer grid images
- [ ] Update footer handle @LipuHossain

---

## 💡 PRO TIPS

1. **Test After Each Change:** Refresh your browser after updating to see changes immediately

2. **Keep Backups:** Save a copy of working files before making major changes

3. **Image Sizes & Aspect Ratios:**

   **Hero Background Images (SFX, COLOR, TOOLS, PRODUCT):**
   - Aspect Ratio: **16:9 (Landscape/Widescreen)**
   - Recommended Size: 1920x1080px or larger
   - File Format: JPG or PNG
   - Location: `images/fulls/`
   - Tips: Use high-quality images with good composition. Center-weighted subjects work best as the text appears in the center
   - PRODUCT section has special styling with 20px margins and rounded corners for visual distinction

   **FILM Section Background Video:**
   - Aspect Ratio: **16:9 (Landscape/Widescreen)**
   - Recommended Size: 1920x1080px (Full HD)
   - File Format: **MP4 (H.264 codec)** - Best browser compatibility
   - Duration: 10-30 seconds (it will loop automatically)
   - File Size: Keep under 10MB for fast loading
   - Location: `images/videos/`
   - Video Settings:
     - Autoplays on page load
     - Loops continuously
     - Muted (required for autoplay)
     - Use `playsinline` for iOS devices
   - Tips:
     - Use short, engaging clips
     - Ensure good contrast for white text overlay
     - Consider adding a dark overlay if video is too bright
     - Compress video to reduce file size (use tools like HandBrake)
     - Test on mobile devices for performance

   **FILM Section Fallback Image:**
   - Same specs as hero backgrounds above
   - Shows if video fails to load or on slower connections

   **GEARS Section Background Video:**
   - Aspect Ratio: **16:9 (Landscape/Widescreen)**
   - Recommended Size: 1920x1080px (Full HD)
   - File Format: **MP4 (H.264 codec)** - Best browser compatibility
   - Duration: 10-30 seconds (it will loop automatically)
   - File Size: Keep under 10MB for fast loading
   - Location: `images/videos/`
   - Video Settings:
     - Autoplays on page load
     - Loops continuously
     - Muted (required for autoplay)
     - Use `playsinline` for iOS devices
   - Tips:
     - Showcase your equipment and gear in action
     - Good contrast for white text overlay
     - Consider adding a dark overlay if video is too bright
     - Compress video to reduce file size

   **GEARS Section Fallback Image:**
   - Same specs as hero backgrounds above
   - Shows if video fails to load or on slower connections

   **Profile/Introduction Photo:**
   - Aspect Ratio: **2:3 (Portrait)**
   - Recommended Size: 800x1200px or 1000x1500px
   - File Format: JPG or PNG
   - Location: `images/fulls/`
   - Tips: Portrait-oriented image works best for the vertical layout

   **Brand Logos (Tools Powered By Section):**
   - Aspect Ratio: **1:1 (Square)** or **Horizontal Rectangle**
   - Recommended Size: 400x400px (square) or 600x300px (horizontal)
   - File Format: PNG with transparent background (preferred)
   - Location: `images/thumbs/`
   - Tips: White or light-colored logos work best on the dark background

   **Footer Grid Images:**
   - Aspect Ratio: **Flexible** (any orientation works)
   - Recommended Size: 400x600px or similar
   - File Format: JPG or PNG
   - Location: `images/thumbs/`
   - Tips: Mix of portrait and landscape orientations creates visual interest

   **YouTube Thumbnails:**
   - Automatically loaded from YouTube
   - Standard YouTube aspect ratio: 16:9
   - No manual upload needed

4. **YouTube Video IDs:**
   - Always 11 characters long
   - Found after `v=` in the URL
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID = `dQw4w9WgXcQ`

5. **Find & Replace:**
   - Use your code editor's "Find & Replace" feature
   - Search for "LipuHossain" to find all instances
   - Replace with your name in one go

6. **Image Optimization:**
   - Compress images before uploading to improve load times
   - Use tools like TinyPNG or ImageOptim
   - Keep hero backgrounds under 500KB if possible
   - Logos and thumbnails should be under 100KB each

---

## 🔄 UPDATING MULTIPLE LOCATIONS

Some content appears in multiple files. Here's where to update each:

### Navigation Logo (appears on all pages):
- index.html - line 723
- sfx.html - line 187
- color.html - line 187
- tools.html - line 187
- portfolio.html - line 212

### Footer (appears only on index.html):
- Update once in index.html
- Other pages don't have footer

---

## 📞 NEED HELP?

Refer to `config.js` to see all your content organized in one place with comments and examples.

**Remember:** Any changes you make to `config.js` are for reference only (current setup). To actually update the website, you need to edit the HTML files at the locations specified in this guide.

---

**Last Updated:** November 2025
