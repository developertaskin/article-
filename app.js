const shareButton = document.querySelector(".share-button");
const shareLinks = document.querySelector(".share-links");

shareButton.addEventListener("click", () => {
  shareLinks.classList.toggle("active");
});
