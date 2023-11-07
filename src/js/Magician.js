import MathClass from './MathClass';

class Magician extends MathClass {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;
