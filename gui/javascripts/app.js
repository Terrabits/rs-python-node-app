const onConnectClicked    = window.nodeRequire(path.resolve(root_path, 'on-connect-clicked'));
const onDisconnectClicked = window.nodeRequire(path.resolve(root_path, 'on-disconnect-clicked'));

// Settings callbacks
//

// Controls
$('#connect-button').on('click', onConnectClicked);
$('#disconnect-button').on('click', onDisconnectClicked)

// if (settings.instrument.address) {
//   onConnectClicked();
// }
