// App Data
const appsData = [
    {
        id: 1,
        image: "assets/demo-app (1).webp",
        title: "Forest: Focus For Productivity",
        companyName: "productive.io",
        description: "Stay focused and build better habits. Plant virtual trees while you work and grow a beautiful forest of productivity. The Forest app uses gamification to help you stay away from your phone and concentrate on what matters most. When you want to focus, you plant a seed in the app. Over time, this seed will gradually grow into a tree. However, if you leave the app to check social media or other distractions, your tree will wither away. This simple yet powerful mechanism helps you stay focused and builds lasting productivity habits.",
        size: 25,
        reviews: 54000,
        ratingAvg: 4.5,
        downloads: 8000000,
        ratings: [
            { name: "5 star", count: 42000 },
            { name: "4 star", count: 8000 },
            { name: "3 star", count: 2500 },
            { name: "2 star", count: 1000 },
            { name: "1 star", count: 500 }
        ]
    },
    {
        id: 2,
        image: "assets/demo-app (2).webp",
        title: "SimPlan:ToDo List With Reminder",
        companyName: "productive.io",
        description: "Simple and powerful task management with smart reminders to keep you on track throughout your day.",
        size: 18,
        reviews: 32000,
        ratingAvg: 4.2,
        downloads: 5000000,
        ratings: [
            { name: "5 star", count: 25000 },
            { name: "4 star", count: 5000 },
            { name: "3 star", count: 1500 },
            { name: "2 star", count: 400 },
            { name: "1 star", count: 100 }
        ]
    },
    {
        id: 3,
        image: "assets/demo-app (3).webp",
        title: "FLIP - Focus Timer For Study",
        companyName: "studytech.io",
        description: "Perfect study companion with Pomodoro technique integration and focus tracking.",
        size: 22,
        reviews: 28000,
        ratingAvg: 4.7,
        downloads: 6500000,
        ratings: [
            { name: "5 star", count: 22000 },
            { name: "4 star", count: 4500 },
            { name: "3 star", count: 1200 },
            { name: "2 star", count: 250 },
            { name: "1 star", count: 50 }
        ]
    },
    {
        id: 4,
        image: "assets/demo-app (4).webp",
        title: "Pomocat - Cute Pomodoro Timer",
        companyName: "cuteprod.io",
        description: "Adorable productivity timer featuring cute cats that help you focus and stay motivated.",
        size: 30,
        reviews: 45000,
        ratingAvg: 4.8,
        downloads: 9000000,
        ratings: [
            { name: "5 star", count: 38000 },
            { name: "4 star", count: 5500 },
            { name: "3 star", count: 1200 },
            { name: "2 star", count: 250 },
            { name: "1 star", count: 50 }
        ]
    },
    {
        id: 5,
        image: "assets/demo-app (5).webp",
        title: "Time Planner: Schedule & Tasks",
        companyName: "timemaster.io",
        description: "Complete time management solution with calendar integration and task prioritization.",
        size: 35,
        reviews: 67000,
        ratingAvg: 4.6,
        downloads: 10000000,
        ratings: [
            { name: "5 star", count: 52000 },
            { name: "4 star", count: 11000 },
            { name: "3 star", count: 3000 },
            { name: "2 star", count: 800 },
            { name: "1 star", count: 200 }
        ]
    },
    {
        id: 6,
        image: "assets/demo-app (6).webp",
        title: "Morning Habits - Daily Routine",
        companyName: "habitforge.io",
        description: "Build powerful morning routines and establish lasting healthy habits.",
        size: 28,
        reviews: 39000,
        ratingAvg: 4.4,
        downloads: 7200000,
        ratings: [
            { name: "5 star", count: 30000 },
            { name: "4 star", count: 6500 },
            { name: "3 star", count: 2000 },
            { name: "2 star", count: 400 },
            { name: "1 star", count: 100 }
        ]
    },
    {
        id: 7,
        image: "assets/demo-app (1).webp",
        title: "Focus Plant: Pomodoro Forest",
        companyName: "focusapps.io",
        description: "Grow your focus forest while working. Beautiful gamification of productivity.",
        size: 26,
        reviews: 51000,
        ratingAvg: 4.9,
        downloads: 11000000,
        ratings: [
            { name: "5 star", count: 47000 },
            { name: "4 star", count: 3200 },
            { name: "3 star", count: 600 },
            { name: "2 star", count: 150 },
            { name: "1 star", count: 50 }
        ]
    },
    {
        id: 8,
        image: "assets/demo-app (2).webp",
        title: "Alarmy - Alarm Clock & Sleep",
        companyName: "sleeptech.io",
        description: "The world's most annoying alarm clock app that actually gets you out of bed.",
        size: 32,
        reviews: 88000,
        ratingAvg: 4.3,
        downloads: 15000000,
        ratings: [
            { name: "5 star", count: 65000 },
            { name: "4 star", count: 15000 },
            { name: "3 star", count: 5500 },
            { name: "2 star", count: 1800 },
            { name: "1 star", count: 700 }
        ]
    },
    {
        id: 9,
        image: "assets/demo-app (3).webp",
        title: "Meditation Timer - Mindful",
        companyName: "mindfulapps.io",
        description: "Perfect meditation companion with customizable timers and ambient sounds.",
        size: 20,
        reviews: 41000,
        ratingAvg: 4.6,
        downloads: 6800000,
        ratings: [
            { name: "5 star", count: 32000 },
            { name: "4 star", count: 6500 },
            { name: "3 star", count: 2000 },
            { name: "2 star", count: 400 },
            { name: "1 star", count: 100 }
        ]
    },
    {
        id: 10,
        image: "assets/demo-app (4).webp",
        title: "StudyBuddy - Learn Better",
        companyName: "edutech.io",
        description: "AI-powered study assistant that helps you learn more effectively.",
        size: 38,
        reviews: 73000,
        ratingAvg: 4.7,
        downloads: 12000000,
        ratings: [
            { name: "5 star", count: 58000 },
            { name: "4 star", count: 11000 },
            { name: "3 star", count: 3000 },
            { name: "2 star", count: 800 },
            { name: "1 star", count: 200 }
        ]
    },
    {
        id: 11,
        image: "assets/demo-app (5).webp",
        title: "WaterTracker - Stay Hydrated",
        companyName: "healthapps.io",
        description: "Track your daily water intake and build healthy hydration habits.",
        size: 15,
        reviews: 29000,
        ratingAvg: 4.4,
        downloads: 5500000,
        ratings: [
            { name: "5 star", count: 22000 },
            { name: "4 star", count: 5000 },
            { name: "3 star", count: 1500 },
            { name: "2 star", count: 400 },
            { name: "1 star", count: 100 }
        ]
    },
    {
        id: 12,
        image: "assets/demo-app (6).webp",
        title: "NotePad Pro - Quick Notes",
        companyName: "noteapps.io",
        description: "Fast and simple note-taking app with cloud sync and organization.",
        size: 12,
        reviews: 36000,
        ratingAvg: 4.5,
        downloads: 7000000,
        ratings: [
            { name: "5 star", count: 28000 },
            { name: "4 star", count: 6000 },
            { name: "3 star", count: 1500 },
            { name: "2 star", count: 400 },
            { name: "1 star", count: 100 }
        ]
    }
];

