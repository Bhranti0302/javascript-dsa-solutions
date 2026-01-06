var isPalindrome = function (x) {
    let reversed=x.toString().split('').reverse().join('');
    return reversed===x.toString();
};

console.log(isPalindrome(-121)); 
