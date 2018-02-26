// Object to capture process exits and call app specific cleanup function
exports.onClose = function onClose(callback) {

  process.on('SIGTERM', function () {
		callback();
  });
};
