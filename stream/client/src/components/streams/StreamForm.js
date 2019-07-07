import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // getInput(fieldProps) {
  //   return <input {...fieldProps.input} />;
  // }
  getRenderError = meta => {
    if (meta.touched && meta.error) {
      return <div className="ui error message">{meta.error}</div>;
    }
  };

  getInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.getRenderError(meta)}
      </div>
    );
  };
  resetForm = () => {
    this.props.reset();
  };

  formSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log("test", this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.formSubmit)}
      >
        <Field name="title" component={this.getInput} label="Enter Name" />
        <Field
          name="description"
          component={this.getInput}
          label="Enter Description"
        />
        <button className="ui button primary" onClick={this.resetForm}>
          Reset
        </button>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formValues => {
  let error = {};
  if (!formValues.title) {
    error.title = "Must enter the title";
  }
  if (!formValues.description) {
    error.description = "Must enter the description";
  }
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
