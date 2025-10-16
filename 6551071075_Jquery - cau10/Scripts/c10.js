$(function() {
  const display = $("#display");

  $(".button").click(function() {
    const value = $(this).text();

    if (value === "C") {
      display.val("");
    } 
    else if (value === "=") {
      const expr = display.val().replace(/x/g, '*').trim();
      const pattern = /^(\d+)([\+\-\*\/])(\d+)$/;
      const match = expr.match(pattern);

      if (!match) {
        alert("Biểu thức không hợp lệ! Hãy nhập dạng: 12+5 hoặc 7x8");
        return;
      }

      const num1 = parseFloat(match[1]);
      const op = match[2];
      const num2 = parseFloat(match[3]);
      let result;

      if (op === '+') result = num1 + num2;
      else if (op === '-') result = num1 - num2;
      else if (op === '*') result = num1 * num2;
      else if (op === '/') {
        if (num2 === 0) { alert("Không thể chia cho 0"); return; }
        result = num1 / num2;
      }

      display.val(result);
    } 
    else {
      display.val(display.val() + value);
    }
  });

  $(document).on("keydown", function(e) {
    const key = e.key;

    if (/[0-9\+\-\*\/]/.test(key)) display.val(display.val() + key);
    else if (key === "Enter") $(".button:contains('=')").click();
    else if (key === "Escape") $(".button:contains('C')").click();
  });
});