// State
let currentPage = 'home';
let selectedAppId = null;
let installedApps = [];
let fromPage = 'home';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadInstalledApps();
    renderTrendingApps();
    renderAllApps();
    setupSearch();
});

// Load installed apps from localStorage
function loadInstalledApps() {
    const stored = localStorage.getItem('installedApps');
    if (stored) {
        installedApps = JSON.parse(stored);
    }
}

// Save to localStorage
function saveInstalledApps() {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
}

// Format numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// Create app card
function createAppCard(app) {
    return `
        <div class="app-card" onclick="showAppDetails(${app.id})">
            <div class="app-card-image">
                <img src="${app.image}" alt="${app.title}">
            </div>
            <div class="app-card-content">
                <div class="app-card-title">${app.title}</div>
                <div class="app-card-stats">
                    <div class="downloads">
                        <img src="assets/icon-downloads.png" alt="Downloads" style="width: 12px; height: 12px;">
                        ${formatNumber(app.downloads)}
                    </div>
                    <div class="rating">
                        <img src="assets/icon-ratings.png" alt="Rating" style="width: 12px; height: 12px;">
                        ${app.ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render trending apps (first 8)
function renderTrendingApps() {
    const container = document.getElementById('trending-apps');
    container.innerHTML = appsData.slice(0, 8).map(createAppCard).join('');
}

// Render all apps
function renderAllApps(apps = appsData) {
    const container = document.getElementById('all-apps');
    const count = document.getElementById('apps-count');
    
    if (apps.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-icon">😿</div>
                <h2>No App Found</h2>
                <p>Try searching with different keywords</p>
            </div>
        `;
    } else {
        container.innerHTML = apps.map(createAppCard).join('');
    }
    
    count.textContent = `(${apps.length}) Apps Found`;
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        
        const container = document.getElementById('all-apps');
        container.innerHTML = `
            <div class="loading" style="grid-column: 1/-1;">
                <div class="spinner"></div>
                <p>Searching...</p>
            </div>
        `;
        
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase();
            const filtered = appsData.filter(app => 
                app.title.toLowerCase().includes(query)
            );
            renderAllApps(filtered);
        }, 500);
    });
}

