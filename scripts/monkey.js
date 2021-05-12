window.onload = function () {
  /* Perro quiz */
  mostrarResultado = () => {
    alert("work!");
    return false;
  };
  /* Mono, curiosidades con imagenes  */
  var textlist = ["curiosidad1", "curiosidad2", "curiosidad3"];
  var imglist = ["img-curiosidad1", "img-curiosidad2", "img-curiosidad3"];
  window.addEventListener("click", function (e) {
    for (var index = 0; index < textlist.length; index++) {
      if (document.getElementById(textlist[index]).contains(e.target)) {
        document.getElementById(imglist[index]).style.display = "block";
      } else {
        document.getElementById(imglist[index]).style.display = "none";
      }
    }
  });

  return false;
};
