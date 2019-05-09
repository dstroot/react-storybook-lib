import React, { useReducer } from 'react';
import { validateResponse } from '../../utils/fetchUtils';
import { formToJSONString, matchPattern, unClick } from '../../utils/formUtils';
import Button from '../Button';

// Reducer handles all state logic **in one place**.
// Much easier to understand!
const formReducer = (state, action) => {
  switch (action.type) {
    case 'invalid':
      unClick();
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
      unClick();
      return {
        ...state,
        submitted: true,
        success: 'yes',
      };
    case 'error':
      unClick();
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

// set initial state values
const initialState = {
  valid: true,
  submitted: false,
  success: 'wait', // 'wait', 'yes', 'no'
  message: '',
};

// our form component
const ContactFormHooks = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { valid, submitted, success, message } = state;

  // This function will enable the pattern attribute
  // on a textarea and trigger HTML5 validation.
  const handleTextarea = event => {
    matchPattern(event);
  };

  // handle form submit
  const handleSubmit = event => {
    event.preventDefault();

    // get form
    const form = event.target;

    // check form data validity
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

      {/* Error message */}
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {message ? <p className="text-danger">{message}</p> : ''}
        </div>
      </div>
    </>
  );
};

export default ContactFormHooks;
