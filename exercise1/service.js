class Service {
  constructor() {

  }
  #fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data
    }
    catch (error) {
      console.log(`Fetching error: ${error.message}`);
    }
  }
  fetchDataFromUrl(url) {
    return this.#fetchData(url)
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

}


