document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMessage").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
    }, 3000);
});
