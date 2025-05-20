// Debug logs
console.log('Script starting...');

// Initialize map centered on Ladakh
const map = L.map('map').setView([34.1526, 77.5771], 8);
console.log('Map initialized:', map);

// Add custom tile layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

const customIcon = L.divIcon({
    className: 'marker',
    iconSize: [32, 32]
});

// Updated locations data with compelling storytelling and highlighted achievements
const locations = [
    {
        position: [34.83568449, 77.47910294],
        title: "Ayee Village",
        description: "<h3>The Challenge: Water Scarcity in a Remote Paradise</h3><p>Nestled in the stunning Nubra Valley, Ayee's 40 households face a paradoxical reality—surrounded by the majesty of the Himalayas yet plagued by critical water shortages. With no natural glacier and reliance on a single small spring, agricultural activities during the crucial spring growing season were severely limited.</p><p>The village's remoteness presented another challenge: reaching Ayee requires crossing the treacherous Khardung La pass (18,380 feet), which becomes nearly impassable during winter months. This geographic isolation had previously limited technological interventions.</p><h3>Innovation Against the Odds</h3><p>Despite being our <strong>warmest implementation site</strong> with average temperatures of only -2°C (reaching lows of -11°C), Ayee emerged as our <strong>most efficient location</strong>. The AIR system achieved an impressive water use efficiency of <strong>20%</strong>—the highest among all project sites. This remarkable performance in suboptimal temperature conditions demonstrated the adaptability of our automation technology.</p><p>The system intelligently operated primarily during nighttime hours when temperatures were sufficient for freezing, then automatically switched to drain mode during warmer daylight periods. This smart operation cycle resulted in zero pipeline freezing events throughout the entire season.</p><h3>Community Champions</h3><p>The youth of Ayee demonstrated exceptional engagement with the technology, quickly mastering the system's operation principles. This high level of local involvement meant that villagers could independently manage the installation with minimal external support—creating a model of self-sufficiency that we hope to replicate across all sites.</p><p>By March 2025, the AIR system had created a substantial ice reserve of <strong>21 lakh litres</strong>, providing critical water security for the upcoming agricultural season. This achievement is even more remarkable considering the accessibility challenges that make traditional infrastructure development prohibitively difficult in this region.</p>",
        stats: {
            households: "40",
            distance: "200 kms",
            waterSources: "Small spring (no glacier)",
            iceVolume: "21 lakh litres",
            efficiency: "20% (Highest)",
            tempRange: "-2°C to -11°C (Warmest site)",
            installed: "November 1, 2024",
            fundedBy: "NABARD",
            keySuccess: "Zero pipeline freezing events despite warm conditions"
        },
        image: "images/ayee.jpg"
    },
    {
        position: [33.92229758, 77.88109547],
        title: "Igoo Village",
        description: "<h3>Evolution of Innovation: Second-Generation Success</h3><p>Igoo represents our longest-running engagement, with the 2024-25 season marking our second winter of AIR development in this south-facing village of 260 households. Located in the Indus belt within a 10 km long narrow valley, Igoo has struggled with water scarcity despite having a natural glacier 6 km away at an altitude above 5,400 meters.</p><p>The village has a rich history of water conservation efforts, with multiple artificial glacier attempts dating back to 2009. In 2021, an 'ice stupa' built here won first prize in a regional competition, but all ice reservoir initiatives were abandoned until our intervention.</p><h3>Technical Breakthrough: The Hanging Pipeline Revolution</h3><p>Igoo became our testing ground for a significant design evolution—transitioning from fountains mounted on vertical metal pipes to an innovative hanging HDPE pipeline system with three fountains. This engineering advancement dramatically transformed both the structure's shape and its performance.</p><p>The results speak for themselves: the system achieved a maximum ice volume of <strong>41 lakh litres</strong> by March 2025, representing a <strong>33% increase</strong> from the previous year's 27.60 lakh litres. Under ideal conditions with mean air temperatures of -8°C (reaching lows of -20°C) and water temperatures averaging 4°C, the automation system maintained fountain operation for 90% of the winter season.</p><h3>Community Impact: A Village Transformed</h3><p>By revitalizing the village's Water Management Committee and implementing our second-generation AIR system, we've created a sustainable water management solution that continues to improve year over year. Household surveys revealed that residents closest to the AIR site experienced significant improvements in water availability, with ripple effects on agricultural productivity.</p><p>While fountain water use efficiency remains an area for improvement at 13%, the complete absence of pipeline freezing events throughout the season demonstrates the reliability of our automation technology even in this challenging environment.</p>",
        stats: {
            households: "260",
            distance: "50 kms",
            waterSources: "Natural glacier, Igoo Tso (glacial lake)",
            iceVolume: "41 lakh litres",
            yearOverYear: "33% increase from 2023-24",
            efficiency: "13%",
            tempRange: "-8°C to -20°C",
            installed: "November 6, 2024",
            fundedBy: "NABARD",
            innovation: "Hanging HDPE pipeline with three fountains"
        },
        image: "images/igoo.jpg"
    },
    {
        position: [34.22027778, 76.89722222],
        title: "Ursi Village",
        description: "<h3>A Village Saved: From Abandonment to Abundance</h3><p>With just 16 households nestled between the Zanskar and Indus rivers, Ursi's story is one of remarkable resilience. This remote community once faced such severe water shortages that residents considered abandoning their ancestral home entirely. Relying solely on spring sources with no natural glacier, their agricultural future seemed bleak.</p><p>Previous intervention attempts, including those by Padmashree Chewang Norphel, had been largely unsuccessful. However, inspired by the ice stupa concept, the youth of Ursi began independently building ice structures seven years ago—a grassroots initiative that has become central to the village's survival strategy.</p><h3>Record-Breaking Results Against Extreme Challenges</h3><p>The 2024-25 season marked Ursi's first experience with automation technology, and the results were nothing short of extraordinary. Despite the most challenging installation environment in our entire project—requiring crossing hills, climbing difficult terrain, and manually transporting equipment through a gorge—the Ursi AIR system achieved a staggering <strong>46 lakh litres</strong> of ice volume, making it our <strong>most productive site</strong>.</p><p>This achievement is even more remarkable considering the modest temperature conditions, with mean air temperatures of -4°C (reaching lows of -13°C). The success demonstrates how strategic site selection and community engagement can overcome seemingly unfavorable environmental factors.</p><h3>Community Ownership Redefined</h3><p>The implementation at Ursi exemplifies true community partnership. When faced with the daunting task of transporting heavy equipment to the remote location, the entire village mobilized to assist, transforming a logistical challenge into a community celebration.</p><p>Our household surveys revealed the profound impact of this collaboration: <strong>87.5% of respondents reported substantially improved water availability</strong>, with almost all households experiencing increased agricultural income as a direct result. This powerful transformation from water insecurity to abundance represents the ultimate success of our AIR approach.</p>",
        stats: {
            households: "16",
            distance: "121 kms",
            waterSources: "Spring only (no natural glacier)",
            iceVolume: "46 lakh litres (Largest volume)",
            tempRange: "-4°C to -13°C",
            installed: "November 14, 2024",
            fundedBy: "Mercy Corps Ventures",
            communityImpact: "87.5% reported improved water availability",
            uniqueFeature: "7th year of ice building, 1st with automation"
        },
        image: "images/ursi.jpg"
    },
    {
        position: [33.7639167, 77.8610556],
        title: "Tuna Village",
        description: "<h3>Resilience in the Face of Repeated Disaster</h3><p>With just 5 households, Tuna is our smallest implementation site, yet its story is one of extraordinary determination. This tiny hamlet at 3,939 meters has faced devastating ecological disruptions from flash floods in 2006, 2010, and 2019—each event further diminishing their already limited water sources and destroying traditional channels.</p><p>Despite these repeated setbacks, the residents have refused to abandon their ancestral lands, instead actively building resilience strategies to mitigate the impacts of climate change on their fragile water ecosystem.</p><h3>Adaptive Implementation in Challenging Conditions</h3><p>As our final installation of the 2024-25 season, the Tuna AIR system benefited from the cumulative learnings of our earlier sites. The January 9, 2025 implementation featured retrofitted automation technology with advanced sensors and mechanized valves specifically calibrated for Tuna's unique conditions.</p><p>When our initial water source selection proved problematic, we demonstrated the flexibility of our approach by relocating the entire system 2 km higher in mid-February. While this adaptation shortened the available freezing window and complicated our measurement campaigns, it highlighted the agility of our implementation methodology.</p><h3>Building for Long-Term Community Ownership</h3><p>Understanding that sustainability depends on local capacity, we established a Water Management Committee comprised of Tuna residents and provided comprehensive training on system operation, troubleshooting, and maintenance. This knowledge transfer is particularly vital in such a small community where each household bears significant responsibility for resource management.</p><p>While detailed ice volume data couldn't be obtained due to the mid-season relocation, the system functioned well within temperature parameters of -5°C to -14°C. Perhaps more importantly, the implementation demonstrated that the AIR approach can be adapted to even the smallest communities facing the most severe environmental challenges.</p>",
        stats: {
            households: "5 (Smallest village)",
            distance: "56 kms",
            waterSources: "Spring water (diminished by flash floods)",
            installation: "January 9, 2025 (Latest site)",
            relocation: "Moved 2km higher in mid-February",
            tempRange: "-5°C to -14°C",
            windSpeed: "0.58 m/s (Mild conditions)",
            fundedBy: "Mercy Corps Ventures",
            resilience: "Surviving after 3 major flash floods (2006, 2010, 2019)"
        },
        image: "images/tunah.jpg"
    },
    {
        position: [34.06350485, 77.82494797],
        title: "Sakti Village",
        description: "<h3>Extreme Conditions: Engineering at the Edge</h3><p>Sakti presented our most extreme implementation environment—a 360-household village situated 55 km east of Leh at a challenging elevation of 4,470 meters. What makes this site particularly unique is its location within a remarkable wildlife hotspot, where snow leopards, lynx, urials, and marmots roam the high-altitude landscape.</p><p>The village has a sophisticated existing water management infrastructure, relying on two glaciers (Warila and Changla) and an extensive network of reservoirs and irrigation channels supported by the traditional Chhurpon/Chhures water distribution system. Previous artificial glacier initiatives dating back to the 1990s had fallen into disrepair by 2023.</p><h3>Cold Weather Extremes: Testing the Limits</h3><p>Our December 9, 2024 installation at Sakti marked our first construction campaign in ambient air temperatures below -15°C. This site consistently recorded the <strong>coldest conditions of all locations</strong>, with temperatures plummeting to an extraordinary <strong>-22°C</strong>. These extreme conditions tested our automation technology to its limits.</p><p>Unlike other sites where weather was the primary constraint, at Sakti, water temperature became the limiting operational factor. The extremely cold water source (averaging just 2°C) created a narrow window for safe operation. Despite these challenges, the system achieved an ice volume of 18 lakh litres.</p><h3>Wildlife Interactions and Adaptation</h3><p>Sakti also introduced an unexpected dimension to our project: wildlife interactions. We observed footprints of snow leopards and lynx near our installation, and some wiring damage was attributed to animal activity—a reminder that our work exists within delicate mountain ecosystems.</p><p>The technical team demonstrated exceptional adaptability, transitioning from the initial hanging fountain system to a vertical structure design when environmental conditions demanded it. Despite having the lowest spray operation time (62%) among all sites, the successful formation of ice under these extreme conditions represents a significant validation of our technology's robustness.</p>",
        stats: {
            households: "360 (Largest village)",
            distance: "55 kms",
            waterSources: "Two glaciers (Warila and Changla)",
            iceVolume: "18 lakh litres",
            tempRange: "-10°C to -22°C (Coldest site)",
            waterTemp: "2°C (Coldest water source)",
            installed: "December 9, 2024",
            sprayTime: "62% (Lowest operational time)",
            uniqueChallenge: "Wildlife interactions including snow leopards",
            fundedBy: "Irrigation and Flood Control Department",
            elevation: "4,470 meters (Highest site)"
        },
        image: "images/sakti.jpg"
    },
    {
        position: [34.12639019, 77.70943888],
        title: "Stakmo Village",
        description: "<h3>Reclaiming Water Security After a Decade of Loss</h3><p>Stakmo's water security story is marked by a dramatic rupture: in 2010, flash floods destroyed the village's carefully constructed cascade ice reservoir systems, which had been built under the Watershed Development Programme (2006) and Operation Sadhbhavana (2009). For over a decade, this community of 40 households located 30 km from Leh struggled without artificial glacier support, despite having insufficient natural water sources during critical agricultural periods.</p><p>Our December 2, 2024 implementation thus represented not just a new installation but a restoration of hope—the first successful ice reservoir in Stakmo since the destructive events of 2010.</p><h3>Community-Led Adaptation and Technical Response</h3><p>The project faced an early challenge when villagers requested relocating the water source below the Jal Jeevan pipes. This necessitated removing and reinstalling the entire pipeline system—a labor-intensive process that demonstrated our commitment to community preferences even when they present technical complications.</p><p>The resulting pipeline became the second-longest among all project sites, increasing vulnerability to freezing events in the moderately cold conditions (temperatures between -6°C and -16°C). This challenge became a valuable learning opportunity, helping us refine pipeline threshold parameters through real-world testing.</p><h3>Optimal Operating Conditions Through Automation</h3><p>Despite these challenges, the system achieved impressive results: a maximum ice volume of 27 lakh litres with the automation system maintaining fountain operation for 97% of the winter period. The shaded location and appropriate water temperature (averaging 2°C) created favorable conditions for consistent ice formation.</p><p>With discharge rates averaging 2.2 liters per second, the Stakmo implementation demonstrates the potential for mid-sized communities to achieve substantial water security through automated ice reservoirs. The site's proximity to our operational base allowed for rapid response to maintenance needs, contributing to its overall success despite the initial installation complications.</p>",
        stats: {
            households: "40",
            distance: "30 kms",
            waterSources: "Small glacier, natural springs",
            iceVolume: "27 lakh litres",
            efficiency: "17%",
            tempRange: "-6°C to -16°C",
            installed: "December 2, 2024",
            sprayTime: "97% active spray time",
            discharge: "2.2 liters/second average",
            fundedBy: "Mercy Corps Ventures",
            historicalContext: "First successful ice reservoir since 2010 flash floods"
        },
        image: "images/stakmo.jpg"
    },
    {
        position: [34.31777778, 77.23805556],
        title: "Likir Village",
        description: "<h3>Agricultural Excellence Meets Water Innovation</h3><p>Known throughout Ladakh for its exceptional agricultural products—particularly apricots and peas—Likir's 300 households have cultivated a reputation for farming excellence despite consistent water challenges. Located 60 km west of Leh at 4,470 meters, this vibrant community blends agricultural tradition with tourism to create a diversified economy.</p><p>Previous water conservation efforts included a 2016 cascade-type artificial glacier constructed by the Ladakh Environment and Health Organization (LEHO), but its insufficient shading resulted in minimal ice accumulation and limited benefit to the community.</p><h3>Community-Driven Water Source Innovation</h3><p>Our November 27, 2024 implementation featured a remarkable innovation suggested by the villagers themselves: a unique water source that combined glacial and spring water. This creative approach created ideal temperature fluctuations that optimized system performance, allowing weather conditions rather than water temperature to guide operational decisions.</p><p>When our initial attempt to implement the hanging fountains design encountered challenges due to insufficient height from the ground, the team demonstrated adaptability by transitioning to a vertical metal pipe design. This flexibility ensured the project's success despite unforeseen site-specific limitations.</p><h3>Balanced Performance Through Technical Optimization</h3><p>The Likir system achieved a substantial 31 lakh litres of ice by March 2025, operating in optimal conditions with moderate discharge rates averaging 1.7 liters per second. With mean water temperatures of 3°C and air temperatures between -6°C and -17°C, the automation system maintained fountain operation for 90% of the winter period.</p><p>Notably, Likir became one of four sites with stable GSM connectivity, enabling real-time monitoring through our AIR system dashboard. This connectivity, combined with the site's 20% water use efficiency and single pipeline freezing event (caused by improper alignment), demonstrates the potential for balanced performance when technical knowledge is combined with community innovation.</p>",
        stats: {
            households: "300",
            distance: "60 kms",
            waterSources: "Combined glacial and spring water (community innovation)",
            iceVolume: "31 lakh litres",
            efficiency: "20% (Tied for highest)",
            tempRange: "-6°C to -17°C",
            installed: "November 27, 2024",
            sprayTime: "90% active spray time",
            discharge: "1.7 liters/second average",
            connectivity: "Real-time monitoring via AIR dashboard",
            fundedBy: "Irrigation and Flood Control Department",
            knownFor: "Premium apricots and peas production"
        },
        image: "images/likir.jpg"
    }
];

