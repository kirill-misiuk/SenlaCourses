
const required = value => (value ? undefined : 'Required');
const minLength = value => (value.length > 4 ? undefined : 'Must be 4 characters or more');
const minNumber = value => (value < 18 ? 'Sorry, you must be at least 18 years old' : undefined);
const checkEmail = value => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Uncorrect email' : undefined);
const checkbox = value => (!value);
const checkString = value => (/[^A-Za-z\d]/.test(value) ? 'Please enter only letter and numeric characters' : undefined);
export {
  required,
  minLength,
  minNumber,
  checkEmail,
  checkbox,
  checkString
};
