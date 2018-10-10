import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './components/input';
//import {register} from './actions';
//import {required, nonEmpty} from './validators';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Report a problem with your delivery</h1>
        <form onSubmit={this.props.handleSubmit(() => console.log('hello'))}>
          <Field
            component={Input}
            element="input"
            type="number"
            name="trackingNumber"
            label="Tracking Number"
          />
          <Field
            component={Input}
            element="select"
            name="issue"
            label="What is your issue?"
          >
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of my order arrived damaged</option>
            <option>Other (give details below)</option>
          </Field>
            <br/>
            <label>Give more details (optional)<br/>
              {/* <Field /> */}
            </label>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register'
})(App);
