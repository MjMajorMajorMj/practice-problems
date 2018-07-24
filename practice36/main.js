const vowelArray = ['a','e','i','o','u'];

function findVowels(inputString) {
    let outputArray = [];
    let stringLength = inputString.length;
    for (let stringCount = 0; stringCount < stringLength; stringCount++) {
        for (let vowelCount = 0; vowelCount < vowelArray.length; vowelCount++) {
            let stringLetter = inputString.charAt(stringCount);
            if (stringLetter === vowelArray[vowelCount] || stringLetter === vowelArray[vowelCount].toUpperCase()) {
                outputArray.push(stringLetter);
            }
        }
    };
    return outputArray;
}; 