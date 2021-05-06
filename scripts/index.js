$(document).ready(function () {
  var i = 0;
  colors = [
    "wheat",
    "background: linear-gradient(#eeeeee, rgb(18, 8, 19))",
    "DarkSalmon",
    "background: linear-gradient(rgb(18, 8, 19), #eeeeee)",
  ];
  $("body").css({
    background:
      "linear-gradient(rgba(165, 71, 71, 0.5), rgba(128, 224, 109, 0.5))",
  });

  let backgroundColor = () => {
    switch (i) {
      case 0:
        $("body").css({
          background: colors[i],
        });
        i++;
        break;
      case 1:
        $("body").css({
          background: colors[i],
        });
        i++;
        break;
      case 2:
        $("body").css({
          background: colors[i],
        });
        i++;
        break;
      case 3:
        $("body").css({
          background: colors[i],
        });
        i = 0;
        break;
    }
  };
});
