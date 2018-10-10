import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
//import Input from './input';
//import {register} from './actions';
//import {required, nonEmpty} from './validators';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Report a problem with your delivery</h1>
        <form>
          <Field
            input id="tracking-number"
            name="Tracking Number"
            component="input"
          />
          <br/>
          <label>What is your issue?<br/>
            <Field select>
              <option>My delivery hasn't arrived</option>
              <option>The wrong item was delivered</option>
              <option>Part of my order was missing</option>
              <option>Some of my order arrived damaged</option>
              <option>Other (give details below)</option>
          </Field>
            </label>
            <br/>
            <label>Give more details (optional)<br/>
              <Field textarea
              />
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
