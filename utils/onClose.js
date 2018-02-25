// Object to capture process exits and call app specific cleanup function
exports.onClose = function onClose(callback) {

  // do app specific cleaning before exiting
  process.on('exit', function () {
    callback();
  });

  // catch ctrl+c event and exit normally
  process.on('SIGINT', function () {
    callback();
    process.exit();
  });

	process.on('SIGUSR1', function () {
    callback();
    process.exit();
  });

	process.on('SIGUSR2', function () {
    callback();
    process.exit();
  });

  //catch uncaught exceptions, trace, then exit normally
  process.on('uncaughtException', function(e) {
		callback();
    console.log('Uncaught Exception...');
    console.log(e.stack);
    process.exit(99);
  });
};
