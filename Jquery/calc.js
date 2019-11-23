$(document).ready(function() {
    $("button").click(function() {
        var opr = $(this).html();
        var f_num = $("#box_1").val();
        var s_num = $("#box_2").val();
        var result = eval(f_num + opr + s_num);
        $("#res").html(result);
    })
});