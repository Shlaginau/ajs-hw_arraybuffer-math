import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician and Daemon Attacks', () => {
  test('get attack when not stoned, distance is 1', () => {
    const magician = new Magician('Mag');
    magician.attackPower = 100;
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  test('get attack when stoned, distance 1', () => {
    const magician = new Magician('Mag');
    magician.attackPower = 100;
    magician.stoned = true;
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  test('get attack when not stoned, distance is more than 1', () => {
    const daemon = new Daemon('Boo');
    daemon.attackPower = 100;
    daemon.distance = 2;
    expect(daemon.attack).toBe(90);
  });

  test('get attack when stoned, distance more than 1', () => {
    const daemon = new Daemon('Boo');
    daemon.attackPower = 100;
    daemon.stoned = true;
    daemon.distance = 4;
    expect(daemon.attack).toBe(60);
  });

  test('set stoned to true', () => {
    const magician = new Magician('Mag');
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
  });

  test('set stoned to false', () => {
    const daemon = new Daemon('Boo');
    daemon.stoned = false;
    expect(daemon.stoned).toBe(false);
  });

  test('throw an error for not boolean', () => {
    expect(() => {
      const magician = new Magician('Mag');
      magician.stoned = 'blabla';
    }).toThrowError('Stoned should be a boolean value');
  });
});
