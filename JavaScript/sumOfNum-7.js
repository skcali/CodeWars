function GetSum( a,b ) {
    var sum = 0;
    if (b < a) {
        var temp = a;
        a = b;
        b = temp;
    }
    for (var i = a; i <= b; i++) {
        sum += i;
    }

   return sum;
}


console.log(GetSum(0,-1), " -1" );
console.log(GetSum(0,1), " 1");
     