// Show app details
function showAppDetails(appId) {
    fromPage = currentPage;
    selectedAppId = appId;
    const app = appsData.find(a => a.id === appId);
    if (!app) {
        showNotFound();
        return;
    }
    
    const isInstalled = installedApps.includes(appId);
    const maxRating = Math.max(...app.ratings.map(r => r.count));
    
    const detailsHtml = `
        <div class="app-header">
            <div class="app-icon">
                <img src="${app.image}" alt="${app.title}">
            </div>
            <div class="app-info">
                <h1>${app.title}</h1>
                <p class="developer">Developed by ${app.companyName}</p>
                <div class="app-stats-grid">
                    <div class="stat-item">
                        <div class="stat-label">
                            <img src="assets/icon-downloads.png" alt="Downloads" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                            Total Downloads
                        </div>
                        <div class="stat-value">${formatNumber(app.downloads)}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">
                            <img src="assets/icon-ratings.png" alt="Rating" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                            Average Ratings
                        </div>
                        <div class="stat-value">${app.ratingAvg}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">
                            <img src="assets/icon-review.png" alt="Reviews" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                            Total Reviews
                        </div>
                        <div class="stat-value">${formatNumber(app.reviews)}</div>
                    </div>
                </div>
                <button 
                    class="install-btn" 
                    onclick="handleInstall(${app.id})"
                    ${isInstalled ? 'disabled' : ''}
                >
                    ${isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                </button>
            </div>
        </div>
        
        <div class="ratings-section">
            <h2>Ratings</h2>
            ${app.ratings.map(rating => `
                <div class="rating-bar">
                    <div class="rating-label">${rating.name}</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${(rating.count / maxRating) * 100}%"></div>
                    </div>
                    <div class="rating-count">${rating.count}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="description-section">
            <h2>Description</h2>
            <p>${app.description}</p>
        </div>
    `;
    
    document.getElementById('app-details-content').innerHTML = detailsHtml;
    navigateTo('app-details');
}

// Handle install
function handleInstall(appId) {
    if (installedApps.includes(appId)) return;
    
    showLoading();
    
    setTimeout(() => {
        installedApps.push(appId);
        saveInstalledApps();
        hideLoading();
        showToast('App installed successfully!');
        showAppDetails(appId);
    }, 1000);
}

// Handle uninstall
function handleUninstall(appId) {
    showLoading();
    
    setTimeout(() => {
        installedApps = installedApps.filter(id => id !== appId);
        saveInstalledApps();
        hideLoading();
        showToast('App uninstalled successfully!');
        renderInstallationPage();
    }, 800);
}

// Render installation page
function renderInstallationPage() {
    const container = document.getElementById('installation-list');
    const count = document.getElementById('installed-count');
    const installedAppsList = appsData.filter(app => installedApps.includes(app.id));
    
    count.textContent = `${installedAppsList.length} Apps Found`;
    
    if (installedAppsList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📱</div>
                <h2>No Apps Installed</h2>
                <p>Start installing apps from our store!</p>
                <button class="show-all-btn" onclick="navigateTo('apps')">Browse Apps</button>
            </div>
        `;
    } else {
        container.innerHTML = installedAppsList.map(app => `
            <div class="installation-card">
                <div class="installation-card-left">
                    <div class="installation-icon">
                        <img src="${app.image}" alt="${app.title}">
                    </div>
                    <div class="installation-info">
                        <h3>${app.title}</h3>
                        <div class="installation-stats">
                            <div class="downloads">
                                <img src="assets/icon-downloads.png" alt="Downloads" style="width: 12px; height: 12px;">
                                ${formatNumber(app.downloads)}
                            </div>
                            <div class="rating">
                                <img src="assets/icon-ratings.png" alt="Rating" style="width: 12px; height: 12px;">
                                ${app.ratingAvg}
                            </div>
                            <span>${app.size} MB</span>
                        </div>
                    </div>
                </div>
                <button class="uninstall-btn" onclick="handleUninstall(${app.id})">
                    Uninstall
                </button>
            </div>
        `).join('');
    }
}

