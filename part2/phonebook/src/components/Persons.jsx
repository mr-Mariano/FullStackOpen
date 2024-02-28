
const Persons = (props) => {
    const person = props.person
    return (
        <>
            <li>{person.name}, {person.number}</li>
        </>
    )
}

export default Persons;