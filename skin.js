let curIMG_id = 0;
let skins = [];

for (let i = 0; i <= 11; ++i) {
  skins.push("Skin/Riven_" + i + ".jpg");
}

function next() {
  ++curIMG_id;
  if (curIMG_id == skins.length) curIMG_id = 0;
  document.getElementById("myImg").src = skins[curIMG_id];
  document.getElementById("img").src = skins[curIMG_id];
}

function previous() {
  --curIMG_id;
  if (curIMG_id == -1) curIMG_id = skins.length - 1;
  document.getElementById("myImg").src = skins[curIMG_id];
  document.getElementById("img").src = skins[curIMG_id];
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    previous();
  } else if (event.keyCode == 39) {
    next();
  } else if (event.keyCode == 27) {
    modal.style.display = "none";
  }
});
