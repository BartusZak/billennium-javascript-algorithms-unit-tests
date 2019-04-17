//function returns array of strings
exports.genAnagrams = (word, anagram = "", anagrams = []) => {
    if (!word) {
        anagrams.push(anagram);
        return;
    }
    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        this.genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length - 1)
    }

    return [...new Set(anagrams)]
};