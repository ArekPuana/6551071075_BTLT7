function getOptions() {
  const select = document.getElementById("mySelect");
  const options = select.options;
  let message = "Tổng số mục: " + options.length + "\n\n";

  for (let i = 0; i < options.length; i++) {
    message += (i + 1) + ". " + options[i].text + "\n";
  }

  alert(message);
}

$(document).ready(function() {
  $("#getOptions").click(function() {
    getOptions();
  });
});