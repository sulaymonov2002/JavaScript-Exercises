const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config')

module.exports.getCustomer = function (id) {
  console.log("Mijozni Mongodbdan olish...");
  // bu yerda mijozni mongoDBdan olish kodi bor deb faraz qilamiz
  return { id: 7, points: 101 };
};