// membuat ada tulisan info lanjut ketika di sorot oleh mouse / perpindahan gambar saat di sorot mouse

let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "Hutao") {
            event.target.setAttribute("src", "assets/images/34info.png");
            return;
        } else if (event.target.id === "Mika") {
            event.target.setAttribute("src", "assets/images/35info.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "Hutao") {
            event.target.setAttribute("src", "assets/images/34.png");
            return;
        }
        if (event.target.id === "Mika") {
            event.target.setAttribute("src", "assets/images/35.png");
            return;
        }
    });
}