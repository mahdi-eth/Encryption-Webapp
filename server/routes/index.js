const express = require('express');
const router = express.Router();

exports.encryptRoute = router.post("/encrypt", require('../controller/encryption').controlEncryption);
exports.decryptRoute = router.post("/decrypt", require('../controller/decryption').controlDecryption);