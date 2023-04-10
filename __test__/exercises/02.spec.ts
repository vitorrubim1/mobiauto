import updateData from '../../src/exercises/02.js';

const allowedKeys = ['name', 'country', 'age'];
const currentObject = { name: 'Rafael', country: 'Chile', age: 42 };

test('Disallow object update because it has unmapped keys', () => {
  const newDataObject = { name: 'Camiseta Polo', price: 59.9, amount: 30 };

  const hasAllAllowedKeys = Object.keys(newDataObject).every(key =>
    allowedKeys.includes(key),
  );

  let updatedObject;

  if (!hasAllAllowedKeys) updatedObject = currentObject;
  else updatedObject = updateData(currentObject, newDataObject);

  expect(updatedObject).toEqual(currentObject);
});

test('A função updateData deve atualizar currentObject com newDataObject', () => {
  const newDataObject = { name: 'Vitor', country: 'Brasil', age: 20 };

  const hasAllAllowedKeys = Object.keys(newDataObject).every(key =>
    allowedKeys.includes(key),
  );

  let updatedObject;

  if (!hasAllAllowedKeys) updatedObject = currentObject;
  else updatedObject = updateData(currentObject, newDataObject);

  expect(updatedObject).toEqual(newDataObject);
});
