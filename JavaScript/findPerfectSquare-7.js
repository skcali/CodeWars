function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    if (Math.sqrt(sq) % 1 != 0) {
        return -1
    } else {
        var sqrt = Math.sqrt(sq);
        sqrt++;
        var newSqrt = Math.pow(sqrt, 2);
        return newSqrt;
    }
  }

console.log(findNextSquare(121) + " 144");
console.log(findNextSquare(625) + " 676");
console.log(findNextSquare(319225) + " 320356");
console.log(findNextSquare(15241383936) + " 15241630849");
console.log(findNextSquare(155) + " -1");
console.log(findNextSquare(342786627) + " -1");