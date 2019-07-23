const express = require("express");
const router = express.Router();
const Controller = require("./Controller");

router.get("/page/:page", Controller.get);
router.get("/show/page/:page", Controller.show);
router.get("/download/page/:page", Controller.download);


module.exports = router;
