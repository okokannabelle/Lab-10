var numb1 = document.getElementById("numb1").value;
var numb2 = document.getElementById("numb2").value;

function outPut() {
  var numb1 = document.getElementById("numb1").value;
  var numb2 = document.getElementById("numb2").value;


  var sum = numb1 + numb2;
  var sum = parseFloat(numb1) + parseFloat(numb2);
document.getElementById("one").innerHTML=sum;
}
