import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm, formValueSelector, getFormValues
} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import InputField from './InputField';
import SelectField from './SelectField';
import {
  required, minLength, minNumber, matchesPassword
} from './validation';

const Form = ({
  handleSubmit, pristine, submitting, reset, invalid, name: {name, surname}
}) => (
  <div className="form">
    <p>{`${name}  ${surname}`}</p>
    <h2>Form</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        type="text"
        component={InputField}
        validate={required}
      />
      <Field
        name="surname"
        label="Surname"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="age"
        label="Age"
        type="number"
        component={InputField}
        validate={[required, minNumber]}
      />
      <Field
        name="password"
        label="Password"
        type="text"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="confirmPassword"
        label="Confirm Password"
        type="text"
        component={InputField}
        validate={[required, matchesPassword]}
      />
      <Field
        label="Favourite color"
        name="color"
        component={SelectField}
      />
      <Field
        label="Sign up to newsletters?"
        name="subscription"
        type="checkbox"
        component={InputField}
      />
      <button type="submit" disabled={invalid}>send</button>
      <button type="button" onClick={reset} disabled={pristine || submitting}>clear</button>
    </form>
  </div>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  name: PropTypes.object.isRequired
};

const selector = formValueSelector('simpleForm');

const mapStateToProps = state => ({
  name: selector(state, 'name', 'surname'),
  formData: getFormValues('simpleForm')(state)
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'simpleForm',
    enableReinitialize: true,
    initialValues: {
      name: 'Felex',
      color: 'green',
      subscription: true
    },
    onSubmit: (values, dispatch, props) => {
      alert(JSON.stringify(values, null, 4))
      props.reset();
    }
  })
)(Form);

// const Form = ({handleSubmit}) => (
//   <div className="form">
//     <h2>Form</h2>
//     <form onSubmit={handleSubmit}>
//       <Field
//         name="name"
//         label="Name"
//         type="text"
//         component={InputField}
//       />
//         <Field
//           label="Favourite color"
//           name="color"
//           component={SelectField}
//         />
//       <Field
//         label="Sign up to newsletters?"
//         name="subscription"
//         type="checkbox"
//         component={InputField}
//       />
//       <button type="submit">send</button>
//     </form>
//   </div>
// );