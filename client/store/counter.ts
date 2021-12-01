import { makeAutoObservable } from "mobx";

class Counter {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = ++this.count
  }

  decrement() {
    this.count = --this.count
  }
}

export default new Counter()