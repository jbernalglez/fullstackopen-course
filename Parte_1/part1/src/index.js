import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return(
    <>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Laura" age={33 + 10}/>
      <Hello name="David" age={4+2} />
      <Hello name="Iria" age="4" />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
