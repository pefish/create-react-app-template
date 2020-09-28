import { observable } from 'mobx';
import CommonStore from './common_store';
import { withGlobalLoading, wrapPromise } from '../util/decorator';
import HttpRequestUtil from "@pefish/js-util-httprequest"
import { ReturnType } from '../util/type';


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

  public setMediaListeners () {
    this.isWebMatchMedia.addListener(e => {
      this.isWeb = e.matches
    });
  }

  public setSelectedMemu (key: string) {
    this.selectedMenu = key
  }

  public add () {
    this.counter++
  }

  @withGlobalLoading()
  @wrapPromise()
  public async requestBaidu (): Promise<ReturnType> {
    return await HttpRequestUtil.get("https://www.baidu.com")
  }
}
