import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course  = ({course}) => {

    return(
        <div>
            {course.map(course=>
                <div key={course.id}>
                    <Header course={course.name}/>
                    <Content courses={course.parts}/>
                    <Total courses={course.parts}/>
                </div>
            )}
        </div>
    )
}

export default Course