function checkNumIsPalindrome(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    if (num === 0) return true; // 0 is a palindrome
    let divisor = 1;
    while (Math.floor(num / divisor) >= 10) {
        divisor *= 10;
    }
    while (num !== 0) {
        const leading = Math.floor(num / divisor);
        const trailing = num % 10;
        if (leading !== trailing) {
            return false;
        }
        // Remove leading and trailing digits
        num = Math.floor((num % divisor) / 10);
        divisor = Math.floor(divisor / 100);


    }
    return true;

}

// Example usage:
console.log(checkNumIsPalindrome(121)); // true
console.log(checkNumIsPalindrome(-121)); // false
console.log(checkNumIsPalindrome(10)); // false
console.log(checkNumIsPalindrome(12321)); // true


