exports.createAddRecordCommand = (name, type, value) => {
  return `server dns-server 53\nzone example.test\nupdate add ${name}.example.test. 60 ${type} ${value}\nsend\n`;
};