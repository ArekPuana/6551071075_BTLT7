$(document).ready(function() {
    $("#linkForm").submit(function(event) {
      event.preventDefault();

      const link = $("#linkInput").val().trim();

      if (link === "") {
        alert("Vui lòng nhập đường link!");
        return;
      }

      const confirmRedirect = confirm("Bạn có chắc muốn truy cập liên kết này không?");
      
      if (confirmRedirect) {
        window.location.href = link;
      } 
    });
  });