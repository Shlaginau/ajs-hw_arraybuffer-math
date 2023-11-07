import MathClass from './MathClass';

class Daemon extends MathClass {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
