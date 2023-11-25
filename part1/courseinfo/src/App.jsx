const Header = (parameters) => {
  return (
    <div>
      <h1>{parameters.course}</h1>
    </div>
  )
}

const Content = (parameters) => {
  return (
    <div>
      <p>
        {parameters.part1} {parameters.exercises1}
      </p>
      <p>
        {parameters.part2} {parameters.exercises2}
      </p>
      <p>
        {parameters.part3} {parameters.exercises3}
      </p>
    </div>
  )
}

const Total = (parameters) => {
  return (
    <div>
      <p>Number of exercises {parameters.exercises1 + parameters.exercises2 + parameters.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App