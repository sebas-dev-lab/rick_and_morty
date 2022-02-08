module.exports = {
  get({ resource, type }) {
    return this[resource][type];
  },
  general: {
    requiredParams:
      "Sorry, the required data could not be obtained. Required parameter is missing.",
  },
  character: {
    list: "Sorry the character list can not be displayed.",
    id: "Sorry the character selected can not be displayed.",
  },
  location: {
    list: "Sorry the location list can not be displayed.",
    id: "Sorry the location selected can not be displayed.",
  },
  episode: {
    list: "Sorry the episode list can not be displayed.",
    id: "Sorry the episode selected can not be displayed.",
  },
};
