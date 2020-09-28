import { observable } from 'mobx';
export default class CommonStore {
  
  @observable public globalLoading: boolean = false;
  
  public websiteSimpleTitle: string = "网站简标题"
}