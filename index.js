const navMenuButton = document.getElementById("navButton");
const cardDiv = document.getElementById("card");


navMenuButton.addEventListener("click", () => {
    cardDiv.style.display = cardDiv.style.display == "block" ? "none" : "block";
  });
