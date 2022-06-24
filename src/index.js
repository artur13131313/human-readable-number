module.exports = function toReadable (number) {
    
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let wordsZero = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let wordsOne = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let wordsOnes = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let wordsTwo = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let wordsThree = ['', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen', ' twenty'];
    let finish = '';
    if (number <= 20) {
        return words[number];
    } else if (number > 20 && number < 100) {
        finish = wordsOnes[Array.from(String(number))[0]] + wordsZero[Array.from(String(number))[1]];
        return finish;
    }else if (number % 10 === 0) {
        let one = Array.from(String(number))[0];
        let two = Array.from(String(number))[1];
        let three = '';
        finish = wordsTwo[one] + wordsOne[two] + three;
        return finish;
    }else if (number % 100 <= 10 && number % 100 > 0) {
        let one = Array.from(String(number))[0];
        let two = '';
        let three = Array.from(String(number))[2];
        finish = wordsTwo[one] + two + wordsZero[three];
        return finish;
    } else if (number % 100 < 20 && number % 100 > 10) {
        let one = Array.from(String(number))[0];
        let two = '';
        let three = Array.from(String(number))[2];
        finish = wordsTwo[one] + two + wordsThree[three];
        return finish;
    } else if (number % 100 >= 20) {
        let one = Array.from(String(number))[0];
        let two = Array.from(String(number))[1];
        let three = Array.from(String(number))[2];
        finish = wordsTwo[one] + wordsOne[two] + wordsZero[three];
        return finish;
    };
};


