import { observable, action } from 'mobx';
import CommonStore from './common_store';

export default class HomeStore {

  private commonStore: CommonStore
  @observable
  private counter = 0;

  constructor (commonStore: CommonStore) {
    this.commonStore = commonStore
  }

  @action
  async add () {
    try {
      this.counter++
    } catch(err) {
      console.error(err)
      throw err
    }
  }
}