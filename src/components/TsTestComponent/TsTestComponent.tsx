import React, { PureComponent } from 'react'

interface Props {
  content: string;
}

const TestFn = (props: Props): string => {
  return (
    <>
      {props.content}
    </>
  )
}

TestFn({ content: 'test' })
