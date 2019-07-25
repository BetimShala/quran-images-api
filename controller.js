fs = require("fs");
path = require("path");

class Controller {
  static async get(req, res, next) {
    try {
      let pageNumber = req.params.page;
      if (!Controller.validateRequest(pageNumber)) {
        res.status(404).send("Page Not found");
        return;
      }

      res.end(path.join(__dirname + `/quran-images/${pageNumber}.png`));
    } catch (ex) {
      return next(ex);
    }
  }

  static async show(req, res, next) {
    try {
      let pageNumber = req.params.page;
      if (!Controller.validateRequest(pageNumber)) {
        res.status(404).send("Page Not found");
        return;
      }

      const file = `./quran-images/${pageNumber}.png`;
      var img = fs.readFileSync(file);
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(img, "binary");
    } catch (ex) {
      return next(ex);
    }
  }

  static async download(req, res, next) {
    try {
      let pageNumber = req.params.page;
      if (!Controller.validateRequest(pageNumber)) {
        res.status(404).send("Page Not found");
        return;
      }

      const file = `./quran-images/${pageNumber}.png`;
      res.download(file);
    } catch (ex) {
      return next(ex);
    }
  }

  static validateRequest(pageNumber) {
    pageNumber = parseInt(pageNumber);
    if (pageNumber < 1 || pageNumber > 604) {
      return false;
    }
    return true;
  }
}

module.exports = Controller;
