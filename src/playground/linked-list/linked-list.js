import Comparator from '../utils/comparator';

class LinkedList {
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFunction);
  }
}

export default LinkedList;
