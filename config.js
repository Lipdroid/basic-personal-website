/**
 * WEBSITE CONFIGURATION FILE
 * ===========================
 * Update this file to manage all your website content in one place.
 * Changes here will automatically reflect across your entire website.
 *
 * HOW TO USE:
 * 1. Find the section you want to update
 * 2. Change the text, image path, or URL
 * 3. Refresh your browser - changes will appear automatically!
 */

const websiteConfig = {

    // ========================================
    // GENERAL SETTINGS
    // ========================================
    siteName: "LipuHossain",
    siteTitle: "LipuHossain - Creative Professional",


    // ========================================
    // NAVIGATION BAR
    // ========================================
    navigation: {
        logo: "LipuHossain",
        menuItems: [
            { text: "HOME", url: "index.html" },
            { text: "COLOR", url: "color.html" },
            { text: "SFX", url: "sfx.html" },
            { text: "TOOLS", url: "tools.html" },
            { text: "PRODUCT", url: "product.html" },
            { text: "GEARS", url: "gears.html" }
        ]
    },


    // ========================================
    // HERO SECTION (Top 3-column section)
    // ========================================
    heroSections: {
        sfx: {
            title: "SFX",
            subtitle: "Sound Design & Audio Engineering",
            backgroundImage: "images/fulls/01.jpg",
            link: "sfx.html"
        },
        color: {
            title: "COLOR",
            subtitle: "Visual Arts & Color Grading",
            backgroundImage: "images/fulls/02.jpg",
            link: "color.html"
        },
        tools: {
            title: "TOOLS",
            subtitle: "Creative Technology & Innovation",
            backgroundImage: "images/fulls/03.jpg",
            link: "tools.html"
        }
    },

    // ========================================
    // FULL-WIDTH VIDEO SECTIONS
    // ========================================
    videoSections: {
        film: {
            title: "FILMS",
            subtitle: "Visual Storytelling & Cinematography",
            backgroundVideo: "images/videos/film-bg.mp4",  // Add your background video here (MP4 format recommended)
            backgroundImage: "images/fulls/05.jpg",  // Fallback image if video doesn't load
            link: "portfolio.html"
        },
        gears: {
            title: "GEARS I USE",
            subtitle: "Equipment & Technology",
            backgroundVideo: "images/videos/gears-bg.mp4",  // Add your gears background video here
            backgroundImage: "images/fulls/07.jpg",  // Fallback image if video doesn't load
            link: "gears.html"
        }
    },

    // ========================================
    // PRODUCTS GRID SECTION (After GEARS - with margins)
    // ========================================
    // Shows SFX, COLOR, TOOLS in a grid with spacing
    productGrid: {
        heading: "PRODUCTS",
        // Uses the same items as heroSections above
        // Items will be automatically populated from heroSections
    },


    // ========================================
    // TOOLS POWERED BY SECTION
    // ========================================
    // Add 6 brand logo images here
    // These will scroll infinitely across the page
    toolsPoweredBy: {
        heading: "Assets, films and tools powered by",
        logos: [
            "images/thumbs/01.jpg",  // Replace with your brand logo 1
            "images/thumbs/02.jpg",  // Replace with your brand logo 2
            "images/thumbs/03.jpg",  // Replace with your brand logo 3
            "images/thumbs/04.jpg",  // Replace with your brand logo 4
            "images/thumbs/05.jpg",  // Replace with your brand logo 5
            "images/thumbs/06.jpg"   // Replace with your brand logo 6
        ]
    },


    // ========================================
    // INTRODUCTION SECTION
    // ========================================
    introduction: {
        // Main profile/about image
        image: "images/fulls/04.jpg",  // Replace with your profile photo

        // Main heading text
        heading: "Hi, I'm LipuHossain — a Creative Professional with a passion for innovation.",

        // Button settings
        buttonText: "View my work",
        buttonLink: "#portfolio"
    },


    // ========================================
    // FILMS SECTION (YouTube Videos)
    // ========================================
    // Add your YouTube video URLs here
    // The thumbnails will be automatically extracted from YouTube
    films: {
        heading: "FILMS",

        // Add up to 6 YouTube video URLs
        // Format: https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID
        videos: [
            {
                url: "https://www.youtube.com/watch?v=lIxtuNBXcXE",
                title: "Your Video Title 1",  // Add your video title here
                videoId: "lIxtuNBXcXE"  // Automatically extracted from URL
            },
            {
                url: "https://www.youtube.com/watch?v=40yqG6tCoFA",
                title: "Your Video Title 2",
                videoId: "40yqG6tCoFA"
            },
            {
                url: "https://www.youtube.com/watch?v=k2IQ7eCrrVA",
                title: "Your Video Title 3",
                videoId: "k2IQ7eCrrVA"
            },
            {
                url: "https://www.youtube.com/watch?v=xfxTbzdUTCo",
                title: "Your Video Title 4",
                videoId: "xfxTbzdUTCo"
            },
            // Add more videos below (up to 6 total)
            // {
            //     url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
            //     title: "Your Video Title 5",
            //     videoId: "YOUR_VIDEO_ID"
            // },
            // {
            //     url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
            //     title: "Your Video Title 6",
            //     videoId: "YOUR_VIDEO_ID"
            // }
        ]
    },


    // ========================================
    // PORTFOLIO PAGE
    // ========================================
    portfolio: {
        pageTitle: "MY WORK",
        // Uses the same videos from films.videos above
    },


    // ========================================
    // FOOTER - ABOUT SECTION
    // ========================================
    footer: {
        about: {
            heading: "ABOUT",
            links: [
                { text: "Works", url: "#works" },
                { text: "SFX", url: "sfx.html" },
                { text: "Luts & Powergrade", url: "color.html" }
            ]
        },

        location: {
            heading: "LOCATION",
            items: [
                { text: "Available Worldwide", url: "#" },
                { text: "contact@lipuhossain.com", url: "mailto:contact@lipuhossain.com" },
                { text: "Your Location", url: "#" }  // Update with your location
            ]
        },

        socials: {
            heading: "SOCIALS",
            links: [
                { text: "Instagram", url: "https://instagram.com/yourhandle" },  // Update with your Instagram
                { text: "Twitter", url: "https://twitter.com/yourhandle" },      // Update with your Twitter
                { text: "Behance", url: "https://behance.net/yourhandle" }       // Update with your Behance
            ]
        },

        // Footer bottom handle/username
        handle: "@LipuHossain",

        // Footer image grid (6 images displayed vertically)
        imageGrid: [
            "images/thumbs/01.jpg",  // Replace with your image 1
            "images/thumbs/02.jpg",  // Replace with your image 2
            "images/thumbs/03.jpg",  // Replace with your image 3
            "images/thumbs/04.jpg",  // Replace with your image 4
            "images/thumbs/05.jpg",  // Replace with your image 5
            "images/thumbs/06.jpg"   // Replace with your image 6
        ]
    },


    // ========================================
    // INDIVIDUAL PAGES (SFX, COLOR, TOOLS)
    // ========================================
    pages: {
        sfx: {
            pageTitle: "SFX - Sound Design & Audio Engineering",
            heroTitle: "SFX",
            heroSubtitle: "Sound Design & Audio Engineering",
            heroBackground: "images/fulls/01.jpg",
            sectionHeading: "What I Do",
            sectionDescription: "Crafting immersive audio experiences through innovative sound design and precise audio engineering. From cinematic soundscapes to interactive audio for games and applications."
        },

        color: {
            pageTitle: "COLOR - Visual Arts & Color Grading",
            heroTitle: "COLOR",
            heroSubtitle: "Visual Arts & Color Grading",
            heroBackground: "images/fulls/02.jpg",
            sectionHeading: "Visual Excellence",
            sectionDescription: "Transforming visual narratives through expert color grading and visual artistry. Creating mood, atmosphere, and emotional resonance through the power of color."
        },

        tools: {
            pageTitle: "TOOLS - Creative Technology & Innovation",
            heroTitle: "TOOLS",
            heroSubtitle: "Creative Technology & Innovation",
            heroBackground: "images/fulls/03.jpg",
            sectionHeading: "Technical Expertise",
            sectionDescription: "Leveraging cutting-edge tools and technologies to bring creative visions to life. Constantly evolving with industry standards and emerging technologies."
        }
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================
// These functions help extract data from your config

/**
 * Extract YouTube Video ID from URL
 * Supports formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 */
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

/**
 * Get YouTube thumbnail URL from video ID
 */
function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * Auto-update video IDs from URLs
 * Call this to automatically extract video IDs from your URLs
 */
function updateVideoIds() {
    websiteConfig.films.videos.forEach(video => {
        if (!video.videoId && video.url) {
            video.videoId = extractYouTubeId(video.url);
        }
    });
}

// Run on load
updateVideoIds();


// ========================================
// DYNAMIC CONTENT LOADER
// ========================================
// This section automatically updates your website when you change config values above

/**
 * Load content when page is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    loadNavigationContent();
    loadHeroContent();
    loadVideoSections();
    loadProductGrid();
    loadToolsPoweredByContent();
    loadIntroductionContent();
    loadFooterContent();
});

/**
 * Update Navigation Bar
 */
function loadNavigationContent() {
    // Update logo text
    const logoElements = document.querySelectorAll('.nav-bar .logo');
    logoElements.forEach(logo => {
        logo.textContent = websiteConfig.navigation.logo;
    });

    // Update menu items
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.innerHTML = '';
        websiteConfig.navigation.menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.text;
            li.appendChild(a);
            navMenu.appendChild(li);
        });
    }

    // Update page title
    if (document.querySelector('title')) {
        document.querySelector('title').textContent = websiteConfig.siteTitle;
    }
}

