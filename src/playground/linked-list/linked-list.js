import Comparator from '../../utils/comparator.js';

class LinkedList {
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFunction);
  }
}
