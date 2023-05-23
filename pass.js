function abc(){
    let pa1=document.getElementById('p1').value;
let pa2=document.getElementById('p2').value;
if(!pa1 || !pa2 ){
    alert("empty")
    return
}
if(pa1===pa2)
{
    alert("matched");
}
else{
    alert("not matched")
}
}