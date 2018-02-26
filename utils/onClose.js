// Object to capture process exits and call app specific cleanup function
exports.onClose = function onClose(callback) {

  // do app specific cleaning before exiting
  process.on('exit', function () {
    callback();
  });

  process.on('SIGTERM', function () {
    process.exit();
  });
};
