var ans;

function btn00() {

  var text = document.getElementById("display").value;
  if (text.toString == "0") {
    return;

  }
  text += "0";
  console.log(text);
  document.getElementById("display").value = text;
}

function btn01() {
  document.getElementById("display").value += "1";
}

function btn02() {
  document.getElementById("display").value += "2";
}

function btn03() {
  document.getElementById("display").value += "3";
}

function btn04() {
  document.getElementById("display").value += "4";
}

function btn05() {
  document.getElementById("display").value += "5";
}

function btn06() {
  document.getElementById("display").value += "6";
}

function btn07() {
  document.getElementById("display").value += "7";
}

function btn08() {
  document.getElementById("display").value += "8";
}

function btn09() {
  document.getElementById("display").value += "9";
}

function addBtn() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "+";
}

function prodBtn() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "*";
}

function subBtn() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "-";
}

function divBtn() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "/";
}

function factorial(n) {
  if (n == 0)
    return 1;
  else
    return (n * factorial(n - 1));

}

function fact() {
  var text = document.getElementById("display").value;
  var fact = factorial(parseInt(text));
  ans = fact;
  console.log(ans);
  document.getElementById("display").value = ans;
  document.getElementById("display2").value = text + "! = ";
  ans = "";
}

function perm() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "σ";
}

function comb() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "nCr";
}

function mod() {

  var text = document.getElementById("display").value;
  ans = text;
  text.toString();
  console.log(text);
  document.getElementById("display").value = "";
  document.getElementById("display2").value = ans + "%";
}

function clear() {


  ans = "";
  document.getElementById("display").value = "";
  document.getElementById("display2").value = "";
}

function clearOne() {

  var text = document.getElementById("display").value;
  var val = text.toString().length;
  text.length--;
  var newTxt = "";
  for (var i = 0; i < val - 1; i++) {
    newTxt += text.charAt(i);

  }
  document.getElementById("display").value = newTxt;

}

function basicOperation() {

  if (ans == "") {
    return;

  }
  var temp;
  var text = document.getElementById("display").value;
  var text2 = document.getElementById("display2").value;
  var val = text2.toString().length;
  if (text2.toString().charAt(val - 1) == "+") {
    ans = parseInt(ans) + parseInt(text);
    //console.log("sassaasas");
    temp = text2 + "" + text;

  } else if (text2.toString().charAt(val - 1) == "/") {
    ans = parseInt(ans) / parseInt(text);
    //console.log("sassaasas");
    temp = text2 + "" + text;

  } else if (text2.toString().charAt(val - 1) == "*") {
    ans = parseInt(ans) * parseInt(text);
    //console.log("sassaasas");
    temp = text2 + "" + text;

  } else if (text2.toString().charAt(val - 1) == "-") {
    ans = parseInt(ans) - parseInt(text);
    //console.log("sassaasas");
    temp = text2 + "" + text;

  } else if (text2.toString().charAt(val - 1) == "σ") {
    var valueN = parseInt(text2);
    var valueR = parseInt(text);
    ans = factorial(valueN) / factorial(valueN - valueR);
    //console.log("sassaasas");
    temp = text2 + "" + valueR;
  } else if (text2.toString().charAt(val - 1) == "r") {
    var valueN = parseInt(text2);
    console.log(valueN + ",,");
    var valueR = parseInt(text);
    ans = factorial(valueN) / (factorial(valueN - valueR) * factorial(valueR));
    //console.log("sassaasas");
    temp = text2 + "" + text;
  } else if (text2.toString().charAt(val - 1) == "%") {
    var valueN = parseInt(text2);
    var valueR = parseInt(text);
    temp = parseInt(valueN / valueR);
    ans = valueN - temp * valueR;
    temp = text2 + "" + text;
    //console.log("sassaasas");

  }



  temp += " = ";

  console.log(ans);
  document.getElementById("display").value = ans;
  document.getElementById("display2").value = temp;
  ans = "";
}
