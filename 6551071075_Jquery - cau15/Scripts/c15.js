    $(document).ready(function() {
        //an noi dung cac tab tru tab mo dau
    $(".tab-item").hide();
    $(".tab-item:first").show();
    $(".tab li:first").addClass("active");

        //khi click vao tab de chuyen doi
    $(".tab li a").click(function(e) {
        e.preventDefault(); //ngan khong cho he thong nhay trang
        var target = $(this).attr("href"); //lay id cua tab can mo

        //bo active o tab cu va chuyen cho tab moi mo
        $(".tab li").removeClass("active");
        $(this).parent().addClass("active");

        $(".tab-item").hide(); //hieu ung an va chuyen doi giua cac tab
        $(target).fadeIn(300); //hieu ung mo dan
    });
});