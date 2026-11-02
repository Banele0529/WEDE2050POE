
// Get the menu search and filter elements
const menuSearch = document.getElementById("menuSearch");
const categoryFilter = document.getElementById("categoryFilter");
const menuCards = document.querySelectorAll(".menu-card");
const menuResult = document.getElementById("menuResult");
const noMenuResults = document.getElementById("noMenuResults");

// Search and filter the menu items
function filterMenu() {
    const searchText = menuSearch.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    let visibleItems = 0;

    menuCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const listItems = card.querySelectorAll("li");

        let matchingItems = 0;

        // Check each menu item against the search
        listItems.forEach(item => {
            const itemName = item.dataset.search.toLowerCase();
            const matchesSearch = itemName.includes(searchText);

            if (matchesSearch) {
                item.hidden = false;
                matchingItems++;
            } else {
                item.hidden = true;
            }
        });

        // Check whether the category matches
        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === cardCategory;

        // Hide cards with no matching items
        if (matchesCategory && matchingItems > 0) {
            card.hidden = false;
            visibleItems += matchingItems;
        } else {
            card.hidden = true;
        }
    });

    // Update the results message
    if (visibleItems === 0) {
        menuResult.textContent = "No matching menu items found.";
        noMenuResults.hidden = false;
    } else {
        menuResult.textContent =
            `Showing ${visibleItems} matching menu item(s).`;
        noMenuResults.hidden = true;
    }
}

// Run the filter when the visitor types or changes category
menuSearch.addEventListener("input", filterMenu);
categoryFilter.addEventListener("change", filterMenu);


// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
        // Close other questions when one is opened
        if (item.open) {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        }
    });
});