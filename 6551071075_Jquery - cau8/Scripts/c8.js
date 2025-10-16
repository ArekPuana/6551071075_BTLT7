 $(function() {
            $(".op").click(function() {
                $("#result").val(
                    $(this).data("op") === "+" ? parseFloat($("#num1").val()) + parseFloat($("#num2").val()) :
                    $(this).data("op") === "-" ? parseFloat($("#num1").val()) - parseFloat($("#num2").val()) :
                    $(this).data("op") === "*" ? parseFloat($("#num1").val()) * parseFloat($("#num2").val()) :
                    $(this).data("op") === "/" ? (
                        parseFloat($("#num2").val()) !== 0 ? 
                        parseFloat($("#num1").val()) / parseFloat($("#num2").val()) : "Lỗi"
                    ) :
                    Math.pow(parseFloat($("#num1").val()), parseFloat($("#num2").val()))
                );
            });
        });