import { Injectable } from '../../lib';

// injectables
import { ElementC } from '../Element C';

@Injectable()
export class ElementB {
  constructor(c: ElementC) {
    console.log('From B:', c.speak());
  }

  speak() {
    return 'I am B!';
  }
}
