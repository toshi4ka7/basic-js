const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  mode = true;

  constructor(flag = true) {
    this.mode = flag;
  }


  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('error in argument');
    }

    let strArray = message.toUpperCase().split('');
    let strKey = key.toUpperCase().split('');

    let strArrayKey = [];
    let j = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (this.alf.includes(strArray[i])) {
        strArrayKey[i] = [strArray[i], strKey[j]];
        j++;
        if (j === strKey.length) {
          j = 0;
        }
      } else {
        strArrayKey[i] = strArray[i];
      }
    }

    let strArrayDefend = [];
    for (let i = 0; i < strArrayKey.length; i++) {
      if (strArrayKey[i] instanceof Array) {
        let pos = (this.alf.indexOf(strArrayKey[i][0]) + this.alf.indexOf(strArrayKey[i][1])) % 26;
        strArrayDefend[i] = this.alf[pos];
      } else {
        strArrayDefend[i] = strArrayKey[i];
      }
    }

    if (!this.mode) {
      strArrayDefend.reverse();
    }

    return strArrayDefend.join('');
  } 

  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('error in argument');
    }

    let strArray = message.toUpperCase().split('');
    let strKey = key.toUpperCase().split('');

    let strArrayKey = [];
    let j = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (this.alf.includes(strArray[i])) {
        strArrayKey[i] = [strArray[i], strKey[j]];
        j++;
        if (j === strKey.length) {
          j = 0;
        }
      } else {
        strArrayKey[i] = strArray[i];
      }
    }

    let strArrayDefend = [];
    for (let i = 0; i < strArrayKey.length; i++) {
      if (strArrayKey[i] instanceof Array) {
        let pos = (this.alf.indexOf(strArrayKey[i][0]) - this.alf.indexOf(strArrayKey[i][1]) + 26) % 26;
        strArrayDefend[i] = this.alf[pos];
      } else {
        strArrayDefend[i] = strArrayKey[i];
      }
    }

    if (!this.mode) {
      strArrayDefend.reverse();
    }

    return strArrayDefend.join('');
  }
}

module.exports = VigenereCipheringMachine;
