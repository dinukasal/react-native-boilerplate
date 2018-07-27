import { observable } from "mobx";

class ObservableStore {
  @observable name = "app";
}

const appStore = new ObservableStore();
export default appStore;
