window.onload = function () {
  var textlist = ["curiosidad1", "curiosidad2", "curiosidad3"];
  var imglist = ["img-curiosidad1", "img-curiosidad2", "img-curiosidad3"];
  window.addEventListener("click", function (e) {
    for (var index = 0; index < textlist.length; index++) {
      if (document.getElementById(textlist[index]).contains(e.target)) {
        // Clicked in bo1
        document.getElementById(imglist[index]).style.display = "block";
      } else {
        // Clicked outside the box
        document.getElementById(imglist[index]).style.display = "none";
      }
    }
  });
};
