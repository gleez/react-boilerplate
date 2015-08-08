import React from 'react'
import Formsy from 'formsy-react'
import TextInput from './TextInput'
import Button from './Button'
//import Spinner from './Spinner'

class FormWrapper extends React.Component {
  enableButton() {
    if(this.props.setFormState){
      this.props.setFormState({ canSubmit: true })
    }
  }

  disableButton() {
    if(this.props.setFormState){
      this.props.setFormState({ canSubmit: false })
    }
  }

  render(){
    return(
      <Formsy.Form
        onValidSubmit={this.props.submitForm}
        onValid={this.enableButton.bind(this)}
        onInvalid={this.disableButton.bind(this)}
        disabled={this.props.loading}
        validationErrors={this.props.hasErrors}
        >
        {this.props.children}
      </Formsy.Form>
    )
  }

}

let Form = FormWrapper
Form.TextInput = TextInput
Form.Button = Button
//Form.Spinner =  Spinner

export default Form
