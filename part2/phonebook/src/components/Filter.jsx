const Filter = ({filter, handleChange}) =>{
    return(
        <>
        <form>
            Filter shown with <input value={filter} onChange={handleChange}/>
        </form>
        </>
    )
}
export default Filter;