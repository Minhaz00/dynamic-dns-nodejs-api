const { exec } = require('child_process');
const path = require('path');
const { createAddRecordCommand } = require('../utils/nsupdateHelper');

exports.addRecord = (name, type, value) => {
  // Fix: Use the correct mounted path inside the API container
  const keyFile = '/app/bind/keys/update-key.key';
  const update = createAddRecordCommand(name, type, value);

  return new Promise((resolve, reject) => {
    const cmd = `printf "${update}" | nsupdate -k ${keyFile}`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      resolve();
    });
  });
};