const navMenuButton = document.getElementById("navButton");
const cardDiv = document.getElementById("card");
const nameDiv =document.getElementById("name");

navMenuButton.addEventListener("click", () => {
    cardDiv.style.display = cardDiv.style.display == "block" ? "none" : "block";
  });
  nameDiv.addEventListener("click", () => {
    cardDiv.style.display = cardDiv.style.display == "block" ? "none" : "block";
  });
