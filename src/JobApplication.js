import React, { Component, Fragment } from "react";

class JobApplication extends Component {
  state = {
    fields: {
      fn: "",
      ln: "",
      gender: "",
      employmenttype: ""
    },
    errors: {},
    isFormValid: false
  };

  handleFormChanges = event => {
    const fields = this.state.fields;
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    fields[fieldName] = fieldValue;

    this.setState(
      {
        fields: fields
      },
      () => {
        this.validateField(fieldName, fieldValue);
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };

  validateField = (fieldName, fieldValue) => {
    const errors = {};
    let isFormValid = false;

    switch (fieldName) {
      case "fn":
        let errorMsg = "";
        if (fieldValue === "") {
          errorMsg += "Must enter the value";
        } else if (!/^[a-z]+$/i.test(fieldValue)) {
          errorMsg += "Only letters are allowed";
        }
        if (errorMsg !== "") errors.fn = errorMsg;
        break;

      default:
        break;
    }

    Object.keys(errors).length > 0
      ? (isFormValid = false)
      : (isFormValid = true);

    this.setState({
      errors: errors,
      isFormValid: isFormValid
    });
  };

  render() {
    return (
      <Fragment>
        <h3>React Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            First Name :
            <input
              type="text"
              name="fn"
              value={this.state.fields.fn}
              onBlur={this.handleFormChanges}
              onChange={this.handleFormChanges}
            />
            <span>{this.state.errors.fn}</span>
          </div>
          <div>
            Last Name :
            <input
              type="text"
              value={this.state.fields.ln}
              name="ln"
              onChange={this.handleFormChanges}
            />
          </div>
          <div>
            Gender :
            <input
              type="radio"
              name="gender"
              value={"Male"}
              checked={this.state.fields.gender === "Male"}
              onChange={this.handleFormChanges}
            />
            Male
            <input
              type="radio"
              value={"Female"}
              checked={this.state.fields.gender === "Female"}
              name="gender"
              onChange={this.handleFormChanges}
            />Female
            <input
              type="radio"
              value={"Others"}
              checked={this.state.fields.gender === "Others"}
              name="gender"
              onChange={this.handleFormChanges}
            />Others
          </div>
          <div>
            Employment Type :
            <select
              value={this.state.fields.employmenttype}
              name="employmenttype"
              onChange={this.handleFormChanges}
            >
              <option>Permanent</option>
              <option>Contractual</option>
              <option>Internship</option>
            </select>
          </div>
          <input
            type="submit"
            disabled={!this.state.isFormValid}
            value="Submit"
          />
        </form>
      </Fragment>
    );
  }
}

export { JobApplication };
