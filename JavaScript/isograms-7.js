function isIsogram(str){
    var splitString = str.toLowerCase().split('').sort();
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i] === splitString[i+1]) {
            return false;
        }
    }

    return true;
  }

  //isIsogram("seankenjicali");

console.log( isIsogram("Dermatoglyphics") + "true" );
console.log( isIsogram("isogram") + "true" );
console.log( isIsogram("aba") + "false" + "same chars may not be adjacent" );
console.log( isIsogram("moOse")+ "false" + "same chars may not be same case" );
console.log( isIsogram("isIsogram") + "false");
console.log( isIsogram("") + "true" + "an empty string is a valid isogram" );