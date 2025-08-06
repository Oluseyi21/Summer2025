const viewButtons = document.querySelectorAll(".view-button");
viewButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert ("Opening product page...");
        const productLink = button.getAttribute("href");
        setTimeout(() => {
            window.location.href = productLink;
        }, 500);
    });
});