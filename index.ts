import { data } from "./data";

type Entry = {
  title: string;
  state: any;
  url: string;
};

let backPage: Entry;
let forwardPage: Entry;
let goPage: Entry;

export default {
  back(currentPage: Entry) {
    if (data.indexOf(currentPage) > 0)
      backPage = data[data.indexOf(currentPage) - 1];
    else backPage = currentPage;
    return backPage;
  },
  forward(currentPage: Entry) {
    if (data.indexOf(currentPage) < data.length)
      forwardPage = data[data.indexOf(currentPage) + 1];
    else forwardPage = currentPage;
    return forwardPage;
  },
  go(currentPage: Entry, step: number) {
    if (data.indexOf(currentPage) + step < data.length)
      goPage = data[data.indexOf(currentPage) + step];
    return goPage;
  }
};
