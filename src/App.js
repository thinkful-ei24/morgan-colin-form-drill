import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './components/input';
import {submitComplaint} from './actions/actions.js';
import {required, nonEmpty, lengthCheck, isNumber} from './validators/validator.js';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Report a problem with your delivery</h1>

        {this.props.submitSucceeded && <div>Report submitted successfully</div>}
        {this.props.submitFailed && <div>Delivery not found</div>}

        <form onSubmit={this.props.handleSubmit((value) => this.props.dispatch(submitComplaint(value)))}>
          <Field
            component={Input}
            element="input"
            type="text"
            name="trackingNumber"
            label="Tracking Number"
            validate={[required, nonEmpty, lengthCheck, isNumber]}
          />
          <Field
            component={Input}
            element="select"
            name="issue"
            label="What is your issue?"
          >
            <option value="not-delivered" >My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
            <br/>
            <Field
            component={Input}
            element="textarea"
            name="details"
            label="Give more details (optional)"
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register',
  initialValues: {
    issue: "not-delivered"
  }
})(App);
