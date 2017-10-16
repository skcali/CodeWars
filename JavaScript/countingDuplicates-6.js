function duplicateCount(text){
    var splitText = text.toLowerCase().split("");
    var frequency = {};

    for (var i in splitText) {
        if(!frequency[splitText[i]]) {
            frequency[splitText[i]] = 1;
        } else {
            frequency[splitText[i]] += 1;
        }
    }

    var result = 0;

    for(var key in frequency) {
        if(frequency[key] > 1) {
            result++;
        }
    }

    return result;
  }



console.log(duplicateCount("") + " 0");
console.log(duplicateCount("abcde") + " 0");
console.log(duplicateCount("aabbcde") + " 2");
console.log(duplicateCount("aabBcde") + " 2, should ignore case");
console.log(duplicateCount("Indivisibility") + " 1");
console.log(duplicateCount("Indivisibilities") + " 2, characters may not be adjacent");
  