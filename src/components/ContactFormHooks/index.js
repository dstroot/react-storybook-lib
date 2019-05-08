import React, { useReducer } from 'react';
import { validateResponse } from '../../utils/fetchUtils';
import { formToJSONString, matchPattern } from '../../utils/formUtils';
import Button from '../Button';

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// https://daveceddia.com/ajax-requests-in-react/
// https://daveceddia.com/where-initialize-state-react/
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

const unclick = () => {
  if (document.activeElement !== document.body) {
    document.activeElement.blur();
  }
};

/**
 * Reducer handles all state logic in one place.
 * Much easier to understand
 */
const formReducer = (state, action) => {
  switch (action.type) {
    case 'invalid':
      unclick(); // remove focus on button
      return {
        ...state,
        valid: false,
      };
    case 'submit':
      return {
        ...state,
        valid: true,
        submitted: true,
        message: '',
      };
    case 'success':
      unclick(); // remove focus on button
      return {
        ...state,
        submitted: true,
        success: 'yes',
      };
    case 'error':
      unclick(); // remove focus on button
      return {
        ...state,
        submitted: true,
        success: 'no',
        message: action.message,
      };
    default:
      break;
  }
  return state;
};

const initialState = {
  valid: true,
  submitted: false,
  success: 'wait', // 'wait', 'yes', 'no'
  message: '',
};

const ContactFormHooks = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { valid, submitted, success, message } = state;

  // This function will enable the pattern attribute
  // on a textarea and trigger HTML5 validation.
  const handleTextarea = event => {
    matchPattern(event);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // NOTE: When you add name attributes to your inputs, you add structure
    // to your form. This structure can be serialized by the native FormData
    // interface (basic support in all browsers and IE10+). All you do is
    // pass in a form element (which we access via event.target) to the
    // FormData constructor and you get a serialized interpretation of the
    // inputs which can be sent to the server.

    // get form
    const form = event.target;

    // check form data validity first
    if (!form.checkValidity()) {
      dispatch({ type: 'invalid' });
      return;
    }

    // convert form data to JSON
    const json = formToJSONString(form);

    if (json) {
      // all good let's continue!
      dispatch({ type: 'submit' });
    }

    // post data
    fetch('//formspree.io/dan.stroot@veritedatascience.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: json,
    })
      .then(validateResponse)
      .then(res => {
        dispatch({ type: 'success' });
        form.reset();
      })
      .catch(error => {
        dispatch({ type: 'error', message: `${error.toString()}` });
        form.reset();
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={!valid ? 'was-validated' : ''}
      >
        <div className="form-row">
          <div className="col-md-6 offset-md-3">
            <fieldset disabled={submitted} aria-busy={submitted}>
              {/* hidden inputs */}
              <input type="text" name="_gotcha" className="invisible" />
              <input type="hidden" name="_subject" value="Website Contact" />

              <h3 className="mt-3 font-weight-light">Contact Us:</h3>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Please enter your name"
                  pattern=".*\S+.*"
                  data-parse="trim"
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* email address */}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="you@youremail.com"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* phone */}
              <div className="form-group">
                <label htmlFor="email">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  pattern="^[0-9-+s()]*$"
                  className="form-control"
                  placeholder="(123) 456-7890"
                />
                <div className="invalid-feedback">
                  Please enter a valid phone number.
                </div>
                <div className="valid-feedback">Optional</div>
              </div>

              {/* message area */}
              <div className="form-group">
                <label htmlFor="email">Short Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Please enter a short message"
                  pattern=".*\S+.*"
                  data-parse="trim"
                  required
                  onChange={handleTextarea}
                />
                <div className="invalid-feedback">
                  Please let us know how we can help!
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </fieldset>

            {/* Submit button */}
            <div className="form-row">
              <div className="col-md-5">
                <Button submitted={submitted} success={success} />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {message ? <p className="text-danger">{message}</p> : ''}
        </div>
      </div>
    </>
  );
};

export default ContactFormHooks;
