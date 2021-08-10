import React, { PureComponent } from 'react'

interface Props {
  content: string;
}

const TsTestComponent = (props: Props): string => {
  return <>{props.content}</>
}

// TsTestComponent({ content: 'test' })

export default TsTestComponent

