function getCount(str) {
    var vowelsCount = 0;
    var splitStr = str.split('');
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'a' 
        || splitStr[i] === 'e' 
        || splitStr[i] === 'i' 
        || splitStr[i] === 'o' 
        || splitStr[i] === 'u') {
            vowelsCount++;
        }
    }
    // enter your majic here
    
    return vowelsCount;
  }



  console.log(getCount("abracadabra"), 5);