// Add markers
locations.forEach(location => {
    const marker = L.marker(location.position, {icon: customIcon}).addTo(map);
    
    // First click zooms in
    let isZoomed = false;
    
    marker.on('click', () => {
        if (!isZoomed) {
            // First click only zooms
            map.flyTo(location.position, 12, {
                duration: 2,
                easeLinearity: 0.25
            });
            isZoomed = true;
        } else {
            // Second click opens sidebar
            updateSidebar(location);
        }
    });
});

function updateSidebar(location) {
    const sidebarContent = document.querySelector('.sidebar-content');
    
    // Create HTML for the village image - only if image path exists
    let imageHTML = '';
    if (location.image) {
        imageHTML = `
            <div class="village-image">
                <img src="${location.image}" alt="${location.title}">
                <div class="image-caption">${location.title} Automated Ice Reservoir</div>
            </div>
        `;
    }
    
    // Calculate a key performance indicator
    let keyMetric = '';
    let keyMetricIcon = '';
    let keyMetricValue = '';
    let keyMetricUnit = '';
    
    if (location.stats.iceVolume && location.stats.iceVolume.includes('lakh')) {
        keyMetricIcon = 'icicles';
        keyMetricValue = location.stats.iceVolume.split(' ')[0];
        keyMetricUnit = 'lakh litres';
    } else if (location.stats.efficiency) {
        keyMetricIcon = 'percentage';
        keyMetricValue = location.stats.efficiency.split('(')[0].trim();
        keyMetricUnit = 'efficiency';
    }
    
    if (keyMetricValue) {
        keyMetric = `
            <div class="key-metric">
                <div class="metric-icon">
                    <i class="fas fa-${keyMetricIcon}"></i>
                </div>
                <div class="metric-value">${keyMetricValue}</div>
                <div class="metric-unit">${keyMetricUnit}</div>
            </div>
        `;
    }

    // Group stats into categories for better organization
    const statCategories = {
        'Village Profile': ['households', 'distance', 'waterSources', 'elevation', 'knownFor'],
        'Technical Performance': ['iceVolume', 'efficiency', 'tempRange', 'waterTemp', 'sprayTime', 'discharge', 'yearOverYear'],
        'Implementation Details': ['installed', 'fundedBy', 'innovation', 'design', 'relocation', 'connectivity'],
        'Impact & Challenges': ['communityImpact', 'uniqueChallenge', 'keySuccess', 'historicalContext', 'resilience', 'uniqueFeature', 'windSpeed']
    };
    
    // Create HTML for the village data points - only if stats exist
    let statsHTML = '';
    if (location.stats) {
        // Create categorized stats HTML
        let categorizedStatsHTML = '';
        
        Object.entries(statCategories).forEach(([category, keys]) => {
            // Check if any keys from this category exist in stats
            const relevantStats = Object.entries(location.stats).filter(([key]) => keys.includes(key));
            
            if (relevantStats.length > 0) {
                categorizedStatsHTML += `
                    <div class="stat-category">
                        <h4>${category}</h4>
                        <div class="stats-grid">
                `;
                
                relevantStats.forEach(([key, value]) => {
                    // Generate appropriate icon based on key
                    let icon = 'fas fa-info-circle';
                    if (key.includes('household')) icon = 'fas fa-home';
                    else if (key.includes('distance')) icon = 'fas fa-route';
                    else if (key.includes('water')) icon = 'fas fa-tint';
                    else if (key.includes('ice') || key.includes('volume')) icon = 'fas fa-icicles';
                    else if (key.includes('efficiency')) icon = 'fas fa-percentage';
                    else if (key.includes('temp')) icon = 'fas fa-thermometer-half';
                    else if (key.includes('install') || key.includes('date')) icon = 'fas fa-calendar-check';
                    else if (key.includes('spray')) icon = 'fas fa-shower';
                    else if (key.includes('discharge')) icon = 'fas fa-water';
                    else if (key.includes('fund')) icon = 'fas fa-hands-helping';
                    else if (key.includes('challenge') || key.includes('unique')) icon = 'fas fa-exclamation-triangle';
                    else if (key.includes('survey') || key.includes('impact')) icon = 'fas fa-chart-bar';
                    else if (key.includes('design') || key.includes('innovation')) icon = 'fas fa-drafting-compass';
                    else if (key.includes('previous') || key.includes('history')) icon = 'fas fa-history';
                    else if (key.includes('elevation')) icon = 'fas fa-mountain';
                    else if (key.includes('community')) icon = 'fas fa-users';
                    else if (key.includes('connect')) icon = 'fas fa-wifi';
                    else if (key.includes('success')) icon = 'fas fa-award';
                    else if (key.includes('wind')) icon = 'fas fa-wind';
                    else if (key.includes('relocation')) icon = 'fas fa-truck-moving';
                    else if (key.includes('yearOverYear')) icon = 'fas fa-chart-line';
                    else if (key.includes('known')) icon = 'fas fa-star';
                    else if (key.includes('resilience')) icon = 'fas fa-shield-alt';
                    
                    // Convert key to label with spaces and capitalization
                    const label = key
                        .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                        .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between words
                        .trim();
                    
                    categorizedStatsHTML += `
                    <div class="stat-item">
                        <div class="stat-icon"><i class="${icon}"></i></div>
                        <div class="stat-content">
                            <div class="stat-label">${label}</div>
                            <div class="stat-value">${value}</div>
                        </div>
                    </div>
                    `;
                });
                
                categorizedStatsHTML += `
                        </div>
                    </div>
                `;
            }
        });
        
        statsHTML = `
            <div class="village-stats">
                <div class="stats-header">
                    <h3>Site Details & Performance</h3>
                    <div class="stats-tabs">
                        <button class="stats-tab active" data-category="all">All</button>
                        <button class="stats-tab" data-category="profile">Profile</button>
                        <button class="stats-tab" data-category="performance">Performance</button>
                        <button class="stats-tab" data-category="details">Details</button>
                    </div>
                </div>
                ${keyMetric}
                <div class="stats-categories">
                    ${categorizedStatsHTML}
                </div>
            </div>
        `;
    }
    
    // Include HTML directly from the description field
    sidebarContent.innerHTML = `
        <div class="location-info">
            <div class="location-header">
                <h2>${location.title}</h2>
                <div class="location-badge">AIR Project 2024-25</div>
            </div>
            ${imageHTML}
            <div class="description">
                ${location.description}
            </div>
            ${statsHTML}
            <div class="citation">
                <p>Source: <a href="#" class="report-link">Acres of Ice AIR Project Report 2024-25</a></p>
            </div>
        </div>
    `;
    
    document.querySelector('.sidebar').classList.add('active');
    // Hide left sidebar when marker is clicked
    leftSidebar.classList.remove('active');
    
    // Add interaction for stats tabs
    setTimeout(() => {
        const tabButtons = document.querySelectorAll('.stats-tab');
        if (tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show/hide stat categories based on selected tab
                    const category = button.dataset.category;
                    const categories = document.querySelectorAll('.stat-category');
                    
                    if (category === 'all') {
                        categories.forEach(cat => cat.style.display = 'block');
                    } else if (category === 'profile') {
                        categories.forEach(cat => {
                            cat.style.display = cat.querySelector('h4').textContent === 'Village Profile' ? 'block' : 'none';
                        });
                    } else if (category === 'performance') {
                        categories.forEach(cat => {
                            cat.style.display = cat.querySelector('h4').textContent === 'Technical Performance' ? 'block' : 'none';
                        });
                    } else if (category === 'details') {
                        categories.forEach(cat => {
                            const title = cat.querySelector('h4').textContent;
                            cat.style.display = (title === 'Implementation Details' || title === 'Impact & Challenges') ? 'block' : 'none';
                        });
                    }
                });
            });
        }
    }, 100);
    
    // Add custom CSS to enhance the visual presentation
    const style = document.createElement('style');
    style.textContent = `
        /* Global styling improvements */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');
        
        body {
            font-family: 'Open Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6, .stat-label, .location-badge {
            font-family: 'Montserrat', sans-serif;
        }
        
        /* Make the sidebar wider with a gradient background */
        .sidebar {
            width: 450px !important;
            max-width: 85vw;
            right: -450px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            box-shadow: -5px 0 25px rgba(0,0,0,0.15);
            border-left: none;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .sidebar.active {
            right: 0;
        }
        
        /* Left sidebar styling improvements */
        .left-sidebar {
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.95) 100%);
            color: white;
            border-right: none;
            box-shadow: 5px 0 25px rgba(0,0,0,0.15);
            padding-top: 0;
        }
        
        .left-sidebar h1, .left-sidebar h2, .left-sidebar h3 {
            color: white;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        
        .left-sidebar p {
            color: rgba(255,255,255,0.9);
        }
        
        .toggle-btn {
            background-color: #2980b9;
            color: white;
            border: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.2s ease;
        }
        
        .toggle-btn:hover {
            background-color: #3498db;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        /* Right sidebar content styling */
        .sidebar-content {
