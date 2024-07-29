document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

// Example: Update ticker content dynamically
document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker p');
    
    // Example dynamic content update
    // You could fetch this content from an API or server
    const notifications = [
        "🚨 New visiting hours from 8 AM to 8 PM",
        "🚨 Check out our new cardiology department!",
        "🚨 Emergency services are now 24/7",
        "🚨 Monthly health check-up camp on 5th of every month."
    ];

    ticker.textContent = notifications.join(" | ");
});
