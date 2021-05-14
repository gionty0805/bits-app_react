const express = require('express');
const router = express.Router();
const appConfigController = require('../controllers/AppConfigController');
const { verifyCheck } = require("../controllers/VerifyController");

router.post('/auth',verifyCheck, appConfigController.doAuth);
router.post('/login', appConfigController.doLogin);
router.post('/logout',verifyCheck, appConfigController.doLogout);
module.exports = router;