/**
 * Update Hero Sections (top 3-column grid on index.html)
 */
function loadHeroContent() {
    // SFX Section
    const sfxSection = document.querySelector('.section-sfx');
    if (sfxSection) {
        sfxSection.querySelector('h1').textContent = websiteConfig.heroSections.sfx.title;
        sfxSection.querySelector('p').textContent = websiteConfig.heroSections.sfx.subtitle;
        sfxSection.querySelector('.explore-btn').href = websiteConfig.heroSections.sfx.link;
        sfxSection.style.backgroundImage = `url('${websiteConfig.heroSections.sfx.backgroundImage}')`;
    }

    // COLOR Section
    const colorSection = document.querySelector('.section-color');
    if (colorSection) {
        colorSection.querySelector('h1').textContent = websiteConfig.heroSections.color.title;
        colorSection.querySelector('p').textContent = websiteConfig.heroSections.color.subtitle;
        colorSection.querySelector('.explore-btn').href = websiteConfig.heroSections.color.link;
        colorSection.style.backgroundImage = `url('${websiteConfig.heroSections.color.backgroundImage}')`;
    }

    // TOOLS Section
    const toolsSection = document.querySelector('.section-tools');
    if (toolsSection) {
        toolsSection.querySelector('h1').textContent = websiteConfig.heroSections.tools.title;
        toolsSection.querySelector('p').textContent = websiteConfig.heroSections.tools.subtitle;
        toolsSection.querySelector('.explore-btn').href = websiteConfig.heroSections.tools.link;
        toolsSection.style.backgroundImage = `url('${websiteConfig.heroSections.tools.backgroundImage}')`;
    }
}

