function readmore(elem) {
  // var dots = document.getElementById("dots");
  // var moretext = document.getElementById("more");
  var btn = document.getElementById("btn");
  let divCardBody = document.getElementById(elem.parentNode.id);
  let dots = divCardBody.querySelector("#dots");
  let moretext = divCardBody.querySelector("#more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Pokaż więcej";
    moretext.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Pokaż mniej";
    moretext.style.display = "inline";
  }
}
