import Part from "./Part"

const Content = ({courses}) => {
    return(
      <>
        {
          courses.map(element =>
            <Part key={element.id} course={element.name} exercises={element.exercises}/>
          )
        }
      </>
    )
  }


export default Content;
