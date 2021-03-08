import React from "react";
import { Field, reduxForm } from "redux-form";

import FormSchema from "schemas/formSchema";

export const fieldsProps = Object.keys(FormSchema.fields);
console.log(fieldsProps);

const asyncValidate = (values) => {
  return new Promise((resolve, reject) => {
    console.log(values);

    // Validate our form values against our schema! Also dont abort the validate early.
    FormSchema.validate(values, { abortEarly: false })
      .then(() => {
        // form is valid happy days!
        alert("Your form is valid!");
        resolve();
      })
      .catch((errors) => {
        // form is not valid, yup has given us errors back. Lets transform them into something redux can understand.

        let reduxFormErrors = {};

        errors.inner.forEach((error) => {
          reduxFormErrors[error.path] = error.message;
        });

        // redux form will now understand the errors that yup has thrown
        reject(reduxFormErrors);
      });
  });
};

function Form(props) {
  const { fields, handleSubmit } = props;

  console.log(fields);

  const renderInput = (field) => {
    // Define stateless component to render input and errors

    console.log(field);
    return (
      <div>
        <input {...field.input} type={field.type} />
        {field.meta.touched && field.meta.error && (
          <span className="error">{field.meta.error}</span>
        )}
      </div>
    );
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit(() => alert("success!"))}>
      <div className="col-md-6">
        <label htmlFor="last_name" className="form-label">
          Фамилия
        </label>

        <Field
          name="last_name" // Specify field name
          component={renderInput} // Specify render component above
          type="text"
          className="form-control"
          id="last_name"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="first_name" className="form-label">
          Имя
        </label>
        <Field
          type="text"
          component="input"
          className="form-control"
          id="first_name"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "formSimple",
  fields: fieldsProps,
  asyncValidate,
})(Form);
