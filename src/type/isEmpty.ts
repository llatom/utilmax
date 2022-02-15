/**
 *
 * @desc
 * Checks if the a value is an empty object/collection, has no enumerable properties or is any type that is not considered a collection.
 * @param {any} a
 * @return {Boolean}
 */

  
 const isEmpty = val => val == null || !(Object.keys(val) || val).length;

 export default isEmpty
  