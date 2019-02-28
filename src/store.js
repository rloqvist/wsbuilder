import shortid from 'shortid';

class Store {
  constructor() {
    this.id = window.buildId;
    this.storage = window.localStorage;
    if (!this.storage.getItem(this.id)) {
      const build = [{
        id: shortid(),
        title: "Mai veri speshul workot naem",
        type: "segment",
        description: "Replace this description with something for your segment",
        content: [],
      }]
      this.storage.setItem(this.id, JSON.stringify(build));
      this.build = build;
    } else {
      const build = this.storage.getItem(this.id);
      this.build = JSON.parse(build);
    }
    console.log('construct', this.build);
  }

  createItem = item => {
    this.build.push(item);
    this.storage.setItem(this.id, JSON.stringify(this.build));
  }

  deleteItem = id => {
    this.build = this.build.filter(item => item.id !== id);
    this.storage.setItem(this.id, JSON.stringify(this.build));
  }

  updateItem = ({id, key, value}) => {
    this.build = this.build.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [key]: value,
        };
      }
      return item;
    })
    this.storage.setItem(this.id, JSON.stringify(this.build));
  }
}

export const store = new Store();
