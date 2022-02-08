const searchMock = {
  basicSearchOptions: [
    { name: "name", text: "Name" },
    { name: "species", text: "Species" },
    { name: "type", text: "Type" },
  ],
  advanceSearchOptions: {
    status: [
      {
        name: "alive",
        text: "Alive",
      },
      {
        name: "dead",
        text: "Dead",
      },
      {
        name: "unknown",
        text: "Unknown",
      },
    ],
    gender: [
      {
        name: "female",
        text: "Female",
      },
      {
        name: "male",
        text: "Male",
      },
      {
        name: "genderless",
        text: "Genderless",
      },
      {
        name: "unknown",
        text: "Unknown",
      },
    ],
  },
  inputTexts: [
    {
      name: "name",
      text: "Name",
    },
    {
      name: "type",
      text: "Type",
    },
    {
      name: "species",
      text: "Species",
    },
  ],
};

export default searchMock;
