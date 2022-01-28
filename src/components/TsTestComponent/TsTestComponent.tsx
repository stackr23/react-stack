import React, { VoidFunctionComponent  } from 'react'

interface Props {
  content?: string;
}

// type TsTestComponent = VoidFunctionComponent

const TsTestComponent: VoidFunctionComponent = (props: Props) => {
  return <div>{props.content}</div>
}

// TsTestComponent({ content: 'test' })

export default TsTestComponent

