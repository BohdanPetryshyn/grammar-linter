const { exec } = require('child_process');

module.exports = function() {
    const valeProcess = exec('vale --glob=\'*.{md,mdx}\' ./src');

    return promisify(valeProcess);
}

function promisify(childProcess) {
    return new Promise(((resolve, reject) => {
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);

        childProcess.on('exit', code => {
            if (code === 0) {
                resolve()
            } else {
                reject(getValeExitError())
            }
        })
        childProcess.on('error', () => reject(getValeExitError()))
    }))
}

function getValeExitError() {
    return new Error('Vale spell check has failed to complete.');
}
