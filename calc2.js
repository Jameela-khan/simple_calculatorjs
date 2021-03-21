window.addEventListener('load',function()
{
    numbers =document.querySelectorAll(".num");
    for(var i=0;i<numbers.length ;i++)
    {
        numbers[i].addEventListener("click",appendNum);
    }

    opr = document.querySelectorAll(".opr");

    for (var i=0;i<opr.length;i++)
    {
        opr[i].addEventListener("click",appendOpr);
    }

    document.querySelector(".clear").addEventListener("click",Clear);
    document.querySelector(".calc").addEventListener("click",Calc);
})
var result;
var isOperator= false;
var n1 = "";

function appendNum()
{   num = event.srcElement.innerText;
   result =document.querySelector("#Result"); 
   n1 += num;
   result.value = n1;
   isOperator = false;
}

function appendOpr()
{  
     operator = event.srcElement.innerText;
   result =document.querySelector("#Result"); 
   if (!isOperator == true)
   {
    n1 += operator;
    isOperator = true;
   }
   else{
        n1 = n1.slice(0,n1.length-1);
        n1 += operator;
   }
   
   result.value = n1;
}

function Clear()
{
    n1="";
    result.value=n1;
}
function Calc()
{
   n1 = eval(result.value);
   result.value =n1;
}l