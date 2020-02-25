  module.exports = function toReadable(number) {
    let figures = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    let groupoften = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
  }
  let hundred = "hundred";
    // 0-20
    if (number <= 20) {
      return figures[number];
    }
    // 30, 40, 50, 60, 70, 80, 90
    if (number <= 90 && number % 10 == 0) {
      return figures[number];
    }

    // 21- 99
    if (number > 20 && number <= 99) {
      return groupoften[Math.floor(number / 10)] + " " + figures[number % 10];
    }
    // 100, 200, 300, 400, 500, 600, 700, 800, 900
    if (number % 100 == 0) {
      return figures[(number / 100)] + " " + hundred;
    }
    // 150 260 580 ///
    if (number > 99 && number % 10 == 0 && number % 100 != 0) {
      return figures[Math.floor(number / 100)] + " " + hundred + " " + figures[number - (Math.floor(number / 100) * 100)];
    }
    // 112, 214, 509...
    if (number > 99 && number <= 999 && number % 100 != 0 && number % 100 < 20) {
      return figures[Math.floor(number / 100)] + " " + hundred + " " + figures[number % 100];
    }
    //others
    if (number > 99 && number <= 999 && number % 100 != 0) {
      return figures[Math.floor(number / 100)] + " " + hundred + " " + groupoften[Math.floor((number - (Math.floor(number / 100) * 100)) / 10)] + " " + figures[number % 10];
    }
}
