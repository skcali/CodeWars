function spinWords(sentance) {
    var finalSentance = ""
    var wordSplit = sentance.split(" ");
    for (var i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i].length >= 5) {
            var splitWord = wordSplit[i].split("");
            var reversedWord = splitWord.reverse();
            var reverseJoinWord = reversedWord.join("");
            finalSentance += reverseJoinWord;
        } else {
            finalSentance += wordSplit[i];
        }
        if (i != wordSplit.length-1) {
            finalSentance += " ";
        }
    }
    return finalSentance;
}

console.log(spinWords("Hey fellow warriors"), " Hey wollef sroirraw");