class Service {
  constructor() {

  }
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


async function getSomeData() {
  let data = await mainService.fetchDataFromUrl('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
  console.log(mainService.getGroupedDataBy(data, 'id'));
}
getSomeData()
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

// const users = [
//   {
//     name: 'Tyom',
//     age: 23,
//     gender: 'male',
//   },
//   {
//     name: 'Artur',
//     age: 13,
//     gender: 'male'
//   },
//   {
//     name: 'Armin',
//     age: 23,
//     gender: 'female'
//   },
//   {
//     name:"Anush",
//     age:33,
//     gender:'female'
//   }
// ]
// console.log('gender', users.groupBy('gender'));
// console.log('age', users.groupBy('age'));
// console.log('name', users.groupBy('name'));


