function js_style() {
  const p = document.getElementById("text");
  p.style.fontSize = "24px";
  p.style.fontFamily = "Arial";
  p.style.color = "blue";
}

$(document).ready(function() {
  $("#jsstyle").click(function() {
    js_style();
  });
});