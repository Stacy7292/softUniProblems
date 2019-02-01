function solve(arr) {
    let palindromes = [];

    for (let word of arr) {
        let newWord = word.split(" ").join("");
        if (isPalindrome(newWord)) {
            palindromes.push(newWord);
        }
    }

    if (palindromes.length > 0) {
        console.log(palindromes.join(", "));
    } else {
        console.log(`No palindromes found`);
    }

    function isPalindrome(word) {
        let reversed = word.replace(/\s+/g, "").split("").reverse().join("");

        return reversed === word;
    }

}

solve([' stella won no wallets',
    'not a palindrome'
]);