const express = require("express");
const router = express.Router();
const Controller = require("./controller");
const path = require('path');

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
router.get("/page/:page", Controller.get);
router.get("/show/page/:page", Controller.show);
router.get("/download/page/:page", Controller.download);

module.exports = router;
