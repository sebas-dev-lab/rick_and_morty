/**
 * @class Basics
 * @description have three methods: searchInitialStates(provide initail states), setQueryFilterToSearch(set query when user sear something),setFiltersToFetchSearch(Without usage, return query to search.)
 */

class Basics {
  /**
   *
   * @param {*} type string that define basic or advance getter.
   * @returns
   */
  static searchInitialStates(type) {
    let initlaStates = {
      get(type) {
        return this[type];
      },
      basic: {
        filter: "name",
        input: "",
      },

      advance: {
        status: {
          alive: false,
          dead: false,
          unknown: false,
        },
        gender: {
          female: false,
          male: false,
          genderless: false,
          unknown: false,
        },
        name: "",
        type: "",
        specie: "",
      },
    };

    return initlaStates.get(type);
  }

  /**
   * Set object with filters
   *
   * @param {*} filters Object with filters
   * @returns
   */
  static setQueryFilterToSearch(filters, advance) {
    let query = "";
    let error = false;
    if (advance) {
      for (let i in filters) {
        if (i == "status" || i == "gender") {
          for (let j in filters[i]) {
            if (filters[i][j]) {
              query = `${query}${query ? "&" : ""}${i}=${j}`;
            }
          }
        } else {
          if (filters[i] != "") {
            query = `${query}${query ? "&" : ""}${i}=${filters[i]}`;
          }
        }
      }
    } else {
      if (!filters["input"]) {
        error = true;
      }
      query =
        query +
        `${query ? "&" : ""}` +
        filters["filter"] +
        "=" +
        filters["input"];
    }
    return `/results/filters?${query}`;
  }

  /**
   *
   * @param {*} filters string with query
   */
  static setFiltersToFetchSearch(filters) {
    let queryFilter = filters.split("?")[1];
    return queryFilter;
  }
}

export default Basics;
