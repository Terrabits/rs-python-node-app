const spawn = window.nodeRequire('child_process').spawn;

function connect(address, stdout, onclose) {
	console.log("Connecting...");
	return;

	// pybin = path.resolve(root_path, '../my-py-lib/run');
	// if (process.platform == "win32") {
	// 	pybin = pybin + ".exe";
	// }
	// var env = Object.create(process.env);
  // env.PYTHONIOENCODING = 'utf-8';
  // env.LANG             = "en_US.UTF-8";
  // options = {env: env, encoding: 'utf8'};
	// var _process = spawn(pybin, [address], options);
	// _process.stdout.on('data', stdout);
	// _process.on('close', onclose);
}

module.exports = connect;
