import Character from './Character';

class MathClass extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPower = 0;
    this.distance = 0;
    this.stonedValue = false;
  }

  get stoned() {
    return this.stonedValue;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Stoned should be a boolean value');
    }
    this.stonedValue = value;
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
