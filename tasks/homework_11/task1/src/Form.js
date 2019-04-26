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
  required, minLength, minNumber, checkEmail, checkbox, checkString
} from './validation';
import asyncValidate from './asyncValidate';

const Form = ({
  handleSubmit, pristine, submitting, reset, invalid
}) => (
  <div className="form">
    <h2>Form</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="surname"
        label="Surname"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="username"
        label="Username"
        type="text"
        component={InputField}
        validate={[required, minLength, checkString]}
      />
      <Field
        name="email"
        label="Email"
        type="text"
        component={InputField}
        validate={[required, checkEmail]}
      />
      <Field
        name="age"
        label="Age"
        type="number"
        component={InputField}
        validate={[required, minNumber]}
      />
      <Field
        label="Gender"
        name="gender"
        component={SelectField}
      />
      <Field
        label="Agree with terms and conditions"
        name="subscription"
        type="checkbox"
        value={false}
        component={InputField}
        validate={checkbox}
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
    asyncValidate,
    asyncBlurFields: ['email'],
    onSubmit: (values, dispatch, props) => {
      alert(JSON.stringify(values, null, 4))
      props.reset();
    }
  })
)(Form);