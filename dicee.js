var name1=prompt("Enter your Name of player 1");
var name2=prompt("Enter your Name of player 2");
var RandomN=Math.floor((Math.random())*6);//generation of random numbers between 0-5
RandomN=RandomN+1;//optimiszation of random number between 1-6
var randomImgUrl1="images/dice"+RandomN+".png"//setting up url of images according to the random numbers
document.querySelectorAll("img")[0].setAttribute('src',randomImgUrl1);//setting the url attribute using setAttribute
//same process for player2
var RandomN2=Math.floor((Math.random())*6);
RandomN2=RandomN2+1;
var randomImgUrl2="images/dice"+RandomN2+".png"
document.querySelectorAll("img")[1].setAttribute('src',randomImgUrl2);
//Players Name Displayed in paragraph
document.querySelectorAll('p')[0].innerText=name1;
document.querySelectorAll('p')[1].innerText=name2;
//decision for winner based on the random  numbers generated
if(RandomN>RandomN2)
{
  document.querySelector('h1').innerHTML="🎆 "+name1+"Wins";
}
else if(RandomN==RandomN2)
{
  document.querySelector('h1').innerHTML="🎆Draw🎆";
}
else{
document.querySelector('h1').innerHTML= name2+" Wins 🎆";
}
