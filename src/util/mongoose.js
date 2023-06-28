module.exports = {
  mutliObj: function (multiArray) {
    return multiArray.map((mul) => mul.toObject());
  },
  OneObj: function (mon) {
    return mon ? mon.toObject() : mon;
  },
};
