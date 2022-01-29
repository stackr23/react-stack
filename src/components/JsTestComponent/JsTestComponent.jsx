import React from 'react'

const JsTestComponent = (props) => {
  // return <>{props + ''}</>
  return <>{props.content ?? 'JSTESTCOMPONENT'}</>
}

export default JsTestComponent

