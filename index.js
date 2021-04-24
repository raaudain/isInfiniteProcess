// Given integers a and b, determine whether the following pseudocode results in an infinite loop


function isInfiniteProcess(a, b) {
    // The trick is that you will always increase a by 1, and decrease b by 1, meaning that they will meet if they     are both odd or both even (assuming that b > a at the beginning).
    
    // Returns whichever one is true. If none true, returns false.
    return a > b || (a % 2 != b % 2);
}

isInfiniteProcess(2, 3);