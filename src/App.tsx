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
        <h1 id="app_headline">StackR23's REACT ENVIRONMENT...</h1>
      </>
    )
  }
}
export default App

