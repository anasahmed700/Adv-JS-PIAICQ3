// closures
function myScore(){
    var score = 1;
    return function abc(){
        console.log(score++);
    };
}
var hockey = myScore();
hockey();