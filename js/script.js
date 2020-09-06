
function datasubmit1(){
    var a=document.getElementById("firstNum").value;
    if(a.trim()=="")
    {
        document.getElementById("firstNum").style.border="2px solid red";
        document.getElementById("lbl1").style.display="block";
    }
    else{
        document.getElementById("given_val1").innerHTML=a;
        document.getElementById("firstNum").style.border="2px solid green";
        document.getElementById("lbl1").style.display="none";
    }
}

function datasubmit2(){
    var b=document.getElementById("secondNum").value;
    if(b.trim()=="")
    {
        document.getElementById("secondNum").style.border="2px solid red";
        document.getElementById("lbl2").style.display="block";
    }
    else{
        document.getElementById("given_val2").innerHTML=b;
        document.getElementById("secondNum").style.border="2px solid green";
        document.getElementById("lbl2").style.display="none";
    }
}
function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        {
            return false;
        }
        return true;
    }


var i=0;
var arr=["#line1","#line2","#line3","#line4","#line5","#line6","#line7","#line8","#line9","#line10","#line11","#line12","#line13","#line14","#line15","#line16","#line17","#line18","#line19","#line20","#line21","#line22","#line23"];
function showNext(){
    if(i==$(arr.length-1))
    {
        i=0;
    }
    else{
        if(i<arr.length)
        {
        $(arr[i]).css("color","red");
        $(arr[i-1]).css("color","dodgerblue");
        ++i;
            if(arr[i]=="#line8")
                {
                    $("#firstNum").css("display","block");
                }
            if(arr[i]=="#line10")
                {
                    $("#secondNum").css("display","block");
                    $("#Enterbtn").css("display","block");
                }  
            if(arr[i]=="#line11")
                {    
                    $(".value1-box").css("display","block");
                    datasubmit1();
                }
            if(arr[i]=="#line12")
                {    
                    $(".value2-box").css("display","block");
                    datasubmit2();
                }
            if(arr[i]=="#line16")
                {
                    $(".tempbox").css("display","block");
            
                }  
            if(arr[i]=="#line17")
                {
                    var b=$("#secondNum").val();
                    $(".take-b").html(b);
                }     
            if(arr[i]=="#line14")
                {
                    $("#onswap-a").html("a");
                    $("#onswap-b").html("b");
                }    
            if(arr[i]=="#line18")
                {
                    $(".value2-box").css("background-color","dodgerblue")
                    var a=$("#firstNum").val();
                    $("#given_val2").html(a);
                }   
            if(arr[i]=="#line19")
                {
                    $(".value1-box").css("background-color","dodgerblue")
                    var a=$("#secondNum").val();
                    $("#given_val1").html(a);
                }   
            if(arr[i]=="#line21")
                {
                    $(".swap-box1").css("background-color","#009432")
                    var a=$("#secondNum").val();
                    $("#swapped-data1").html(a);
                    $(".swap-box1").css("display","block");
                }  
            if(arr[i]=="#line22")
                {
                    $(".swap-box2").css("background-color","#009432")
                    var a=$("#firstNum").val();
                    $("#swapped-data2").html(a);
                    $(".swap-box2").css("display","block");
                }             
        }
    }
}

function start(){
    document.getElementById("nextbtn").disabled=false;
    document.getElementById("clearbtn").disabled=false;
    document.getElementById("startbtn").disabled=true;
}

function clearPage(){
        if(confirm("Are you sure, want to clear?")){
            location.reload();
        }
}


