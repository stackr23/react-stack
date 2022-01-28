import React, { PureComponent } from 'react'

import JsTestComponent from 'components/JsTestComponent/JsTestComponent.jsx'
import TsTestComponent from 'components/TsTestComponent/TsTestComponent'

interface AppProps {
 param1?: string
}

class App extends PureComponent {
  render(props: AppProps): string {
    return (
      <>
        <h1 id="app_headline">@stackr23/webpack up and running!</h1>
        <JsTestComponent /* testParam="teststring" */ />
      </>
    )
  }
}
export default App

