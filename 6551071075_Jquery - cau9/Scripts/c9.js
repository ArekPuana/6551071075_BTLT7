 $(function () {

    //clear button
      $("#clear").click(function () {
        $("#registerForm")[0].reset();
      });

      //finish button
      $("#finish").click(function () {

        //dieu kien tung phan
        if (
          !$("#name").val().trim() ||
          !$("input[name='sex']:checked").val() ||
          !$("#email").val().trim() ||
          !$("#birthday").val().trim() ||
          !$("#address").val().trim() ||
          !$("#zipcode").val().trim()
        ) {
          alert("Vui lòng điền đầy đủ tất cả các trường có dấu * !");
          return;
        }

        //email's
        const email = $("#email").val().trim();
        const emailParts = email.split("@");

        if (
          emailParts.length !== 2 ||                       //phai co dung 1 @
          emailParts[0].split(".").length > 2 ||emailParts[1].split(".").length < 2 //chi co duy nhat 1 dau '.'
        ) {
          alert("Email không hợp lệ! Kiểm tra lại cú pháp.");
          return;
        }

        //birthday's
        const datePattern = /^(0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01])[\/\-](\d{4})$/;
        const birthday = $("#birthday").val().trim();

        if (!datePattern.test(birthday)) {
          alert("Ngày sinh không hợp lệ! Hãy nhập theo dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
          return;
        }

        const parts = birthday.includes("/") ? birthday.split("/") : birthday.split("-");
        const month = parseInt(parts[0]);
        const day = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        const currentYear = new Date().getFullYear();

        if (month < 1 || month > 12 || year > currentYear-1) {
          alert("Ngày sinh không hợp lệ (tháng hoặc năm sai).");
          return;
        }

        //zip code's
        if (!/^\d{5}$/.test($("#zipcode").val().trim())) {
          alert("Zip code phải gồm đúng 5 chữ số!");
          return;
        }

        //gui thanh cong
        alert("Dữ liệu hợp lệ! Form đã được gửi thành công!");
      });
    });