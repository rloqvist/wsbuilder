import shortid from 'shortid';
import {fromJS} from 'immutable';

class Store {
  constructor() {
    this.id = window.buildId;
    this.storage = window.localStorage;
    if (!this.storage.getItem(this.id)) {
      const build = [{
        id: shortid(),
        title: "Main segment",
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
}

export const store = new Store();
