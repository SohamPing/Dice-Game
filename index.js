// DICE 1
var randomNumber1;
var flag=0;
randomNumber1 = Math.floor(6*Math.random()+1);
console.log(randomNumber1);
switch(randomNumber1){
    
   case(1): document.querySelector(".dice .img1").src="images/dice1.png"
            break;
    case(2): document.querySelector(".dice .img1").src="images/dice2.png"
            break;
    case(3): document.querySelector(".dice .img1").src="images/dice3.png"
            break;
    case(4): document.querySelector(".dice .img1").src="images/dice4.png"
            break;
    case(5): document.querySelector(".dice .img1").src="images/dice5.png"
            break;
    case(6): document.querySelector(".dice .img1").src="images/dice6.png"
            break;
}  

// DICE 2
var randomNumber2;
randomNumber2 = Math.floor(6*Math.random()+1);
console.log(randomNumber1);
switch(randomNumber2){
    
    case(1): document.querySelector(".dice .img2").src="images/dice1.png"
            break;
    case(2): document.querySelector(".dice .img2").src="images/dice2.png"
            break;
    case(3): document.querySelector(".dice .img2").src="images/dice3.png" 
            break;
    case(4): document.querySelector(".dice .img2").src="images/dice4.png"
            break;
    case(5): document.querySelector(".dice .img2").src"images/dice5.png"
            break;
    case(6): document.querySelector(".dice .img2").src="images/dice6.png"
            break;
}  
 

    if(randomNumber1>randomNumber2)
    {
        document.querySelector(".container .title").innerHTML="Player 1 WON!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector(".container .title").innerHTML="Player 2 WON!";
    }
    else{
        document.querySelector(".container .title").innerHTML="Its a tie!";
    }   

