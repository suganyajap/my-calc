
//creating container
var container=document.createElement("div");
container.className="container";
container.id="calc";
//appending container to body
document.body.append(container);


const calcBG=document.createElement("div");
calcBG.id="mycalc";
calcBG.className="calcBG";
container.append(calcBG);

//creating form
const form=document.createElement("form");
form.id="myform";
form.name="myform";
calcBG.append(form);

//creating input box
const display=document.createElement("input");
display.type="text";
display.name="box";
display.setAttribute("id","result");
form.append(display);


//creating AC button
const AC=document.createElement("button");

AC.className="btn btn-danger";
AC.id="AC";
AC.innerText="AC";
AC.setAttribute("onclick","allClear()");

//creating CE button
const CE=document.createElement("button");
CE.className="btn btn-warning";
CE.innerText="CE";
CE.setAttribute("onclick","allClear()");

//creating % button
const modulus=document.createElement("input");
modulus.type="button";
modulus.className="btn btn-info";
modulus.setAttribute("id","modulus");
modulus.innerText="%";
modulus.setAttribute("value","%");
modulus.setAttribute("onclick","myFunction(this.value)");

//creating / button
const division=document.createElement("input");
division.type="button";
division.className="btn btn-info";
division.setAttribute("id","division");
division.innerText="/";
division.setAttribute("value","/");
division.setAttribute("onclick","myFunction(this.value)");

//appending AC,CE,modulus,division to form
form.append(AC,CE,modulus,division);

//creating no:7 button
const seven=document.createElement("input");
seven.type="button";
seven.className="btn btn-info";
seven.setAttribute("id","seven");
seven.innerText="7";
seven.setAttribute("value","7");
seven.setAttribute("onclick","myFunction(this.value)");


//creating no:8 button
const eight=document.createElement("input");
eight.type="button";
eight.className="btn btn-info";
eight.setAttribute("id","eight");
eight.innerText="8";
eight.setAttribute("value","8");
eight.setAttribute("onclick","myFunction(this.value)");

//creating no:9 button
const nine=document.createElement("input");
nine.type="button";
nine.className="btn btn-info";
nine.setAttribute("id","nine");
nine.innerText="9";
nine.setAttribute("value","9");
nine.setAttribute("onclick","myFunction(this.value)");

//creating * button
const multi=document.createElement("input");
multi.type="button";
multi.className="btn btn-info";
multi.setAttribute("id","multi");
multi.innerText="*";
multi.setAttribute("value","*");
multi.setAttribute("onclick","myFunction(this.value)");

//appending seven,eight,nine,multi to form
form.append(seven,eight,nine,multi);


//creating no:4 button
const four=document.createElement("input");
four.type="button";
four.className="btn btn-info";
four.setAttribute("id","four");
four.innerText="4";
four.setAttribute("value","4");
four.setAttribute("onclick","myFunction(this.value)");

//creating no:5 button
const five=document.createElement("input");
five.type="button";
five.className="btn btn-info";
five.setAttribute("id","five");
five.innerText="5";
five.setAttribute("value","5");
five.setAttribute("onclick","myFunction(this.value)");

//creating no:6 button
const six=document.createElement("input");
six.type="button";
six.className="btn btn-info";
six.setAttribute("id","six");
six.innerText="6";
six.setAttribute("value","6");
six.setAttribute("onclick","myFunction(this.value)");

//creating - button
const minus=document.createElement("input");
minus.type="button";
minus.className="btn btn-info";
minus.setAttribute("id","minus");
minus.innerText="-";
minus.setAttribute("value","-");
minus.setAttribute("onclick","myFunction(this.value)");

//appending four,five,six,minus to form
form.append(four,five,six,minus);


//creating no:1 button
const one=document.createElement("input");
one.type="button";
one.className="btn btn-info";
one.setAttribute("id","one");
one.innerText="1";
one.setAttribute("value","1");
one.setAttribute("onclick","myFunction(this.value)");

//creating no:2 button
const two=document.createElement("input");
two.type="button";
two.className="btn btn-info";
two.setAttribute("id","two");
two.innerText="2";
two.setAttribute("value","2");
two.setAttribute("onclick","myFunction(this.value)");

//creating no:3 button
const three=document.createElement("input");
three.type="button";
three.className="btn btn-info";
three.setAttribute("id","three");
three.innerText="3";
three.setAttribute("value","3");
three.setAttribute("onclick","myFunction(this.value)");

//creating plus(+) button
const plus=document.createElement("input");
plus.type="button";
plus.className="btn btn-info";
plus.setAttribute("id","plus");
plus.innerText="+";
plus.setAttribute("value","+");
plus.setAttribute("onclick","myFunction(this.value)");

//appending one,two,three,plus
form.append(one,two,three,plus);


//creating no:0 button
const zero=document.createElement("input");
zero.type="button";
zero.className="btn btn-info";
zero.setAttribute("id","zero");
zero.innerText="0";
zero.setAttribute("value","0");
zero.setAttribute("onclick","myFunction(this.value)");

//creating dot(.) button
const dot=document.createElement("input");
dot.type="button";
dot.className="btn btn-info";
dot.setAttribute("id","decimal");
dot.setAttribute("value",".");
dot.innerText=".";
dot.setAttribute("onclick","myFunction(this.value)");

//creating equalto(=) button
const equalto=document.createElement("button");
equalto.type="button";
equalto.className="btn btn-success";
equalto.innerText="=";
equalto.id="equalto";
equalto.setAttribute("onclick","calculate()");

//appending zero,dot,equalto button to form
form.append(zero,dot,equalto);




//method for clear inputbox(display)
function allClear()
{
     document.querySelector("#result").value="";

}
 
//method for capture values of number buttons
function myFunction(x)
{
  document.myform.box.value+=x;
}

//method to calculate the value of inputbox(display)
function calculate(){

    var output=eval(document.querySelector("#result").value);
    document.querySelector("#result").value= output;
}


