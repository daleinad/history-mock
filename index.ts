import { data } from "./data";

type Entry = {
  title: string;
  state: any;
  url: string;
};

let history: Entry;
let backIndex: number;
let forwardIndex: number;
let goIndex: number;

export default {
  back(currentIndex: number) {
    if (currentIndex > 0) backIndex = currentIndex - 1;
    else backIndex = currentIndex;
    return data[backIndex];
  },
  forward(currentIndex: number) {
    if (currentIndex < data.length) forwardIndex = currentIndex + 1;
    else forwardIndex = currentIndex;
    return data[forwardIndex];
  },
  go(currentIndex: number, step: number) {
    if (currentIndex + step > data.length)
      throw new Error("Page with that ID doesn't exist");
    else goIndex = currentIndex + step;
    return data[goIndex];
  }
};
