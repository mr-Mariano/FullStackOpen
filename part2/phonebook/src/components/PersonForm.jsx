const PersonForm = (props) =>{
    const {newName, number, handleNameChange, handleNumberChange, handleSubmit} = props
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
            name: <input onChange={handleNameChange} value={newName}/>
            </div>
            <div>
            number: <input onChange={handleNumberChange} value={number}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm;