// Better practice would of been using .substring() to insert chars

function createPhoneNumber(numbers){

    var phoneNumber = '';
    var j = 0;
    for (var i = 0; i < 13; i++) {
        if (i === 0) {
            phoneNumber += '(';
        } else if (i === 4) {
            phoneNumber += ") ";
        } else if (i === 8) {
            phoneNumber += "-";
        } else {
            phoneNumber += numbers[j].toString();
            j++;
        }
    }

    return phoneNumber;



}



console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "  (123) 456-7890");