function getFormvalue() {
  const fname = document.getElementsByName("fname")[0].value;
  const lname = document.getElementsByName("lname")[0].value;
    return fname + " " + lname;
}

$(document).ready(function() {
  $("#form1").submit(function(e) {
    e.preventDefault();
    const fullName = getFormvalue();
    $("#result").text("Kết quả: " + fullName);
  });
});