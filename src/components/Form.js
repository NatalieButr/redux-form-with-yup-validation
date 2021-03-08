import React from "react";
import { Field, reduxForm } from "redux-form";

import FormSchema from "schemas/formSchema";

import { validator } from "../utils";

export const fields = Object.keys(FormSchema.fields);

const renderInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <>
      <label htmlFor={input.name} className="form-label">
        {label}
      </label>
      <input {...input} type={type} className="form-control" />
      {touched && error && <span className="text-danger">{error}</span>}
    </>
  );
};
function Form(props) {
  const { handleSubmit } = props;

  return (
    <form className="row g-3" onSubmit={handleSubmit(() => alert("success!"))}>
      <div className="col-md-6">
        <Field
          name="last_name"
          component={renderInput}
          type="text"
          id="last_name"
          label="Фамилия"
        />
      </div>
      <div className="col-md-6">
        <Field
          type="text"
          component={renderInput}
          id="first_name"
          name="first_name"
          label="Имя"
        />
      </div>
      <div className="col-12">
        <Field
          label="Номер телефона"
          type="tel"
          name="mobile_phone"
          component={renderInput}
          className="form-control"
          id="mobile_phone"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Зарегистроваться
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "formSimple",
  fields,
  asyncValidate: (v) => validator(v, FormSchema),
})(Form);
