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

// Obyektlarni test qilish
module.exports.getProduct = function (productId) {
  return { id: productId, title: "banana", price: 2 };
};

// Xatolarni test qilish
module.exports.registeruser = function (userName) {
  if (!userName) throw new Error("Username is required");

  return { id: 111, userName: userName };
};
