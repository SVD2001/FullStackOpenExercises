const Header = (parameters) => {
  return <h1>{parameters.course}</h1>
}

const Part = (parameters) => {
  return <p>{parameters.part} {parameters.exercises}</p>
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
  return <p>Number of exercises {parameters.exercises1 + parameters.exercises2 + parameters.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App