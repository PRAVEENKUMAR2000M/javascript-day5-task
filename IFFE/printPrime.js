let numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
//this printPrimes() IIFE function will return all prime number in given array

((arr) => {
    //this isPrime() function will check prime or not
    let isPrime = function (n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    };
    //this will filter prime numbers from user input
    let res = arr.filter(isPrime);
    console.log(res);
})(numberArray)