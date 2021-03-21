$(document).ready(function()
{
    $("#hide").click(
        function()
        {
         $("img").hide(2000);  
        }
    )

    $("#show").click(
        function()
        {
         $("img").show(2000);  
        }
    )

    $("#fadeIn").click(
        function()
        {
         $("img").fadeIn(2000);  
        }
    )

    $("#toggle").click(
        function()
        {
         $("img").toggle(2000);  
        }
    )

    $("#fadeOut").click(
        function()
        {
         $("img").fadeOut(2000);  
        }
    )

    $("#fadeToggle").click(
        function()
        {
         $("img").fadeToggle(2000);  
        }
    )
    

    $("#slideUp").click(
        function()
        {
            $("img").slideUp(2000);
        }
    )


    $("#slideDown").click(
        function()
        {
            $("img").slideDown(2000);
        }
    )
    $("#slideToggle").click(
        function()
        {
            $("img").slideToggle(2000);
        }
    )
 
})