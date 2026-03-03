/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    const expandFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i);       // odd length
        expandFromCenter(i, i + 1);   // even length
    }

    return s.substring(start, start + maxLength);
};