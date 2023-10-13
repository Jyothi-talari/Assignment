function reverseWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [6, 4, 9, 7, 5];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray);