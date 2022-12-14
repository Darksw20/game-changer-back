const Model = require("./Model");

module.exports = class Event extends Model {
  constructor() {
    super("event", ["name", "startDate", "endDate", "ubication"]);
  }
  toObject() {
    return {
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      ubication: this.ubication,
    };
  }
};
