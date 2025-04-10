document.getElementById("contractForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Pobranie danych z formularza
    const seller = document.getElementById("seller").value;
    const buyer = document.getElementById("buyer").value;
    const item = document.getElementById("item").value;
    const date = document.getElementById("date").value;
    const price = document.getElementById("price").value;

    // Wyświetlenie potwierdzenia
    document.getElementById("confirmedSeller").textContent = seller;
    document.getElementById("confirmedBuyer").textContent = buyer;
    document.getElementById("confirmedItem").textContent = item;
    document.getElementById("confirmedDate").textContent = date;
    document.getElementById("confirmedPrice").textContent = price;

    document.getElementById("confirmation").style.display = "block";
    this.style.display = "none";
});
