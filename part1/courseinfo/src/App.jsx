const Header = (parameters) => {
  return (
    <div>
      <h1>{parameters.course}</h1>
    </div>
  )
}

const Part = (parameters) => {
  return (
    <div>
      <p>
        {parameters.part} {parameters.exercises}
      </p>
    </div>
  )
}

const Content = (parameters) => {
  return (
    <div>
      <Part part={parameters.part1} exercises={parameters.exercises1} />
      <Part part={parameters.part2} exercises={parameters.exercises2} />
      <Part part={parameters.part3} exercises={parameters.exercises3} />
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