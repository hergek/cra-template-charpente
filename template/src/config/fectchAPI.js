/**
 * Fetch API.
 */
const fetchAPI = {
  baseUrl: "https://example.com/api/",
  headers: { auth: token },

  /**
   * La methode get
   * @param {String} url url vers l'api
   * @returns
   */
  async get(url) {
    try {
      const res = await window.fetch(this.baseUrl + url, this.headers);
      return res.json();
    } catch (error) {
      return error.message;
    }
  },
  /**
   *
   * @param {String} url api
   * @param {datas} opts datas
   * @returns
   */
  async post(url, datas) {
    try {
      const res = await window.fetch(this.baseUrl + url, {
        method: "POST",
        body: datas,
        headers,
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  },
  /**
   *
   * @param {String} url api
   * @param {datas} opts datas
   * @returns
   */
  async put(url, datas) {
    try {
      const res = await window.fetch(this.baseUrl + url, {
        method: "PUT",
        body: datas,
        headers,
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  },
  /**
   *
   * @param {String} url api
   * @param {datas} opts datas
   * @returns
   */
  async patch(url, datas) {
    try {
      const res = await window.fetch(this.baseUrl + url, {
        method: "PATCH",
        body: datas,
        headers,
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  },
  /**
   *
   * @param {String} url api
   * @returns
   */
  async delete(url) {
    try {
      const res = await window.fetch(this.baseUrl + url, {
        method: "DELETE",
        headers,
      });
      return res.json();
    } catch (error) {
      return error.message;
    }
  },
};
export default fetchAPI;
