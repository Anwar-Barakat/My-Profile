// ! ===========================
// ! Filtering Works
// ! ===========================
$(function () {
    $(".filter-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");

        if (filter == "all") {
            $(".filter").show(500);
        } else {
            $(".filter")
                .not("." + filter)
                .hide(300);
            $(".filter")
                .filter("." + filter)
                .show(500);
        }
    });
});
