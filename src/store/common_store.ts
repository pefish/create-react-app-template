
import { makeAutoObservable } from "mobx"
import PersistenceStore from "./persistence_store";

export default class CommonStore {
  
  public globalLoading: boolean = false;
  
  public websiteSimpleTitle: string = "Swarm 管理端"
  public persistenceStore: PersistenceStore

  constructor() {
    makeAutoObservable(this)
    this.persistenceStore = new PersistenceStore()
  }

}