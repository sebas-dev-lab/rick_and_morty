/**
 * @class EnvConfig
 * @description Have two static method to return api url, and social media links.
 */

class EnvConfig {
  /**
   *
   * @returns BaseUrl rick and morty url api
   */
  static getApiUrl() {
    return process.env.RM_BASEURL;
  }

  /**
   *
   * @returns Social media links
   */
  static getSocialMediaLinks() {
    return {
      facebook: process.env.RM_FACEBOOK || "",
      tweeter: process.env.RM_TWEETER || "",
      pinterest: process.env.RM_PINTEREST || "",
      instagram: process.env.RM_INSTAGRAM || "",
    };
  }
}

export default EnvConfig;
