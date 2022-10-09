var arr=["red","blue","green","yellow"];
var gamepattern=[];
var userclickedpattern=[];


var level=0;
var started=false;

$(document).keypress(function(){

    if(!started){ $("#level-title").text("Level"+level);
          nextsequence();
          started=true;}
});


$(".btn").click(function(){
    var userchosencolour=$(this).attr("id");
   //  console.log(this);
   userclickedpattern.push(userchosencolour);
   playSound(userchosencolour);
   animatepress(userchosencolour);
   checkanswer(userclickedpattern.length-1);
});



function checkanswer(currentlevel)
{
    
if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
console.log("success");

if(userclickedpattern.length===gamepattern.length)
{
    setTimeout( function(){
        nextsequence();
    }, 1000);
}
}
else{
    // console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    
    $("h1").text("Game Over, Press Any Key to Restart");
   startOver();
    
}

}

function nextsequence()
{
    userclickedpattern=[];
    level++;
    $("#level-title").text("Level"+level);
    
    var randomchosencolour=arr[Math.floor(Math.random()*3)];
    
    gamepattern.push(randomchosencolour);
    var x="#"+randomchosencolour;


// console.log(userclickedpattern);

$(x).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


playSound(randomchosencolour);
animatepress(randomchosencolour);
console.log(randomchosencolour);
   
}


function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}

function animatepress(currentcolour)
{

    $("#"+currentcolour).addClass("pressed");

    setTimeout( function(){
        $("#"+currentcolour).removeClass("pressed");
    }, 100);
}


   function startOver()
   {
   
        level=0;
        gamepattern=[];
        // userclickedpattern=[];
        started=false;
        // $("h1").text("Press A Key to Start");
    
   }