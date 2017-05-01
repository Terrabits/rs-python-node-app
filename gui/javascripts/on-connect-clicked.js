const connect = window.nodeRequire(path.resolve(root_path, 'connect'));

function onclose(code) {
	controls.enable();
	if (code != 0) {
		alert.showMessage("*Error connecting to VNA");
	}
	else {
		controls.showMeasure();
	}
}

function stdout(text) {
	console.log(text);
	}

function onConnectClicked() {
	alert.hide();
	// if (!settings.instrument.address) {
	// 	alert.showMessage("Please enter instrument address to continue");
	// 	controls.enable();
	// 	return;
	// }
	// controls.disable();
	// connect(settings.instrument.address, stdout, onclose);
}

module.exports = onConnectClicked;
