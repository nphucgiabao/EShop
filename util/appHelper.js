const crypto = require('crypto');

const hashMD5 = (str) => {
    return crypto.createHash('md5').update(str).digest("hex");
}

const statusOrder = {
    Pending: 'pending',
    Delivering: 'delivering',
    Complete: 'complete'
}

const appMessage = {
    saveSuccess: 'Save data sucess',
    deleteSucess: 'Delete data success',
    saveError: 'Save data error!',
    deleteError: 'Delete data error!'
}

module.exports = {
    hashMD5, statusOrder, appMessage
}