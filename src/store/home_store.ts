import { observable, action } from 'mobx';
import CommonStore from './common_store';

const isWebMediaString = "(min-width: 996px)"
export default class HomeStore {

  private commonStore: CommonStore
  @observable
  public counter = 0;

  private isWebMatchMedia = window.matchMedia(isWebMediaString)
  @observable
  public isWeb = this.isWebMatchMedia.matches
  @observable
  public selectedMenu: string = "test1"

  constructor (commonStore: CommonStore) {
    this.commonStore = commonStore
  }

  public async setMediaListeners () {
    this.isWebMatchMedia.addListener(e => {
      this.isWeb = e.matches
    });
  }

  public async setSelectedMemu (key: string) {
    this.selectedMenu = key
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
