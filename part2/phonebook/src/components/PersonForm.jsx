const PersonForm = (props) => {

    const { handleSubmit, name ,number, setNewName, setNewNumber } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add a new contact</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input name="name" value={name} onChange={e => setNewName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='number'> Number: </label>
                    <input name="number" value={number} onChange={e => setNewNumber(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm