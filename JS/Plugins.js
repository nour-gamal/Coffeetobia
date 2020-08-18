var f = 0;

function ch() {
  if (f == 0) {
    $(".sideBar").css("top", "0");
    f++;
  } else {
    $(".sideBar").css("top", "-500px");
    f = 0;
  }
}
