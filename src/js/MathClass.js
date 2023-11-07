import Character from './Character';

class MathClass extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPower = 0;
    this.distance = 0;
    this.stoned = false;
  }

  get attack() {
    return this.calculateAttack(this.distance);
  }

  set attack(value) {
    this.attackPower = value;
  }

  calculateAttack(distance) {
    let attack = this.attackPower;
    if (distance > 1) {
      attack *= 1 - 0.1 * (distance - 1);
    }

    if (this.stoned) {
      attack -= Math.round(Math.log2(distance) * 5);
    }

    return attack;
  }
}

export default MathClass;
