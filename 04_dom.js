// to get interactive list of the properties of document object
console.log("list of the properties of document object");
console.dir(document);

// accessing html Element 
var  getElement = document.querySelector('button');
console.log('Adding class attribute to the element...');
getElement.classList.add('item1');// also can be removed by classlist.remove('classname') 
console.log("list of the properties of getElement object");
console.dir(getElement);
console.log(getElement);

// using event listener with DOM
console.log('click button 1 to listen an event!');
getElement.addEventListener('click', function(){
    console.log('Button1 clicked => event is fired!');
});

// to access all button Elements 
console.log("access all button elements");
var getAllBtns = document.querySelectorAll('button');
console.log(getAllBtns); 
console.log('using for loop to access nodelist elements');//custom way to access nodelist elements
for (let i = 0; i < getAllBtns.length; i++) {
    console.log(getAllBtns[i]);

    getAllBtns[i].addEventListener('dblclick', function(){
    alert("don't double click the (" + getAllBtns[i].textContent + ') button');
});
}

// more efficient way to work with nodelist elements
console.log('using forEach to access nodelist elements instead of custom for loop...');
getAllBtns.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function(){
        console.log('Clicked', button.innerHTML);
    });
});


// create element using DOM
console.log('Creating <p> elements ');
var crtElement1 = document.createElement('P');
var crtElement2 = document.createElement('P');
var elementVal1 = 'Element created by <i>DOM</i> .innerHTML';
var elementVal2 = 'Element created by <i>DOM</i> .innerText';
document.body.appendChild(crtElement1).innerHTML = elementVal1;
document.body.appendChild(crtElement2).innerText = elementVal2;