/**
 * Update Video Sections (FILM and GEARS)
 */
function loadVideoSections() {
    // FILM Section (with video background)
    const filmSection = document.querySelector('.section-film');
    if (filmSection) {
        filmSection.querySelector('h1').textContent = websiteConfig.videoSections.film.title;
        filmSection.querySelector('p').textContent = websiteConfig.videoSections.film.subtitle;
        filmSection.querySelector('.explore-btn').href = websiteConfig.videoSections.film.link;

        // Update video source
        const videoElement = filmSection.querySelector('.video-background');
        if (videoElement && websiteConfig.videoSections.film.backgroundVideo) {
            const videoSource = videoElement.querySelector('source');
            if (videoSource) {
                videoSource.src = websiteConfig.videoSections.film.backgroundVideo;
                videoElement.load();
            }
        }

        // Set fallback background image
        if (websiteConfig.videoSections.film.backgroundImage) {
            filmSection.style.backgroundImage = `url('${websiteConfig.videoSections.film.backgroundImage}')`;
            filmSection.style.backgroundSize = 'cover';
            filmSection.style.backgroundPosition = 'center';
        }
    }

    // GEARS Section (with video background)
    const gearsSection = document.querySelector('.section-gears');
    if (gearsSection) {
        gearsSection.querySelector('h1').textContent = websiteConfig.videoSections.gears.title;
        gearsSection.querySelector('p').textContent = websiteConfig.videoSections.gears.subtitle;
        gearsSection.querySelector('.explore-btn').href = websiteConfig.videoSections.gears.link;

        // Update video source
        const videoElement = gearsSection.querySelector('.video-background');
        if (videoElement && websiteConfig.videoSections.gears.backgroundVideo) {
            const videoSource = videoElement.querySelector('source');
            if (videoSource) {
                videoSource.src = websiteConfig.videoSections.gears.backgroundVideo;
                videoElement.load();
            }
        }

        // Set fallback background image
        if (websiteConfig.videoSections.gears.backgroundImage) {
            gearsSection.style.backgroundImage = `url('${websiteConfig.videoSections.gears.backgroundImage}')`;
            gearsSection.style.backgroundSize = 'cover';
            gearsSection.style.backgroundPosition = 'center';
        }
    }
}

