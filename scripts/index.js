$(document).ready(function () {
  var i = 0;
  colors = [
    "rgba(138, 18, 119,0.5)",
    "rgba(65, 0, 54, 0.596)",
    "#500aacab",
    "#0060afa4",
    "#00b0cfa4",
  ];
  $("body").css("background-color", "rgb(118, 58, 119,0.5)");
  $("body").css("transition", "3000ms");

  let backgroundColorChange = () => {
    switch (i) {
      case 0:
        $("body").css({
          background: colors[i],
        });
        i++;
        break;
      case 1:
        $("body").css("background-color", colors[i]);
        i++;
        break;
      case 2:
        $("body").css({
          background: colors[i],
        });
        i++;
        break;
      case 3:
        $("body").css("background-color", colors[i]);
        i = 0;
        break;
    }
  };

  setInterval(backgroundColorChange, 2200);
});
