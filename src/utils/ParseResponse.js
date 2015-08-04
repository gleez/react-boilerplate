function ParseResponse(validation, data) {
  let response = {
    data: '',
    error: undefined,
    loading: false,
    success: false,
    hasErrors: {},
    help: {}
  }

  let {err, res, timeout} = data

  if (err && err.timeout === timeout) {
    response.error = "Request Timed out"
  }
  else if (err && err.crossDomain) {
    response.error = "cross Domain Error"
  }
  else if (err && !res) {
    response.error = err.message
  }
  else if (res && !res.ok) {
    response.error = res.text
  }
  else if (validation && validation.keys) {
    let forField = validation.keys.pop()
    let regexBecause = /because \[(.*?)\]/
    let message = res.response

    if (regexBecause.test(message)) {
      message = regexBecause.exec(message)[1]
    }

    response.hasError[forField] = true
    response.help[forField] = message
  }
  else if (res) {
    response.success = true
    response.data = res.text
  }

  return response
}

export default ParseResponse
