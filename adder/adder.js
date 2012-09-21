function Adder(args) {
    // Make sure we instantiate this object
    if (!(this instanceof Adder)) {
        return new Adder(args);
    }

    this.add = function (val1, val2) {
        return(val1 + val2);
    }
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Adder;
    }
    exports.testingObj = Adder;
}