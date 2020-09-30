const CustomError = require("../extensions/custom-error");

const chainMaker = {
  flag: false,
  str: '',
  getLength() {
    this.clean();
    if (this.str === '') return 0;
    let count = this.str.split('~~').length;
    return count;
  },
  addLink(value) {
    this.clean();
    if (arguments.length === 0) {
      value = '';
    }
    if (this.str === '') {
      this.str += `( ${value} )`;
    } else {
      this.str += `~~( ${value} )`;
    }
   return this;
  },
  removeLink(position) {
    this.clean();
    if (arguments.length === 0 || 
      typeof(position) !== 'number' || 
      Number.isNaN(position) || 
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()) {
        this.flag = true;
        throw new Error('error in position');
      }

      let array = this.str.split('~~');
      array.splice(position - 1, 1);
      this.str = array.join("~~");

    return this;
  },
  reverseChain() {
    this.clean();
    this.str = this.str.split('~~').reverse().join("~~");
    return this;
  },
  finishChain() {
    this.flag = true;
    return this.str;
  },
  clean() {
    if (this.flag) {
      this.str = '';
      this.flag = false;
    }
  },
};

module.exports = chainMaker;
