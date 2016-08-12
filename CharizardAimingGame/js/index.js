$( document ).ready(function() {
  var score = 0;
  $(".enemies").hide();  
  $(".ghastly1").hide();
  $(".enemies2").hide();
  $(".enemies3").hide();
  $(".enemies4").hide();
  $(".enemies5").hide();
  $(".enemies6").hide();
  $(".enemies7").hide();
  $(".enemies8").hide();
  $(".enemies9").hide();
  $(".enemies10").hide();
  $(".Man").hide();
  $(".lol1").hide();
  $(".lol2").hide();
  $(".lol3").hide();
  $(".lol4").hide();
  $(".lol5").hide();
  
  
  $("#playbutton").click(function(){ 
   $("#playbutton").hide();
   $("#Lol").hide();
   $("#Gay").hide();
   alert("Level 1");
   $(".ghastly1").show();
   $(".enemies").show();
   $(".enemies9").show();
   $(".enemies10").show();
   $(".lol1").show();
   $(".lol2").show();
   $("body").css("background-image", "url('http://img.photobucket.com/albums/v249/VaRuAs/Random_map_657.png')");
   });
 
 //What happens when you click enemies
$('.ghastly1').click(function() {
  $(this).hide("explode");
  score++;
   level2start();
});
  
$('.enemies').click(function() {
  $(this).hide("explode");
  score++;
   level2start();
 });
  
  $('.enemies9').click(function() {
   $(this).hide("explode");
    score++;
     level2start();
  });  
    
 $('.enemies10').click(function() {
  $(this).hide("explode");
   score++;
    level2start();
 });
  
  $('.lol1').click(function() {
  $(this).hide("explode");
    score++;
     level2start();
    });
    
    $('.lol2').click(function() {
  $(this).hide("explode");
      score++;
      level2start();
      
    });

  //Move Ghastly1
   function moveghastly1Right() {
    $(".ghastly1").animate({left: "+=900"}, 3000, moveghastly1Left);
  }
  
   function moveghastly1Left() { 
    $(".ghastly1").animate({left: "-=900"}, 3000, moveghastly1Right);  
  }

  moveghastly1Right();
  
  //Move .enemies
   function moveenemiesRight() {
    $(".enemies").animate({left: "+=900"}, 5000, moveenemiesLeft);
  }
  
   function moveenemiesLeft() { 
    $(".enemies").animate({left: "-=900"}, 5000, moveenemiesRight);  
  }

  moveenemiesRight();
  
  //Move enemies9
   function moveenemies9Right() {
    $(".enemies9").animate({left: "+=900"}, 4000, moveenemies9Left);
  }
  
   function moveenemies9Left() { 
    $(".enemies9").animate({left: "-=900"}, 4000, moveenemies9Right);  
  }

 moveenemies9Right();
  
  //Move lol2
   function movelol2Right() {
    $(".lol2").animate({left: "+=700"}, 3500, movelol2Left);
  }
  
   function movelol2Left() { 
    $(".lol2").animate({left: "-=700"}, 3500, movelol2Right); 
  }

  movelol2Right();
  
  //Move lol1
   function movelol1Right() {
    $(".lol1").animate({left: "+=900"}, 3500, movelol1Left);
  }
  
   function movelol1Left() { 
    $(".lol1").animate({left: "-=900"}, 2462, movelol1Right);  
  }

  movelol1Right();
  
  //Move enemies10
   function moveenemies10Right() {
    $(".enemies10").animate({left: "+=900"}, 4361, moveenemies10Left);
  }
  
   function moveenemies10Left() { 
    $(".enemies10").animate({left: "-=900"}, 4353, moveenemies10Right);  
  }

  moveenemies10Right();
  

//Function to start level 2
function level2start() {
  if (score === 6) {
    alert("Level 2!");
  $('.ghastly1').hide();
  $('.lol2').hide();
  $('.lol1').hide();
  $('.enemies10').hide();
  $('.enemies').hide();
  $('.enemies9').hide();
  level2enemies(); 
  }
}
  
//Function to show Level 2 enemies
  function level2enemies() {
    $(".enemies").show(1000);
   $(".enemies9").show(1000);
   $(".enemies10").show(1000);
   $(".lol3").show(1000);
   $(".lol4").show(1000);
   $(".lol5").show(1000);
   $(".lol1").show(1000);
    
  }
  $('.lol3').click(function() {
  $(this).hide("explode");
  score++;
   level3start();
 });
  
  $('.lol4').click(function() {
   $(this).hide("explode");
    score++;
     level3start();
  });  
    
 $('.lol5').click(function() {
  $(this).hide("explode");
   score++;
    level3start();
   });
   //Move Ghastly1
   function movelol3Right() {
    $(".lol3").animate({left: "+=900"}, 6000, movelol3Left);
  }
  
   function movelol3Left() { 
    $(".lol3").animate({left: "-=900"}, 6000, movelol3Right);  
  }

  movelol3Right();
  
  //Move .enemies
   function movelol5Right() {
    $(".lol5").animate({left: "+=900"}, 5000, movelol5sLeft);
  }
  
   function movelol5Left() { 
    $(".lol5").animate({left: "-=900"}, 5000, movelol5Right);  
  }

  movelol5Right();
  
  //Move enemies9
   function movelol49Right() {
    $(".lol4").animate({left: "+=900"}, 6504, movelol4Left);
  }
  
   function movelol4Left() { 
    $(".lol4").animate({left: "-=900"}, 4000, movelol4Right);  
  }

 movelol4Right();
  
  
  
  
 

    
    
    
     });