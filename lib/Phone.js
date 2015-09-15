function Phone(number) {
  this.phoneNumber = number;
}

Phone.prototype.callPhone = function(phoneNumber) {
  console.log(this.phoneNumber + 'calls' + phoneNumber);
  return this.phoneNumber + ' calls ' + phoneNumber;
};

module.exports = Phone;