// 49: Reading field value
function checkAddress(fieldId){
    var val = document.getElementById(fieldId).value;
    if(val === ''){
    alert("Email Address Required!");
    }
}

// 50: setting field value 
function fillCity(){
    var cityName;
    var zipEntered = document.getElementById('zip').value;
    switch (zipEntered) {
        case '75800':
            cityName = 'Karachi';
            break;
        case '60608':
            cityName = 'Chicago';
            break;
        case '68114':
            cityName = 'Omaha';
            break;
        case '53212':
            cityName = "Milwaukee";
            break;
        default:
            cityName = 'Not recorded';
            break;
    }
    document.getElementById('city').value = cityName;
}