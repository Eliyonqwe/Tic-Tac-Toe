var wrapper = document.body.firstElementChild;

var topleft = document.body.firstElementChild.firstElementChild;
var topmiddle = topleft.nextElementSibling;
var topright = topmiddle.nextElementSibling;

var middleleft = topright.nextElementSibling;
var middlemiddle = middleleft.nextElementSibling;
var middleright = middlemiddle.nextElementSibling;

var bottomleft = middleright.nextElementSibling;
var bottommiddle = bottomleft.nextElementSibling;
var bottomright = bottommiddle.nextElementSibling;


// var topleftContent = document.getElementById('tl').textContent;
// var topmiddleContent = document.getElementById('tm').textContent;
// var toprightContent =document.getElementById('tr').textContent;

// var middleleftContent = document.getElementById('ml').textContent;
// var middlemiddleContent = document.getElementById('mm').textContent;
// var middlerightContent = document.getElementById('mr').textContent;

// var bottomleftContent = document.getElementById('bl').textContent;
// var bottommiddleContent =document.getElementById('bm').textContent;
// var bottomrightContent =document.getElementById('br').textContent;




var gameStatus = 'O';

function changePlayer(){
    if(gameStatus === 'O'){
        gameStatus = 'X';
    }
     else{
          gameStatus = 'O';

      }
}

// this function checks if the box is empty or not
function checkEmpty(box){
    if(box.firstElementChild.innerHTML == "O" || box.firstElementChild.innerHTML == "X"){
        return 1;
    }
    else{
        return 0;
    }
}


// this function checks if all the boxes are full or not
function checkFull(){
    
    const boxArray = [topleft.firstElementChild.textContent, topmiddle.firstElementChild.textContent, topright.firstElementChild.textContent, middleleft.firstElementChild.textContent, middlemiddle.firstElementChild.textContent,  middleright.firstElementChild.textContent,  bottomleft.firstElementChild.textContent, bottommiddle.firstElementChild.textContent, bottomright.firstElementChild.textContent];
   const uniqueCount = new Set(boxArray).size;
   
    if(uniqueCount == 2){
        return "full";
    }
}
var counter  = 0;
function checkWin(){
    counter++;
    if(counter>=3){
        var horizontal = ((topleft.firstElementChild.textContent ==  topmiddle.firstElementChild.textContent &&  topleft.firstElementChild.textContent ==  topright.firstElementChild.textContent) || (middleleft.firstElementChild.textContent ==  middlemiddle.firstElementChild.textContent &&  middleleft.firstElementChild.textContent ==  middleright.firstElementChild.textContent) || (bottomleft.firstElementChild.textContent ==  bottommiddle.firstElementChild.textContent &&  bottomleft.firstElementChild.textContent ==  bottomright.firstElementChild.textContent) )
        
        var vertical = ((topleft.firstElementChild.textContent ==  middleleft.firstElementChild.textContent &&  topleft.firstElementChild.textContent ==  bottomleft.firstElementChild.textContent) || (topmiddle.firstElementChild.textContent ==  middlemiddle.firstElementChild.textContent &&  topmiddle.firstElementChild.textContent ==  bottommiddle.firstElementChild.textContent) || (topright.firstElementChild.textContent ==  middleright.firstElementChild.textContent &&  topright.firstElementChild.textContent ==  bottomright.firstElementChild.textContent))

        var diagonal =  ((topleft.firstElementChild.textContent ==  middlemiddle.firstElementChild.textContent &&  topleft.firstElementChild.textContent ==  bottomright.firstElementChild.textContent) || (topright.firstElementChild.textContent ==  middlemiddle.firstElementChild.textContent &&  topright.firstElementChild.textContent ==  bottomleft.firstElementChild.textContent))
        
        if(horizontal || vertical || diagonal){
            if(gameStatus == 'O'){
                alert('Congrats Player One! You have won');
           
            }
            else{
                alert('Congrats Player Two! You have won');
                
                
            }
            location.reload();
        }
        else{
         
            var full = checkFull();
            if(full =="full"){
                alert("DRAW!")
            }
            
        }
     
    }
    
   
}

topleft.addEventListener('click', (e)=>{
    // alert('top left')
    var status = checkEmpty(topleft)
    if(status == 0){
        document.getElementById("tl").innerHTML = gameStatus;
        document.getElementById("tl").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
topmiddle.addEventListener('click', (e)=>{
    // alert('top middle') 
    var status = checkEmpty(topmiddle)
    if(status == 0){
        document.getElementById("tm").innerHTML = gameStatus;
        document.getElementById("tm").style.color = 'white';
        
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
topright.addEventListener('click', (e)=>{
    // alert('top right') 
    var status = checkEmpty(topright)
    if(status == 0){
        document.getElementById("tr").innerHTML = gameStatus;
        document.getElementById("tr").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})



middleleft.addEventListener('click', (e)=>{
    // alert('middle left') 
    var status = checkEmpty(middleleft)
    if(status == 0){
        document.getElementById("ml").innerHTML = gameStatus;
        document.getElementById("ml").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
middlemiddle.addEventListener('click', (e)=>{
    // alert('middle middle')
        var status = checkEmpty(middlemiddle)
    if(status == 0){
        document.getElementById("mm").innerHTML = gameStatus;
        document.getElementById("mm").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
middleright.addEventListener('click', (e)=>{
    // alert('middle right') 
    var status = checkEmpty(middleright)
    if(status == 0){
        document.getElementById("mr").innerHTML = gameStatus;
        document.getElementById("mr").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})



bottomleft.addEventListener('click', (e)=>{
    // alert('bottom left') 
    var status = checkEmpty(bottomleft)
    if(status == 0){
        document.getElementById("bl").innerHTML = gameStatus;
        document.getElementById("bl").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
bottommiddle.addEventListener('click', (e)=>{
    // alert('bottom middle') 
    var status = checkEmpty(bottommiddle)
    if(status == 0){
        document.getElementById("bm").innerHTML = gameStatus;
        document.getElementById("bm").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken')
    }
})
bottomright.addEventListener('click', (e)=>{
    // alert('bottom right') 
    var status = checkEmpty(bottomright)
    if(status == 0){
        document.getElementById("br").innerHTML = gameStatus;
        document.getElementById("br").style.color = 'white';
        checkWin();
        changePlayer(gameStatus);
        e.stopPropagation();
    }
    else{
        alert('Sorry  BOX is already taken');
    } 
});