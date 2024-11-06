
let os=document.getElementById('os');
function Clear()
{
    os.value="";

}
function del()
{
  os.value=os.value.slice(0,-1);
}
function display(txt)
{
   os.value=os.value+txt;
   //os.value= 7
   //78= "7"+"8"+"9"
   //78= "78"+"9"
}
function calculate()
{
    os.value=eval(os.value);
}
// evalute eval

function cube()
{
  os.value=os.value*os.value*os.value;
}
function power()
{
  os.value=os.value**os.value;
}


