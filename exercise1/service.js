Array.prototype.groupBy = function (key) {
  const res = {};
  for (const obj of this) {
    const resKey = obj[key];
    if (!res[resKey]) {
      res[resKey] = [];
    }
    res[resKey].push(obj);
  }
  return res;
}

class Service {
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
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

  getGroupedDataBy(data, key) {
    return data.groupBy(key)
  }
}

let mainService = Service.getInstance();


async function getSomeDataTest() {
  const data = await mainService.fetchDataFromUrl('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
  const dataById = mainService.getGroupedDataBy(data, 'id')
  console.log(dataById);
  const dataByUserId = mainService.getGroupedDataBy(data, 'userId')
  console.log(dataByUserId);
}
getSomeDataTest()