/**
 * Update Product Grid Section
 * Uses the same SFX, COLOR, TOOLS from heroSections
 */
function loadProductGrid() {
    // Update heading
    const productHeading = document.querySelector('.product-section-heading');
    if (productHeading) {
        productHeading.textContent = websiteConfig.productGrid.heading;
    }

    // Update SFX
    const productSfx = document.querySelector('.section-product-sfx');
    if (productSfx) {
        productSfx.querySelector('h1').textContent = websiteConfig.heroSections.sfx.title;
        productSfx.querySelector('p').textContent = websiteConfig.heroSections.sfx.subtitle;
        productSfx.querySelector('.explore-btn').href = websiteConfig.heroSections.sfx.link;
        productSfx.style.backgroundImage = `url('${websiteConfig.heroSections.sfx.backgroundImage}')`;
    }

    // Update COLOR
    const productColor = document.querySelector('.section-product-color');
    if (productColor) {
        productColor.querySelector('h1').textContent = websiteConfig.heroSections.color.title;
        productColor.querySelector('p').textContent = websiteConfig.heroSections.color.subtitle;
        productColor.querySelector('.explore-btn').href = websiteConfig.heroSections.color.link;
        productColor.style.backgroundImage = `url('${websiteConfig.heroSections.color.backgroundImage}')`;
    }

    // Update TOOLS
    const productTools = document.querySelector('.section-product-tools');
    if (productTools) {
        productTools.querySelector('h1').textContent = websiteConfig.heroSections.tools.title;
        productTools.querySelector('p').textContent = websiteConfig.heroSections.tools.subtitle;
        productTools.querySelector('.explore-btn').href = websiteConfig.heroSections.tools.link;
        productTools.style.backgroundImage = `url('${websiteConfig.heroSections.tools.backgroundImage}')`;
    }
}

/**
 * Update Tools Powered By Section
 */
function loadToolsPoweredByContent() {
    const toolsHeading = document.querySelector('.scroll-section h2');
    if (toolsHeading) {
        toolsHeading.textContent = websiteConfig.toolsPoweredBy.heading;
    }

    const scrollContent = document.getElementById('scrollContent');
    if (scrollContent) {
        scrollContent.innerHTML = '';

        // Add logos twice for seamless loop
        for (let i = 0; i < 2; i++) {
            websiteConfig.toolsPoweredBy.logos.forEach(logoPath => {
                const img = document.createElement('img');
                img.src = logoPath;
                img.alt = 'Brand Logo';
                scrollContent.appendChild(img);
            });
        }
    }
}

/**
 * Update Introduction Section
 */
function loadIntroductionContent() {
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        const introImage = introSection.querySelector('img');
        if (introImage) {
            introImage.src = websiteConfig.introduction.image;
        }

        const introHeading = introSection.querySelector('h2');
        if (introHeading) {
            introHeading.textContent = websiteConfig.introduction.heading;
        }

        const introButton = introSection.querySelector('.view-work-btn');
        if (introButton) {
            introButton.textContent = websiteConfig.introduction.buttonText;
            introButton.href = websiteConfig.introduction.buttonLink;
        }
    }
}

/**
 * Update Footer Section
 */
