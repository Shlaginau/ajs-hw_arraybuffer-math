import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician and Daemon Attacks', () => {
  it('get attack when not stoned, distance is 1', () => {
    const magician = new Magician('Mag');
    magician.attackPower = 100;
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  it('get attack when stoned, distance 1', () => {
    const magician = new Magician('Mag');
    magician.attackPower = 100;
    magician.stoned = true;
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  it('get attack when not stoned, distance is more than 1', () => {
    const daemon = new Daemon('Boo');
    daemon.attackPower = 100;
    daemon.distance = 2;
    expect(daemon.attack).toBe(90);
  });

  it('get attack when stoned, distance more than 1', () => {
    const daemon = new Daemon('Boo');
    daemon.attackPower = 100;
    daemon.stoned = true;
    daemon.distance = 4;
    expect(daemon.attack).toBe(60);
  });
});
