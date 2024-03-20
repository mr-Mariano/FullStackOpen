const Total = ({courses}) => {
    const total = courses.reduce((sum, course) => sum + course.exercises, 0)
    const styleEmp = {
        fontWeight: 'bold',
        color: 'gold',
      };
    return(
      <>
        <p style={styleEmp}>Total number of exercises {total}</p>
      </>
    )
  }


export default Total;