function removeColor_DOM() {
  const select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}

$(document).ready(function() {
  $("#remove").click(function() {
    removeColor_DOM();
  });
});