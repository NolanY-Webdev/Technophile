function Watch() {
  this.bodyPart = null;
}

Watch.prototype.wear = function(bodyPart) {
  this.bodyPart = bodyPart;
  return bodyPart;
};

module.exports = Watch;