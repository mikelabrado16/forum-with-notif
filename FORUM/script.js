var settingsmenu = document.querySelector(".settings-menu");
var notificationsmenu = document.querySelector(".notifications-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
    // Close notifications menu if it's open
    if (notificationsmenu.classList.contains("notifications-menu-height")) {
        notificationsmenu.classList.remove("notifications-menu-height");
    }
}

function notificationsMenuToggle() {
    notificationsmenu.classList.toggle("notifications-menu-height");
    // Close settings menu if it's open
    if (settingsmenu.classList.contains("settings-menu-height")) {
        settingsmenu.classList.remove("settings-menu-height");
    }
}

