import { makeAutoObservable } from "mobx";

const AppStore = () =>
  makeAutoObservable({
    searchQuery: "",
    handleSearchQueryChange(value: string) {
      this.searchQuery = value;
    },
  });

  export default AppStore;