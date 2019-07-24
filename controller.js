fs = require("fs");
path = require("path")

class Controller {
  static async get(req, res, next) {
    try {
      res.end(path.join(__dirname + `/quran-images/${req.params.page}.png`));
    } catch (ex) {
      return next(ex);
    }
  }

  static async show(req, res, next) {
    try {
      const file = `./quran-images/${req.params.page}.png`;
      var img = fs.readFileSync(file);
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(img, "binary");
    } catch (ex) {
      return next(ex);
    }
  }

  static async download(req, res, next) {
    try {
      const file = `./quran-images/${req.params.page}.png`;
      res.download(file); // Set disposition and send it.
    } catch (ex) {
      return next(ex);
    }
  }
}
module.exports = Controller;
