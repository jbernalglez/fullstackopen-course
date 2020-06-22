import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <li>
      <p>
        {props.title}: {props.num} ejercicios.
      </p>
    </li>
  )
}

const Content = (props) => {
  return (
    <ul>
      <Part title = {props.t1} num = {props.numEx1} />
      <Part title = {props.t2} num = {props.numEx2} />
      <Part title = {props.t3} num = {props.numEx3} />
    </ul>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Número de ejercicios totales: {props.num1 + props.num2 + props.num3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using progs to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header title = {course} />
      <Content  t1 = {part1} numEx1 = {exercises1}
                t2 = {part2} numEx2 = {exercises2}
                t3 = {part3} numEx3 = {exercises3} />
      <Total num1 = {exercises1} num2 = {exercises2} num3 = {exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
