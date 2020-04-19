function validation()
{
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)

    var check1=document.getElementById("operation").value;
    if(check1=="+")
    {
        document.getElementById('compute').value=num1+num2;
    }

    if(check1=="-")
    {
        document.getElementById('compute').value=num1-num2;
    }

    if(check1=="*")
    {
        document.getElementById('compute').value=num1*num2;
    }

    if(check1=="/")
    {
        document.getElementById('compute').value=num1/num2;
    }
}