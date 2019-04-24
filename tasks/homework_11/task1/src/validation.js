const required = value => (value ? undefined : 'Required');
const minLength = value => (value.length > 4 ? undefined : 'Must be 4 characters or more');
const minNumber = value => (value < 18 ? 'Sorry, you must be at least 18 years old' : undefined);
const matchesPassword = (value, allValues) => (value === allValues.password ? undefined : 'Passwords must match');

export {
  required,
  minLength,
  minNumber,
  matchesPassword
};


// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   } else if (values.name.length < 4) {
//     errors.name = 'Must be 4 characters or more';
//   }
//   if (!values.surname) {
//     errors.surname = 'Required';
//   } else if (values.surname.length < 4) {
//     errors.surname = 'Must be 4 characters or more';
//   }
//   if (!values.age) {
//     errors.age = 'Required';
//   } else if (Number(values.age) < 18) {
//     errors.age = 'Sorry, you must be at least 18 years old';
//   }
//   return errors;
// };

// export default validate;