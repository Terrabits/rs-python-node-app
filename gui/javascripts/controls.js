const connect  = window.nodeRequire(path.resolve(root_path, 'connect-controls'));

class Controls {
  constructor() {
    this.connect  = connect;
  }
  showConnect() {
    this.connect.show();
  }
  showMeasure() {
    this.connect.hide();
  }
  enable() {
    this.connect.enable();
  }
  disable() {
    this.connect.disable();
  }
}

module.exports = new Controls();
