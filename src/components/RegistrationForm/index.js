import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    firstNameField: false,
    lastNameField: false,
  }

  onBlurFirstName = () => {
    const validateFirstNameField = this.validateFirstName()
    this.setState({firstNameField: !validateFirstNameField})
  }

  onBlurLastName = () => {
    const validateLastNameField = this.validateLastName()
    this.setState({lastNameField: !validateLastNameField})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({
        firstName: '',
        lastName: '',
        firstNameField: true,
        lastNameField: true,
      })
    } else if (firstName === '') {
      this.setState({firstName: '', firstNameField: true})
    } else if (lastName === '') {
      this.setState({lastName: '', lastNameField: true})
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        isFormSubmitted: true,
        firstNameField: false,
        lastNameField: false,
      })
    }
  }

  getRegistrationForm = () => {
    this.setState({isFormSubmitted: false})
  }

  getForm = () => {
    const {firstName, lastName, firstNameField, lastNameField} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label-text" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          value={firstName}
          id="firstName"
          className="input-element"
          type="text"
          placeholder="First name"
        />
        {firstNameField ? <p className="required-text">Required</p> : ''}

        <label className="label-text" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
          value={lastName}
          id="lastName"
          className="input-element"
          type="text"
          placeholder="Last name"
        />
        {lastNameField ? <p className="required-text">Required</p> : ''}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  getRegistrationSuccess = () => (
    <div className="login-success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="log-in-success-image"
        alt="success"
      />
      <p className="successful-text">Submitted Successfully</p>
      <button
        type="button"
        onClick={this.getRegistrationForm}
        className="get-form-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-main-container">
        <h1 className="form-heading">Registration</h1>
        {isFormSubmitted ? this.getRegistrationSuccess() : this.getForm()}
      </div>
    )
  }
}

export default RegistrationForm
