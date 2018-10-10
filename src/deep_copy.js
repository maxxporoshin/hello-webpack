import _ from 'lodash';

// function deepCopy(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(e => deepCopy(e));
//   }

//   if (obj instanceof Date) {
//     return new Date(obj.getTime());
//   }

//   const copiedObj = {};
//   for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) continue;
//     copiedObj[key] = deepCopy(obj[key]);
//   }

//   return copiedObj;
// }

export default function deepCopy(obj) {
  return _.cloneDeep(obj);
}
