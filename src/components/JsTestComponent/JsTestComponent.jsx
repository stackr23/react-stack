import React, { PureComponent } from 'react'

const JsTestComponent = (props) => {
  // return <>{props + ''}</>
  return <>{props.testParam ?? 'JSTESTCOMPONENT'}</>
}

export default JsTestComponent

