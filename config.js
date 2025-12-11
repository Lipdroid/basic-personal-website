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
            { text: "BUY", url: "buy.html" }
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
            backgroundVideo: "images/videos/film-bg.mov",  // Add your background video here (MP4 format recommended)
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
    // MY STUDIO SECTION
    // ========================================
    studioSection: {
        title: "MY STUDIO",
        subtitle: "Creative Workspace & Setup",
        backgroundImage: "images/fulls/studio-bg.jpg",  // Background for homepage section
        heroImage: "images/fulls/studio-hero.jpg",      // Hero image for studio.html page
        link: "studio.html",

        // Studio page content
        pageTitle: "MY STUDIO - Creative Workspace & Setup",
        pageHeading: "MY STUDIO",
        pageSubheading: "Creative Workspace & Setup",

        // Studio items for photobook layout
        items: [
            {
                id: "item-1",
                image: "images/studio/item1.jpg",

                // Interactive Product Hotspots (IKEA-style clickable markers)
                // Add 1-5 hotspots per image (leave empty array [] for no hotspots)
                hotspots: [
                    {
                        // Hotspot 1
                        productName: "Studio Monitor",              // Product name shown in popup
                        productDescription: "Professional-grade studio monitor for accurate sound reproduction",  // Product description
                        productPrice: "$299.99",                    // Product price
                        productImage: "images/products/monitor.jpg", // Product thumbnail image in popup
                        buyLink: "https://example.com/product1",    // Where to buy (opens in new tab)
                        position: {
                            x: 30,  // Position from left (0-100%)
                            y: 40   // Position from top (0-100%)
                        }
                    },
                    {
                        // Hotspot 2
                        productName: "Desk Lamp",
                        productDescription: "Adjustable LED desk lamp with touch control",
                        productPrice: "$89.99",
                        productImage: "images/products/light.jpg",
                        buyLink: "https://example.com/product2",
                        position: { x: 70, y: 30 }
                    }
                    // Add up to 3 more hotspots (max 5 total)
                ],
                title: "Workstation",
                description: "My main creative hub where all the magic happens. This setup is designed for maximum productivity and comfort during long editing sessions.",
                details: "The desk provides ample space for multiple monitors, audio equipment, and all the tools I need within arm's reach.",
                specs: {
                    heading: "Features",
                    list: [
                        "Ergonomic standing desk with memory presets",
                        "Dual monitor setup for efficient workflow",
                        "Custom cable management system",
                        "Acoustic treatment for optimal sound"
                    ]
                }
            },
            {
                id: "item-2",
                image: "images/studio/item2.jpg",
                hotspots: [
                    {
                        productName: "LED Panel Light",
                        productDescription: "Professional LED panel with adjustable color temperature control",
                        productPrice: "$189.99",
                        productImage: "images/products/light.jpg",
                        buyLink: "https://example.com/light",
                        position: { x: 50, y: 45 }
                    }
                ],
                title: "Lighting Setup",
                description: "Professional lighting equipment that ensures perfect illumination for video calls, content creation, and photography work.",
                details: "Adjustable color temperature and intensity allow for complete control over the studio ambiance and creative output.",
                specs: {
                    heading: "Equipment",
                    list: [
                        "LED panel lights with diffusers",
                        "Adjustable light stands",
                        "RGB accent lighting",
                        "Softboxes for portrait photography"
                    ]
                }
            },
            {
                id: "item-3",
                image: "images/studio/item3.jpg",
                hotspots: [
                    {
                        productName: "Condenser Microphone",
                        productDescription: "Large diaphragm condenser mic with cardioid polar pattern",
                        productPrice: "$349.99",
                        productImage: "images/products/microphone.jpg",
                        buyLink: "https://example.com/mic",
                        position: { x: 45, y: 35 }
                    },
                    {
                        productName: "Audio Interface",
                        productDescription: "Professional audio interface with preamps and 48V phantom power",
                        productPrice: "$279.99",
                        productImage: "images/products/monitor.jpg",
                        buyLink: "https://example.com/interface",
                        position: { x: 60, y: 60 }
                    }
                ],
                title: "Audio Corner",
                description: "Dedicated space for recording voiceovers, podcasts, and music. Acoustically treated to minimize echo and background noise.",
                details: "High-quality microphones and audio interface ensure crystal-clear recordings every time.",
                specs: {
                    heading: "Gear",
                    list: [
                        "Condenser microphone with pop filter",
                        "Audio interface with phantom power",
                        "Studio headphones for monitoring",
                        "Acoustic foam panels"
                    ]
                }
            },
            {
                id: "item-4",
                image: "images/studio/item4.jpg",
                hotspots: [
                    {
                        productName: "Camera Body",
                        productDescription: "Professional mirrorless camera with 45MP sensor",
                        productPrice: "$2,499.99",
                        productImage: "images/products/monitor.jpg",
                        buyLink: "https://example.com/camera",
                        position: { x: 40, y: 50 }
                    }
                ],
                title: "Camera Station",
                description: "Organized storage and display area for my camera collection. Each piece of equipment has its designated place for quick access.",
                details: "Proper storage ensures all gear stays in optimal condition and ready for any shoot.",
                specs: {
                    heading: "Storage",
                    list: [
                        "Climate-controlled cabinet",
                        "Lens organizer with foam inserts",
                        "Battery charging station",
                        "Memory card storage system"
                    ]
                }
            },
            {
                id: "item-5",
                image: "images/studio/item5.jpg",
                hotspots: [
                    {
                        productName: "Mood Board Frame",
                        productDescription: "Magnetic board system for organizing inspiration and references",
                        productPrice: "$59.99",
                        productImage: "images/products/light.jpg",
                        buyLink: "https://example.com/board",
                        position: { x: 50, y: 40 }
                    }
                ],
                title: "Inspiration Wall",
                description: "A curated collection of inspiration, mood boards, and current projects. This space keeps me motivated and creatively engaged.",
                details: "Regular updates ensure fresh ideas and perspectives are always within view during work sessions.",
                specs: {
                    heading: "Elements",
                    list: [
                        "Magnetic board for quick changes",
                        "Printed reference materials",
                        "Project timeline displays",
                        "Color palette samples"
                    ]
                }
            }
        ]
    },

    // ========================================
    // INTERACTIVE PRODUCT SHOWCASE (Shop My Setup)
    // ========================================
    // IKEA-style interactive hotspots on images
    // Folder structure: images/products/ for product images
    productShowcase: {
        heading: "Shop My Setup",
        subheading: "製品ショーケース",
        description: "Click on the hotspots to explore the equipment and tools that power my creative workflow. Each item is carefully selected for quality and performance.",
        note: "(クリックして詳細を表示) Hover over the hotspots to see product details, click to view purchasing options.",

        // Multiple showcase images with hotspots
        showcases: [
            {
                id: "showcase-1",
                baseImage: "images/studio/item1.jpg",  // Main image with products
                products: [
                    {
                        name: "Studio Monitor",
                        description: "Professional-grade studio monitor for accurate sound reproduction",
                        price: "$299.99",
                        image: "images/products/monitor.jpg",  // Product detail image
                        link: "https://example.com/product1",  // Buy link
                        position: { x: 20, y: 30 }  // Position in percentage (x: left, y: top)
                    },
                    {
                        name: "LED Panel Light",
                        description: "Adjustable color temperature LED panel with softbox diffuser",
                        price: "$189.99",
                        image: "images/products/light.jpg",
                        link: "https://example.com/product2",
                        position: { x: 60, y: 50 }
                    },
                    {
                        name: "Condenser Microphone",
                        description: "Large diaphragm condenser mic with cardioid polar pattern",
                        price: "$349.99",
                        image: "images/products/microphone.jpg",
                        link: "https://example.com/product3",
                        position: { x: 40, y: 70 }
                    }
                ]
            }
            // Add more showcase images here as needed
            // Each can have 1-5 products
        ]
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
            "images/thumbs/01.png",  // Replace with your brand logo 1
            "images/thumbs/02.png",  // Replace with your brand logo 2
            "images/thumbs/03.png",  // Replace with your brand logo 3
            "images/thumbs/04.png",  // Replace with your brand logo 4
            "images/thumbs/05.png",  // Replace with your brand logo 5
            "images/thumbs/06.png"   // Replace with your brand logo 6
        ]
    },


    // ========================================
    // INTRODUCTION SECTION
    // ========================================
    introduction: {
        // Main profile/about image
        image: "images/fulls/04.jpg",  // Replace with your profile photo

        // Main heading text
        heading: "Hi, I'm LipuHossain — a Tokyo based Creative Professional with a passion for filmmaking.",

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
        // These are separate from the brand logos above
        imageGrid: [
            "images/footer/01.jpg",  // Replace with your footer image 1
            "images/footer/02.jpg",  // Replace with your footer image 2
            "images/footer/03.jpg",  // Replace with your footer image 3
            "images/footer/04.jpg",  // Replace with your footer image 4
            "images/footer/05.jpg",  // Replace with your footer image 5
            "images/footer/06.jpg"   // Replace with your footer image 6
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
    },


    // ========================================
    // PRODUCTS / BUY PAGE
    // ========================================
    // Configure your digital products here
    // After setting up Stripe, replace the stripePaymentLink with your actual Stripe Payment Link
    // After setting up file hosting, replace downloadLink with your Google Drive share link
    products: {
        pageTitle: "BUY - Digital Products",
        pageHeading: "DIGITAL PRODUCTS",
        pageSubtitle: "Premium assets for creators",

        // Product List
        items: [
            {
                id: "product-1",
                name: "Cinematic SFX Pack Vol. 1",
                description: "Professional sound effects library with 500+ cinematic sounds. Perfect for film, video games, and content creation.",
                price: "$29",
                image: "images/products/sfx-pack.jpg",  // Add your product image here
                features: [
                    "500+ High-quality SFX",
                    "24-bit WAV format",
                    "Organized categories",
                    "Royalty-free license"
                ],
                // STRIPE: Replace with your Stripe Payment Link after setup
                stripePaymentLink: "YOUR_STRIPE_PAYMENT_LINK_HERE",
                // GOOGLE DRIVE: Replace with your product download link after setup
                downloadLink: "YOUR_GOOGLE_DRIVE_LINK_HERE"
            },
            {
                id: "product-2",
                name: "Professional LUTs Collection",
                description: "25 cinema-grade color grading LUTs for DaVinci Resolve, Premiere Pro, and Final Cut Pro. Instant cinematic look.",
                price: "$39",
                image: "images/products/luts-pack.jpg",  // Add your product image here
                features: [
                    "25 Premium LUTs",
                    ".cube format",
                    "Works with all major NLEs",
                    "Commercial use included"
                ],
                // STRIPE: Replace with your Stripe Payment Link after setup
                stripePaymentLink: "YOUR_STRIPE_PAYMENT_LINK_HERE",
                // GOOGLE DRIVE: Replace with your product download link after setup
                downloadLink: "YOUR_GOOGLE_DRIVE_LINK_HERE"
            },
            {
                id: "product-3",
                name: "Motion Graphics Templates",
                description: "50 customizable motion graphics templates for Adobe After Effects. Lower thirds, titles, and transitions.",
                price: "$49",
                image: "images/products/motion-templates.jpg",  // Add your product image here
                features: [
                    "50 Unique templates",
                    "Fully customizable",
                    "Includes tutorials",
                    "Free updates"
                ],
                // STRIPE: Replace with your Stripe Payment Link after setup
                stripePaymentLink: "YOUR_STRIPE_PAYMENT_LINK_HERE",
                // GOOGLE DRIVE: Replace with your product download link after setup
                downloadLink: "YOUR_GOOGLE_DRIVE_LINK_HERE"
            },
            {
                id: "product-4",
                name: "Ambient Music Pack",
                description: "20 atmospheric background music tracks. Perfect for documentaries, vlogs, and ambient content. Fully licensed.",
                price: "$59",
                image: "images/products/music-pack.jpg",  // Add your product image here
                features: [
                    "20 Original tracks",
                    "MP3 & WAV included",
                    "Loop-ready versions",
                    "Lifetime license"
                ],
                // STRIPE: Replace with your Stripe Payment Link after setup
                stripePaymentLink: "YOUR_STRIPE_PAYMENT_LINK_HERE",
                // GOOGLE DRIVE: Replace with your product download link after setup
                downloadLink: "YOUR_GOOGLE_DRIVE_LINK_HERE"
            }
        ]
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
    loadStudioSection();
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
 * Update Studio Section (homepage and studio.html page)
 */
function loadStudioSection() {
    // Update studio section on homepage
    const studioSection = document.querySelector('.section-studio');
    if (studioSection) {
        const heading = studioSection.querySelector('h1');
        const subtitle = studioSection.querySelector('p');
        const link = studioSection.querySelector('.explore-btn');

        if (heading) heading.textContent = websiteConfig.studioSection.title;
        if (subtitle) subtitle.textContent = websiteConfig.studioSection.subtitle;
        if (link) link.href = websiteConfig.studioSection.link;

        // Set background image
        studioSection.style.backgroundImage = `url('${websiteConfig.studioSection.backgroundImage}')`;
        studioSection.style.backgroundSize = 'cover';
        studioSection.style.backgroundPosition = 'center';
    }

    // Load studio page content if on studio.html
    if (window.location.pathname.includes('studio.html')) {
        loadStudioPageContent();
    }
}

/**
 * Load Studio Page Content
 */
function loadStudioPageContent() {
    // Update page title
    if (document.querySelector('title')) {
        document.querySelector('title').textContent = websiteConfig.studioSection.pageTitle;
    }

    // Update hero section
    const heroSection = document.querySelector('.hero-section');
    const heroTitle = document.querySelector('.hero-section h1');
    const heroSubtitle = document.querySelector('.hero-section p');

    if (heroTitle) heroTitle.textContent = websiteConfig.studioSection.pageHeading;
    if (heroSubtitle) heroSubtitle.textContent = websiteConfig.studioSection.pageSubheading;

    // Set hero background image
    if (heroSection && websiteConfig.studioSection.heroImage) {
        heroSection.style.backgroundImage = `url('${websiteConfig.studioSection.heroImage}')`;
    }

    // Update photobook items
    const photobookSection = document.querySelector('.photobook-section');
    if (photobookSection) {
        photobookSection.innerHTML = '';

        websiteConfig.studioSection.items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'photobook-item';
            if (index % 2 !== 0) {
                itemDiv.classList.add('reverse');
            }

            itemDiv.innerHTML = `
                <div class="photobook-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="photobook-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p>${item.details}</p>
                    <div class="specs">
                        <h3>${item.specs.heading}</h3>
                        <ul>
                            ${item.specs.list.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;

            photobookSection.appendChild(itemDiv);
        });
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