function loadFooterContent() {
    // About Column
    const aboutHeading = document.querySelector('.footer-column:nth-child(1) h3');
    if (aboutHeading) {
        aboutHeading.textContent = websiteConfig.footer.about.heading;
    }

    const aboutLinks = document.querySelector('.footer-column:nth-child(1) ul');
    if (aboutLinks) {
        aboutLinks.innerHTML = '';
        websiteConfig.footer.about.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            li.appendChild(a);
            aboutLinks.appendChild(li);
        });
    }

    // Location Column
    const locationHeading = document.querySelector('.footer-column:nth-child(2) h3');
    if (locationHeading) {
        locationHeading.textContent = websiteConfig.footer.location.heading;
    }

    const locationLinks = document.querySelector('.footer-column:nth-child(2) ul');
    if (locationLinks) {
        locationLinks.innerHTML = '';
        websiteConfig.footer.location.items.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.text;
            li.appendChild(a);
            locationLinks.appendChild(li);
        });
    }

    // Socials Column
    const socialsHeading = document.querySelector('.footer-column:nth-child(3) h3');
    if (socialsHeading) {
        socialsHeading.textContent = websiteConfig.footer.socials.heading;
    }

    const socialsLinks = document.querySelector('.footer-column:nth-child(3) ul');
    if (socialsLinks) {
        socialsLinks.innerHTML = '';
        websiteConfig.footer.socials.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            a.target = '_blank';
            li.appendChild(a);
            socialsLinks.appendChild(li);
        });
    }

    // Footer Handle
    const footerHandle = document.querySelector('.footer-bottom p');
    if (footerHandle) {
        footerHandle.textContent = websiteConfig.footer.handle;
    }

    // Footer Image Grid
    const imageGrid = document.querySelector('.footer-images');
    if (imageGrid) {
        imageGrid.innerHTML = '';
        websiteConfig.footer.imageGrid.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = 'Footer Image';
            imageGrid.appendChild(img);
        });
    }
}

/**
 * Update Portfolio Page Grid
 */
function loadPortfolioGrid() {
    const portfolioGrid = document.querySelector('.video-grid');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = '';

        websiteConfig.films.videos.forEach((video, index) => {
            const link = document.createElement('a');
            link.href = video.url;
            link.target = '_blank';
            link.className = 'video-card';

            const img = document.createElement('img');
            img.src = getYouTubeThumbnail(video.videoId);
            img.alt = `Video ${index + 1}`;

            const videoInfo = document.createElement('div');
            videoInfo.className = 'video-info';

            const title = document.createElement('h3');
            title.textContent = video.title;

            const description = document.createElement('p');
            description.textContent = 'Click to watch on YouTube';

            videoInfo.appendChild(title);
            videoInfo.appendChild(description);
            link.appendChild(img);
            link.appendChild(videoInfo);
            portfolioGrid.appendChild(link);
        });
    }

    // Update page heading
    const pageHeading = document.querySelector('.portfolio-grid-section h1');
    if (pageHeading) {
        pageHeading.textContent = websiteConfig.portfolio.pageTitle;
    }
}

// Load portfolio grid if on portfolio page
if (window.location.pathname.includes('portfolio.html')) {
    document.addEventListener('DOMContentLoaded', loadPortfolioGrid);
}


// ========================================
// INSTRUCTIONS FOR MANAGING YOUR CONTENT
// ========================================
/*

✅ YOUR WEBSITE NOW UPDATES AUTOMATICALLY!

Just edit the values in this config.js file above, and your changes will
automatically appear on your website when you refresh the page.

TO UPDATE YOUTUBE VIDEOS:
1. Go to the "films" section above
2. Replace the URL with your YouTube video link
3. Update the title to match your video
4. The videoId will be automatically extracted
5. Refresh your browser - done!

TO UPDATE IMAGES:
1. Add your images to the "images" folder
2. Update the path in this config file
3. Paths are relative to index.html (e.g., "images/your-image.jpg")
4. Refresh your browser - done!

TO UPDATE TEXT:
1. Find the section you want to change
2. Update the text between the quotes
3. Save the file and refresh your browser - done!

TO UPDATE SOCIAL LINKS:
1. Go to footer.socials section
2. Replace the URLs with your actual social media profile links
3. Refresh your browser - done!

RECOMMENDED FOLDER STRUCTURE:
- images/
  - fulls/       (Large background images)
  - thumbs/      (Thumbnail images, brand logos)
  - profile/     (Your profile/about photos)

NEED MORE HELP?
Check CONTENT-GUIDE.md for detailed line-by-line instructions!

*/
