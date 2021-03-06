const { promisify } = require('util');
const mkdirp = promisify(require('mkdirp'));
const ora = require('ora');
const chalk = require('chalk');
const del = require('del');
const timer = require('../utils/timer');
const log = require('../utils/log');
const { getConfig } = require('../utils/config-store');
let config;

/**
 * Makes all directories in config
 * @async
 * @returns {Promise}
 */
async function mkDirs() {
  config = config || (await getConfig());

  try {
    return Promise.all([
      config.wwwDir ? mkdirp(config.wwwDir) : null,
      config.dataDir ? mkdirp(config.dataDir) : null,
      config.buildDir ? mkdirp(config.buildDir) : null,
    ]);
  } catch (error) {
    log.errorAndExit('Could not make all directories necessary.', error);
  }
}

async function clean(dirs) {
  config = config || (await getConfig());

  const spinner = ora(chalk.blue('Cleaning files...')).start();
  const startTime = timer.start();
  await del(dirs, {
    force: true, // needed if you want to delete directories outside CWD
  });
  spinner.succeed(chalk.green(`Cleaned files in ${timer.end(startTime)}`));
  if (config.verbosity > 2) {
    console.log(dirs);
  }
  return true;
}

module.exports = {
  mkDirs,
  clean,
};
