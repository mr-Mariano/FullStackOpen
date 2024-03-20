import DeleteButton from "./DeleteButton";

const Person = ({people, onDelete}) => {
    if(people.length === 0){
        return(
            <div>
                <p>No contacts to display</p>
            </div>
        )
    }else{
    return(
        <>
        <ul>
            {people.map((person) =>
            <div key={person.id}>
                <div>
                    <li className="person">{person.name} : {person.number}</li>
                </div>
                <div>
                    <DeleteButton onDelete={onDelete}
                            id={person.id}/>
                </div>
            </div>
            )}
        </ul>
        </>
    )
    }
}

export default Person;