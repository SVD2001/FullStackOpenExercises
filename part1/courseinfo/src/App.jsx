const Header = (parameters) => {
  return <h1>{parameters.course}</h1>
}

const Part = parameters => {
  return <p>{parameters.part} {parameters.exercises}</p>
}

const Content = parameter => {
  // console.log(parts.parts.length)
  return (
    <div>
      <Part part={parameter.parts[0].name} exercises={parameter.parts[0].exercises} />
      <Part part={parameter.parts[1].name} exercises={parameter.parts[1].exercises} />
      <Part part={parameter.parts[2].name} exercises={parameter.parts[2].exercises} />
    </div>
  )
}

const Total = (parameters) => {
  return <p>Number of exercises {parameters.parts[0].exercises + parameters.parts[1].exercises + parameters.parts[2].exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App