import React, { ComponentClass, ReactNode, PureComponent } from 'react'

import JsTestComponent from 'components/JsTestComponent/JsTestComponent.jsx'
import TsTestComponent from 'components/TsTestComponent/TsTestComponent'

interface State {
  param1?: string
 }
interface AppProps {
 param1?: string
}

// interface App {
// }
class App extends PureComponent<AppProps> {
  render(): ReactNode {
    return (
      <>
        <h1 id="app_headline">@stackr23/webpack up and running!</h1>
        <JsTestComponent /* testParam="teststring" */ />
      </>
    )
  }
}

export default App

