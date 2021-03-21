$(document).ready(
    function()
    {
        $("button").click(function()
        {
            var f_num = $("#num1").val();
            var s_no = $("#num2").val();
            var opr = $(this).html();
            var result = f_num + opr+ s_no;
            $("#result").html(eval(result));
        })
       
    }
);