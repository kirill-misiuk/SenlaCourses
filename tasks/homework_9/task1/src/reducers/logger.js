const logger = (store) => (next) => (action) => {
  if (action.type === 'ADD_TODO') {
    action.payload.complete = true
    return next(action);
  } else {
    return next(action);
  }
};

export default logger;



// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log("store", store);
//       console.log("next", next);
//       console.log("action", action);
//       action.payload.complete = true
//       return next(action);
//     };
//   };
// }
