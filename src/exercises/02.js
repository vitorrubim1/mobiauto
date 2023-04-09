function updateData(currentObject, newDataObject) {
  const allowedKeys = Object.keys(currentObject);

  const hasAllAllowedKeys = Object.keys(newDataObject).every(key => allowedKeys.includes(key));

  if (!hasAllAllowedKeys) return currentObject;

  for (const key in newDataObject) {
    if (currentObject.hasOwnProperty(key)) currentObject[key] = newDataObject[key];
  }

  return currentObject;
}

module.exports = updateData;
