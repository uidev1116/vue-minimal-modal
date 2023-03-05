const cmd = require('node-cmd');

/**
 * Run system command
 *
 * @param cmdString
 * @returns {Promise}
 */
exports.systemCmd = cmdString =>
  new Promise((resolve) => {
    cmd.get(
      cmdString,
      (data, err, stderr) => {
        console.log(cmdString);
        console.log(data);
        if (err) {
          console.log(err);
        }
        if (stderr) {
          console.log(stderr);
        }
        resolve(data);
      }
    );
  });
