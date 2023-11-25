import {makeAutoObservable} from "mobx"
import { withGlobalLoading, wrapPromiseWithErrorTip } from '../util/decorator';
import {commonStore} from "./init";


const isWebMediaString = "(min-width: 996px)"
export default class HomeStore {

  public counter = 0;

  private isWebMatchMedia = window.matchMedia(isWebMediaString)
  public isWeb = this.isWebMatchMedia.matches
  public selectedMenu: string = "test1"

  public loginModalVisible: boolean = false
  public userOnline: boolean = commonStore.persistenceStore.get("jwt") !== ""
  public loginUsername: string = ""
  public loginPassword: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  public setMediaListeners () {
    this.isWebMatchMedia.addListener(e => {
      this.isWeb = e.matches
    });
  }

  public setSelectedMemu (key: string) {
    this.selectedMenu = key
  }

  @wrapPromiseWithErrorTip()
  @withGlobalLoading()
  public async login (): Promise<any> {
    // const jwt = await HttpUtil.post("https://www.baidu.com")
    // throw new Error("test")
    const jwt = "hsgfjsfgjsyjsfjs"
    this.loginModalVisible = false
    commonStore.persistenceStore.set("jwt", jwt)
    commonStore.persistenceStore.set("username", this.loginUsername)
    this.userOnline = true
  }

  @wrapPromiseWithErrorTip()
  @withGlobalLoading()
  public async logout (): Promise<any> {
    commonStore.persistenceStore.remove("jwt")
    commonStore.persistenceStore.remove("username")
    this.userOnline = false
  }
}
