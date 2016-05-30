

// radiobtn = document.getElementById("inputQ1-1");
// radiobtn.checked = true;


var wins = 0;
var losses = 0;
// var Pepsi = false;
// var Coke = true;
// var Jolt = false;
// var Bud = false;

//for(var i = 0; i < check)

// is pepsi checked Y OR N
//   is pepsi true or false
// is coke checked Y OR N
//   is coke true or false
// is jolt checked Y OR N
//   is jolt true or false
// is bud checked Y OR N
//   is bud true or false

  
    // else if(document.getElementById('inputQ1-1').checked === true){
    //   console.log(notCorrect1);
    // }
    // else if(document.getElementById('inputQ1-3').checked === true){
    //   console.log(notCorrect2);;
    // }
    // else if(document.getElementById('inputQ1-4').checked === true){
    //   console.log(notCorrect3);
    // }
  
  
 //var questionClass = [#q1,#q2];
 


$('#done').on('click', function() {
  //console.log("i got clicked");


function answer1(){
    if(document.getElementById('inputQ1-2').checked === true){
       console.log('Totally Tubular');
       wins++; 
    } 
    else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }   
}
//----2----//
function answer2(){
  if(document.getElementById('inputQ2-1').checked === true){
       console.log("Totally Tubular");
       wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----3----//
function answer3(){
  if(document.getElementById('inputQ3-4').checked === true){
       console.log("Totally Tubular");
       wins++; 
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----4----//
function answer4(){
  if(document.getElementById('inputQ4-1').checked === true){
       console.log("Totally Tubular");
       wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----5----//
function answer5(){
  if(document.getElementById('inputQ5-4').checked === true){
       console.log("Totally Tubular");
      wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----6----//
function answer6(){
  if(document.getElementById('inputQ6-3').checked === true){
       console.log("Totally Tubular");
       wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----7----//
function answer7(){
  if(document.getElementById('inputQ7-2').checked === true){
       console.log("Totally Tubular");
       wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}

//----8----//
function answer8(){
  if(document.getElementById('inputQ8-2').checked === true){
       console.log("Totally Tubular");
      wins++;
  }else{
      (false)
        console.log('No Soup for you!');
        losses++;
    }      
}
answer1();
answer2();
answer3();
answer4();
answer5();
answer6();
answer7();
answer8();
    


// var html = 
//     "<p>wins: " + wins + "</p>" +
//     "<p>losses: " + losses + "</p>" +
   

//     // Placing the html into the game ID
//     document.querySelector('#boombox').innerHTML = html;

    });
