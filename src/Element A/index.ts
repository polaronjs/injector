import { Injectable } from '../../lib';

// injectables
import { ElementB } from '../Element B';
import { ElementC } from '../Element C';

@Injectable()
export class ElementA {
  constructor(b: ElementB, c: ElementC) {
    console.log('From A:', b.speak());
    console.log('From A:', c.speak());
  }
}
