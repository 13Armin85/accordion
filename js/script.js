document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
        header.addEventListener("click", function () {
            const currentlyActive = document.querySelector(
                ".accordion-content.active"
            );

            // بستن پنل قبلی اگر باز بود
            if (currentlyActive && currentlyActive !== this.nextElementSibling) {
                currentlyActive.classList.remove("active");
            }

            // تغییر وضعیت پنل کلیک‌شده
            this.nextElementSibling.classList.toggle("active");
        });
    });
});
