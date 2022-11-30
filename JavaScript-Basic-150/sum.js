module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
};

module.exports.salom = function (name) {
  return "Assalomu alekum, " + name;
};

// Qatorlarni test qilish
module.exports.getCurrencies = function () {
  return ["UZS", "MYR", "TRY"];
};
