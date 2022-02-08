import EnvConfig from "./Envs";
import axios from "axios";
import fetchErrorMessages from "../mocks/error/fetchErrorMessages";
/**
 * @class API
 * @description API have three methods: construct(Url fetch that git to fetch method), fetch(fetch to api and dispatch data to redux store -success or error) and errorFetchMessage(set error message when api return some error.)
 *
 *
 */
class Api {
  constructor() {
    // binds
    this.constructUri = this.constructUri.bind(this);
    this.fetch = this.fetch.bind(this);
    this.errorFetchMessage = this.errorFetchMessage.bind(this);
  }

  /**
   *
   * @param {*} object {resource, id, page}
   * @returns string with constructed url
   */
  constructUri({ resource, id, page, filters }) {
    let queryFilter = "";
    if (filters) {
      queryFilter = filters;
    }
    if (page) {
      return page;
    } else {
      return (
        `${EnvConfig.getApiUrl()}/${resource}/${id ? id : ""}` + queryFilter
      );
    }
  }

  /**
   *
   * @param {*} object {resource, id, page}
   * @returns Fetched data
   */
  async fetch(data) {
    if (!data.resource) {
      return {
        message: this.errorFetchMessage({
          resource: "general",
          type: "requiredParams",
          error: true,
        }),
        error: true,
      };
    }
    try {
      let getData = await axios.get(this.constructUri(data));

      if (getData.status == 200) {
        return getData.data;
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
      return {
        message: this.errorFetchMessage({
          resource: data.resource,
          type: data.id ? "id" : "list",
        }),
        error: true,
      };
    }
  }

  /**
   *
   * @param {*} object {resource, type}
   * @returns  Error message is returned
   */
  errorFetchMessage({ resource, type }) {
    return fetchErrorMessages.get({ resource, type });
  }
}

export default Api;
