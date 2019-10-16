import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
//https://www.npmjs.com/package/react-mailchimp-subscribe

// styles
import './styles.scss';

const url = process.env.REACT_APP_MAILCHIMP_URL;

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = e => {
    email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
      });
    e.preventDefault();
  };

  return (
    <div className="px-3 py-4 mb-3">
      <form onSubmit={submit}>
        <div className="input-group">
          <input
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
            className="form-control"
            value={status === 'success' ? '' : null}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              Sign me up
            </button>
          </div>
        </div>
      </form>

      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          class="alert alert-danger mb-0 mt-3 small"
          role="alert"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          class="alert alert-success mb-0 mt-3 small"
          role="alert"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const SubscribeMailchimp = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

const SubscribeCard = () => (
  <div className="container-fluid bg-light">
    <div className="row">
      <div className="col-12">
        <div className="m-5 align-items-center bg-white p-3">
          <h5 className="text-muted">Get hooked up!</h5>
          <p className="lead">Enter your email to get weekly updates.</p>
          <SubscribeMailchimp />
        </div>
      </div>
    </div>
  </div>
);

export default SubscribeCard;
