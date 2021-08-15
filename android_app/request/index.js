export default class HTTP {
  async fetchGet(options) {
    let {url, successCb, errorCb} = options;
    try {
      let res = await fetch(url);
      let data = await res.json();
      successCb(data);
    } catch (error) {
      errorCb(error);
    }
  }
}
