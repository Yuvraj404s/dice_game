document.querySelectorAll("button")[0].addEventListener("click",function calling(){
    

var randomNumber1=Math.ceil(Math.random()*6);
var randomDice="dice"+randomNumber1+".png";
var randomImageSource="./images/"+ randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.ceil(Math.random()*6);
var randomImageSource2="./images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 is the winner";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 2 is the winner";
}
else{ document.querySelector("h1").innerHTML="🤞Its a draw";}
});