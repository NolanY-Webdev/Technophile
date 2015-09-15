function WebBrowser() {
  this.interNetExplorer = 'worst browser ever';
}

WebBrowser.prototype.open = function(url) {
  return 'Browsing to ' + url;
};

module.exports = WebBrowser;