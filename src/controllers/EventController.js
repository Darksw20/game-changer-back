const Controller = require("./controller");

module.exports = class EventController extends Controller {
  constructor() {}

  create(req, res, next) {
    res.send("respond with a resource");
  }

  getInfo(req, res, next) {
    res.send("respond with a resource");
  }

  getTeams(req, res, next) {
    res.send("respond with a resource");
  }

  getMatches(req, res, next) {
    res.send("respond with a resource");
  }

  update(req, res, next) {
    res.send("respond with a resource");
  }

  delete(req, res, next) {
    res.send("respond with a resource");
  }
};