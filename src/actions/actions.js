import {SubmissionError} from 'redux-form';

export const submitComplaint = value => dispatch => {
  return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers
          .get('content-type')
          .startsWith('application/json')

        ) {
          // It's a nice JSON error returned by us, so decode it
          return res.json().then(err => Promise.reject(err));

        }
        //It's a less informative error returned by express
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return res.json();
    })
    .then(res => console.log(res))
    .catch(err => Promise.reject(new SubmissionError({_error: err})));
}
