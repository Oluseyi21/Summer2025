document.getElementById("buyButton").addEventListener("click", function() {
    const message = document.getElementById("confirmationMessage");
    message.style.display = "block";

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
});