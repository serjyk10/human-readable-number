const arrOfNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const numOfDecim = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    if (number < 20) return arrOfNum[number];

    let arrNum = number.toString().split('');
    if (20 <= number && number < 100) {
        return (numOfDecim[arrNum[0] - 2] + " " + (arrNum[1] == 0 ? '' : arrOfNum[parseInt(arrNum[1])])).trim();
    }

    if (99 < number && number < 1000) {
        if (parseInt(arrNum[1] + arrNum[2]) < 20) return (arrOfNum[arrNum[0]] + " " + "hundred" + " " + (arrNum[1] + arrNum[2] == 0 ? '' : arrOfNum[parseInt(arrNum[1] + arrNum[2])])).trim();
        
        return (arrOfNum[arrNum[0]] + " " + "hundred" + " " + (arrNum[1] == 0 ? '' : numOfDecim[parseInt(arrNum[1]) - 2]) + " " + (arrNum[2] == 0 ? '' : arrOfNum[parseInt(arrNum[2])])).trim();
    }

}
