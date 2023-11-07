import Character from '../Character';

test('inherits parent properties', () => {
  const character = new Character('name', 'Magician');
  expect(character.name).toBe('name');
  expect(character.type).toBe('Magician');
});

test('name length should be greater than 2', () => {
  expect(() => new Character('n', 'Undead')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('name length should be less than 10', () => {
  expect(() => new Character('namenamename', 'Zombie')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('error on incorrect type', () => {
  expect(() => new Character('name', 'Alive')).toThrowError('Такого персонажа не существует');
});
