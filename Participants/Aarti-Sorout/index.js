

let x=document.querySelectorAll("img");
console.log(x);
for(var i=2;i<x.length;i++)x[i].addEventListener("click", getId);
function getId(i)
{
  var y=(i.target.id);
  console.log(y);
  console.log(i.target.id.classList);
 
}
