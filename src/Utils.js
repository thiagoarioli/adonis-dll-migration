

const Utils = {
  /**
   * Convert an object into an array. If it contains objects clone them
   * @param  {Object} obj              Object to convert
   * @param  {String} [keyField='key'] Save the object key against a new property
   * @return {Array} formated array
   */
  objectToArray: (obj, keyField = "key") => {
    const array = [];

    Object.keys(obj).map(key => {
      let item = obj[key];
      if (typeof obj[key] === "object") {
        item = Object.assign({}, obj[key]);
        item[keyField] = key;
      }
      array.push(item);
    });

    return array;
  },

  /**
   * Remove last character of a string in the last object
   * of an array of objects
   * @param  {Object []} arr Array of objects that needs a comma removing
   * @param  {String} field     Field name to remove character from
   * @returns {String []} formated string
   */
  removeLastComma: (arr, field) => {
    const withField = arr.filter(column => column[field]);

    if (withField.length) {
      withField[withField.length - 1][field] = withField[withField.length - 1][field].slice(0, -1);
    }
    return withField;
  }
};

module.exports = Utils;
