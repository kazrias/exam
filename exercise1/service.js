class Service {

  #fetchData(){
    
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new this(name);
    }
    return this.instance;
  }
  
}

