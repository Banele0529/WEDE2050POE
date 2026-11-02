
document.addEventListener("DOMContentLoaded", function () {

    const aboutTabs = document.querySelectorAll(".about-tab");
    const aboutPanels = document.querySelectorAll(".about-panel");

    function openAboutTab(selectedTab) {

        const panelId = selectedTab.getAttribute("aria-controls");

        aboutTabs.forEach(tab => {
            const isSelected = tab === selectedTab;

            tab.classList.toggle("active", isSelected);
            tab.setAttribute("aria-selected", isSelected);
        });

        aboutPanels.forEach(panel => {
            panel.hidden = panel.id !== panelId;
        });
    }

    aboutTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            openAboutTab(tab);
        });
    });

    // Show Vision when the page first opens
    if (aboutTabs.length > 0) {
        openAboutTab(aboutTabs[0]);
    }

});