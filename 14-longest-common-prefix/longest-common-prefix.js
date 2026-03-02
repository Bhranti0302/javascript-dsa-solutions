/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";

    // Start with the first string as prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Keep reducing prefix until it matches the start of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            
            // If prefix becomes empty, no common prefix exists
            if (prefix === "") return "";
        }
    }

    return prefix;
};