// Sort installed apps
function sortInstalledApps() {
    const sortValue = document.getElementById('sort-select').value;
    const installedAppsList = appsData.filter(app => installedApps.includes(app.id));
    
    if (sortValue === 'high-low') {
        installedAppsList.sort((a, b) => b.downloads - a.downloads);
    } else if (sortValue === 'low-high') {
        installedAppsList.sort((a, b) => a.downloads - b.downloads);
    }
    
    const container = document.getElementById('installation-list');
    container.innerHTML = installedAppsList.map(app => `
        <div class="installation-card">
            <div class="installation-card-left">
                <div class="installation-icon">
                    <img src="${app.image}" alt="${app.title}">
                </div>
                <div class="installation-info">
                    <h3>${app.title}</h3>
                    <div class="installation-stats">
                        <div class="downloads">
                            <img src="assets/icon-downloads.png" alt="Downloads" style="width: 12px; height: 12px;">
                            ${formatNumber(app.downloads)}
                        </div>
                        <div class="rating">
                            <img src="assets/icon-ratings.png" alt="Rating" style="width: 12px; height: 12px;">
                            ${app.ratingAvg}
                        </div>
                        <span>${app.size} MB</span>
                    </div>
                </div>
            </div>
            <button class="uninstall-btn" onclick="handleUninstall(${app.id})">
                Uninstall
            </button>
        </div>
    `).join('');
}

// Navigation
function navigateTo(page) {
    // Hide all pages
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('apps-page').classList.add('hidden');
    document.getElementById('installation-page').classList.add('hidden');
    document.getElementById('app-details-page').classList.add('hidden');
    
    // Remove active from nav
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    
    // Show selected page
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
        document.getElementById('nav-home').classList.add('active');
    } else if (page === 'apps') {
        document.getElementById('apps-page').classList.remove('hidden');
        document.getElementById('nav-apps').classList.add('active');
        renderAllApps();
    } else if (page === 'installation') {
        document.getElementById('installation-page').classList.remove('hidden');
        document.getElementById('nav-installation').classList.add('active');
        renderInstallationPage();
    } else if (page === 'app-details') {
        document.getElementById('app-details-page').classList.remove('hidden');
    }
    
    currentPage = page;
    window.scrollTo(0, 0);
}

function navigateBack() {
    navigateTo(fromPage);
}

// Show/hide loading
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'global-loading';
    loading.className = 'loading';
    loading.innerHTML = `
        <div class="spinner"></div>
        <p>Processing...</p>
    `;
    loading.style.position = 'fixed';
    loading.style.top = '0';
    loading.style.left = '0';
    loading.style.right = '0';
    loading.style.bottom = '0';
    loading.style.background = 'rgba(255,255,255,0.9)';
    loading.style.zIndex = '9999';
    loading.style.display = 'flex';
    loading.style.flexDirection = 'column';
    loading.style.alignItems = 'center';
    loading.style.justifyContent = 'center';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('global-loading');
    if (loading) {
        loading.remove();
    }
}

// Show toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Show not found
function showNotFound() {
    const detailsHtml = `
        <div class="empty-state">
            <div class="empty-icon">
                <img src="assets/App-Error.png" alt="Not Found" style="width: 200px; height: auto;">
            </div>
            <h2>OPPS!! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system, please try another apps</p>
            <button class="show-all-btn" onclick="navigateBack()">Go Back!</button>
        </div>
    `;
    document.getElementById('app-details-content').innerHTML = detailsHtml;
    navigateTo('app-details');
}