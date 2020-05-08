function popup(message) {
    alert(message);
}

// accessing button element by id 
var btn = document.getElementById("go-button");
// defining event function 
function buttonClicked(){
    console.log("button is clicked");
    // to stop event after once button clicked
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "don't do it";
    console.log(document.getElementById("text").innerHTML);
}
// adding event on clicking button 
btn.addEventListener("click", buttonClicked);

function greetUser(){
    alert("Hello User!");
}


function expand(){
    alert("Complete Paragraph......")
}