const Total = ({parts}) => {
    let sum = parts.reduce((total,current) => {
        return total + current.exercises
    },0)
    console.log(sum)
    return (
      <>
        <p>Total of exercises {sum}</p>
      </>
    )
  }

export default Total;