const crypto = require('crypto');

const hashMD5 = (str) => {
    return crypto.createHash('md5').update(str).digest("hex");
}

module.exports = {
    hashMD5
}