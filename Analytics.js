// analytics.js

// Function to send page view data
function trackPageView(page) {
    // Replace this with your actual tracking endpoint or analytics logic
    console.log('Page view tracked:', page);

    // Count page views using localStorage (optional)
    var pageViewsCount = localStorage.getItem('pageViewsCount') || 0;
    pageViewsCount++;
    localStorage.setItem('pageViewsCount', pageViewsCount);
    console.log('Total page views:', pageViewsCount);
}

// Function to get current page path
function getCurrentPagePath() {
    return window.location.pathname;
}

// Track page view on page load
window.addEventListener('load', function () {
    var currentPage = getCurrentPagePath();
    trackPageView(currentPage);
});
