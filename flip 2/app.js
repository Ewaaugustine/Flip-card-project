console.log("Hello World");
var rightArrow = document.getElementById("arrow_button");
var topCard = document.getElementById("cover_image");
var bottomCard = document.getElementById("detail_content");
var followButton = document.getElementById("follow_button");
rightArrow.addEventListener("click", function () {
  topCard.classList.add("hidden");
  bottomCard.classList.remove("hidden");
  console.log("Hide top card and show bottom card.");
});
followButton.addEventListener("click", function () {
  topCard.classList.remove("hidden");
  bottomCard.classList.add("hidden");
  console.log("Hide bottom card and show top card.");
});
.