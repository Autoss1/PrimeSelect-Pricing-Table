// JavaScript to add blur and grayscale effect on other pricing tables
const pricingTables = document.querySelectorAll('.pricing-table-container');

pricingTables.forEach(table => {
    table.addEventListener('mouseenter', () => {
        pricingTables.forEach(otherTable => {
            if (otherTable !== table) {
                otherTable.classList.add('blurred');
            }
        });
    });

    table.addEventListener('mouseleave', () => {
        pricingTables.forEach(otherTable => {
            otherTable.classList.remove('blurred');
        });
    });
});
